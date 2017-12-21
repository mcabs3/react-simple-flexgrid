import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import GridComponent from './GridComponent';

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
  stack,
  rowpadding,
  children
}) =>
  (
    <Container
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
  className: PropTypes.string,
  stack: PropTypes.bool,
  children: PropTypes.node,
  nogutter: PropTypes.bool,
  rowpadding: PropTypes.number
};

Row.defaultProps = {
  className: undefined,
  stack: false,
  children: undefined,
  nogutter: false,
  rowpadding: 5
};

export default GridComponent(Row);
