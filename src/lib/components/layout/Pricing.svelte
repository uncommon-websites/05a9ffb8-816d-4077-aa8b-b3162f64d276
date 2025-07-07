<!--
@component Pricing

Please update features according to the company's product offering. Do not remove this comment.
-->
<script lang="ts">
	// Types
	type PricingTier = {
		name: string;
		monthlyPrice?: number | null;
		yearlyPrice?: number | null;
		description: string;
		features: string[];
		cta: {
			label: string;
			href: string;
		};
		highlight?: boolean;
	};

	type PricingFeature = {
		name: string;
		tiers: {
			[key: string]: boolean | string;
		};
	};

	// Components
	import Button from "$lib/components/ui/Button.svelte";
	import SectionHeader from "./SectionHeader.svelte";
	import Icon from "$lib/components/ui/Icon.svelte";
	import NumberFlow from "@number-flow/svelte";
	import LogoScroller from "./LogoScroller.svelte";

	// Props
	const {
		title = "Financial wellness that works",
		subtitle = "Empower your essential workers with personalized benefits that drive retention and engagement",
		tierNames = ["Starter", "Professional", "Enterprise"],
		features = [
			{
				name: "Matched savings goals",
				tiers: {
					Starter: "Up to $500",
					Professional: "Up to $2,000",
					Enterprise: "Unlimited"
				}
			},
			{
				name: "Employee count",
				tiers: {
					Starter: "Up to 50",
					Professional: "Up to 300",
					Enterprise: "Unlimited"
				}
			},
			{
				name: "Peer bonuses",
				tiers: {
					Starter: true,
					Professional: true,
					Enterprise: true
				}
			},
			{
				name: "KPI rewards",
				tiers: {
					Starter: "Basic",
					Professional: "Advanced",
					Enterprise: "Custom"
				}
			},
			{
				name: "Pulse surveys",
				tiers: {
					Starter: "Monthly",
					Professional: "Weekly",
					Enterprise: "Real-time"
				}
			},
			{
				name: "Churn alerts",
				tiers: {
					Starter: false,
					Professional: true,
					Enterprise: true
				}
			},
			{
				name: "Analytics dashboard",
				tiers: {
					Starter: "Basic",
					Professional: "Advanced",
					Enterprise: "Custom"
				}
			},
			{
				name: "Dedicated success manager",
				tiers: {
					Starter: false,
					Professional: false,
					Enterprise: true
				}
			},
			{
				name: "Custom integrations",
				tiers: {
					Starter: false,
					Professional: "Limited",
					Enterprise: "Unlimited"
				}
			}
		],
		tiers = [
			{
				name: "Starter",
				monthlyPrice: 4.99,
				yearlyPrice: 3.99,
				description: "Perfect for small teams getting started with financial wellness",
				features: [
					"Up to 50 employees",
					"Matched savings up to $500",
					"Basic peer bonuses",
					"Monthly pulse surveys",
					"Basic analytics dashboard",
					"Email support"
				],
				cta: {
					label: "Start free trial",
					href: "/signup?plan=starter"
				}
			},
			{
				name: "Professional",
				monthlyPrice: 12.99,
				yearlyPrice: 9.99,
				description: "For growing companies serious about employee retention",
				features: [
					"Up to 300 employees",
					"Matched savings up to $2,000",
					"Advanced KPI rewards",
					"Weekly pulse surveys",
					"Churn prediction alerts",
					"Advanced analytics",
					"Priority support"
				],
				cta: {
					label: "Start free trial",
					href: "/signup?plan=professional"
				},
				highlight: true
			},
			{
				name: "Enterprise",
				monthlyPrice: null,
				yearlyPrice: null,
				description: "Custom solutions for large organizations with complex needs",
				features: [
					"Unlimited employees",
					"Unlimited matched savings",
					"Custom KPI frameworks",
					"Real-time engagement tracking",
					"Dedicated success manager",
					"Custom integrations",
					"White-label options"
				],
				cta: {
					label: "Contact sales",
					href: "/contact"
				}
			}
		]
	}: {
		title?: string;
		subtitle?: string;
		tiers?: PricingTier[];
		features?: PricingFeature[];
		tierNames?: string[];
		caption?: string;
	} = $props();

	// State
	let annual = $state(true);
	let hoveredCard = $state<string | null>(null);
</script>

<section class="section-py section-px container mx-auto relative overflow-hidden">
	<!-- Enhanced premium background elements -->
	<div class="absolute inset-0 bg-gradient-to-br from-primary-50/40 via-transparent to-secondary-50/30 pointer-events-none"></div>
	<div class="absolute top-1/3 left-1/3 w-[32rem] h-[32rem] bg-gradient-to-br from-primary-100/30 to-primary-200/20 rounded-full blur-3xl pointer-events-none animate-pulse"></div>
	<div class="absolute bottom-1/3 right-1/3 w-[28rem] h-[28rem] bg-gradient-to-br from-secondary-100/30 to-secondary-200/20 rounded-full blur-3xl pointer-events-none animate-pulse" style="animation-delay: 3s;"></div>
	<div class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[40rem] h-[40rem] bg-gradient-to-br from-primary-50/20 to-secondary-50/20 rounded-full blur-[100px] pointer-events-none animate-pulse" style="animation-delay: 1.5s;"></div>
	
	<div class="relative z-10">
		<div class="flex flex-col items-center text-center section-mb-sm">
			<SectionHeader {title} {subtitle} />
			
			<!-- Enhanced billing toggle with premium styling -->
			<div class="mt-12 flex justify-center">
				<div class="relative inline-flex items-center bg-white/90 backdrop-blur-md border border-gray-200/80 rounded-2xl p-1.5 gap-1">
					<!-- Enhanced sliding background indicator -->
					<div 
						class="absolute inset-y-1.5 w-[calc(50%-0.1875rem)] bg-gradient-to-r from-primary-500 via-primary-600 to-primary-700 rounded-xl transition-all duration-500 ease-out"
						style="transform: translateX({annual ? 'calc(100% + 0.375rem)' : '0'}); box-shadow: 0 4px 12px -2px rgba(var(--color-primary-500), 0.3);"
					></div>
					
					<button
						class="relative z-10 rounded-xl px-7 py-3.5 text-sm font-semibold transition-all duration-500 ease-out {!annual ? 'text-white transform scale-105' : 'text-gray-700 hover:text-gray-900 hover:scale-105'}"
						onclick={() => (annual = false)}
					>
						Monthly
					</button>
					<button
						class="relative z-10 rounded-xl px-7 py-3.5 text-sm font-semibold transition-all duration-500 ease-out {annual ? 'text-white transform scale-105' : 'text-gray-700 hover:text-gray-900 hover:scale-105'}"
						onclick={() => (annual = true)}
					>
						Annual 
						<span class="ml-2 inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium bg-gradient-to-r from-green-100 to-green-50 text-green-800 border border-green-200">
							Save 23%
						</span>
					</button>
				</div>
			</div>
		</div>
	</div>

	<div class="relative z-10 grid gap-8 md:grid-cols-2 lg:grid-cols-3 max-w-7xl mx-auto">
		{#each tiers as tier, index}
			<div
				class={[
					"group relative flex flex-col rounded-3xl bg-white/90 backdrop-blur-md border transition-all duration-700 ease-out hover:scale-[1.02] hover:-translate-y-2",
					tier.highlight ? "border-primary-300/80 ring-4 ring-primary-100/60 transform scale-[1.02] -translate-y-1" : "border-gray-200/70 hover:border-primary-200/80",
					"hover:bg-white/95"
				]}
				role="button"
				tabindex="0"
				onmouseenter={() => hoveredCard = tier.name}
				onmouseleave={() => hoveredCard = null}
			>
				<!-- Enhanced premium gradient overlay for highlighted tier -->
				{#if tier.highlight}
					<div class="absolute inset-0 bg-gradient-to-br from-primary-50/60 via-white/60 to-secondary-50/40 rounded-3xl pointer-events-none"></div>
					<!-- Enhanced popular badge -->
					<div class="absolute -top-5 left-1/2 transform -translate-x-1/2 z-20">
						<div class="bg-gradient-to-r from-primary-500 via-primary-600 to-primary-700 text-white px-8 py-3 rounded-full text-sm font-semibold border-2 border-white/20 backdrop-blur-sm">
							<span class="relative z-10">Most Popular</span>
							<div class="absolute inset-0 bg-gradient-to-r from-primary-400/20 to-primary-800/20 rounded-full blur-sm"></div>
						</div>
					</div>
				{/if}
				
				<!-- Enhanced hover glow effect -->
				<div class="absolute inset-0 rounded-3xl bg-gradient-to-br from-primary-100/0 to-secondary-100/0 transition-all duration-700 group-hover:from-primary-100/30 group-hover:to-secondary-100/20 pointer-events-none"></div>
				<div class="absolute inset-0 rounded-3xl border border-transparent bg-gradient-to-br from-primary-200/0 to-secondary-200/0 transition-all duration-700 group-hover:from-primary-200/20 group-hover:to-secondary-200/15 pointer-events-none"></div>
				
				<div class="relative z-10 p-10 flex flex-col h-full">
					<!-- Enhanced header -->
					<div class="mb-10">
						<div class="flex items-center justify-between mb-6">
							<h3 class="text-title3 font-semibold text-gray-900 tracking-tight">{tier.name}</h3>
							{#if hoveredCard === tier.name || tier.highlight}
								<div class="w-8 h-8 bg-gradient-to-br from-primary-500 to-primary-600 rounded-full flex items-center justify-center transition-all duration-500 transform scale-110">
									<Icon name="check" class="w-5 h-5 text-white" />
								</div>
							{/if}
						</div>
						
						<!-- Enhanced pricing with better animation -->
						<div class="flex flex-col gap-3 mb-6">
							{#if tier.monthlyPrice === null && tier.yearlyPrice === null}
								<div class="flex items-baseline">
									<span class="text-display font-bold text-gray-900 tracking-tight">Custom</span>
								</div>
								<p class="text-caption text-gray-500">Contact us for pricing</p>
							{:else}
								<div class="flex items-baseline gap-1">
									<span class="text-lg text-gray-500 font-medium">$</span>
									<NumberFlow
										class="text-display font-bold text-gray-900 tracking-tight"
										format={{
											style: "decimal",
											minimumFractionDigits: 0,
											maximumFractionDigits: 2
										}}
										value={annual ? tier.yearlyPrice : tier.monthlyPrice}
									/>
									<span class="text-callout text-gray-500 ml-1">per employee</span>
								</div>
								<div class="flex flex-col gap-1">
									<span class="text-caption text-gray-500">billed {annual ? 'annually' : 'monthly'}</span>
									{#if annual && tier.monthlyPrice && tier.yearlyPrice}
										<div class="inline-flex items-center gap-2">
											<span class="text-sm text-green-700 font-semibold bg-gradient-to-r from-green-50 to-green-100 px-3 py-1 rounded-full border border-green-200">
												Save ${((tier.monthlyPrice - tier.yearlyPrice) * 12).toFixed(0)}/year per employee
											</span>
										</div>
									{/if}
								</div>
							{/if}
						</div>
						
						<p class="text-callout text-gray-600 leading-relaxed">
							{tier.description}
						</p>
					</div>

					<!-- Features with enhanced styling -->
					<div class="mb-8 flex-grow">
						<div class="space-y-4">
							{#each tier.features as feature, featureIndex}
								<div 
									class="flex items-start gap-3 group/feature transition-all duration-300 hover:translate-x-1"
									style="animation-delay: {featureIndex * 100}ms"
								>
									<div class="flex-shrink-0 w-6 h-6 bg-gradient-to-br from-primary-500 to-primary-600 rounded-full flex items-center justify-center mt-0.5">
										<Icon name="check" class="w-4 h-4 text-white" />
									</div>
									<span class="text-body text-gray-700 group-hover:text-gray-900 transition-colors duration-200">
										{feature}
									</span>
								</div>
							{/each}
						</div>
					</div>

					<!-- CTA Button with enhanced styling -->
					<div class="mt-auto">
						<Button
							href={tier.cta.href}
							variant={tier.highlight ? "primary" : "secondary"}
							class={[
								"w-full py-4 text-base font-semibold transition-all duration-300",
								tier.highlight ? "bg-gradient-to-r from-primary-500 to-primary-600 hover:from-primary-600 hover:to-primary-700 transform hover:scale-105" : "hover:scale-105"
							]}
						>
							{tier.cta.label}
							<Icon name="arrow-right" class="w-4 h-4 ml-2 transition-transform duration-300 group-hover:translate-x-1" />
						</Button>
						
						{#if tier.name !== "Enterprise"}
							<p class="text-center text-sm text-gray-500 mt-3">
								Start your 14-day free trial
							</p>
						{/if}
					</div>
				</div>
			</div>
		{/each}
	</div>
	<!-- Enhanced Feature Comparison Section -->
	<div class="mt-24 relative z-10">
		<div class="text-center mb-16">
			<h3 class="text-title2 font-semibold text-gray-900 mb-4">Compare all features</h3>
			<p class="text-callout text-gray-600 max-w-2xl mx-auto">
				See exactly what's included in each plan to make the best choice for your organization
			</p>
		</div>
		
		<!-- Premium feature comparison table -->
		<div class="bg-white/80 backdrop-blur-sm rounded-3xl border border-gray-200/60 overflow-hidden">
			<div class="overflow-x-auto">
				<table class="w-full">
					<!-- Enhanced header -->
					<thead class="bg-gradient-to-r from-gray-50/80 to-gray-100/60">
						<tr>
							<th class="text-left py-6 px-8 text-headline font-semibold text-gray-900 min-w-[200px]">
								Features
							</th>
							{#each tierNames as tierName, i}
								<th class="text-center py-6 px-6 min-w-[140px]">
									<div class="flex flex-col items-center">
										<span class="text-headline font-semibold text-gray-900 mb-1">{tierName}</span>
										{#if i === 1}
											<span class="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-primary-100 text-primary-800">
												Popular
											</span>
										{/if}
									</div>
								</th>
							{/each}
						</tr>
					</thead>
					
					<!-- Enhanced body with alternating row styling -->
					<tbody class="divide-y divide-gray-100">
						{#each features as feature, featureIndex}
							<tr class="group hover:bg-gray-50/50 transition-colors duration-200">
								<td class="py-5 px-8 text-body font-medium text-gray-900 group-hover:text-primary-700 transition-colors duration-200">
									{feature.name}
								</td>
								{#each tierNames as tierName, tierIndex}
									<td class="py-5 px-6 text-center">
										{#if typeof feature.tiers[tierName] === "boolean"}
											{#if feature.tiers[tierName]}
												<div class="inline-flex items-center justify-center w-8 h-8 bg-gradient-to-br from-green-500 to-green-600 rounded-full">
													<Icon name="check" class="w-5 h-5 text-white" />
												</div>
											{:else}
												<div class="inline-flex items-center justify-center w-8 h-8 bg-gray-200 rounded-full">
													<Icon name="x" class="w-5 h-5 text-gray-400" />
												</div>
											{/if}
										{:else}
											<span class="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-primary-50 text-primary-700 border border-primary-200">
												{feature.tiers[tierName]}
											</span>
										{/if}
									</td>
								{/each}
							</tr>
						{/each}
					</tbody>
				</table>
			</div>
		</div>
		
		<!-- ROI Highlight Section -->
		<div class="mt-16 text-center">
			<div class="bg-gradient-to-r from-primary-50 to-secondary-50 rounded-3xl p-8 border border-primary-100">
				<div class="max-w-4xl mx-auto">
					<h4 class="text-title3 font-semibold text-gray-900 mb-4">
						Proven 10x ROI compared to standard benefits
					</h4>
					<p class="text-callout text-gray-600 mb-6">
						Our clients see dramatic improvements in retention, engagement, and productivity within the first 90 days
					</p>
					<div class="grid grid-cols-1 md:grid-cols-3 gap-8">
						<div class="text-center">
							<div class="text-title2 font-bold text-primary-600 mb-2">85%</div>
							<div class="text-body text-gray-600">Reduction in turnover</div>
						</div>
						<div class="text-center">
							<div class="text-title2 font-bold text-primary-600 mb-2">92%</div>
							<div class="text-body text-gray-600">Employee satisfaction</div>
						</div>
						<div class="text-center">
							<div class="text-title2 font-bold text-primary-600 mb-2">10x</div>
							<div class="text-body text-gray-600">Return on investment</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
	<LogoScroller />
</section>

<style lang="postcss">
	@reference '../../../app.css';

	:global(number-flow-svelte)::part(suffix) {
		@apply text-sm text-gray-400 dark:text-gray-500;
	}
	
	/* Enhanced animations for premium feel */
	@keyframes premium-float {
		0%, 100% { 
			transform: translateY(0px) scale(1); 
		}
		50% { 
			transform: translateY(-8px) scale(1.02); 
		}
	}
	
	@keyframes premium-glow {
		0%, 100% { 
			opacity: 0.5; 
		}
		50% { 
			opacity: 0.8; 
		}
	}
	
	@keyframes slide-in-up {
		from {
			opacity: 0;
			transform: translateY(30px);
		}
		to {
			opacity: 1;
			transform: translateY(0);
		}
	}
	
	/* Premium card hover effects */
	.group:hover {
		animation: premium-float 3s ease-in-out infinite;
	}
</style>
