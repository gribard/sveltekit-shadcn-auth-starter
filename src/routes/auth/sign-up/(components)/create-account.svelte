<script lang="ts">
	import { Icons } from "$lib/components/docs/icons";
	import { Button } from "@/registry/default/ui/button";
	import * as Card from "@/registry/default/ui/card";
	import { Label } from "@/registry/default/ui/label";
	import { Input } from "@/registry/default/ui/input";
	import { superForm } from "sveltekit-superforms/client";
	//import SuperDebug from 'sveltekit-superforms/client/SuperDebug.svelte';
	import { userSchema } from "$lib/config/zod-schemas";
	import { i } from "@inlang/sdk-js";
	export let data;

	const signUpSchema = userSchema.pick({
		firstName: true,
		lastName: true,
		email: true,
		password: true
	});

	const { form, errors, enhance, delayed } = superForm(data.form, {
		taintedMessage: null,
		validators: signUpSchema,
		delayMs: 0
	});

	let termsAccept = false;
	// $: termsValue = $form.terms as Writable<boolean>;
</script>

<form method="POST" action="/auth/sign-up" use:enhance>
	<!--<SuperDebug data={$form} />-->
	<Card.Root>
		<Card.Header class="space-y-1">
			<Card.Title class="text-2xl">Create an account</Card.Title>
			<Card.Description>
				Enter your email below to create your account
			</Card.Description>
		</Card.Header>
		<Card.Content class="grid gap-4">
			<div class="grid grid-cols-2 gap-6">
				<Button variant="outline">
					<Icons.gitHub class="mr-2 h-4 w-4" />
					Github
				</Button>
				<Button variant="outline">
					<Icons.google class="mr-2 h-4 w-4" />
					Google
				</Button>
			</div>
			<div class="relative">
				<div class="absolute inset-0 flex items-center">
					<span class="w-full border-t" />
				</div>
				<div class="relative flex justify-center text-xs uppercase">
					<span class="bg-card px-2 text-muted-foreground">
						Or continue with
					</span>
				</div>
			</div>
			<div class="grid gap-2">
				<label
					class="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
				>
					<span class="sr-only">{i("First Name")}</span>
					<input
						id="firstName"
						name="firstName"
						type="text"
						placeholder={i("firstName")}
						autocomplete="given-name"
						data-invalid={$errors.firstName}
						bind:value={$form.firstName}
						class="flex h-10 w-full rounded-md border border-input bg-transparent px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
						class:input-error={$errors.firstName}
					/>
					{#if $errors.firstName}
						<small>{$errors.firstName}</small>
					{/if}
				</label>
			</div>
			<div class="grid gap-2">
				<label
					class="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
				>
					<span class="sr-only">{i("lastName")}</span>
					<input
						id="lastName"
						name="lastName"
						type="text"
						placeholder={i("lastName")}
						autocomplete="family-name"
						data-invalid={$errors.lastName}
						bind:value={$form.lastName}
						class="flex h-10 w-full rounded-md border border-input bg-transparent px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
						class:input-error={$errors.lastName}
					/>
					{#if $errors.lastName}
						<small>{$errors.lastName}</small>
					{/if}
				</label>
			</div>
			<div class="grid gap-2">
				<label
					class="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
				>
					<span class="sr-only">{i("email")}</span>
					<input
						id="email"
						name="email"
						type="email"
						placeholder={i("email")}
						autocomplete="email"
						data-invalid={$errors.email}
						bind:value={$form.email}
						class="flex h-10 w-full rounded-md border border-input bg-transparent px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
						class:input-error={$errors.email}
					/>
					{#if $errors.email}
						<small>{$errors.email}</small>
					{/if}
				</label>
			</div>
			<div class="grid gap-2">
				<label
					class="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
				>
					<span class="sr-only">{i("password")}</span>
					<input
						id="password"
						name="password"
						type="password"
						placeholder={i("password")}
						data-invalid={$errors.password}
						bind:value={$form.password}
						class="flex h-10 w-full rounded-md border border-input bg-transparent px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
						class:input-error={$errors.password}
					/>
					{#if $errors.password}
						<small>{$errors.password}</small>
					{/if}
				</label>
			</div>
			<div class="grid gap-2">
				<label
					for="terms"
					class="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
				>
					<input
						id="terms"
						name="terms"
						type="checkbox"
						class="checkbox"
						bind:checked={termsAccept}
					/>
					<span class="ml-2">
						I accept the
						<a href="/terms" class="text-primaryHover underline"
							>terms</a
						>
						and
						<a href="/privacy" class="text-primaryHover underline"
							>privacy policy</a
						>
						<!--{#if $errors.terms}
							<small>{$errors.terms}</small>
						{/if}-->
					</span>
				</label>
			</div>
		</Card.Content>
		<Card.Footer>
			<!-- <Button class="w-full">Create account</Button> -->
			<Button
				type="submit"
				disabled={!termsAccept}
				class="btn variant-filled-primary w-full"
				>{#if $delayed}
					<div class="w-4 h-4 bg-amber-600" />
				{:else}{i("signup")}{/if}</Button
			>
		</Card.Footer>
	</Card.Root>
</form>
