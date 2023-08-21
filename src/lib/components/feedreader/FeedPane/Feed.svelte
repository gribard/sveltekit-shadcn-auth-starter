<script>
	import { Button } from "@/registry/new-york/ui/button";
	import { Youtube } from "lucide-svelte";

	export let title = "";
</script>

<Button variant="ghost" class="w-full justify-start ml-4">
	<Youtube class="mr-2 h-4 w-4" />
	{title}
</Button>
