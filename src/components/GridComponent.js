import React from 'react';
import PropTypes from 'prop-types';
import { shouldHide } from '../utils';
import { withBrowserUtils } from 'react-browser-utils';

export default (ChildComponent) => {
  const HideableComponent = ({
    browserUtils,
    hideXs,
    hideSm,
    hideMd,
    hideLg,
    hideXl,
    ...rest
  }) => {
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
    return (
      <ChildComponent
        browserUtils={browserUtils}
        hideXs={hideXs}
        hideSm={hideSm}
        hideMd={hideMd}
        hideLg={hideLg}
        hideXl={hideXl}
        {...rest }
      />
    );
  };

  HideableComponent.propTypes = {
    browserUtils: PropTypes.object.isRequired,
    hideXs: PropTypes.bool,
    hideSm: PropTypes.bool,
    hideMd: PropTypes.bool,
    hideLg: PropTypes.bool,
    hideXl: PropTypes.bool
  };

  HideableComponent.defaultProps = {
    hideXs: false,
    hideSm: false,
    hideMd: false,
    hideLg: false,
    hideXl: false
  };

  return withBrowserUtils(HideableComponent);
};
