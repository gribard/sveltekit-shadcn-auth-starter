<script lang="ts">
	import SignUp from "$lib/components/sign-up.svelte";
	import SignIn from "$lib/components/sign-in.svelte";
	import { i } from "@inlang/sdk-js";
	export let data;
	let tabSet = "signUp";
</script>

{#if tabSet === "signIn"}
	<SignIn {data} />
{:else if tabSet === "signUp"}
	<SignUp {data} />
{/if}
