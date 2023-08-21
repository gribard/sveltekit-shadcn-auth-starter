<script lang="ts">
	import Logo from "$lib/components/logo.svelte";
</script>

<div
	class="flex max-w-full flex-col justify-center items-center px-6 py-12 lg:px-8 mx-auto"
>
	<div class="card p-6 pb-8 pt-8">
		<div>
			<slot />
		</div>
	</div>
</div>
