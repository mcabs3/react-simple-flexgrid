import React from 'react';
import PropTypes from 'prop-types';
import { shouldHide } from '../utils';
import { withBrowserUtils } from 'react-browser-utils';

export default (ChildComponent) => {
	const HideableComponent = (props) => {
		const {
			browserUtils,
			hideXs,
			hideSm,
			hideMd,
			hideLg,
			hideXl
		} = props;

		const hide = shouldHide(browserUtils.size, {
			hideXs,
			hideSm,
			hideMd,
			hideLg,
			hideXl
		});

		if (hide) {
			return null;
		}
		return <ChildComponent {...props } />;
	};

	return withBrowserUtils(HideableComponent);
};