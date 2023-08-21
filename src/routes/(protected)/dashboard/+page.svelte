<script lang="ts">
	export let data;
</script>

<div class="flex flex-row justify-center items-center mb-4">
	<h2>Protected Area</h2>
</div>
<p>User info from dashboard/+page.svelte <b>{data?.user?.email} </b></p>

<hr class="!border-t-2 mt-2 mb-6" />

<p>If you are seeing this page, you are logged in.</p>
