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
	<!-- Premium dynamic background elements -->
	<div class="absolute inset-0 opacity-50">
		<!-- Large floating orbs with sophisticated animations -->
		<div class="absolute top-10 left-10 h-40 w-40 rounded-full bg-gradient-to-br from-primary/40 to-accent/30 blur-2xl animate-pulse"></div>
		<div class="absolute top-32 right-20 h-32 w-32 rounded-full bg-gradient-to-br from-accent/35 to-primary/25 blur-xl animate-pulse delay-1000"></div>
		<div class="absolute bottom-20 left-1/3 h-36 w-36 rounded-full bg-gradient-to-br from-primary/30 to-accent/35 blur-2xl animate-pulse delay-500"></div>
		
		<!-- Medium floating elements with enhanced movement -->
		<div class="absolute top-1/2 left-1/4 h-20 w-20 rounded-full bg-primary/15 blur-lg animate-bounce delay-700"></div>
		<div class="absolute bottom-1/3 right-1/4 h-24 w-24 rounded-full bg-accent/20 blur-xl animate-bounce delay-300"></div>
		
		<!-- Additional premium floating elements -->
		<div class="absolute top-1/4 right-1/3 h-16 w-16 rounded-full bg-gradient-to-br from-primary/25 to-accent/15 blur-lg animate-pulse delay-1200"></div>
		<div class="absolute bottom-1/4 left-1/5 h-20 w-20 rounded-full bg-gradient-to-br from-accent/20 to-primary/20 blur-xl animate-bounce delay-900"></div>
		
		<!-- Sophisticated grid pattern with enhanced opacity -->
		<div class="absolute inset-0 opacity-25">
			<div class="h-full w-full bg-[linear-gradient(rgba(var(--primary-rgb),0.15)_1px,transparent_1px),linear-gradient(90deg,rgba(var(--primary-rgb),0.15)_1px,transparent_1px)] bg-[size:60px_60px] animate-pulse"></div>
		</div>
		
		<!-- Diagonal accent lines -->
		<div class="absolute inset-0 opacity-30">
			<div class="h-full w-full bg-[linear-gradient(45deg,rgba(var(--accent-rgb),0.1)_1px,transparent_1px)] bg-[size:80px_80px] animate-pulse delay-500"></div>
		</div>
	</div>
	
	<!-- Enhanced animated borders with multiple layers -->
	<div class="absolute inset-0 bg-gradient-to-r from-primary/25 via-transparent to-accent/25 opacity-60 animate-pulse"></div>
	<div class="absolute inset-0 bg-gradient-to-b from-transparent via-primary/10 to-transparent opacity-40 animate-pulse delay-700"></div>
	
	<!-- Subtle corner highlights -->
	<div class="absolute top-0 left-0 w-32 h-32 bg-gradient-to-br from-primary/20 via-primary/10 to-transparent rounded-br-full opacity-60"></div>
	<div class="absolute bottom-0 right-0 w-32 h-32 bg-gradient-to-tl from-accent/20 via-accent/10 to-transparent rounded-tl-full opacity-60"></div>

	<header
		class="relative section-px container mx-auto grid items-end gap-20 gap-y-12 py-20 pt-40 text-balance {centered ? 'place-items-center text-center' : 'xl:grid-cols-[1fr_auto]'}"
		data-enter-container
	>
		<div class="grid gap-8" class:max-w-prose={centered}>
			<!-- Premium badge with sophisticated animations -->
			<div class="inline-flex items-center gap-3 w-fit px-6 py-4 rounded-full bg-gradient-to-r from-primary/15 via-accent/10 to-primary/15 border border-primary/40 text-primary font-bold text-sm hover:scale-110 hover:-translate-y-1 transition-all duration-500 group relative overflow-hidden" data-enter>
				<!-- Animated background shimmer -->
				<div class="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
				
				<!-- Pulsing indicator with enhanced glow -->
				<div class="relative">
					<span class="h-3 w-3 rounded-full bg-gradient-to-r from-primary to-accent animate-ping"></span>
					<span class="absolute inset-0 h-3 w-3 rounded-full bg-gradient-to-r from-primary to-accent"></span>
				</div>
				
				<span class="relative z-10 font-bold">
					Now live: 10x ROI guaranteed
				</span>
				
				<!-- Enhanced emoji with animation -->
				<span class="text-base animate-bounce delay-300">🚀</span>
				
				<!-- Subtle inner glow -->
				<div class="absolute inset-1 rounded-full bg-gradient-to-r from-primary/5 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
			</div>

			<h1 class="text-display w-full relative group" data-enter>
				<span class="block relative overflow-hidden">
					<AnimateText text={title} />
					<!-- Premium multi-layer underline animation -->
					<div class="absolute -bottom-4 left-0 h-2 w-full bg-gradient-to-r from-primary via-accent to-primary rounded-full transform scale-x-0 animate-[scale-x_1.8s_ease-out_0.5s_forwards] origin-left"></div>
					<div class="absolute -bottom-4 left-0 h-2 w-full bg-gradient-to-r from-primary via-accent to-primary rounded-full transform scale-x-0 animate-[scale-x_1.8s_ease-out_0.5s_forwards] origin-left blur-md opacity-60"></div>
					<div class="absolute -bottom-4 left-0 h-2 w-full bg-gradient-to-r from-primary via-accent to-primary rounded-full transform scale-x-0 animate-[scale-x_1.8s_ease-out_0.5s_forwards] origin-left blur-lg opacity-30"></div>
					
					<!-- Sophisticated text glow effect -->
					<div class="absolute inset-0 bg-gradient-to-r from-primary/10 via-accent/10 to-primary/10 blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
				</span>
				{#if !centered}
					<span class="text-emphasis-dim block mt-8 relative group">
						<AnimateText text={subtitle} />
						<!-- Premium floating effects with enhanced animations -->
						<div class="absolute -top-4 -right-6 text-primary animate-pulse text-xl hover:scale-125 transition-transform duration-300 cursor-default">✨</div>
						<div class="absolute top-1/2 -left-6 text-accent animate-pulse delay-300 text-xl hover:scale-125 transition-transform duration-300 cursor-default">⚡</div>
						<div class="absolute bottom-2 right-1/4 text-primary/70 animate-pulse delay-600 text-lg hover:scale-125 transition-transform duration-300 cursor-default">💫</div>
						<div class="absolute top-1/4 right-1/3 text-accent/60 animate-pulse delay-900 text-base hover:scale-125 transition-transform duration-300 cursor-default">🌟</div>
						<div class="absolute bottom-1/3 left-1/4 text-primary/50 animate-pulse delay-1200 text-sm hover:scale-125 transition-transform duration-300 cursor-default">✨</div>
						
						<!-- Subtle background glow for subtitle -->
						<div class="absolute inset-0 bg-gradient-to-r from-transparent via-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-lg"></div>
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

			<!-- Premium stats with sophisticated visual hierarchy -->
			<div class="flex flex-wrap gap-10 text-sm font-bold" data-enter>
				<div class="flex items-center gap-4 text-primary group hover:scale-110 hover:-translate-y-1 transition-all duration-300 cursor-default">
					<div class="relative">
						<div class="h-4 w-4 rounded-full bg-gradient-to-r from-primary to-primary/70 animate-pulse"></div>
						<div class="absolute inset-0 h-4 w-4 rounded-full bg-primary animate-ping opacity-40"></div>
						<div class="absolute inset-0 h-4 w-4 rounded-full bg-primary/20 animate-ping opacity-20 scale-150"></div>
					</div>
					<span class="relative font-bold">
						35% less turnover
						<div class="absolute -bottom-1 left-0 w-0 h-1 bg-gradient-to-r from-primary to-primary/70 group-hover:w-full transition-all duration-500 rounded-full"></div>
						<div class="absolute -bottom-1 left-0 w-0 h-1 bg-primary/30 group-hover:w-full transition-all duration-500 rounded-full blur-sm"></div>
					</span>
				</div>
				<div class="flex items-center gap-4 text-accent group hover:scale-110 hover:-translate-y-1 transition-all duration-300 cursor-default">
					<div class="relative">
						<div class="h-4 w-4 rounded-full bg-gradient-to-r from-accent to-accent/70 animate-pulse delay-200"></div>
						<div class="absolute inset-0 h-4 w-4 rounded-full bg-accent animate-ping opacity-40 delay-200"></div>
						<div class="absolute inset-0 h-4 w-4 rounded-full bg-accent/20 animate-ping opacity-20 scale-150 delay-200"></div>
					</div>
					<span class="relative font-bold">
						10x ROI proven
						<div class="absolute -bottom-1 left-0 w-0 h-1 bg-gradient-to-r from-accent to-accent/70 group-hover:w-full transition-all duration-500 rounded-full"></div>
						<div class="absolute -bottom-1 left-0 w-0 h-1 bg-accent/30 group-hover:w-full transition-all duration-500 rounded-full blur-sm"></div>
					</span>
				</div>
				<div class="flex items-center gap-4 text-primary group hover:scale-110 hover:-translate-y-1 transition-all duration-300 cursor-default">
					<div class="relative">
						<div class="h-4 w-4 rounded-full bg-gradient-to-r from-primary to-primary/70 animate-pulse delay-400"></div>
						<div class="absolute inset-0 h-4 w-4 rounded-full bg-primary animate-ping opacity-40 delay-400"></div>
						<div class="absolute inset-0 h-4 w-4 rounded-full bg-primary/20 animate-ping opacity-20 scale-150 delay-400"></div>
					</div>
					<span class="relative font-bold">
						5-min setup
						<div class="absolute -bottom-1 left-0 w-0 h-1 bg-gradient-to-r from-primary to-primary/70 group-hover:w-full transition-all duration-500 rounded-full"></div>
						<div class="absolute -bottom-1 left-0 w-0 h-1 bg-primary/30 group-hover:w-full transition-all duration-500 rounded-full blur-sm"></div>
					</span>
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
						class="max-lg:hidden relative group overflow-hidden transform hover:scale-125 hover:-translate-y-2 transition-all duration-500">
						{#snippet children()}
							<span class="relative z-10 font-bold text-base">{ctaItem.label}</span>
							{#if index % 2 === 0}
								<!-- Enhanced primary button effects -->
								<div class="absolute inset-0 bg-gradient-to-r from-primary via-accent to-primary opacity-0 group-hover:opacity-40 transition-opacity duration-500"></div>
								<div class="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
								<!-- Pulsing border effect -->
								<div class="absolute inset-0 rounded-lg border-2 border-primary/0 group-hover:border-primary/50 transition-all duration-500"></div>
								<!-- Glow effect -->
								<div class="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-md -z-10 scale-110"></div>
							{:else}
								<!-- Enhanced secondary button effects -->
								<div class="absolute inset-0 bg-gradient-to-r from-primary/15 via-accent/15 to-primary/15 opacity-0 group-hover:opacity-70 transition-opacity duration-500"></div>
								<div class="absolute inset-0 bg-gradient-to-r from-transparent via-primary/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
								<!-- Subtle border glow -->
								<div class="absolute inset-0 rounded-lg border border-primary/0 group-hover:border-primary/30 transition-all duration-500"></div>
							{/if}
						{/snippet}
					</Button>
					<Button
						href={ctaItem.href}
						size="md"
						variant={index % 2 === 0 ? "primary" : "secondary"}
						class="lg:hidden relative group overflow-hidden transform hover:scale-125 hover:-translate-y-2 transition-all duration-500">
						{#snippet children()}
							<span class="relative z-10 font-bold">{ctaItem.label}</span>
							{#if index % 2 === 0}
								<div class="absolute inset-0 bg-gradient-to-r from-primary via-accent to-primary opacity-0 group-hover:opacity-40 transition-opacity duration-500"></div>
								<div class="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
								<div class="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-md -z-10 scale-110"></div>
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
		<div class="col-span-full aspect-video relative overflow-hidden rounded-3xl group" data-enter>
			<!-- Premium gradient overlays with enhanced depth -->
			<div class="absolute inset-0 bg-gradient-to-t from-background/40 via-transparent to-background/15 z-10"></div>
			<div class="absolute inset-0 bg-gradient-to-r from-primary/8 via-transparent to-accent/8 z-10"></div>
			<div class="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5 z-10"></div>
			
			<img
				src={imageSrc}
				alt="Diverse construction workers celebrating success together"
				class="size-full object-cover transform group-hover:scale-115 transition-transform duration-1500 ease-out"
				onerror={handleImageError}
			/>
			
			<!-- Premium floating elements with sophisticated animations -->
			<div class="absolute top-8 left-8 bg-white/98 backdrop-blur-xl rounded-2xl px-5 py-4 text-sm font-bold text-primary animate-bounce border border-primary/30 hover:scale-110 transition-transform duration-300 cursor-default">
				<div class="flex items-center gap-3">
					<div class="relative">
						<span class="text-xl">🚀</span>
						<div class="absolute inset-0 animate-ping text-xl opacity-30">🚀</div>
					</div>
					<span>Live results</span>
				</div>
			</div>
			
			<div class="absolute bottom-8 right-8 bg-white/98 backdrop-blur-xl rounded-2xl px-5 py-4 text-sm font-bold text-accent animate-pulse border border-accent/30 hover:scale-110 transition-transform duration-300 cursor-default">
				<div class="flex items-center gap-3">
					<div class="relative">
						<span class="text-xl">💰</span>
						<div class="absolute inset-0 animate-pulse text-xl opacity-40 delay-300">💰</div>
					</div>
					<span>Instant savings</span>
				</div>
			</div>
			
			<!-- Enhanced floating stats with premium styling -->
			<div class="absolute top-1/2 left-8 bg-white/95 backdrop-blur-xl rounded-xl px-4 py-3 text-xs font-bold text-primary/90 animate-pulse delay-500 border border-primary/20 hover:scale-105 transition-transform duration-300 cursor-default">
				<div class="flex items-center gap-2">
					<div class="relative">
						<span class="h-2.5 w-2.5 rounded-full bg-primary animate-ping block"></span>
						<span class="absolute inset-0 h-2.5 w-2.5 rounded-full bg-primary/60"></span>
					</div>
					<span>Real-time tracking</span>
				</div>
			</div>
			
			<div class="absolute bottom-1/3 left-1/2 transform -translate-x-1/2 bg-white/95 backdrop-blur-xl rounded-xl px-4 py-3 text-xs font-bold text-accent/90 animate-bounce delay-700 border border-accent/20 hover:scale-105 transition-transform duration-300 cursor-default">
				<div class="flex items-center gap-2">
					<span class="text-base animate-pulse">⚡</span>
					<span>Instant setup</span>
				</div>
			</div>
			
			<!-- Additional premium floating elements -->
			<div class="absolute top-1/4 right-1/4 bg-white/90 backdrop-blur-lg rounded-lg px-3 py-2 text-xs font-semibold text-primary/80 animate-pulse delay-1000 border border-primary/15 hover:scale-105 transition-transform duration-300 cursor-default">
				<div class="flex items-center gap-1">
					<span class="text-sm">📊</span>
					<span>Analytics</span>
				</div>
			</div>
			
			<div class="absolute bottom-1/2 right-8 bg-white/90 backdrop-blur-lg rounded-lg px-3 py-2 text-xs font-semibold text-accent/80 animate-bounce delay-1200 border border-accent/15 hover:scale-105 transition-transform duration-300 cursor-default">
				<div class="flex items-center gap-1">
					<span class="text-sm">🎯</span>
					<span>Goals</span>
				</div>
			</div>
			
			<!-- Enhanced corner accents with sophisticated gradients -->
			<div class="absolute top-0 left-0 w-24 h-24 bg-gradient-to-br from-primary/30 via-primary/15 to-transparent rounded-br-3xl opacity-80"></div>
			<div class="absolute bottom-0 right-0 w-24 h-24 bg-gradient-to-tl from-accent/30 via-accent/15 to-transparent rounded-tl-3xl opacity-80"></div>
			<div class="absolute top-0 right-0 w-20 h-20 bg-gradient-to-bl from-primary/20 via-accent/10 to-transparent rounded-bl-2xl opacity-60"></div>
			<div class="absolute bottom-0 left-0 w-20 h-20 bg-gradient-to-tr from-accent/20 via-primary/10 to-transparent rounded-tr-2xl opacity-60"></div>
			
			<!-- Subtle edge highlights -->
			<div class="absolute inset-0 rounded-3xl border border-primary/20 opacity-60"></div>
			<div class="absolute inset-2 rounded-2xl border border-accent/10 opacity-40"></div>
		</div>
	{/if}
</div>
