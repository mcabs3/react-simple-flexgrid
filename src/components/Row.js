import GridComponent from './GridComponent';
import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
	display: flex;
  flex: 1;
	flex-direction: ${props => props.stack ? 'column' : 'row'};
	margin: 0;
  padding: ${p => p.rowPadding}px 0;
`;

const Row = ({
  className,
  noGutter,
  gutter,
  stack,
  rowPadding,
  children
}) => {
  return (
    <Container
      className={className}
      stack={stack}
      noGutter={noGutter}
      rowPadding={rowPadding}
    >
      {
        React.Children.map(children, child => React.cloneElement(child, {
          noGutter,
          rowPadding
        }))
      }
    </Container>
  );
};

Row.propTypes = {
  className: PropTypes.string,
  stack: PropTypes.bool,
  children: PropTypes.node,
  noGutter: PropTypes.bool
};

Row.defaultProps = {
  className: undefined,
  stack: false,
  children: undefined,
  noGutter: false
};

export default GridComponent(Row);
