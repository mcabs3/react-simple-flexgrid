import GridComponent from './GridComponent';
import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
	display: flex;
  flex: 1;
	flex-direction: ${props => props.stack ? 'column' : 'row'};
	margin: 0;
  padding: ${p => p.verticalPadding || 5}px 0;
`;

const Row = ({
  className,
  gutter,
  stack,
  children
}) => {
  return (
    <Container
      className={className}
      stack={stack}
      gutter={gutter}
    >
      {children}
    </Container>
  );
};

Row.propTypes = {
  className: PropTypes.string,
  stack: PropTypes.bool,
  children: PropTypes.node
};

Row.defaultProps = {
  className: undefined,
  stack: false,
  children: undefined
};

export default GridComponent(Row);
