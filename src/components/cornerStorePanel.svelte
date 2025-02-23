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
		max-width: 388px;
		background-color: rgb(var(--stb-black-50));
		border-radius: var(--stb-border-radius-xl);
	}
</style>
