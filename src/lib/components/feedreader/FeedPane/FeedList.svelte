<script lang="ts">
	import { cn } from "@/utils";
	import { Button } from "@/registry/new-york/ui/button";
	import type { Playlist } from "@/data/playlists";

	import { Layers } from "radix-icons-svelte";
	import * as Accordion from "@/registry/default/ui/accordion";

	import Feed from "./Feed.svelte";
	import Folder from "./Folder.svelte";
	import type { FeedType, FolderType } from "@/data/feeds";

	let className: string | null | undefined = undefined;
	export let folders: FolderType[];
	export let feeds: FeedType[];
	export { className as class };
</script>

<Accordion.Root class="w-full py-0" multiple>
	{#each folders as folder}
		{#if folder.id != 0}
			<Accordion.Item value={folder.name}>
				<Accordion.Trigger class="flex"
					><Folder title={folder.name} /></Accordion.Trigger
				>
				<Accordion.Content>
					{#each feeds.filter((feed) => feed.folder?.id === folder.id) as feed}
						<Feed title={feed.name} />
					{/each}
				</Accordion.Content>
			</Accordion.Item>
		{/if}
	{/each}
</Accordion.Root>
{#each folders as folder}
	{#if folder.id == 0}
		{#each feeds.filter((feed) => feed.folder?.id === folder.id) as feed}
			<Feed title={feed.name} />
		{/each}
	{/if}
{/each}
