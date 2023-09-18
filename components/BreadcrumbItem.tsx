import type { FunctionalComponent } from 'vue';

type Props = {
  active: boolean
}

type Slots = {
	default(): any
}

const BreadcrumbItem: FunctionalComponent<Props, {}, Slots> = (
	props,
	ctx
) => {
	return (
		<li class={{ active: props.active, }}>
			{ctx.slots.default ? ctx.slots.default() : null}
		</li>
	);
};

export default BreadcrumbItem;
