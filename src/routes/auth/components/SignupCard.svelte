<script lang="ts">
	import { Button } from "@/registry/default/ui/button";
	import * as Card from "@/registry/default/ui/card";
	import { i } from "@inlang/sdk-js";

	import { superForm } from "sveltekit-superforms/client";
	//import SuperDebug from 'sveltekit-superforms/client/SuperDebug.svelte';
	import { userSchema } from "$lib/config/zod-schemas";
	import { AlertTriangle } from "lucide-svelte";
	import { Loader } from "lucide-svelte";

	export let data;

	import { Icons } from "$components/docs";
	import { cn } from "$lib/utils";
	import { Label } from "@/registry/default/ui/label";
	import { Input } from "@/registry/default/ui/input";
	import { Checkbox } from "$lib/registry/default/ui/checkbox";
	let checked = false;

	const signUpSchema = userSchema.pick({
		firstName: true,
		lastName: true,
		email: true,
		password: true
	});

	const { form, errors, enhance, delayed } = superForm(data.signupForm, {
		taintedMessage: null,
		validators: signUpSchema,
		delayMs: 0
	});

	let termsAccept = false;
	// $: termsValue = $form.terms as Writable<boolean>;

	let isLoading = false;
	async function onSubmit() {
		isLoading = true;

		setTimeout(() => {
			isLoading = false;
		}, 3000);
	}
</script>

<form method="POST" action="/auth?/signup" use:enhance>
	<Card.Root>
		<Card.Header class="space-y-1 items-center">
			<Card.Title class="text-2xl" />
			<Card.Description />
		</Card.Header>
		<Card.Content class="grid gap-4">
			<div class="flex flex-col space-y-2 text-center">
				<h1 class="text-2xl font-semibold tracking-tight">
					{i("signup")}
				</h1>
				<p class="text-sm text-muted-foreground">
					Enter your email below to create your account
				</p>
			</div>
			<!--<SuperDebug data={$form} />-->
			<div class="grid gap-4">
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
							class="flex h-9 w-full rounded-md border border-input bg-background px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50"
							class:input-error={$errors.firstName}
						/>
						{#if $errors.firstName}
							<small class="text-red-600">{$errors.firstName}</small>
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
							class="flex h-9 w-full rounded-md border border-input bg-background px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50"
							class:input-error={$errors.lastName}
						/>
						{#if $errors.lastName}
							<small class="text-red-600">{$errors.lastName}</small>
						{/if}
					</label>
				</div>
				<div class="grid gap-2">
					<label
						class="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
					>
						<span class="sr-only">{i("email")}</span>

						<input
							id="signupEmail"
							name="email"
							type="email"
							placeholder={i("email")}
							autocomplete="email"
							data-invalid={$errors.email}
							bind:value={$form.email}
							class="flex h-9 w-full rounded-md border border-input bg-background px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50"
							class:input-error={$errors.email}
						/>
						{#if $errors.email}
							<small class="text-red-600">{$errors.email}</small>
						{/if}
					</label>
				</div>
				<div class="grid gap-2">
					<label
						class="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
					>
						<span class="sr-only">{i("password")}</span>
						<input
							id="signupPassword"
							name="password"
							type="password"
							placeholder={i("password")}
							data-invalid={$errors.password}
							bind:value={$form.password}
							class="flex h-9 w-full rounded-md border border-input bg-background px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50"
							class:input-error={$errors.password}
						/>
						{#if $errors.password}
							<small class="text-red-600">{$errors.password}</small>
						{/if}
					</label>
				</div>
				<div class="grid gap-2">
					<div class="flex items-center space-x-2">
						<Checkbox
							id="terms"
							name="terms"
							class="checkbox"
							bind:checked={termsAccept}
							aria-labelledby="terms-label"
						/>
						<Label
							id="terms-label"
							for="terms"
							class="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
							><span class="ml-1">
								I accept the
								<a href="/terms" class="text-primaryHover underline">terms</a>
								and
								<a href="/privacy" class="text-primaryHover underline"
									>privacy policy</a
								>
								<!--{#if $errors.terms}
											<small>{$errors.terms}</small>
										{/if}-->
							</span>
						</Label>
					</div>
				</div>

				<div class="grid pt-4">
					<Button
						type="submit"
						disabled={!termsAccept}
						class="btn variant-filled-primary w-full"
						>{#if $delayed}
							<div class="w-4 h-4 bg-amber-600" />
						{:else}{i("signup")}{/if}</Button
					>
				</div>
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
		</Card.Content>
		<Card.Footer />
	</Card.Root>
</form>
