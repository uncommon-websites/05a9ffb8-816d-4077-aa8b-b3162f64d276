<script lang="ts">
	type Props = {
		name: string;
		class?: string;
		size?: number;
	};
	
	let { name, class: className = "", size = 16 }: Props = $props();
	
	// Simple icon mappings using Unicode symbols
	const iconMap: Record<string, string> = {
		menu: "☰",
		"chevron-right": "›",
		"chevron-down": "⌄",
		check: "✓",
		x: "✕",
		clock: "⏰",
		laptop: "💻",
		building: "🏢",
		"arrow-up-right": "↗",
		briefcase: "💼",
		users: "👥",
		heart: "❤️",
		globe: "🌍",
		zap: "⚡",
		shield: "🛡️",
		settings: "⚙️",
		palette: "🎨",
		star: "⭐"
	};
	
	let icon = $derived(iconMap[name] || "?");
</script>

<span class={["inline-block", className]} style="font-size: {size}px;">
	{icon}
</span>