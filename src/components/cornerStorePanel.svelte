<script>
	import { storeItems } from '../data/storeItems'
	import CornerStoreHeader from './cornerStoreHeader.svelte'
	import CornerStoreTabs from './cornerStoreTabs.svelte'
</script>

<div class="corner-store-panel">
	<CornerStoreHeader />
	<CornerStoreTabs {storeItems} />
</div>

<style lang="scss">
	.corner-store-panel {
		width: 100%;
		background-color: rgb(var(--stb-black-50));
		border-radius: var(--stb-border-radius-xl);
		@include screen-m {
			border-radius: var(--stb-border-radius-l);
		}
	}
</style>
