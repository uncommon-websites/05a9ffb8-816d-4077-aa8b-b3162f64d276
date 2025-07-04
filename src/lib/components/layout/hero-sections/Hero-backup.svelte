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

<div
	class="from-primary/8 via-background to-accent/8 relative overflow-hidden bg-gradient-to-br"
	{...rest}
>
	<header
		class="section-px relative container mx-auto grid items-end gap-16 gap-y-9 py-16 pt-32 text-balance {centered
			? 'place-items-center text-center'
			: 'xl:grid-cols-[1fr_auto]'}"
		data-enter-container
	>
		<div class="grid gap-8" class:max-w-prose={centered}>
			<!-- Enhanced badge with better animation -->
			<div
				class="from-primary/10 to-accent/10 border-primary/30 text-primary group inline-flex w-fit items-center gap-3 rounded-full border bg-gradient-to-r px-5 py-3 text-sm font-semibold transition-all duration-300 hover:scale-105"
				data-enter
			>
				<span class="from-primary to-accent h-2.5 w-2.5 animate-ping rounded-full bg-gradient-to-r"
				></span>
				<span class="relative">
					Now live: 10x ROI guaranteed
					<div
						class="from-primary/20 to-accent/20 absolute inset-0 -z-10 rounded-full bg-gradient-to-r opacity-0 transition-opacity duration-300 group-hover:opacity-100"
					></div>
				</span>
				<span class="text-xs opacity-75">🚀</span>
			</div>

			<h1 class="text-display group relative w-full" data-enter>
				<span class="relative block overflow-hidden">
					<AnimateText text={title} />
					<!-- Enhanced underline animation with gradient -->
					<div
						class="from-primary via-accent to-primary absolute -bottom-3 left-0 h-1.5 w-full origin-left scale-x-0 transform animate-[scale-x_1.5s_ease-out_0.5s_forwards] rounded-full bg-gradient-to-r"
					></div>
					<!-- Subtle glow effect -->
					<div
						class="from-primary via-accent to-primary absolute -bottom-3 left-0 h-1.5 w-full origin-left scale-x-0 transform animate-[scale-x_1.5s_ease-out_0.5s_forwards] rounded-full bg-gradient-to-r opacity-50 blur-sm"
					></div>
				</span>
				{#if !centered}
					<span class="text-emphasis-dim group relative mt-6 block">
						<AnimateText text={subtitle} />
						<!-- Enhanced sparkle effects with better positioning -->
						<div class="text-primary absolute -top-3 -right-4 animate-pulse text-lg">✨</div>
						<div class="text-accent absolute top-1/2 -left-4 animate-pulse text-lg delay-300">
							⚡
						</div>
						<div
							class="text-primary/70 absolute right-1/4 bottom-0 animate-pulse text-sm delay-600"
						>
							💫
						</div>
					</span>
				{/if}
			</h1>

			{#if centered}
				<div class="relative">
					<p
						data-enter
						class="text-muted-foreground text-headline mx-auto block max-w-[45ch] transition duration-500 ease-out"
					>
						{subtitle}
					</p>
					<div class="text-primary absolute -top-2 -right-2 animate-pulse">✨</div>
				</div>
			{/if}

			<!-- Enhanced stats with better visual hierarchy -->
			<div class="flex flex-wrap gap-8 text-sm font-semibold" data-enter>
				<div
					class="text-primary group flex items-center gap-3 transition-transform duration-200 hover:scale-105"
				>
					<div class="relative">
						<div
							class="from-primary to-primary/70 h-3 w-3 animate-pulse rounded-full bg-gradient-to-r"
						></div>
						<div
							class="bg-primary absolute inset-0 h-3 w-3 animate-ping rounded-full opacity-30"
						></div>
					</div>
					<span class="relative">
						35% less turnover
						<div
							class="bg-primary absolute -bottom-1 left-0 h-0.5 w-0 transition-all duration-300 group-hover:w-full"
						></div>
					</span>
				</div>
				<div
					class="text-accent group flex items-center gap-3 transition-transform duration-200 hover:scale-105"
				>
					<div class="relative">
						<div
							class="from-accent to-accent/70 h-3 w-3 animate-pulse rounded-full bg-gradient-to-r delay-200"
						></div>
						<div
							class="bg-accent absolute inset-0 h-3 w-3 animate-ping rounded-full opacity-30 delay-200"
						></div>
					</div>
					<span class="relative">
						10x ROI proven
						<div
							class="bg-accent absolute -bottom-1 left-0 h-0.5 w-0 transition-all duration-300 group-hover:w-full"
						></div>
					</span>
				</div>
				<div
					class="text-primary group flex items-center gap-3 transition-transform duration-200 hover:scale-105"
				>
					<div class="relative">
						<div
							class="from-primary to-primary/70 h-3 w-3 animate-pulse rounded-full bg-gradient-to-r delay-400"
						></div>
						<div
							class="bg-primary absolute inset-0 h-3 w-3 animate-ping rounded-full opacity-30 delay-400"
						></div>
					</div>
					<span class="relative">
						5-min setup
						<div
							class="bg-primary absolute -bottom-1 left-0 h-0.5 w-0 transition-all duration-300 group-hover:w-full"
						></div>
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
						class="group relative transform overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:scale-110 max-lg:hidden"
					>
						{#snippet children()}
							<span class="relative z-10 font-semibold">{ctaItem.label}</span>
							{#if index % 2 === 0}
								<div
									class="from-primary via-accent to-primary absolute inset-0 bg-gradient-to-r opacity-0 transition-opacity duration-300 group-hover:opacity-30"
								></div>
								<!-- Shimmer effect -->
								<div
									class="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent transition-transform duration-700 group-hover:translate-x-full"
								></div>
							{:else}
								<!-- Subtle glow for secondary button -->
								<div
									class="from-primary/10 via-accent/10 to-primary/10 absolute inset-0 bg-gradient-to-r opacity-0 transition-opacity duration-300 group-hover:opacity-50"
								></div>
							{/if}
						{/snippet}
					</Button>
					<Button
						href={ctaItem.href}
						size="md"
						variant={index % 2 === 0 ? "primary" : "secondary"}
						class="group relative transform overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:scale-110 lg:hidden"
					>
						{#snippet children()}
							<span class="relative z-10 font-semibold">{ctaItem.label}</span>
							{#if index % 2 === 0}
								<div
									class="from-primary via-accent to-primary absolute inset-0 bg-gradient-to-r opacity-0 transition-opacity duration-300 group-hover:opacity-30"
								></div>
								<div
									class="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent transition-transform duration-700 group-hover:translate-x-full"
								></div>
							{:else}
								<div
									class="from-primary/10 via-accent/10 to-primary/10 absolute inset-0 bg-gradient-to-r opacity-0 transition-opacity duration-300 group-hover:opacity-50"
								></div>
							{/if}
						{/snippet}
					</Button>
				{/each}
			</div>
		{/if}
	</header>

	{#if imageSrc}
		<div class="group relative col-span-full aspect-video overflow-hidden rounded-2xl" data-enter>
			<!-- Enhanced gradient overlays -->
			<div
				class="from-background/30 to-background/10 absolute inset-0 z-10 bg-gradient-to-t via-transparent"
			></div>
			<div
				class="from-primary/5 to-accent/5 absolute inset-0 z-10 bg-gradient-to-r via-transparent"
			></div>

			<img
				src={imageSrc}
				alt="Diverse construction workers celebrating success together"
				class="size-full transform object-cover transition-transform duration-1000 ease-out group-hover:scale-110"
				onerror={handleImageError}
			/>

			<!-- Enhanced floating elements with better animations -->
			<div
				class="text-primary border-primary/20 absolute top-8 left-8 animate-bounce rounded-xl border bg-white/95 px-4 py-3 text-sm font-semibold backdrop-blur-md"
			>
				<div class="flex items-center gap-2">
					<span class="text-lg">🚀</span>
					<span>Live results</span>
				</div>
			</div>

			<div
				class="text-accent border-accent/20 absolute right-8 bottom-8 animate-pulse rounded-xl border bg-white/95 px-4 py-3 text-sm font-semibold backdrop-blur-md"
			>
				<div class="flex items-center gap-2">
					<span class="text-lg">💰</span>
					<span>Instant savings</span>
				</div>
			</div>

			<!-- Additional floating stats -->
			<div
				class="text-primary/80 border-primary/10 absolute top-1/2 left-8 animate-pulse rounded-lg border bg-white/90 px-3 py-2 text-xs font-medium backdrop-blur-md delay-500"
			>
				<div class="flex items-center gap-1">
					<span class="bg-primary h-2 w-2 animate-ping rounded-full"></span>
					<span>Real-time tracking</span>
				</div>
			</div>

			<div
				class="text-accent/80 border-accent/10 absolute bottom-1/3 left-1/2 -translate-x-1/2 transform animate-bounce rounded-lg border bg-white/90 px-3 py-2 text-xs font-medium backdrop-blur-md delay-700"
			>
				<div class="flex items-center gap-1">
					<span class="text-sm">⚡</span>
					<span>Instant setup</span>
				</div>
			</div>

			<!-- Subtle corner accents -->
			<div
				class="from-primary/20 absolute top-0 left-0 h-16 w-16 rounded-br-2xl bg-gradient-to-br to-transparent"
			></div>
			<div
				class="from-accent/20 absolute right-0 bottom-0 h-16 w-16 rounded-tl-2xl bg-gradient-to-tl to-transparent"
			></div>
		</div>
	{/if}
</div>
