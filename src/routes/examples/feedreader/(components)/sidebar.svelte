<script lang="ts">
	import { cn } from "@/utils";
	import { Button } from "@/registry/new-york/ui/button";
	import type { Playlist } from "../(data)/playlists";

	import { Layers } from "radix-icons-svelte";
	import { Folder, Youtube } from "lucide-svelte";
	import MySearch from "./ui/MySearch.svelte";

	let className: string | null | undefined = undefined;
	export let playlists: Playlist[];
	export { className as class };

	const folder: Folder = {
		id: 1,
		name: "Folder"
	};

	const folder0: Folder = {
		id: 0,
		name: "All Feeds"
	};
	const folder1: Folder = {
		id: 1,
		name: "music"
	};
	const folder2: Folder = {
		id: 2,
		name: "news"
	};
	const folder3: Folder = {
		id: 3,
		name: "dev"
	};

	const folders: Folder[] = [folder0, folder1, folder2, folder3];

	const feeds: Feed[] = [
		{
			id: 0,
			name: "Feed without Folder",
			folder: folder0,
			url: "https://google.com",
			items: [{ id: 0, name: "Item Title", content: "Item's Content" }]
		},
		{
			id: 1,
			name: "Another Feed without Folder",
			folder: folder0,
			url: "https://google.com",
			items: [{ id: 1, name: "Item Title", content: "Item's Content" }]
		},
		{
			id: 2,
			name: "Music Feed",
			folder: folder1,
			url: "https://google.com",
			items: [{ id: 1, name: "Item Title", content: "Item's Content" }]
		},
		{
			id: 3,
			name: "News Feed",
			folder: folder2,
			url: "https://google.com",
			items: [{ id: 2, name: "Item Title", content: "Item's Content" }]
		},
		{
			id: 4,
			name: "Dev Feed",
			folder: folder3,
			url: "https://google.com",
			items: [{ id: 2, name: "Item Title", content: "Item's Content" }]
		},
		{
			id: 5,
			name: "Another Dev Feed",
			folder: folder3,
			url: "https://google.com",
			items: [{ id: 2, name: "Item Title", content: "Item's Content" }]
		}
	];

	interface Folder {
		id: number;
		name: string;
	}

	interface Feed {
		id: number;
		name: string;
		url: string;
		folder?: Folder;
		items: Item[];
	}

	interface Item {
		id: number;
		name: string;
		content: string;
	}
</script>

<div class={cn("pb-12", className)}>
	<div class="space-y-4">
		<div class="px-3 py-2">
			<div class="space-y-1 h-[300px] overflow-y-auto overflow-x-hidden">
				<MySearch />
				{#each folders as folder}
					<Button variant="ghost" class="w-full justify-start">
						<Folder class="mr-2 h-4 w-4" />
						{folder.name}
					</Button>

					{#each feeds.filter((feed) => feed.folder?.id === folder.id) as feed}
						<Button
							variant="ghost"
							class="w-full justify-start ml-4"
						>
							<Youtube class="mr-2 h-4 w-4" />
							{feed.name}
						</Button>
					{/each}
				{/each}
			</div>
		</div>
		<div class="px-3 py-2">
			<h2 class="mb-2 px-4 text-lg font-semibold tracking-tight">
				Library
			</h2>
			<div class="space-y-1">
				<Button variant="ghost" class="w-full justify-start">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						viewBox="0 0 24 24"
						fill="none"
						stroke="currentColor"
						stroke-width="2"
						stroke-linecap="round"
						stroke-linejoin="round"
						class="mr-2 h-4 w-4"
					>
						<path d="M21 15V6" />
						<path
							d="M18.5 18a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z"
						/>
						<path d="M12 12H3" />
						<path d="M16 6H3" />
						<path d="M12 18H3" />
					</svg>
					Playlists
				</Button>
				<Button variant="ghost" class="w-full justify-start">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						viewBox="0 0 24 24"
						fill="none"
						stroke="currentColor"
						stroke-width="2"
						stroke-linecap="round"
						stroke-linejoin="round"
						class="mr-2 h-4 w-4"
					>
						<circle cx="8" cy="18" r="4" />
						<path d="M12 18V2l7 4" />
					</svg>
					Songs
				</Button>
				<Button variant="ghost" class="w-full justify-start">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						viewBox="0 0 24 24"
						fill="none"
						stroke="currentColor"
						stroke-width="2"
						stroke-linecap="round"
						stroke-linejoin="round"
						class="mr-2 h-4 w-4"
					>
						<path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
						<circle cx="12" cy="7" r="4" />
					</svg>
					Made for You
				</Button>
				<Button variant="ghost" class="w-full justify-start">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						viewBox="0 0 24 24"
						fill="none"
						stroke="currentColor"
						stroke-width="2"
						stroke-linecap="round"
						stroke-linejoin="round"
						class="mr-2 h-4 w-4"
					>
						<path
							d="m12 8-9.04 9.06a2.82 2.82 0 1 0 3.98 3.98L16 12"
						/>
						<circle cx="17" cy="7" r="5" />
					</svg>
					Artists
				</Button>
				<Button variant="ghost" class="w-full justify-start">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						viewBox="0 0 24 24"
						fill="none"
						stroke="currentColor"
						stroke-width="2"
						stroke-linecap="round"
						stroke-linejoin="round"
						class="mr-2 h-4 w-4"
					>
						<path d="m16 6 4 14" />
						<path d="M12 6v14" />
						<path d="M8 8v12" />
						<path d="M4 4v16" />
					</svg>
					Albums
				</Button>
			</div>
		</div>
		<div class="py-2">
			<h2 class="relative px-7 text-lg font-semibold tracking-tight">
				Playlists
			</h2>
			<div class="h-[300px] overflow-y-auto px-1">
				<div class="space-y-1 p-2">
					{#each playlists as playlist}
						<Button
							variant="ghost"
							class="w-full justify-start font-normal"
						>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								viewBox="0 0 24 24"
								fill="none"
								stroke="currentColor"
								stroke-width="2"
								stroke-linecap="round"
								stroke-linejoin="round"
								class="mr-2 h-4 w-4"
							>
								<path d="M21 15V6" />
								<path
									d="M18.5 18a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z"
								/>
								<path d="M12 12H3" />
								<path d="M16 6H3" />
								<path d="M12 18H3" />
							</svg>
							{playlist}
						</Button>
					{/each}
				</div>
			</div>
		</div>
	</div>
</div>
