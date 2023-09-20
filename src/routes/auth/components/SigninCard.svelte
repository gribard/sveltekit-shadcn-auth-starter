<script lang="ts">
	import { Button } from "@/registry/default/ui/button";
	import * as Tabs from "@/registry/default/ui/tabs";
	import * as Card from "@/registry/default/ui/card";
	import { i } from "@inlang/sdk-js";

	import { superForm } from "sveltekit-superforms/client";
	// import SuperDebug from "sveltekit-superforms/client/SuperDebug.svelte";
	import { userSchema } from "$lib/config/zod-schemas";
	import { AlertTriangle } from "lucide-svelte";
	import { Loader } from "lucide-svelte";

	export let data;

	const signInSchema = userSchema.pick({ email: true, password: true });
	const { form, errors, enhance, delayed } = superForm(data.signinForm, {
		taintedMessage: null,
		validators: signInSchema,
		delayMs: 0
	});

	import { Icons } from "$components/docs";
	import { cn } from "$lib/utils";

	let termsAccept = false;
	// $: termsValue = $form.terms as Writable<boolean>;

	let className: string | undefined | null = undefined;
	export { className as class };

	let isLoading = false;
	let formErrors = false;

	async function onSubmit() {
		isLoading = true;

		setTimeout(() => {
			isLoading = false;
		}, 3000);
	}
</script>

<!-- <SuperDebug data={$form} /> -->
<form method="POST" action="/auth?/signin" use:enhance>
	<!-- on:submit|preventDefault={onSubmit} -->
	<Card.Root>
		<Card.Header>
			<Card.Title />
			<Card.Description />
		</Card.Header>
		<Card.Content class="space-y-2">
			<div class="flex flex-col space-y-2 text-center">
				<h1 class="text-2xl font-semibold tracking-tight">
					{i("signin")}
				</h1>
				<p class="text-sm text-muted-foreground">
					Enter your email below to sign in.
				</p>
			</div>
			<div class={cn("grid gap-6", className)} {...$$restProps}>
				<!-- <form on:submit|preventDefault={onSubmit}> -->
				<div class="grid gap-4">
					<div class="grid gap-1 mt-6">
						<label
							class="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
						>
							<span class="sr-only">{i("email")}</span>
							<input
								id="signinEmail"
								name="email"
								type="email"
								placeholder={i("email")}
								autocomplete="email"
								data-invalid={$errors.email}
								bind:value={$form.email}
								class="flex h-9 w-full rounded-md border border-input bg-background px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50"
								class:input-error={$errors.email}
								autocapitalize="none"
								autocorrect="off"
								disabled={isLoading}
							/>
							{#if $errors.email}
								<small class="text-red-600">{$errors.email}</small>
							{/if}
						</label>
					</div>
					<div class="grid gap-1 mb-3">
						<label
							class="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
						>
							<span class="sr-only">{i("password")}</span>
							<input
								id="signinPassword"
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
						{#if $errors._errors}
							<aside class="alert variant-filled-error mt-6 content-center">
								<!-- Icon -->
								<!-- Message -->
								<div class="alert-message text-center flex justify-between">
									<AlertTriangle size="24" class="text-red-600" />
									<p class="text-red-600">{$errors._errors}</p>
								</div>
							</aside>
						{/if}
						<input hidden name="type" value="signin" />
					</div>
					<Button
						disabled={isLoading}
						type="submit"
						class="btn variant-filled-primary w-full"
					>
						{#if isLoading}
							<Icons.spinner class="mr-2 h-4 w-4 animate-spin" />
						{/if}
						{#if $delayed}
							<Loader />
						{:else}
							{i("signin")}
						{/if}
					</Button>
					<div class="flex flex-row justify-center items-center">
						<a href="/auth/password/reset" class="font-semibold"
							>{i("forgotPassword")}</a
						>
					</div>
				</div>

				<div class="relative">
					<div class="absolute inset-0 flex items-center">
						<span class="w-full border-t" />
					</div>
					<div class="relative flex justify-center text-xs uppercase">
						<span class="bg-background px-2 text-muted-foreground">
							Or continue with
						</span>
					</div>
				</div>
				<Button variant="outline" type="button" disabled={isLoading}>
					{#if isLoading}
						<Icons.spinner class="mr-2 h-4 w-4 animate-spin" />
					{:else}
						<Icons.gitHub class="mr-2 h-4 w-4" />
					{/if}
					{" "}
					Github
				</Button>
			</div>

			<p class="px-8 text-center text-sm text-muted-foreground">
				By clicking continue, you agree to our{" "}
				<a
					href="/terms"
					class="underline underline-offset-4 hover:text-primary"
				>
					Terms of Service
				</a>{" "}
				and{" "}
				<a
					href="/privacy"
					class="underline underline-offset-4 hover:text-primary"
				>
					Privacy Policy
				</a>
				.
			</p>
		</Card.Content>
		<Card.Footer>
			<!-- <Button>Sign up</Button> -->
		</Card.Footer>
	</Card.Root>
</form>
