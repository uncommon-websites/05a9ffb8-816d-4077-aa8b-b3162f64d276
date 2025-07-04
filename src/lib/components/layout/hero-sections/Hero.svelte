<!--
    @component
    Apple-inspired minimal hero with pristine typography and generous white space.

    Usage:
    ```html
    <Hero
      title="Bold Claim"
      subtitle="Quick Value"
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
    - `callsToAction`: CTA buttons array (max two: primary, secondary)
-->

<script lang="ts">
	// Components
	import Button from "$lib/components/ui/Button.svelte";

	// Constants
	import { cta } from "$lib/navigation";

	// Types
	type Props = {
		title: string;
		subtitle: string;
		callsToAction?: Array<{
			href: string;
			label: string;
		}>;
	};

	let {
		title,
		subtitle,
		callsToAction = [cta],
		...rest
	}: Props = $props();
</script>

<!-- Apple-inspired minimal hero with pristine white background -->
<div class="relative min-h-screen flex items-center justify-center bg-white" {...rest}>
	<!-- Ultra-minimal container with perfect centering -->
	<div class="section-px container mx-auto max-w-4xl text-center">
		<!-- Main content with generous spacing -->
		<div class="space-y-16">
			<!-- Hero headline with Apple-perfect typography -->
			<div class="space-y-8">
				<h1 class="text-display font-[350] leading-[1.05] tracking-[-0.025em] text-gray-900 max-w-3xl mx-auto">
					{title}
				</h1>
				
				<!-- Subtitle with perfect spacing and color -->
				<p class="text-title3 font-[400] leading-[1.4] tracking-[-0.01em] text-gray-600 max-w-2xl mx-auto">
					{subtitle}
				</p>
			</div>

			<!-- Call-to-action buttons with Apple spacing -->
			{#if callsToAction.length > 0}
				<div class="flex flex-col sm:flex-row gap-4 justify-center items-center">
					{#each callsToAction as ctaItem, index}
						<Button
							href={ctaItem.href}
							size="lg"
							variant={index % 2 === 0 ? "primary" : "secondary"}
							class="min-w-48 font-[500] tracking-[-0.01em] transition-all duration-200 hover:scale-[1.02] active:scale-[0.98]">
							{#snippet children()}
								{ctaItem.label}
							{/snippet}
						</Button>
					{/each}
				</div>
			{/if}

			<!-- Minimal trust indicators with Apple-style subtlety -->
			<div class="flex flex-wrap justify-center items-center gap-x-12 gap-y-6 text-sm font-[500] text-gray-500 tracking-[-0.005em]">
				<div class="flex items-center gap-2">
					<div class="w-2 h-2 bg-green-500 rounded-full"></div>
					<span>35% less turnover</span>
				</div>
				<div class="flex items-center gap-2">
					<div class="w-2 h-2 bg-blue-500 rounded-full"></div>
					<span>10x ROI proven</span>
				</div>
				<div class="flex items-center gap-2">
					<div class="w-2 h-2 bg-purple-500 rounded-full"></div>
					<span>Sequoia-backed</span>
				</div>
			</div>
		</div>
	</div>
</div>
