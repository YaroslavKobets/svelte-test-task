<script>
	import IconSvg from './IconSvg.svelte'
	import Button from './ui/button.svelte'
	import Timer from './ui/timer.svelte'

	export let item
	let isCollected = false
	let timer
	let timeLeft = 0

	const handleButtonClick = () => {
		isCollected = true
		console.log(isCollected)

		timeLeft = 5000
		clearTimeout(timer)

		timer = setTimeout(() => {
			isCollected = false
			timeLeft = 0
		}, 5000)
	}
</script>

<div class="corner-store-item" class:collected={isCollected}>
	<div class="corner-store-item__image">
		<img src={item.imageUrl} alt="" />
		<div class="corner-store-item__timer"><Timer /></div>
	</div>
	<div class="corner-store-item__content">
		<div class="corner-store-item__details">
			<div class="corner-store-item__details-top">
				<strong>{item.name}</strong>
				<span>Pragmatic Play</span>
			</div>
			<div class="corner-store-item__details-bottom">
				<p><span class="text-accent">X{item.wagering}</span> Wagering</p>
				<p><span class="text-accent">{item.bet} EUR</span> Bet</p>
			</div>
		</div>
		<div class="corner-store-item__action">
			<strong>{item.freeSpins} FS</strong>

			<Button onClick={handleButtonClick}><IconSvg />{item.cost}</Button>
		</div>
	</div>
</div>

<style lang="scss">
	.corner-store-item {
		background-color: rgb(var(--stb-black-100));
		border-radius: var(--stb-border-radius-l);
		padding-block: 8px;
		padding-inline: 8px 16px;
		color: var(--stb-text-tertiary);
		min-height: 114px;
		display: grid;
		grid-template-columns: 98px 1fr;
		align-items: center;
		gap: 8px;
		position: relative;
		overflow: hidden;
		&::before {
			content: 'Collected ';
			position: absolute;
			inset: 0;
			z-index: 2;
			background-color: rgb(var(--stb-black-75) / 0.4);
			backdrop-filter: blur(8px);
			display: flex;
			align-items: center;
			justify-content: center;
			font-size: 24px;
			opacity: 0;
			pointer-events: none;
			transition: opacity var(--stb-transition-time);
		}
		strong {
			color: var(--stb-text-secondary);
		}

		&.collected {
			&::before {
				opacity: 1;
				pointer-events: all;
			}
		}
		&__image {
			overflow: hidden;
			border-radius: var(--stb-border-radius-m);
			position: relative;
		}
		&__timer {
			font-size: 10px;
			padding: 4px;
			display: flex;
			align-items: center;
			justify-content: center;
			border-radius: var(--stb-border-radius-full);
			position: absolute;
			inset: 2px 2px auto;
			background-color: rgb(var(--stb-black-75) / 0.4);
			backdrop-filter: blur(8px);
			font-weight: 600;
		}
		&__content {
			display: grid;
			grid-template-columns: minmax(130px, 1fr) 94px;
		}
		&__details {
			display: grid;
			gap: 12px;
		}
		&__details-top {
			display: grid;
			font-size: 13px;
			strong {
				font-size: 16px;
				white-space: nowrap;
				overflow: hidden;
				text-overflow: ellipsis;
			}
		}
		&__details-bottom {
			display: grid;
			gap: 4px;
			font-size: 13px;

			p {
				display: flex;
			}
			span {
				margin-right: 4px;
			}
		}
		&__action {
			display: grid;
			gap: 14px;
			align-self: end;
			justify-items: end;
			strong {
				font-size: 24px;
				letter-spacing: 0.01em;
				text-transform: uppercase;
				font-weight: 800;
			}
		}
	}
</style>
