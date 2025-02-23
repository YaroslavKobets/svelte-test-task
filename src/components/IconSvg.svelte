<script>
	export let size = 16
	export let icon = 'default'
	export let color = 'currentColor'
</script>

<svg width={size} height={size} style="fill: {color};">
	<use href="/icons.svg#{icon}"></use>
</svg>
