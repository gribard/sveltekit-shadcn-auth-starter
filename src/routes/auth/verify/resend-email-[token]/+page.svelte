<script lang="ts">
	export let data;
</script>

{#if data.result?.heading}
	<h3>{data.result.heading}</h3>
{/if}
<hr class="!border-t-2 mt-2 mb-6" />
{#if data.result?.message}
	{@html data.result.message}
{:else}
	<Loader />
{/if}
