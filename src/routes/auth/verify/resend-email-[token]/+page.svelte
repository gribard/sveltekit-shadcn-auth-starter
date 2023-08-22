<script lang="ts">
	import { Loader } from "lucide-svelte";

	export let data;
</script>

<div class="flex flex-col h-screen container items-center justify-center">
	{#if data.result?.heading}
		<h3>{data.result.heading}</h3>
	{/if}
	<hr class="!border-t-2 mt-2 mb-6" />
	{#if data.result?.message}
		{@html data.result.message}
	{:else}
		<Loader />
	{/if}
</div>
