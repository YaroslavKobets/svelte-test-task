<script>
	import { isPanelOpen } from '../store.js'
	import IconSvg from './IconSvg.svelte'
	import Timer from './ui/timer.svelte'

	const togglePanel = () => {
		isPanelOpen.update(value => !value)
	}
</script>

<div class="corner-store-header">
	<span class="corner-store-header__decor"></span>
	<div class="corner-store-header__picture">
		<img class="corner-store-header__image" src="/store.webp" alt="" />
		<div class="corner-store-header__time">
			<IconSvg icon="clock" size={14} />
			<Timer />
		</div>
	</div>
	<div class="corner-store-header__title">
		<IconSvg icon="term" color="transparent" size={18} /> test Store <IconSvg
			icon="info"
			color="transparent"
			size={20}
		/>
	</div>
	<div class="corner-store-header__control">
		<div class="corner-store-header__balance">
			<IconSvg color="#C00165" /> 99999
		</div>
		<button class="corner-store-header__close" on:click={togglePanel}>
			<IconSvg icon="close" size={24} />
		</button>
	</div>
</div>

<style lang="scss">
	.corner-store-header {
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: 8px;
		justify-content: center;
		padding-bottom: 20px;
		position: relative;
		z-index: 1;
		&__decor {
			position: absolute;
			inset: 0;
			overflow: hidden;
			border-radius: var(--stb-border-radius-xl) var(--stb-border-radius-xl) 0 0;
			pointer-events: none;

			&::before {
				$size: 310px;

				content: '';
				border-radius: var(--stb-border-radius-full);
				position: absolute;
				height: $size;
				width: $size;
				inset: -197px 0 auto;
				margin: auto;
				z-index: -1;
				background-image: var(--stb-gradient-25);
				overflow: hidden;
				filter: blur(100px);
			}
		}

		&::after {
			content: '';
			position: absolute;
			inset: auto 0 -12px;
			height: 58px;
			background: linear-gradient(
				180deg,
				rgb(var(--stb-black-50) / 0) 20%,
				rgb(var(--stb-black-50)) 100%
			);
			z-index: -1;
		}

		&__picture {
			position: relative;
			margin-top: -42px;
		}

		&__image {
			width: 100%;
			max-width: 148px;
			height: auto;
		}
		&__time {
			display: flex;
			align-items: center;
			justify-content: center;
			gap: 5px;
			font-weight: 700;
			color: var(--stb-text-secondary);
			padding-inline: 7px;
			padding-block: 5px;
			line-height: 1;
			border-radius: var(--stb-border-radius-full);
			backdrop-filter: blur(8px);
			background-color: rgb(var(--stb-black-75) / 0.4);
			position: absolute;
			inset: auto 0 7px;
		}
		&__title {
			display: flex;
			align-items: center;
			gap: 8px;
			text-transform: uppercase;
			font-size: 24px;
			line-height: 1.1;
			font-weight: 700;
			color: var(--stb-text-primary);
		}
		&__control {
			display: flex;
			align-items: center;
			justify-content: space-between;
			position: absolute;
			inset: 0 0 auto;
			padding-inline: 20px 12px;
			padding-block: 12px;
		}
		&__close {
			padding: 8px;
			display: flex;
			align-items: center;
			justify-content: center;
			color: var(--stb-text-tertiary);
			transition: color var(--stb-transition-time);
			cursor: pointer;
			&:hover {
				color: var(--stb-text-secondary);
			}
		}
		&__balance {
			display: flex;
			align-items: center;
			gap: 4px;
			padding-block: 4px;
			padding-inline: 8px;
			font-weight: 700;

			color: var(--stb-text-primary);
			border-radius: var(--stb-border-radius-full);
			background-color: rgb(var(--stb-black-75) / 0.4);
		}
	}
</style>
