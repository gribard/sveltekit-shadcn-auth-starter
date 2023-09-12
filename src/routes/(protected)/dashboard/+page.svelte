<script lang="ts">
	import DashboardComponent from "./DashboardComponent.svelte";
	import ContentPane from "./DashboardComponent.svelte";
	export let data;
	console.dir(data?.user.firstName);
</script>

<div class="w-full flex">
	<DashboardComponent />
</div>
