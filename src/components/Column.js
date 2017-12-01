import GridComponent from './GridComponent';
import PropTypes from 'prop-types';
import React from 'react';
import { getSpan } from '../utils';
import styled from 'styled-components';

const Container = styled.div`
	flex: ${props => props.span || 0};
	display: flex;
	flex-direction: column;
	justify-content: ${props => props.verticalAlign || 'flex-start'}
`;

const Column = ({
	className,
  verticalAlign,
  browserUtils,
  xs,
  sm,
  md,
  lg,
  xl,
  children
}) => {
  const span = getSpan(browserUtils.size, { xs, sm, md, lg, xl });

  return (
    <Container
      className={className}
      span={span}
      verticalAlign={verticalAlign}
    >
      {children}
    </Container>
  );
};

Column.propTypes = {
  verticalAlign: PropTypes.oneOf(['flex-start', 'center', 'flex-end']),
  className: PropTypes.string,
  browserUtils: PropTypes.object.isRequired,
  xs: PropTypes.number,
  sm: PropTypes.number,
  md: PropTypes.number,
  lg: PropTypes.number,
  xl: PropTypes.number,
  children: PropTypes.node
};

Column.defaultProps = {
  verticalAlign: 'flex-start',
  className: undefined,
  xs: undefined,
  sm: undefined,
  md: undefined,
  lg: undefined,
  xl: undefined,
  children: undefined
};

export default GridComponent(Column);