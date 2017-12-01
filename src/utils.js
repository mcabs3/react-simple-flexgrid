export const shouldHide = (size, opts) => {
	const { hideXs, hideSm, hideMd, hideLg, hideXl } = opts;
	if (size) {
		if (size === 'xs') {
			return hideXs;
		} else if (size === 'sm') {
			return hideSm;
		} else if (size === 'md') {
			return hideMd;
		} else if (size === 'lg') {
			return hideLg;
		} else if (size === 'xl') {
			return hideXl;
		}
	}
	return false;
};

export const getSpan = (size, dimensions) => {
	const { xs, sm, md, lg, xl } = dimensions;
	if (size) {
		if (size === 'xl') {
			return xl || getSpan('lg', dimensions);
		} else if (size === 'lg') {
			return lg || getSpan('md', dimensions);
		} else if (size === 'md') {
			return md || getSpan('sm', dimensions);
		} else if (size === 'sm') {
			return sm || getSpan('xs', dimensions);
		} else if (size === 'xs') {
			return xs || 0;
		}
	}
	return 0;
};

export const getFlexVerticalAlignment = ({ verticalAlign }) => {
	if (verticalAlign === 'top') {
		return 'flex-start';
	} else if (verticalAlign === 'middle') {
		return 'center';
	} else if (verticalAlign === 'bottom') {
		return 'flex-end';
	}
	return 'flex-start';
};