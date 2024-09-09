<script>
	import { cn } from '$lib/utils';

	const { label, href, children, class: className, icon = true, ...restProps } = $props();
</script>

<a
	{href}
	class={cn(
		'decoration-dotted decoration-2 decoration-primary font-medium underline underline-offset-2 text-neutral-600 hocus:text-primary inline-flex flex-row gap-1 transition-all items-center',
		icon && 'mr-1 hocus:gap-2 hocus:mr-0',
		className
	)}
	aria-label={label}
	{...restProps}
>
	{@render children()}
	{#if icon}
		<svg xmlns="http://www.w3.org/2000/svg" class="size-4 text-inherit" viewBox="0 0 24 24" aria-hidden="true">
			<path
				fill="none"
				stroke="currentColor"
				stroke-linecap="round"
				stroke-linejoin="round"
				stroke-width="2"
				d="M7 7h10v10M7 17L17 7"
			/>
		</svg>
	{/if}
</a>
