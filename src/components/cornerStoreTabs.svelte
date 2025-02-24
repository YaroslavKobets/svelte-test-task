<script lang="ts">
	import type { StoreCategory } from '../data/storeItems'
	import CornerStoreItem from './cornerStoreItem.svelte'
	import IconSvg from './IconSvg.svelte'

	export let storeItems: StoreCategory[] = []

	let activeTab: number | null = storeItems[0]?.id ?? null

	const selectTab = (id: number): void => {
		activeTab = id
	}
</script>

<div class="corner-store-tabs">
	<div class="corner-store-tabs__content">
		{#each storeItems as category (category.id)}
			{#if category.id === activeTab}
				{#each category.categoryItems as item (item.id)}
					<CornerStoreItem {item} />
				{/each}
			{/if}
		{/each}
	</div>
	<div class="corner-store-tabs__controls">
		<div class="tab">
			{#each storeItems as tab}
				<button
					on:click={() => selectTab(tab.id)}
					class="tab__item"
					class:active={activeTab === tab.id}
				>
					<IconSvg icon={tab.categoryIcon} size={18} />
					{tab.categoryName}
				</button>
			{/each}
		</div>
	</div>
</div>

<style lang="scss">
	.corner-store-tabs {
		position: relative;
		z-index: 2;
		&__content {
			height: var(--stb-corner-store-height);
			padding-inline: var(--stb-corner-store-padding);
			display: flex;
			flex-direction: column;
			gap: var(--stb-corner-store-padding);
			overflow-y: scroll;
		}
		&__controls {
			padding: var(--stb-corner-store-padding);
		}
	}
	.tab {
		--stb-tab-border-radius: var(--stb-border-radius-l);
		display: grid;
		grid-auto-flow: column;
		overflow-x: scroll;
		border-radius: var(--stb-tab-border-radius);
		overflow: hidden;
		background-color: rgb(var(--stb-black-125));
		@include screen-s {
			--stb-tab-border-radius: var(--stb-border-radius-m);
		}
		&__item {
			position: relative;
			color: var(--stb-text-tertiary);
			font-size: 14px;

			text-transform: capitalize;
			cursor: pointer;
			display: flex;
			align-items: center;
			justify-content: center;
			gap: 8px;
			white-space: nowrap;
			padding-block: 12px;
			padding-inline: 16px;
			z-index: 1;
			transition: color var(--stb-transition-time);
			@include screen-s {
				padding-block: 8px;
			}
			&::before {
				content: '';
				position: absolute;
				z-index: -1;
				inset: 0;
				border-radius: var(--stb-tab-border-radius);
				transition: background-color var(--stb-transition-time);
				background-color: rgb(var(--stb-black-150) / var(--stb-opacity, 0));
			}
			&.active {
				color: var(--stb-text-secondary);
				--stb-opacity: 1;
			}
			@include hover-support {
				&:not(&.active):hover {
					color: var(--stb-text-primary);
				}
			}
		}
	}
</style>
