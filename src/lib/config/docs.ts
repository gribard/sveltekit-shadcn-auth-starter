import type { NavItem, SidebarNavItem } from "$lib/types/nav";

interface DocsConfig {
	mainNav: NavItem[];
	sidebarNav: SidebarNavItem[];
}

export const docsConfig: DocsConfig = {
	mainNav: [
		{
			title: "Documentation",
			href: "/feedreader"
		},
		{
			title: "Components",
			href: "/feedreader/components/accordion"
		},
		{
			title: "Themes",
			href: "/themes"
		},
		{
			title: "Examples",
			href: "/examples/dashboard"
		},
		{
			title: "GitHub",
			href: "https://github.com/huntabyte/shadcn-svelte",
			external: true
		}
	],
	sidebarNav: [
		{
			title: "Getting Started",
			items: [
				{
					title: "Introduction",
					href: "/feedreader",
					items: []
				},
				{
					title: "Installation",
					href: "/feedreader/installation",
					items: []
				},
				{
					title: "components.json",
					href: "/feedreader/components-json",
					items: []
				},
				{
					title: "Theming",
					href: "/feedreader/theming",
					items: []
				},
				{
					title: "CLI",
					href: "/feedreader/cli",
					items: []
				},
				{
					title: "Typography",
					href: "/feedreader/typography",
					items: []
				},
				{
					title: "Figma",
					href: "/feedreader/figma",
					items: []
				},
				{
					title: "About",
					href: "/feedreader/about",
					items: []
				}
			]
		},
		{
			title: "Components",
			items: [
				{
					title: "Accordion",
					href: "/feedreader/components/accordion",
					items: []
				},
				{
					title: "Alert",
					href: "/feedreader/components/alert",
					items: []
				},
				{
					title: "Alert Dialog",
					href: "/feedreader/components/alert-dialog",
					items: []
				},
				{
					title: "Aspect Ratio",
					href: "/feedreader/components/aspect-ratio",
					items: []
				},
				{
					title: "Avatar",
					href: "/feedreader/components/avatar",
					items: []
				},
				{
					title: "Badge",
					href: "/feedreader/components/badge",
					items: []
				},
				{
					title: "Button",
					href: "/feedreader/components/button",
					items: []
				},
				// {
				//   title: "Calendar",
				//   href: "#",
				//   label: "Soon",
				//   disabled: true,
				//   items: []
				// },
				{
					title: "Card",
					href: "/feedreader/components/card",
					items: []
				},
				{
					title: "Checkbox",
					href: "/feedreader/components/checkbox",
					items: []
				},
				{
					title: "Collapsible",
					href: "/feedreader/components/collapsible",
					items: []
				},
				{
					title: "Combobox",
					disabled: true,
					label: "Soon",
					href: "#",
					items: []
				},
				// {
				//   title: "Command",
				//   href: "#",
				//   label: "Soon",
				//   disabled: true,
				//   items: []
				// },
				{
					title: "Context Menu",
					href: "/feedreader/components/context-menu",
					items: []
				},
				{
					title: "Data Table",
					href: "/feedreader/components/data-table",
					label: "Preview",
					items: []
				},
				// {
				//   title: "Date Picker",
				//   href: "#",
				//   label: "Soon",
				//   disabled: true,
				//   items: []
				// },
				{
					title: "Dialog",
					href: "/feedreader/components/dialog",
					items: []
				},
				{
					title: "Dropdown Menu",
					href: "/feedreader/components/dropdown-menu",
					items: []
				},
				{
					title: "Form",
					href: "#",
					label: "Soon",
					disabled: true,
					items: []
				},
				{
					title: "Hover Card",
					href: "/feedreader/components/hover-card",
					items: []
				},
				{
					title: "Input",
					href: "/feedreader/components/input",
					items: []
				},
				{
					title: "Label",
					href: "/feedreader/components/label",
					items: []
				},
				{
					title: "Menubar",
					href: "/feedreader/components/menubar",
					items: []
				},
				// {
				//   title: "Navigation Menu",
				//   href: "#",
				//   label: "Soon",
				//   disabled: true,
				//   items: []
				// },
				{
					title: "Popover",
					href: "/feedreader/components/popover",
					items: []
				},
				{
					title: "Progress",
					href: "/feedreader/components/progress",
					items: []
				},
				{
					title: "Radio Group",
					href: "/feedreader/components/radio-group",
					items: []
				},
				// {
				//   title: "Scroll Area",
				//   href: "#",
				//   label: "Soon",
				//   disabled: true,
				//   items: []
				// },
				{
					title: "Select",
					href: "/feedreader/components/select",
					items: []
				},
				{
					title: "Separator",
					href: "/feedreader/components/separator",
					items: []
				},
				{
					title: "Sheet",
					href: "/feedreader/components/sheet",
					items: []
				},
				{
					title: "Skeleton",
					href: "/feedreader/components/skeleton",
					items: []
				},
				{
					title: "Slider",
					href: "/feedreader/components/slider",
					items: []
				},
				{
					title: "Switch",
					href: "/feedreader/components/switch",
					items: []
				},
				{
					title: "Table",
					href: "/feedreader/components/table",
					items: []
				},
				{
					title: "Tabs",
					href: "/feedreader/components/tabs",
					items: []
				},
				{
					title: "Textarea",
					href: "/feedreader/components/textarea",
					items: []
				},
				// {
				//   title: "Toast",
				//   href: "#",
				//   label: "Soon",
				//   disabled: true,
				//   items: []
				// },
				{
					title: "Toggle",
					href: "/feedreader/components/toggle",
					items: []
				},
				{
					title: "Tooltip",
					href: "/feedreader/components/tooltip",
					items: []
				}
			]
		}
	]
};

type Example = {
	name: string;
	href: string;
	label?: string;
	code: string;
};
export const examples: Example[] = [
	{
		name: "Dashboard",
		href: "/examples/dashboard",
		code: "https://github.com/huntabyte/shadcn-svelte/tree/main/apps/www/src/lib/components/feedreader/dashboard"
	},
	{
		name: "Cards",
		href: "/examples/cards",
		code: "https://github.com/huntabyte/shadcn-svelte/tree/main/apps/www/src/routes/examples/cards"
	},
	// {
	// 	name: "Tasks",
	// 	href: "/examples/tasks",
	// 	label: "New",
	// 	code: "https://github.com/huntabyte/shadcn-svelte/tree/main/apps/www/apps/www/app/examples/tasks"
	// },
	{
		name: "Playground",
		href: "/examples/playground",
		code: "https://github.com/huntabyte/shadcn-svelte/tree/main/apps/www/apps/www/app/examples/playground"
	},
	{
		name: "Music",
		href: "/examples/music",
		code: "https://github.com/huntabyte/shadcn-svelte/tree/main/apps/www/apps/www/app/examples/music"
	},
	{
		name: "Feed Reader",
		href: "/examples/feedreader",
		code: "https://github.com/huntabyte/shadcn-svelte/tree/main/apps/www/apps/www/app/examples/music"
	},
	{
		name: "Authentication",
		href: "/examples/authentication",
		code: "https://github.com/huntabyte/shadcn-svelte/tree/main/apps/www/src/routes/examples/authentication"
	},
	{
		name: "Forms",
		href: "/examples/forms",
		code: "https://github.com/huntabyte/shadcn-svelte/tree/main/apps/www/src/routes/examples/forms"
	}
];
