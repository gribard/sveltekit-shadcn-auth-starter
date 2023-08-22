<script>
	import ContentPane from "$components/feedreader/ContentPane/ContentPane.svelte";
	export let item;
</script>

<div class="w-full flex">
	<ContentPane {item} />
</div>
