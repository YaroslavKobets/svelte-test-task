<script lang="ts">
	import { isPanelOpen } from '../store.js'
	import IconSvg from './IconSvg.svelte'

	const togglePanel = (event: MouseEvent): void => {
		event.stopPropagation()
		isPanelOpen.update(value => !value)
	}
</script>

<button class="corner-button" on:click={togglePanel}
	><IconSvg size={26} icon="crown" /></button
>

<style lang="scss">
	.corner-button {
		--stb-corner-button-size: 62px;

		width: var(--stb-corner-button-size);
		height: var(--stb-corner-button-size);
		border-radius: var(--stb-border-radius-l);
		position: relative;
		display: flex;
		align-items: center;
		justify-content: center;
		color: rgb(var(--stb-white-0));
		background-color: rgb(
			var(--stb-black-25) / var(--stb-corner-button-bg-opacity, 1)
		);
		transition:
			background-color var(--stb-transition-time),
			transform var(--stb-transition-time);
		cursor: pointer;

		&::before {
			content: '';
			inset: 0;
			position: absolute;
			border-radius: inherit;
			background-image: var(--stb-gradient-0);
			z-index: -1;
		}
		@include hover-support {
			&:hover {
				--stb-corner-button-bg-opacity: 0;
			}
		}
		&:active {
			transform: scale(0.95);
		}
		@include screen-m {
			--stb-corner-button-size: 44px;
		}
	}
</style>
