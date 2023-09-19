<script lang="ts">
	import { superForm } from "sveltekit-superforms/client";
	//import SuperDebug from 'sveltekit-superforms/client/SuperDebug.svelte';
	import { userSchema } from "$lib/config/zod-schemas";
	import { AlertTriangle, Loader } from "lucide-svelte";
	import { Input } from "@/registry/default/ui/input";
	
	import { i } from "@inlang/sdk-js";
	import { Button } from "@/registry/default/ui/button";
	export let data;

	const signUpSchema = userSchema.pick({
		firstName: true,
		lastName: true,
		email: true
	});

	const { form, errors, enhance, delayed, message } = superForm(data.form, {
		taintedMessage: null,
		validators: signUpSchema,
		delayMs: 0
	});
</script>

<form method="POST" use:enhance>
	<!--<SuperDebug data={$form} />-->
	<h2 class="scroll-m-20 border-b pb-2 text-xl font-semibold tracking-tight transition-colors first:mt-0">Profile</h2>
	
	{#if $message}
		<aside class="alert variant-filled-success mt-6">
			<!-- Message -->
			<div class="alert-message">
				<p>{$message}</p>
			</div>
		</aside>
	{/if}
	{#if $errors._errors}
		<aside class="alert variant-filled-error mt-6">
			<!-- Icon -->
			<div><AlertTriangle size="42" /></div>
			<!-- Message -->
			<div class="alert-message">
				<h3 class="h3">Sign In Problem</h3>
				<p>{$errors._errors}</p>
			</div>
		</aside>
	{/if}
	<div class="mt-6">
		<label class="label">
			<span class="">First Name</span>
			<input
				id="firstName"
				name="firstName"
				type="text"
				placeholder="First Name"
				autocomplete="given-name"
				data-invalid={$errors.firstName}
				bind:value={$form.firstName}
				class="input flex h-9 w-full rounded-md border border-input bg-background px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50"				
				class:input-error={$errors.firstName}
			/>
			{#if $errors.firstName}
				<small class="text-red-600">{$errors.firstName}</small>
			{/if}
		</label>
	</div>
	<div class="mt-6">
		<label class="label">
			<span class="">Last Name</span>
			<input
				id="lastName"
				name="lastName"
				type="text"
				placeholder="Last Name"
				autocomplete="family-name"
				data-invalid={$errors.lastName}
				bind:value={$form.lastName}
				class="input flex h-9 w-full rounded-md border border-input bg-background px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50"				
				class:input-error={$errors.lastName}
			/>
			{#if $errors.lastName}
			<small class="text-red-600">{$errors.lastName}</small>
			{/if}
		</label>
	</div>
	<div class="mt-6">
		<label class="label">
			<span class="">Email address</span>
			<input
				id="email"
				name="email"
				type="email"
				placeholder="Email address"
				autocomplete="email"
				data-invalid={$errors.email}
				bind:value={$form.email}
				class="input flex h-9 w-full rounded-md border border-input bg-background px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50"
				class:input-error={$errors.email}
			/>
			{#if $errors.email}
				<small class="text-red-600">{$errors.email}</small>
			{/if}
		</label>
	</div>
	<div class="mt-6">
		
		<Button variant="outline"
		disabled={$delayed}
		class="btn variant-filled-primary w-full"
	><a href="/auth/password/reset">Change Password</a>
		
	</Button>
	</div>

	<div class="mt-6">
		
		<Button
		disabled={$delayed}
		type="submit"
		class="btn variant-filled-primary w-full"
	>
		
		{#if $delayed}
			<Loader />
		{:else}
			{i("profile.update")}
		{/if}
	</Button>
	</div>
</form>
