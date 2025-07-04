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

<div class="relative overflow-hidden bg-gradient-to-br from-primary/25 via-background to-secondary/20 min-h-screen flex items-center" {...rest}>
	<!-- Ultra-premium layered background with enhanced depth -->
	<div class="absolute inset-0 bg-gradient-to-br from-primary/20 via-transparent to-secondary/15"></div>
	<div class="absolute inset-0 bg-gradient-to-tl from-secondary/18 via-transparent to-primary/12"></div>
	<div class="absolute inset-0 bg-gradient-to-r from-transparent via-primary/8 to-transparent"></div>
	<div class="absolute inset-0 bg-gradient-to-b from-transparent via-secondary/6 to-transparent"></div>
	<div class="absolute inset-0 bg-gradient-to-tr from-primary/10 via-transparent to-secondary/8"></div>
	
	<!-- Ultra-premium starfield with sophisticated star shapes -->
	<div class="absolute inset-0 overflow-hidden">
		<!-- Dynamic starfield background -->
		<div class="starfield-container">
			<!-- Large premium stars -->
			<div class="absolute top-20 left-10 star-shape star-xl animate-twinkle">
				<div class="star-inner bg-gradient-to-r from-primary via-accent to-primary"></div>
				<div class="star-glow bg-primary/40"></div>
			</div>
			<div class="absolute bottom-32 right-16 star-shape star-large animate-twinkle delay-1000">
				<div class="star-inner bg-gradient-to-r from-accent via-primary to-accent"></div>
				<div class="star-glow bg-accent/40"></div>
			</div>
			<div class="absolute top-1/2 left-1/4 star-shape star-medium animate-twinkle delay-500">
				<div class="star-inner bg-gradient-to-r from-primary via-accent to-primary"></div>
				<div class="star-glow bg-primary/30"></div>
			</div>
			<div class="absolute top-1/3 right-1/3 star-shape star-large animate-twinkle delay-700">
				<div class="star-inner bg-gradient-to-r from-accent via-primary to-accent"></div>
				<div class="star-glow bg-accent/35"></div>
			</div>
			<div class="absolute bottom-1/4 left-1/3 star-shape star-small animate-twinkle delay-300">
				<div class="star-inner bg-gradient-to-r from-primary via-accent to-primary"></div>
				<div class="star-glow bg-primary/25"></div>
			</div>
			<div class="absolute top-10 right-1/4 star-shape star-xl animate-twinkle delay-800">
				<div class="star-inner bg-gradient-to-r from-accent via-primary to-accent"></div>
				<div class="star-glow bg-accent/45"></div>
			</div>
			<div class="absolute bottom-10 left-1/2 star-shape star-medium animate-twinkle delay-1200">
				<div class="star-inner bg-gradient-to-r from-primary via-accent to-primary"></div>
				<div class="star-glow bg-primary/30"></div>
			</div>
			
			<!-- Additional scattered small stars -->
			<div class="absolute top-16 right-20 star-shape star-tiny animate-twinkle delay-200">
				<div class="star-inner bg-gradient-to-r from-primary to-accent"></div>
			</div>
			<div class="absolute bottom-20 left-20 star-shape star-tiny animate-twinkle delay-600">
				<div class="star-inner bg-gradient-to-r from-accent to-primary"></div>
			</div>
			<div class="absolute top-40 left-1/2 star-shape star-tiny animate-twinkle delay-900">
				<div class="star-inner bg-gradient-to-r from-primary to-accent"></div>
			</div>
			<div class="absolute bottom-40 right-1/3 star-shape star-tiny animate-twinkle delay-1100">
				<div class="star-inner bg-gradient-to-r from-accent to-primary"></div>
			</div>
			<div class="absolute top-60 right-10 star-shape star-tiny animate-twinkle delay-400">
				<div class="star-inner bg-gradient-to-r from-primary to-accent"></div>
			</div>
			<div class="absolute bottom-60 left-10 star-shape star-tiny animate-twinkle delay-1400">
				<div class="star-inner bg-gradient-to-r from-accent to-primary"></div>
			</div>
		</div>
		
		<!-- Shooting stars -->
		<div class="shooting-star shooting-star-1"></div>
		<div class="shooting-star shooting-star-2"></div>
		<div class="shooting-star shooting-star-3"></div>
	</div>
	
	<!-- Ultra-sophisticated animated grid pattern overlay with multiple layers -->
	<div class="absolute inset-0 opacity-[0.04]" style="background-image: radial-gradient(circle at 1px 1px, rgba(var(--color-primary-600),0.5) 1px, transparent 0); background-size: 40px 40px; animation: float 20s ease-in-out infinite;"></div>
	<div class="absolute inset-0 opacity-[0.03]" style="background-image: radial-gradient(circle at 1px 1px, rgba(var(--color-secondary-600),0.4) 1px, transparent 0); background-size: 60px 60px; animation: float 25s ease-in-out infinite reverse;"></div>
	<div class="absolute inset-0 opacity-[0.02]" style="background-image: radial-gradient(circle at 1px 1px, rgba(var(--color-primary-500),0.3) 1px, transparent 0); background-size: 80px 80px; animation: float 30s ease-in-out infinite;"></div>

	<header
		class="relative section-px container mx-auto grid items-center gap-16 gap-y-12 py-20 text-balance {centered ? 'place-items-center text-center' : 'xl:grid-cols-[1fr_auto]'}"
		data-enter-container
	>
		<div class="grid gap-10" class:max-w-prose={centered}>
			<!-- Ultra-premium badge with sophisticated design -->
			<div class="inline-flex items-center gap-4 w-fit px-10 py-6 rounded-full bg-gradient-to-r from-white/99 via-white/97 to-white/99 backdrop-blur-xl border-2 border-primary/40 text-primary font-bold text-sm hover:scale-125 hover:-translate-y-2 transition-all duration-700 group relative overflow-hidden cursor-pointer" data-enter>
				<!-- Multiple sophisticated animated background layers -->
				<div class="absolute inset-0 bg-gradient-to-r from-primary/10 via-accent/10 to-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
				<div class="absolute inset-0 bg-gradient-to-r from-accent/6 via-primary/6 to-accent/6 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-200"></div>
				<div class="absolute inset-0 bg-gradient-to-45deg from-primary/4 via-transparent to-accent/4 opacity-0 group-hover:opacity-100 transition-opacity duration-800 delay-100"></div>
				
				<span class="relative flex items-center gap-2">
					<span class="h-5 w-5 rounded-full bg-gradient-to-r from-primary via-accent to-primary animate-ping"></span>
					<span class="h-5 w-5 rounded-full bg-gradient-to-r from-primary via-accent to-primary absolute"></span>
					<span class="h-3 w-3 rounded-full bg-gradient-to-r from-accent via-primary to-accent absolute animate-ping delay-300"></span>
					<span class="h-2 w-2 rounded-full bg-white absolute animate-ping delay-600"></span>
				</span>
				<span class="relative z-10 bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent font-extrabold text-lg tracking-wide">
					Backed by Sequoia • 10x ROI proven
				</span>
				<span class="text-2xl relative z-10 animate-bounce group-hover:animate-spin transition-all duration-500">🚀</span>
				
				<!-- Enhanced multi-layer shimmer effects -->
				<div class="absolute inset-0 bg-gradient-to-r from-transparent via-white/50 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1200"></div>
				<div class="absolute inset-0 bg-gradient-to-r from-transparent via-primary/25 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 delay-300"></div>
				<div class="absolute inset-0 bg-gradient-to-r from-transparent via-accent/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-800 delay-600"></div>
				
				<!-- Enhanced pulsing border with gradient -->
				<div class="absolute inset-0 rounded-full border-2 border-gradient-to-r from-primary/50 via-accent/50 to-primary/50 animate-pulse"></div>
				<div class="absolute inset-0 rounded-full border border-primary/30 animate-pulse delay-500"></div>
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
						<!-- Ultra-premium animated star elements -->
						<div class="absolute -top-4 -right-6 animate-bounce">
							<div class="star-shape star-large text-primary animate-pulse">
								<div class="star-inner bg-gradient-to-r from-primary via-accent to-primary"></div>
								<div class="star-glow bg-primary/30"></div>
							</div>
						</div>
						<div class="absolute top-1/2 -left-6 animate-bounce delay-300">
							<div class="star-shape star-medium text-accent animate-pulse delay-200">
								<div class="star-inner bg-gradient-to-r from-accent via-primary to-accent"></div>
								<div class="star-glow bg-accent/30"></div>
							</div>
						</div>
						<div class="absolute bottom-0 right-1/4 animate-bounce delay-600">
							<div class="star-shape star-small text-primary/70 animate-pulse delay-400">
								<div class="star-inner bg-gradient-to-r from-primary/70 via-accent/70 to-primary/70"></div>
								<div class="star-glow bg-primary/20"></div>
							</div>
						</div>
						<div class="absolute top-0 left-1/3 animate-bounce delay-900">
							<div class="star-shape star-medium text-accent/60 animate-pulse delay-600">
								<div class="star-inner bg-gradient-to-r from-accent/60 via-primary/60 to-accent/60"></div>
								<div class="star-glow bg-accent/20"></div>
							</div>
						</div>
					</span>
				{/if}
			</h1>

			{#if centered}
				<div
					data-enter
					class="text-muted-foreground text-headline mx-auto block max-w-[45ch] transition duration-500 ease-out relative text-xl leading-relaxed"
				>
					{subtitle}
					<div class="absolute -top-3 -right-3 animate-bounce">
						<div class="star-shape star-large text-primary animate-pulse">
							<div class="star-inner bg-gradient-to-r from-primary via-accent to-primary"></div>
							<div class="star-glow bg-primary/30"></div>
						</div>
					</div>
					<div class="absolute bottom-0 -left-3 animate-bounce delay-500">
						<div class="star-shape star-medium text-accent animate-pulse delay-300">
							<div class="star-inner bg-gradient-to-r from-accent via-primary to-accent"></div>
							<div class="star-glow bg-accent/30"></div>
						</div>
					</div>
				</div>
			{/if}

			<!-- Ultra-premium stats cards with sophisticated design -->
			<div class="flex flex-wrap gap-8" data-enter>
				<div class="flex items-center gap-5 px-8 py-6 rounded-3xl bg-gradient-to-r from-white/95 via-white/90 to-white/95 backdrop-blur-xl border-2 border-primary/30 text-primary group hover:scale-125 hover:-translate-y-3 transition-all duration-700 relative overflow-hidden cursor-pointer">
					<div class="absolute inset-0 bg-gradient-to-r from-primary/8 via-primary/4 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
					<div class="absolute inset-0 bg-gradient-to-br from-primary/3 via-transparent to-accent/3 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-200"></div>
					<div class="relative flex items-center gap-4">
						<div class="relative">
							<div class="h-6 w-6 rounded-full bg-gradient-to-r from-primary via-primary/80 to-primary animate-pulse"></div>
							<div class="absolute inset-0 h-6 w-6 rounded-full bg-primary animate-ping opacity-50"></div>
							<div class="absolute inset-1 h-4 w-4 rounded-full bg-white animate-ping opacity-70 delay-300"></div>
						</div>
						<span class="font-extrabold text-lg relative z-10 tracking-wide">35% less turnover</span>
					</div>
					<div class="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
				</div>
				
				<div class="flex items-center gap-5 px-8 py-6 rounded-3xl bg-gradient-to-r from-white/95 via-white/90 to-white/95 backdrop-blur-xl border-2 border-accent/30 text-accent group hover:scale-125 hover:-translate-y-3 transition-all duration-700 relative overflow-hidden cursor-pointer">
					<div class="absolute inset-0 bg-gradient-to-r from-accent/8 via-accent/4 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
					<div class="absolute inset-0 bg-gradient-to-br from-accent/3 via-transparent to-primary/3 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-200"></div>
					<div class="relative flex items-center gap-4">
						<div class="relative">
							<div class="h-6 w-6 rounded-full bg-gradient-to-r from-accent via-accent/80 to-accent animate-pulse delay-200"></div>
							<div class="absolute inset-0 h-6 w-6 rounded-full bg-accent animate-ping opacity-50 delay-200"></div>
							<div class="absolute inset-1 h-4 w-4 rounded-full bg-white animate-ping opacity-70 delay-500"></div>
						</div>
						<span class="font-extrabold text-lg relative z-10 tracking-wide">10x ROI proven</span>
					</div>
					<div class="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 delay-200"></div>
				</div>
				
				<div class="flex items-center gap-5 px-8 py-6 rounded-3xl bg-gradient-to-r from-white/95 via-white/90 to-white/95 backdrop-blur-xl border-2 border-primary/30 text-primary group hover:scale-125 hover:-translate-y-3 transition-all duration-700 relative overflow-hidden cursor-pointer">
					<div class="absolute inset-0 bg-gradient-to-r from-primary/8 via-primary/4 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
					<div class="absolute inset-0 bg-gradient-to-br from-primary/3 via-transparent to-accent/3 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-200"></div>
					<div class="relative flex items-center gap-4">
						<div class="relative">
							<div class="h-6 w-6 rounded-full bg-gradient-to-r from-primary via-primary/80 to-primary animate-pulse delay-400"></div>
							<div class="absolute inset-0 h-6 w-6 rounded-full bg-primary animate-ping opacity-50 delay-400"></div>
							<div class="absolute inset-1 h-4 w-4 rounded-full bg-white animate-ping opacity-70 delay-700"></div>
						</div>
						<span class="font-extrabold text-lg relative z-10 tracking-wide">5-min setup</span>
					</div>
					<div class="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 delay-400"></div>
				</div>
				
				<div class="flex items-center gap-5 px-8 py-6 rounded-3xl bg-gradient-to-r from-white/95 via-white/90 to-white/95 backdrop-blur-xl border-2 border-accent/30 text-accent group hover:scale-125 hover:-translate-y-3 transition-all duration-700 relative overflow-hidden cursor-pointer">
					<div class="absolute inset-0 bg-gradient-to-r from-accent/8 via-accent/4 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
					<div class="absolute inset-0 bg-gradient-to-br from-accent/3 via-transparent to-primary/3 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-200"></div>
					<div class="relative flex items-center gap-4">
						<div class="relative">
							<div class="h-6 w-6 rounded-full bg-gradient-to-r from-accent via-accent/80 to-accent animate-pulse delay-600"></div>
							<div class="absolute inset-0 h-6 w-6 rounded-full bg-accent animate-ping opacity-50 delay-600"></div>
							<div class="absolute inset-1 h-4 w-4 rounded-full bg-white animate-ping opacity-70 delay-900"></div>
						</div>
						<span class="font-extrabold text-lg relative z-10 tracking-wide">Sequoia-backed</span>
					</div>
					<div class="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 delay-600"></div>
				</div>
			</div>
		</div>

		{#if callsToAction.length > 0}
			<div class="flex gap-6 justify-center" data-enter>
				{#each callsToAction as ctaItem, index}
					<Button
						href={ctaItem.href}
						size="lg"
						variant={index % 2 === 0 ? "primary" : "secondary"}
						class="max-lg:hidden relative group overflow-hidden transform hover:scale-125 hover:-translate-y-4 transition-all duration-700 hover:rotate-1">
						{#snippet children()}
							<span class="relative z-10 font-extrabold text-xl px-4 py-1 tracking-wide">{ctaItem.label}</span>
							{#if index % 2 === 0}
								<!-- Ultra-premium primary button effects -->
								<div class="absolute inset-0 bg-gradient-to-r from-primary via-accent to-primary opacity-0 group-hover:opacity-50 transition-opacity duration-700"></div>
								<div class="absolute inset-0 bg-gradient-to-br from-primary/20 via-accent/20 to-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-200"></div>
								<div class="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1200"></div>
								<div class="absolute inset-0 bg-gradient-to-r from-transparent via-accent/30 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 delay-300"></div>
								<!-- Enhanced pulsing border with multiple layers -->
								<div class="absolute inset-0 rounded-lg border-2 border-primary/60 animate-pulse"></div>
								<div class="absolute inset-0 rounded-lg border border-accent/40 animate-pulse delay-300"></div>
								<!-- Glow effect -->
								<div class="absolute -inset-1 bg-gradient-to-r from-primary/30 via-accent/30 to-primary/30 rounded-lg blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
							{:else}
								<!-- Ultra-premium secondary button effects -->
								<div class="absolute inset-0 bg-gradient-to-r from-primary/20 via-accent/20 to-primary/20 opacity-0 group-hover:opacity-80 transition-opacity duration-700"></div>
								<div class="absolute inset-0 bg-gradient-to-br from-accent/15 via-primary/15 to-accent/15 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-200"></div>
								<div class="absolute inset-0 bg-gradient-to-r from-transparent via-primary/25 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1200"></div>
								<div class="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 delay-300"></div>
								<!-- Enhanced border effects -->
								<div class="absolute inset-0 rounded-lg border-2 border-primary/40 animate-pulse"></div>
								<div class="absolute inset-0 rounded-lg border border-accent/30 animate-pulse delay-500"></div>
							{/if}
						{/snippet}
					</Button>
					<Button
						href={ctaItem.href}
						size="md"
						variant={index % 2 === 0 ? "primary" : "secondary"}
						class="lg:hidden relative group overflow-hidden transform hover:scale-125 hover:-translate-y-4 transition-all duration-700 hover:rotate-1">
						{#snippet children()}
							<span class="relative z-10 font-extrabold text-lg px-2 tracking-wide">{ctaItem.label}</span>
							{#if index % 2 === 0}
								<div class="absolute inset-0 bg-gradient-to-r from-primary via-accent to-primary opacity-0 group-hover:opacity-50 transition-opacity duration-700"></div>
								<div class="absolute inset-0 bg-gradient-to-br from-primary/20 via-accent/20 to-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-200"></div>
								<div class="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1200"></div>
								<div class="absolute inset-0 rounded-lg border-2 border-primary/60 animate-pulse"></div>
								<div class="absolute -inset-1 bg-gradient-to-r from-primary/30 via-accent/30 to-primary/30 rounded-lg blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
							{:else}
								<div class="absolute inset-0 bg-gradient-to-r from-primary/20 via-accent/20 to-primary/20 opacity-0 group-hover:opacity-80 transition-opacity duration-700"></div>
								<div class="absolute inset-0 bg-gradient-to-r from-transparent via-primary/25 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1200"></div>
								<div class="absolute inset-0 rounded-lg border-2 border-primary/40 animate-pulse"></div>
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
