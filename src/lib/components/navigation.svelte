<script lang="ts">
	import { enhance } from "$app/forms";
	import { i, languages, language, switchLanguage } from "@inlang/sdk-js";
	import { LogIn, LogOut, Contact2, UserCircle2, Lock } from "lucide-svelte";
	import Logo from "$lib/components/logo.svelte";
	export let user: any;
	let selectedLanguage: string = language || "en";
</script>

<nav class="list-nav p-4">
	<div class="flex flex-row justify-between items-center">
		<div class="">
			<select
				class="select"
				bind:value={selectedLanguage}
				size="1"
				on:change={() => switchLanguage(selectedLanguage)}
			>
				{#each languages as lang}
					<option value={lang}>{lang}</option>
				{/each}
			</select>
		</div>
	</div>

	<ul class="list mt-8">
		<li>
			<a href="/">
				<span><Logo size="24" /></span><span class="flex-auto">{i("home")}</span
				></a
			>
		</li>
		<li>
			<a href="/dashboard">
				<span><Lock /></span><span class="flex-auto">{i("protected")}</span></a
			>
		</li>
		{#if user}
			<li>
				<a href="/profile">
					<span><Contact2 /></span><span class="flex-auto"
						>{i("profile.menutitle")}</span
					></a
				>
			</li>
			<li>
				<form use:enhance action="/auth/sign-out" method="post">
					<button type="submit" class="btn"
						><span><LogOut /></span><span>{i("signout")}</span></button
					>
				</form>
			</li>
		{/if}
		{#if !user}
			<li>
				<a href="/auth/sign-in">
					<span><LogIn /></span><span class="flex-auto">{i("signin")}</span></a
				>
			</li>
			<li>
				<a href="/auth/sign-up">
					<span><UserCircle2 /></span><span class="flex-auto"
						>{i("signup")}</span
					></a
				>
			</li>
		{/if}
	</ul>
</nav>
