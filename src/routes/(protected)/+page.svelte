<script>
	import ContentPane from "$components/docs/ContentPane/ContentPane.svelte";
	export let item;
</script>

<div class="w-full flex">
	<ContentPane {item} />
</div>
