<script lang="ts">
	import FeedList from "./FeedList.svelte";
	import FeedPaneSearchbar from "./FeedPaneSearchbar.svelte";
	import FeedPaneToolbar from "./FeedPaneToolbar.svelte";
	import type { FeedType, FolderType } from "@/data/feeds";

	import { cn } from "@/utils";
	let className: string | null | undefined = undefined;
	export { className as class };

	export let folders: FolderType[];
	export let feeds: FeedType[];
</script>

<div class={cn("pb-12", className)}>
	<div class="space-y-4">
		<div class="px-2 py-2">
			<div class="space-y-1 h-full overflow-y-auto w-full">
				<FeedPaneToolbar />
				<FeedPaneSearchbar />
				<FeedList {folders} {feeds} />
			</div>
		</div>
	</div>
</div>
