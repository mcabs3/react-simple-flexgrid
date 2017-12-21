import GridComponent from './GridComponent';
import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
	display: flex;
  flex: 1;
	flex-direction: ${props => props.stack ? 'column' : 'row'};
	margin: 0;
  padding: ${p => p.rowpadding}px 0;
`;

const Row = ({
  className,
  nogutter,
  gutter,
  stack,
  rowpadding,
  children
}) => {
  return (
    <Container
      className={className}
      stack={stack}
      nogutter={nogutter}
      rowpadding={rowpadding}
    >
      {
        React.Children.map(children, child => React.cloneElement(child, {
          nogutter,
          rowpadding
        }))
      }
    </Container>
  );
};

Row.propTypes = {
  className: PropTypes.string,
  stack: PropTypes.bool,
  children: PropTypes.node,
  nogutter: PropTypes.bool
};

Row.defaultProps = {
  className: undefined,
  stack: false,
  children: undefined,
  nogutter: false
};

export default GridComponent(Row);
