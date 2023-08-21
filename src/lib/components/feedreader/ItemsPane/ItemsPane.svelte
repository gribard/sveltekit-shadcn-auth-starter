<script lang="ts">
	import type { FeedType, FolderType, ItemType } from "@/data/feeds";

	import { cn } from "@/utils";
	let className: string | null | undefined = undefined;
	export { className as class };

	export let items: ItemType[];
</script>

<div class={cn("pb-12", className)}>
	<div class="space-y-4">
		<div class="px-2 py-2">
			<div class="space-y-1 h-full overflow-y-auto overflow-x-hidden">
				<pre>{items.length != 0 ? items : "SUKA"}</pre>
			</div>
		</div>
	</div>
</div>
