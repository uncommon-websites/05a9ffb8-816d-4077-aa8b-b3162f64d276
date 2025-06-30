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

<div class="relative overflow-hidden bg-gradient-to-br from-primary/12 via-background to-accent/12 min-h-screen flex items-center" {...rest}>
	<!-- Enhanced background with animated elements -->
	<div class="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(var(--primary-rgb),0.1),transparent_50%)]"></div>
	<div class="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(var(--accent-rgb),0.08),transparent_50%)]"></div>
	
	<!-- Floating geometric shapes -->
	<div class="absolute top-20 left-10 w-32 h-32 bg-gradient-to-br from-primary/10 to-transparent rounded-full animate-pulse"></div>
	<div class="absolute bottom-32 right-16 w-24 h-24 bg-gradient-to-br from-accent/10 to-transparent rounded-full animate-pulse delay-1000"></div>
	<div class="absolute top-1/2 left-1/4 w-16 h-16 bg-gradient-to-br from-primary/5 to-transparent rounded-full animate-pulse delay-500"></div>

	<header
		class="relative section-px container mx-auto grid items-center gap-16 gap-y-12 py-20 text-balance {centered ? 'place-items-center text-center' : 'xl:grid-cols-[1fr_auto]'}"
		data-enter-container
	>
		<div class="grid gap-10" class:max-w-prose={centered}>
			<!-- Premium badge with enhanced design -->
			<div class="inline-flex items-center gap-3 w-fit px-6 py-4 rounded-full bg-gradient-to-r from-white/95 to-white/90 backdrop-blur-xl border border-primary/20 text-primary font-bold text-sm hover:scale-105 hover:shadow-2xl transition-all duration-500 group relative overflow-hidden" data-enter>
				<!-- Animated background -->
				<div class="absolute inset-0 bg-gradient-to-r from-primary/5 via-accent/5 to-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
				
				<span class="relative flex items-center gap-2">
					<span class="h-3 w-3 rounded-full bg-gradient-to-r from-primary to-accent animate-ping"></span>
					<span class="h-3 w-3 rounded-full bg-gradient-to-r from-primary to-accent absolute"></span>
				</span>
				<span class="relative z-10 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
					Backed by Sequoia • 10x ROI proven
				</span>
				<span class="text-lg relative z-10">🚀</span>
				
				<!-- Shimmer effect -->
				<div class="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
			</div>

			<h1 class="text-display w-full relative group leading-tight" data-enter>
				<span class="block relative overflow-hidden">
					<!-- Enhanced text with gradient -->
					<span class="bg-gradient-to-r from-foreground via-primary/80 to-foreground bg-clip-text text-transparent">
						<AnimateText text={title} />
					</span>
					
					<!-- Multiple layered underlines for depth -->
					<div class="absolute -bottom-4 left-0 h-2 w-full bg-gradient-to-r from-primary via-accent to-primary rounded-full transform scale-x-0 animate-[scale-x_1.5s_ease-out_0.5s_forwards] origin-left"></div>
					<div class="absolute -bottom-4 left-0 h-2 w-full bg-gradient-to-r from-primary via-accent to-primary rounded-full transform scale-x-0 animate-[scale-x_1.5s_ease-out_0.5s_forwards] origin-left blur-md opacity-60"></div>
					<div class="absolute -bottom-4 left-0 h-2 w-full bg-gradient-to-r from-primary via-accent to-primary rounded-full transform scale-x-0 animate-[scale-x_1.5s_ease-out_0.5s_forwards] origin-left blur-lg opacity-30"></div>
				</span>
				{#if !centered}
					<span class="text-emphasis-dim block mt-8 relative group text-xl leading-relaxed">
						<AnimateText text={subtitle} />
						<!-- Enhanced floating elements -->
						<div class="absolute -top-4 -right-6 text-primary animate-bounce text-2xl drop-shadow-lg">✨</div>
						<div class="absolute top-1/2 -left-6 text-accent animate-bounce delay-300 text-2xl drop-shadow-lg">⚡</div>
						<div class="absolute bottom-0 right-1/4 text-primary/70 animate-bounce delay-600 text-xl drop-shadow-lg">💫</div>
						<div class="absolute top-0 left-1/3 text-accent/60 animate-bounce delay-900 text-lg drop-shadow-lg">🌟</div>
					</span>
				{/if}
			</h1>

			{#if centered}
				<div
					data-enter
					class="text-muted-foreground text-headline mx-auto block max-w-[45ch] transition duration-500 ease-out relative text-xl leading-relaxed"
				>
					{subtitle}
					<div class="absolute -top-3 -right-3 text-primary animate-bounce text-2xl">✨</div>
					<div class="absolute bottom-0 -left-3 text-accent animate-bounce delay-500 text-xl">🌟</div>
				</div>
			{/if}

			<!-- Premium stats cards with enhanced design -->
			<div class="flex flex-wrap gap-6" data-enter>
				<div class="flex items-center gap-4 px-6 py-4 rounded-2xl bg-gradient-to-r from-white/90 to-white/80 backdrop-blur-xl border border-primary/20 text-primary group hover:scale-110 hover:-translate-y-2 transition-all duration-500 hover:shadow-2xl relative overflow-hidden">
					<div class="absolute inset-0 bg-gradient-to-r from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
					<div class="relative flex items-center gap-3">
						<div class="relative">
							<div class="h-4 w-4 rounded-full bg-gradient-to-r from-primary to-primary/70 animate-pulse"></div>
							<div class="absolute inset-0 h-4 w-4 rounded-full bg-primary animate-ping opacity-40"></div>
						</div>
						<span class="font-bold text-base relative z-10">35% less turnover</span>
					</div>
				</div>
				
				<div class="flex items-center gap-4 px-6 py-4 rounded-2xl bg-gradient-to-r from-white/90 to-white/80 backdrop-blur-xl border border-accent/20 text-accent group hover:scale-110 hover:-translate-y-2 transition-all duration-500 hover:shadow-2xl relative overflow-hidden">
					<div class="absolute inset-0 bg-gradient-to-r from-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
					<div class="relative flex items-center gap-3">
						<div class="relative">
							<div class="h-4 w-4 rounded-full bg-gradient-to-r from-accent to-accent/70 animate-pulse delay-200"></div>
							<div class="absolute inset-0 h-4 w-4 rounded-full bg-accent animate-ping opacity-40 delay-200"></div>
						</div>
						<span class="font-bold text-base relative z-10">10x ROI proven</span>
					</div>
				</div>
				
				<div class="flex items-center gap-4 px-6 py-4 rounded-2xl bg-gradient-to-r from-white/90 to-white/80 backdrop-blur-xl border border-primary/20 text-primary group hover:scale-110 hover:-translate-y-2 transition-all duration-500 hover:shadow-2xl relative overflow-hidden">
					<div class="absolute inset-0 bg-gradient-to-r from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
					<div class="relative flex items-center gap-3">
						<div class="relative">
							<div class="h-4 w-4 rounded-full bg-gradient-to-r from-primary to-primary/70 animate-pulse delay-400"></div>
							<div class="absolute inset-0 h-4 w-4 rounded-full bg-primary animate-ping opacity-40 delay-400"></div>
						</div>
						<span class="font-bold text-base relative z-10">5-min setup</span>
					</div>
				</div>
				
				<div class="flex items-center gap-4 px-6 py-4 rounded-2xl bg-gradient-to-r from-white/90 to-white/80 backdrop-blur-xl border border-accent/20 text-accent group hover:scale-110 hover:-translate-y-2 transition-all duration-500 hover:shadow-2xl relative overflow-hidden">
					<div class="absolute inset-0 bg-gradient-to-r from-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
					<div class="relative flex items-center gap-3">
						<div class="relative">
							<div class="h-4 w-4 rounded-full bg-gradient-to-r from-accent to-accent/70 animate-pulse delay-600"></div>
							<div class="absolute inset-0 h-4 w-4 rounded-full bg-accent animate-ping opacity-40 delay-600"></div>
						</div>
						<span class="font-bold text-base relative z-10">Sequoia-backed</span>
					</div>
				</div>
			</div>
		</div>

		{#if callsToAction.length > 0}
			<div class="flex gap-6" data-enter>
				{#each callsToAction as ctaItem, index}
					<Button
						href={ctaItem.href}
						size="lg"
						variant={index % 2 === 0 ? "primary" : "secondary"}
						class="max-lg:hidden relative group overflow-hidden transform hover:scale-125 hover:-translate-y-3 transition-all duration-500 hover:shadow-2xl">
						{#snippet children()}
							<span class="relative z-10 font-bold text-lg px-2">{ctaItem.label}</span>
							{#if index % 2 === 0}
								<!-- Enhanced primary button effects -->
								<div class="absolute inset-0 bg-gradient-to-r from-primary via-accent to-primary opacity-0 group-hover:opacity-40 transition-opacity duration-500"></div>
								<div class="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
								<!-- Pulsing border -->
								<div class="absolute inset-0 rounded-lg border-2 border-primary/50 animate-pulse"></div>
							{:else}
								<!-- Enhanced secondary button effects -->
								<div class="absolute inset-0 bg-gradient-to-r from-primary/15 via-accent/15 to-primary/15 opacity-0 group-hover:opacity-70 transition-opacity duration-500"></div>
								<div class="absolute inset-0 bg-gradient-to-r from-transparent via-primary/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
							{/if}
						{/snippet}
					</Button>
					<Button
						href={ctaItem.href}
						size="md"
						variant={index % 2 === 0 ? "primary" : "secondary"}
						class="lg:hidden relative group overflow-hidden transform hover:scale-125 hover:-translate-y-3 transition-all duration-500 hover:shadow-2xl">
						{#snippet children()}
							<span class="relative z-10 font-bold">{ctaItem.label}</span>
							{#if index % 2 === 0}
								<div class="absolute inset-0 bg-gradient-to-r from-primary via-accent to-primary opacity-0 group-hover:opacity-40 transition-opacity duration-500"></div>
								<div class="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
								<div class="absolute inset-0 rounded-lg border-2 border-primary/50 animate-pulse"></div>
							{:else}
								<div class="absolute inset-0 bg-gradient-to-r from-primary/15 via-accent/15 to-primary/15 opacity-0 group-hover:opacity-70 transition-opacity duration-500"></div>
								<div class="absolute inset-0 bg-gradient-to-r from-transparent via-primary/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
							{/if}
						{/snippet}
					</Button>
				{/each}
			</div>
		{/if}
	</header>

	{#if imageSrc}
		<div class="col-span-full aspect-video relative overflow-hidden rounded-3xl group shadow-2xl border border-white/20" data-enter>
			<!-- Premium gradient overlays with depth -->
			<div class="absolute inset-0 bg-gradient-to-t from-background/40 via-transparent to-background/20 z-10"></div>
			<div class="absolute inset-0 bg-gradient-to-r from-primary/8 via-transparent to-accent/8 z-10"></div>
			<div class="absolute inset-0 bg-gradient-to-br from-transparent via-white/5 to-transparent z-10"></div>
			
			<img
				src={imageSrc}
				alt="Diverse construction workers celebrating success together"
				class="size-full object-cover transform group-hover:scale-115 transition-transform duration-1500 ease-out"
				onerror={handleImageError}
			/>
			
			<!-- Premium floating elements with enhanced design -->
			<div class="absolute top-10 left-10 bg-white/98 backdrop-blur-xl rounded-2xl px-6 py-4 text-base font-bold text-primary animate-bounce border border-primary/30 hover:scale-110 transition-transform duration-300 cursor-pointer group/card">
				<div class="flex items-center gap-3">
					<span class="text-2xl">💰</span>
					<span class="relative">
						Matched savings
						<div class="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary group-hover/card:w-full transition-all duration-300"></div>
					</span>
				</div>
			</div>
			
			<div class="absolute bottom-10 right-10 bg-white/98 backdrop-blur-xl rounded-2xl px-6 py-4 text-base font-bold text-accent animate-pulse border border-accent/30 hover:scale-110 transition-transform duration-300 cursor-pointer group/card">
				<div class="flex items-center gap-3">
					<span class="text-2xl">🏆</span>
					<span class="relative">
						Peer bonuses
						<div class="absolute -bottom-1 left-0 w-0 h-0.5 bg-accent group-hover/card:w-full transition-all duration-300"></div>
					</span>
				</div>
			</div>
			
			<!-- Enhanced floating stats with better positioning -->
			<div class="absolute top-1/2 left-10 bg-white/95 backdrop-blur-xl rounded-xl px-4 py-3 text-sm font-semibold text-primary/90 animate-pulse delay-500 border border-primary/20 hover:scale-105 transition-transform duration-300">
				<div class="flex items-center gap-2">
					<span class="h-3 w-3 rounded-full bg-primary animate-ping"></span>
					<span>KPI rewards</span>
				</div>
			</div>
			
			<div class="absolute bottom-1/3 left-1/2 transform -translate-x-1/2 bg-white/95 backdrop-blur-xl rounded-xl px-4 py-3 text-sm font-semibold text-accent/90 animate-bounce delay-700 border border-accent/20 hover:scale-105 transition-transform duration-300">
				<div class="flex items-center gap-2">
					<span class="text-lg">⚡</span>
					<span>5-min setup</span>
				</div>
			</div>
			
			<div class="absolute top-1/4 right-1/4 bg-white/95 backdrop-blur-xl rounded-xl px-4 py-3 text-sm font-semibold text-primary/90 animate-bounce delay-1000 border border-primary/20 hover:scale-105 transition-transform duration-300">
				<div class="flex items-center gap-2">
					<span class="text-lg">📈</span>
					<span>35% less turnover</span>
				</div>
			</div>
			
			<!-- Enhanced corner accents with gradients -->
			<div class="absolute top-0 left-0 w-24 h-24 bg-gradient-to-br from-primary/30 via-primary/10 to-transparent rounded-br-3xl"></div>
			<div class="absolute bottom-0 right-0 w-24 h-24 bg-gradient-to-tl from-accent/30 via-accent/10 to-transparent rounded-tl-3xl"></div>
			<div class="absolute top-0 right-0 w-20 h-20 bg-gradient-to-bl from-primary/20 via-accent/10 to-transparent rounded-bl-3xl"></div>
			<div class="absolute bottom-0 left-0 w-20 h-20 bg-gradient-to-tr from-accent/20 via-primary/10 to-transparent rounded-tr-3xl"></div>
			
			<!-- Subtle border glow effect -->
			<div class="absolute inset-0 rounded-3xl border-2 border-gradient-to-r from-primary/30 via-accent/30 to-primary/30 opacity-50 group-hover:opacity-100 transition-opacity duration-500"></div>
		</div>
	{/if}
</div>
