<script lang="ts">
	import { onMount } from 'svelte'
	import { writable } from 'svelte/store'

	interface TimeLeft {
		days: number
		hours: number
		minutes: number
		seconds: number
	}

	export let targetTime: Date | null = null

	const timeLeft = writable<TimeLeft>({
		days: 0,
		hours: 0,
		minutes: 0,
		seconds: 0,
	})

	function calculateTimeLeft() {
		const now = new Date()

		const endTime = targetTime
			? new Date(targetTime)
			: new Date(now.getFullYear(), now.getMonth(), now.getDate() + 1)

		const difference = endTime.getTime() - now.getTime()

		if (difference > 0) {
			const days = Math.floor(difference / (1000 * 60 * 60 * 24))
			const hours = Math.floor((difference / (1000 * 60 * 60)) % 24)
			const minutes = Math.floor((difference / (1000 * 60)) % 60)
			const seconds = Math.floor((difference / 1000) % 60)

			timeLeft.set({ days, hours, minutes, seconds })
		} else {
			if (!targetTime) {
				targetTime = new Date(
					now.getFullYear(),
					now.getMonth(),
					now.getDate() + 1
				)
			}
			calculateTimeLeft()
		}
	}

	let interval: ReturnType<typeof setInterval> | undefined

	onMount(() => {
		calculateTimeLeft()
		interval = setInterval(calculateTimeLeft, 1000)

		return () => {
			if (interval) clearInterval(interval)
		}
	})
</script>

{#if $timeLeft}
	<span class="countdown">
		<span>{$timeLeft.days}d</span>
		<span>{$timeLeft.hours}h</span>
		<span>{$timeLeft.minutes}m</span>
		<span>{$timeLeft.seconds}s</span>
	</span>
{/if}

<style>
	.countdown {
		display: flex;
		gap: 4px;
		color: var(--stb-text-secondary);
	}
</style>
