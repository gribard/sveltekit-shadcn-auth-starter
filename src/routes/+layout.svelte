<script lang="ts">
	import { page } from "$app/stores";
	import { dev } from "$app/environment";
	import {
		Metadata,
		SiteFooter,
		SiteHeader,
		TailwindIndicator
	} from "$components/docs";
	// import TestSiteHeader from "./TestSiteHeader.svelte";
	import { updateTheme } from "@/utils";
	import "../styles/globals.css";
	import { config } from "@/stores";
	import convertNameToInitials from "$lib/_helpers/convertNameToInitials";
	import { onMount } from "svelte";

	import type { PageData } from "./$types";
	export let data: PageData;

	$: updateTheme($config.theme, $page.url.pathname);

	//console.log(JSON.stringify(data));
	let initials = "";
	onMount(() => {
		if (data?.user?.firstName && data?.user?.lastName) {
			initials = convertNameToInitials(
				data?.user?.firstName,
				data?.user?.lastName
			);
		}
	});
	// $: initials = convertNameToInitials(
	// 	data.user.firstName,
	// 	data.user.lastName
	// );
	$: initials = initials;
</script>

<Metadata />

<div class="relative flex min-h-screen flex-col" id="page">
	<SiteHeader user={data?.user} />
	<slot />
	<SiteFooter />
	{#if dev}
		<TailwindIndicator />
	{/if}
</div>
