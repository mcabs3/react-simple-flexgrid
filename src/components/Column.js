import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';
import GridComponent from './GridComponent';
import { getSpan } from '../utils';

const Container = styled.div`
  flex: ${props => props.span || 'auto'};
  display: flex;
  flex-direction: column;
  justify-content: ${props => props.verticalAlign || 'flex-start'};
  padding: 0 ${p => p.nogutter ? 0 : 15}px;
`;

const Column = ({
  className,
  nogutter,
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
      nogutter={nogutter}
      span={span}
      verticalAlign={verticalAlign}
    >
      {children}
    </Container>
  );
};

Column.propTypes = {
  nogutter: PropTypes.bool,
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
  nogutter: false,
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
