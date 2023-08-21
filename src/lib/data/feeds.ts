const folder0: FolderType = {
	id: 0,
	name: "All Feeds"
};
const folder1: FolderType = {
	id: 1,
	name: "music"
};
const folder2: FolderType = {
	id: 2,
	name: "news"
};
const folder3: FolderType = {
	id: 3,
	name: "dev"
};

export const folders: FolderType[] = [folder0, folder1, folder2, folder3];

export const feeds: FeedType[] = [
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
		name: "News Feed",
		folder: folder2,
		url: "https://google.com",
		items: [{ id: 2, name: "Item Title", content: "Item's Content" }]
	},
	{
		id: 5,
		name: "News Feed",
		folder: folder2,
		url: "https://google.com",
		items: [{ id: 2, name: "Item Title", content: "Item's Content" }]
	},
	{
		id: 6,
		name: "News Feed",
		folder: folder2,
		url: "https://google.com",
		items: [{ id: 2, name: "Item Title", content: "Item's Content" }]
	},
	{
		id: 7,
		name: "News Feed",
		folder: folder2,
		url: "https://google.com",
		items: [{ id: 2, name: "Item Title", content: "Item's Content" }]
	},
	{
		id: 8,
		name: "News Feed",
		folder: folder2,
		url: "https://google.com",
		items: [{ id: 2, name: "Item Title", content: "Item's Content" }]
	},
	{
		id: 9,
		name: "News Feed",
		folder: folder2,
		url: "https://google.com",
		items: [{ id: 2, name: "Item Title", content: "Item's Content" }]
	},
	{
		id: 10,
		name: "Dev Feed",
		folder: folder3,
		url: "https://google.com",
		items: [{ id: 2, name: "Item Title", content: "Item's Content" }]
	},
	{
		id: 11,
		name: "Another Dev Feed",
		folder: folder3,
		url: "https://google.com",
		items: [{ id: 2, name: "Item Title", content: "Item's Content" }]
	}
];

export interface FolderType {
	id: number;
	name: string;
}

export interface FeedType {
	id: number;
	name: string;
	url: string;
	folder?: FolderType;
	items: ItemType[];
}

export interface ItemType {
	id: number;
	name: string;
	content: string;
}
