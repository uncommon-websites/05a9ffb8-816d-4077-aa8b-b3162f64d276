<!--
    @component
    Bold hero banner with eye-catching text and strong call-to-action. NEVER use title case.

    Usage:
    ```html
    <Hero
      title="Bold Claim"
      subtitle="Quick Value"
      imageSrc="/hero.jpg"
      callsToAction={[
        {
          href: "/start",
          label: "Go"
        },
        {
          href: "/learn",
          label: "More"
        }
      ]}
    />
    ```

    Props:
    - `title`: Main headline (string)
    - `subtitle`: Supporting text (string)
    - `imageSrc`: Hero image URL (string)
    - `callsToAction`: CTA buttons array (max two: primary, secondary)
-->

<script lang="ts">
	// Components
	import AnimateText from "$lib/components/animation/AnimateText.svelte";
	import Button from "$lib/components/ui/Button.svelte";

	// Constants
	import { cta } from "$lib/navigation";

	function handleImageError(e: Event) {
		const target = e.currentTarget as HTMLImageElement;
		target.src = "https://placehold.co/800x600/f8fafc/64748b?text=Hero+image";
	}

	// Types
	type Props = {
		centered?: boolean;
		title: string;
		subtitle: string;
		imageSrc?: string;
		callsToAction?: Array<{
			href: string;
			label: string;
		}>; // A maximum of two calls to action, with the first one being primary and the second one being secondary
	};

	let {
		title,
		subtitle,
		imageSrc,
		callsToAction = [cta],
		centered = false,
		...rest
	}: Props = $props();
</script>

<div class="relative overflow-hidden bg-gradient-to-br from-primary/8 via-background to-accent/8" {...rest}>
	<header
		class="relative section-px container mx-auto grid items-end gap-16 gap-y-9 py-16 pt-32 text-balance {centered ? 'place-items-center text-center' : 'xl:grid-cols-[1fr_auto]'}"
		data-enter-container
	>
		<div class="grid gap-8" class:max-w-prose={centered}>
			<!-- Enhanced badge with better animation -->
			<div class="inline-flex items-center gap-3 w-fit px-5 py-3 rounded-full bg-gradient-to-r from-primary/10 to-accent/10 border border-primary/30 text-primary font-semibold text-sm hover:scale-105 transition-all duration-300 group" data-enter>
				<span class="h-2.5 w-2.5 rounded-full bg-gradient-to-r from-primary to-accent animate-ping"></span>
				<span class="relative">
					Now live: 10x ROI guaranteed
					<div class="absolute inset-0 bg-gradient-to-r from-primary/20 to-accent/20 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"></div>
				</span>
				<span class="text-xs opacity-75">🚀</span>
			</div>

			<h1 class="text-display w-full relative group" data-enter>
				<span class="block relative overflow-hidden">
					<AnimateText text={title} />
					<!-- Enhanced underline animation with gradient -->
					<div class="absolute -bottom-3 left-0 h-1.5 w-full bg-gradient-to-r from-primary via-accent to-primary rounded-full transform scale-x-0 animate-[scale-x_1.5s_ease-out_0.5s_forwards] origin-left"></div>
					<!-- Subtle glow effect -->
					<div class="absolute -bottom-3 left-0 h-1.5 w-full bg-gradient-to-r from-primary via-accent to-primary rounded-full transform scale-x-0 animate-[scale-x_1.5s_ease-out_0.5s_forwards] origin-left blur-sm opacity-50"></div>
				</span>
				{#if !centered}
					<span class="text-emphasis-dim block mt-6 relative group">
						<AnimateText text={subtitle} />
						<!-- Enhanced sparkle effects with better positioning -->
						<div class="absolute -top-3 -right-4 text-primary animate-pulse text-lg">✨</div>
						<div class="absolute top-1/2 -left-4 text-accent animate-pulse delay-300 text-lg">⚡</div>
						<div class="absolute bottom-0 right-1/4 text-primary/70 animate-pulse delay-600 text-sm">💫</div>
					</span>
				{/if}
			</h1>

			{#if centered}
				<p
					data-enter
					class="text-muted-foreground text-headline mx-auto block max-w-[45ch] transition duration-500 ease-out relative"
				>
					{subtitle}
					<div class="absolute -top-2 -right-2 text-primary animate-pulse">✨</div>
				</p>
			{/if}

			<!-- Enhanced stats with better visual hierarchy -->
			<div class="flex flex-wrap gap-8 text-sm font-semibold" data-enter>
				<div class="flex items-center gap-3 text-primary group hover:scale-105 transition-transform duration-200">
					<div class="relative">
						<div class="h-3 w-3 rounded-full bg-gradient-to-r from-primary to-primary/70 animate-pulse"></div>
						<div class="absolute inset-0 h-3 w-3 rounded-full bg-primary animate-ping opacity-30"></div>
					</div>
					<span class="relative">
						35% less turnover
						<div class="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300"></div>
					</span>
				</div>
				<div class="flex items-center gap-3 text-accent group hover:scale-105 transition-transform duration-200">
					<div class="relative">
						<div class="h-3 w-3 rounded-full bg-gradient-to-r from-accent to-accent/70 animate-pulse delay-200"></div>
						<div class="absolute inset-0 h-3 w-3 rounded-full bg-accent animate-ping opacity-30 delay-200"></div>
					</div>
					<span class="relative">
						10x ROI proven
						<div class="absolute -bottom-1 left-0 w-0 h-0.5 bg-accent group-hover:w-full transition-all duration-300"></div>
					</span>
				</div>
				<div class="flex items-center gap-3 text-primary group hover:scale-105 transition-transform duration-200">
					<div class="relative">
						<div class="h-3 w-3 rounded-full bg-gradient-to-r from-primary to-primary/70 animate-pulse delay-400"></div>
						<div class="absolute inset-0 h-3 w-3 rounded-full bg-primary animate-ping opacity-30 delay-400"></div>
					</div>
					<span class="relative">
						5-min setup
						<div class="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300"></div>
					</span>
				</div>
			</div>
		</div>

		{#if callsToAction.length > 0}
			<div class="flex gap-4" data-enter>
				{#each callsToAction as ctaItem, index}
					<Button
						href={ctaItem.href}
						size="lg"
						variant={index % 2 === 0 ? "primary" : "secondary"}
						class="max-lg:hidden relative group overflow-hidden transform hover:scale-110 hover:-translate-y-1 transition-all duration-300">
						{#snippet children()}
							<span class="relative z-10 font-semibold">{ctaItem.label}</span>
							{#if index % 2 === 0}
								<div class="absolute inset-0 bg-gradient-to-r from-primary via-accent to-primary opacity-0 group-hover:opacity-30 transition-opacity duration-300"></div>
								<!-- Shimmer effect -->
								<div class="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
							{:else}
								<!-- Subtle glow for secondary button -->
								<div class="absolute inset-0 bg-gradient-to-r from-primary/10 via-accent/10 to-primary/10 opacity-0 group-hover:opacity-50 transition-opacity duration-300"></div>
							{/if}
						{/snippet}
					</Button>
					<Button
						href={ctaItem.href}
						size="md"
						variant={index % 2 === 0 ? "primary" : "secondary"}
						class="lg:hidden relative group overflow-hidden transform hover:scale-110 hover:-translate-y-1 transition-all duration-300">
						{#snippet children()}
							<span class="relative z-10 font-semibold">{ctaItem.label}</span>
							{#if index % 2 === 0}
								<div class="absolute inset-0 bg-gradient-to-r from-primary via-accent to-primary opacity-0 group-hover:opacity-30 transition-opacity duration-300"></div>
								<div class="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
							{:else}
								<div class="absolute inset-0 bg-gradient-to-r from-primary/10 via-accent/10 to-primary/10 opacity-0 group-hover:opacity-50 transition-opacity duration-300"></div>
							{/if}
						{/snippet}
					</Button>
				{/each}
			</div>
		{/if}
	</header>

	{#if imageSrc}
		<div class="col-span-full aspect-video relative overflow-hidden rounded-2xl group" data-enter>
			<!-- Enhanced gradient overlays -->
			<div class="absolute inset-0 bg-gradient-to-t from-background/30 via-transparent to-background/10 z-10"></div>
			<div class="absolute inset-0 bg-gradient-to-r from-primary/5 via-transparent to-accent/5 z-10"></div>
			
			<img
				src={imageSrc}
				alt="Diverse construction workers celebrating success together"
				class="size-full object-cover transform group-hover:scale-110 transition-transform duration-1000 ease-out"
				onerror={handleImageError}
			/>
			
			<!-- Enhanced floating elements with better animations -->
			<div class="absolute top-8 left-8 bg-white/95 backdrop-blur-md rounded-xl px-4 py-3 text-sm font-semibold text-primary animate-bounce border border-primary/20">
				<div class="flex items-center gap-2">
					<span class="text-lg">🚀</span>
					<span>Live results</span>
				</div>
			</div>
			
			<div class="absolute bottom-8 right-8 bg-white/95 backdrop-blur-md rounded-xl px-4 py-3 text-sm font-semibold text-accent animate-pulse border border-accent/20">
				<div class="flex items-center gap-2">
					<span class="text-lg">💰</span>
					<span>Instant savings</span>
				</div>
			</div>
			
			<!-- Additional floating stats -->
			<div class="absolute top-1/2 left-8 bg-white/90 backdrop-blur-md rounded-lg px-3 py-2 text-xs font-medium text-primary/80 animate-pulse delay-500 border border-primary/10">
				<div class="flex items-center gap-1">
					<span class="h-2 w-2 rounded-full bg-primary animate-ping"></span>
					<span>Real-time tracking</span>
				</div>
			</div>
			
			<div class="absolute bottom-1/3 left-1/2 transform -translate-x-1/2 bg-white/90 backdrop-blur-md rounded-lg px-3 py-2 text-xs font-medium text-accent/80 animate-bounce delay-700 border border-accent/10">
				<div class="flex items-center gap-1">
					<span class="text-sm">⚡</span>
					<span>Instant setup</span>
				</div>
			</div>
			
			<!-- Subtle corner accents -->
			<div class="absolute top-0 left-0 w-16 h-16 bg-gradient-to-br from-primary/20 to-transparent rounded-br-2xl"></div>
			<div class="absolute bottom-0 right-0 w-16 h-16 bg-gradient-to-tl from-accent/20 to-transparent rounded-tl-2xl"></div>
		</div>
	{/if}
</div>