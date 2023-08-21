<script lang="ts">
	import { cn } from "@/utils";
	import { Button } from "@/registry/new-york/ui/button";
	import type { Playlist } from "$lib/data/playlists";

	import { Layers } from "radix-icons-svelte";
	import { Folder, Youtube } from "lucide-svelte";
	import MySearch from "./ui/MySearch.svelte";
	import FeedList from "./FeedPane/FeedList.svelte";
	import type { FeedType, FolderType } from "@/data/feeds";

	let className: string | null | undefined = undefined;
	export let folders: FolderType[];
	export let feeds: FeedType[];
	export { className as class };
</script>

<div class={cn("pb-12", className)}>
	<div class="space-y-4">
		<div class="px-3 py-2">
			<div class="space-y-1 h-full overflow-y-auto overflow-x-hidden">
				<FeedList {folders} {feeds} />
			</div>
		</div>
	</div>
</div>
