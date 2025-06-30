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

<div class="relative overflow-hidden bg-gradient-to-br from-primary/5 via-background to-accent/5" {...rest}>
	<!-- Dynamic background elements -->
	<div class="absolute inset-0 opacity-30">
		<div class="absolute top-10 left-10 h-32 w-32 rounded-full bg-primary/20 blur-xl animate-pulse"></div>
		<div class="absolute top-32 right-20 h-24 w-24 rounded-full bg-accent/20 blur-lg animate-pulse delay-1000"></div>
		<div class="absolute bottom-20 left-1/3 h-28 w-28 rounded-full bg-primary/15 blur-xl animate-pulse delay-500"></div>
	</div>

	<header
		class={[
			"relative section-px container mx-auto grid items-end gap-16 gap-y-9 py-16 pt-32 text-balance",
			centered ? "place-items-center text-center" : " xl:grid-cols-[1fr_auto]"
		]}
		data-enter-container
	>
		<div class="grid gap-8" class:max-w-prose={centered}>
			<!-- Zesty badge -->
			<div class="inline-flex items-center gap-2 w-fit px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary font-medium text-sm animate-bounce" data-enter>
				<span class="h-2 w-2 rounded-full bg-primary animate-ping"></span>
				Now live: 10x ROI guaranteed
			</div>

			<h1 class="text-display w-full relative" data-enter>
				<span class="block relative">
					<AnimateText text={title} />
					<!-- Zesty underline animation -->
					<div class="absolute -bottom-2 left-0 h-1 w-full bg-gradient-to-r from-primary via-accent to-primary rounded-full transform scale-x-0 animate-[scale-x_1.5s_ease-out_0.5s_forwards] origin-left"></div>
				</span>
				{#if !centered}
					<span class="text-emphasis-dim block mt-4 relative">
						<AnimateText text={subtitle} />
						<!-- Sparkle effects -->
						<div class="absolute -top-2 -right-2 text-primary animate-pulse">✨</div>
						<div class="absolute top-1/2 -left-3 text-accent animate-pulse delay-300">⚡</div>
					</span>
				{/if}
			</h1>

			{#if centered}
				<p
					data-enter
					class={[
						"text-muted-foreground text-headline mx-auto block max-w-[45ch] transition duration-500 ease-out relative"
					]}
				>
					{subtitle}
					<div class="absolute -top-2 -right-2 text-primary animate-pulse">✨</div>
				</p>
			{/if}

			<!-- Zesty stats -->
			<div class="flex gap-6 text-sm font-medium" data-enter>
				<div class="flex items-center gap-2 text-primary">
					<div class="h-2 w-2 rounded-full bg-primary animate-pulse"></div>
					<span>35% less turnover</span>
				</div>
				<div class="flex items-center gap-2 text-accent">
					<div class="h-2 w-2 rounded-full bg-accent animate-pulse delay-200"></div>
					<span>10x ROI proven</span>
				</div>
				<div class="flex items-center gap-2 text-primary">
					<div class="h-2 w-2 rounded-full bg-primary animate-pulse delay-400"></div>
					<span>5-min setup</span>
				</div>
			</div>
		</div>

		{#if callsToAction.length > 0}
			<div class="flex gap-4" data-enter>
				{#each callsToAction as cta, index}
					<Button
						href={cta.href}
						size="lg"
						variant={index % 2 === 0 ? "primary" : "secondary"}
						class="max-lg:hidden relative group overflow-hidden transform hover:scale-105 transition-all duration-200">
						<span class="relative z-10">{cta.label}</span>
						{#if index % 2 === 0}
							<div class="absolute inset-0 bg-gradient-to-r from-primary via-accent to-primary opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
						{/if}
					</Button>
					<Button
						href={cta.href}
						size="md"
						variant={index % 2 === 0 ? "primary" : "secondary"}
						class="lg:hidden relative group overflow-hidden transform hover:scale-105 transition-all duration-200">
						<span class="relative z-10">{cta.label}</span>
						{#if index % 2 === 0}
							<div class="absolute inset-0 bg-gradient-to-r from-primary via-accent to-primary opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
						{/if}
					</Button>
				{/each}
			</div>
		{/if}
	</header>

	{#if imageSrc}
		<div class="col-span-full aspect-video relative overflow-hidden" data-enter>
			<div class="absolute inset-0 bg-gradient-to-t from-background/20 to-transparent z-10"></div>
			<img
				src={imageSrc}
				alt="Energetic team celebrating success"
				class="size-full object-cover transform hover:scale-105 transition-transform duration-700 ease-out"
				onerror={handleImageError}
			/>
			<!-- Floating elements over image -->
			<div class="absolute top-6 left-6 bg-white/90 backdrop-blur-sm rounded-lg px-3 py-2 text-sm font-medium text-primary animate-bounce">
				🚀 Live results
			</div>
			<div class="absolute bottom-6 right-6 bg-white/90 backdrop-blur-sm rounded-lg px-3 py-2 text-sm font-medium text-accent animate-pulse">
				💰 Instant savings
			</div>
		</div>
	{/if}
</div>
