import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Container = styled.div`
  width: ${props => props.width || 'auto'};
  display: flex;
  flex: ${props => props.flex || 'auto'};
  flex-direction: column;
`;

const Grid = ({
  children,
  className,
  rowpadding,
  nogutter,
  stack
}) =>
  (
    <Container className={className}>
      {React.Children.map(children, child =>
        React.cloneElement(child, { rowpadding, nogutter, stack }))}
    </Container>
  );

Grid.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  nogutter: PropTypes.bool,
  rowpadding: PropTypes.number,
  stack: PropTypes.bool
};

Grid.defaultProps = {
  children: undefined,
  className: undefined,
  nogutter: false,
  rowpadding: 5,
  stack: false
};

Grid.displayName = 'SimpleFlexGrid';

export default Grid;
