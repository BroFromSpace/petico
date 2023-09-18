import type { FunctionalComponent } from 'vue';

type Slots = {
	title(): any,
	path(): any,
}

const BreadcrumbContainer: FunctionalComponent<{}, {}, Slots> = (
	{},
	ctx
) => {
	return (
		<section class="breadcrumbs-custom bg-image">
			<div class="breadcrumbs-custom-inner">
				<div class="breadcrumbs-custom-container container">
					<div class="breadcrumbs-custom-main">
						<h1 class="breadcrumbs-custom-title">
						{ctx.slots.title ? ctx.slots.title() : null}
						</h1>
					</div>
					<ul class="breadcrumbs-custom-path">
					{ctx.slots.path ? ctx.slots.path() : null}
					</ul>
				</div>
			</div>
		</section>
	);
};

export default BreadcrumbContainer;
