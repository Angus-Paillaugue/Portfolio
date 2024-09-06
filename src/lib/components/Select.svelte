<script>
	import { cn } from '$lib/utils';

	const { children, class: className, ...restProps } = $props();
</script>

<select
	class={cn(
		'appearance-none h-8 pl-4 pr-8 capitalize text-black font-mono rounded-full relative bg-white bg-no-repeat',
		className
	)}
	{...restProps}
>
	{@render children()}
</select>

<style>
	:global(select) {
		background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='1em' height='1em' viewBox='0 0 24 24'%3E%3Cpath fill='none' stroke='%23000' stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='m6 9l6 6l6-6'/%3E%3C/svg%3E");
		background-position-x: calc(100% - 5px);
		background-position-y: 8px;
	}
</style>
