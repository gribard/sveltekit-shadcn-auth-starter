<script lang="ts">
	import { PlusCircled } from "radix-icons-svelte";
	import { Button } from "@/registry/new-york/ui/button";
	import { Separator } from "@/registry/new-york/ui/separator";
	import * as Tabs from "@/registry/new-york/ui/tabs";
	import {
		AlbumArtwork,
		Sidebar,
		Menu,
		PodcastEmptyPlaceholder
	} from "@/components/feedreader";
	import { playlists } from "$lib/data/playlists";
	import { listenNowAlbums, madeForYouAlbums } from "$lib/data/albums";
	import type { PageData } from "./$types";
	import FeedPane from "@/components/feedreader/FeedPane/FeedPane.svelte";
	import type { ItemType } from "@/data/feeds";
	import ItemsPane from "@/components/feedreader/ItemsPane/ItemsPane.svelte";
	import ContentPane from "@/components/feedreader/ContentPane/ContentPane.svelte";
	export let data: PageData;

	function getItems(): ItemType[] {
		return [] as ItemType[];
	}

	function getItem(): ItemType {
		return {} as ItemType;
	}

	let items = getItems();
	let item = getItem();
</script>

<div class="md:hidden">
	<img
		src="/examples/music-light.png"
		width={1280}
		height={1114}
		alt="Music"
		class="block dark:hidden"
	/>
	<img
		src="/examples/music-dark.png"
		width={1280}
		height={1114}
		alt="Music"
		class="hidden dark:block"
	/>
</div>
<div class="hidden md:block">
	<Menu />
	<div class="border-t">
		<div class="bg-background">
			<div class="grid lg:grid-cols-12">
				<FeedPane
					folders={data.folders}
					feeds={data.feeds}
					class="hidden lg:col-span-2 lg:block"
				/>
				<ItemsPane
					{items}
					class="hidden border-l border-stone-800 lg:col-span-3 lg:block"
				/>
				<ContentPane
					{item}
					class="hidden border-l border-stone-800 lg:col-span-7 lg:block"
				/>
			</div>
		</div>
	</div>
</div>
