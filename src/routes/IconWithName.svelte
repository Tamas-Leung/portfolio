<script lang="ts">
	import Icon from '@iconify/svelte';
	import createPopperAction from './usePopper';
	import { fade } from 'svelte/transition';

	const { usePopperElement, usePopperTooltip } = createPopperAction();

	export let icon: string;
	export let iconName: string;
	export let width: number = 40;

	let showTooltip = false;
</script>

<div
	on:mouseenter={() => (showTooltip = true)}
	on:mouseleave={() => (showTooltip = false)}
	class="flex flex-col items-center justify-start w-10"
	use:usePopperElement
>
	<div class="w-10 h-10">
		<Icon {icon} {width} />
	</div>

	<h4 class="text-xs text-center w-full text-ellipsis whitespace-nowrap overflow-hidden">
		{iconName}
	</h4>
</div>
{#if showTooltip}
	<div
		in:fade={{ duration: 200 }}
		class="bg-zinc-900 tooltip text-xs"
		use:usePopperTooltip={{
			placement: 'bottom',
			modifiers: [
				{
					name: 'offset',
					options: {
						offset: [0, 4]
					}
				}
			]
		}}
	>
		{iconName}
	</div>
{/if}

<style lang="scss">
	.tooltip {
		position: relative;
		border: 2px solid;
		border-style: solid;
		padding: 0.25rem 0.5rem;
		border-image-slice: 1;
		z-index: 50;
		border-image-source: conic-gradient(
			from var(--angle),
			hsl(100 100% 60%),
			hsl(200 100% 60%),
			hsl(100 100% 60%)
		);
	}
</style>
