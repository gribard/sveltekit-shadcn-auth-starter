<script lang="ts">
	import { superForm } from "sveltekit-superforms/client";
	//import SuperDebug from 'sveltekit-superforms/client/SuperDebug.svelte';
	import { userSchema } from "$lib/config/zod-schemas";
	import { AlertTriangle, Loader } from "lucide-svelte";
	import { i } from "@inlang/sdk-js";
	import ResetPasswordCard from "../../components/ResetPasswordCard.svelte";
	export let data;
</script>

<div class="w-[350px] mx-auto py-10">
	<ResetPasswordCard {data} />
</div>
