<script lang="ts">
	import { isPanelOpen } from '../store.js'
	import CornerStoreButton from './cornerStoreButton.svelte'
	import CornerStorePanel from './cornerStorePanel.svelte'

	let panelRef: HTMLElement | null = null

	let isBrowser: boolean = typeof document !== 'undefined'

	const handleOutsideClick = (event: MouseEvent): void => {
		if (panelRef && !panelRef.contains(event.target as Node)) {
			isPanelOpen.set(false)
		}
	}

	import { onMount, onDestroy } from 'svelte'

	onMount(() => {
		if (isBrowser) {
			document.addEventListener('click', handleOutsideClick)
		}
	})

	onDestroy(() => {
		if (isBrowser) {
			document.removeEventListener('click', handleOutsideClick)
		}
	})
</script>

<div class="corner-store">
	{#if $isPanelOpen}
		<div style="width: 100%;" bind:this={panelRef}>
			<CornerStorePanel />
		</div>
	{/if}
	<CornerStoreButton />
</div>

<style lang="scss">
	.corner-store {
		width: 100%;
		max-width: var(--stb-corner-store-panel-width);
		display: grid;
		justify-items: end;
		position: fixed;
		gap: 14px;
		right: var(--stb-corner-store-offset);
		bottom: var(--stb-corner-store-offset);

		@include screen-m {
			gap: 4px;
		}
	}
</style>
