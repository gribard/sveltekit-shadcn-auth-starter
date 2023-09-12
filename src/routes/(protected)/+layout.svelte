<script lang="ts">
	import { i } from "@inlang/sdk-js";

	export let data;
	console.log(data.user);
</script>

<div class="px-6 py-12 lg:px-8 mx-auto">
	<h1 class="text-4xl px-8">{i("welcome")}, {data.user.firstName}!</h1>
	<slot />
</div>
