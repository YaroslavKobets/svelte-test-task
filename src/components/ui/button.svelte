<script>
	export let disabled = false
	export let onClick
</script>

<button class="button" {disabled} on:click={onClick}><slot></slot></button>

<style>
	.button {
		width: 100%;
		display: inline-flex;
		align-items: center;
		justify-content: center;
		background-image: var(--stb-gradient-25);
		padding-block: 6px;
		padding-inline: 8px;
		border-radius: var(--stb-border-radius-m);
		font-weight: 700;
		text-transform: uppercase;
		min-height: 30px;
		gap: 4px;
		color: var(--stb-text-secondary);
		cursor: pointer;
		position: relative;
		z-index: 1;
		&::before {
			content: '';
			position: absolute;
			inset: 0;
			border-radius: inherit;
			background-image: var(--stb-gradient-0);
			opacity: var(--stb-button-opacity, 1);
			z-index: -1;
			transition: opacity var(--stb-transition-time);
		}
		&:disabled {
			filter: grayscale(1);
			cursor: not-allowed;
		}
		@include hover-support {
			&:hover {
				--stb-button-opacity: 0;
			}
		}
	}
</style>
