import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import GridComponent from './GridComponent';

const Container = styled.div`
  display: flex;
  flex: ${props => props.flex || 0};
  flex-direction: ${props => props.stack ? 'column' : 'row'};
  margin: 0;
  padding: ${p => p.rowpadding}px 0;
`;

const Row = ({
  flex,
  className,
  nogutter,
  stack,
  rowpadding,
  children
}) =>
  (
    <Container
      flex={flex}
      className={className}
      stack={stack}
      nogutter={nogutter}
      rowpadding={rowpadding}
    >
      {
        React.Children.map(children, child =>
          React.cloneElement(child, {
            nogutter,
            rowpadding
          }))
      }
    </Container>
  );

Row.propTypes = {
  flex: PropTypes.number,
  className: PropTypes.string,
  stack: PropTypes.bool,
  children: PropTypes.node,
  nogutter: PropTypes.bool,
  rowpadding: PropTypes.number
};

Row.defaultProps = {
  flex: 0,
  className: undefined,
  stack: false,
  children: undefined,
  nogutter: false,
  rowpadding: 5
};

export default GridComponent(Row);
