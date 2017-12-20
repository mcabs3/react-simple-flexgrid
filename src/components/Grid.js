import PropTypes from 'prop-types';
import React from 'react';
import Row from './Row';
import styled from 'styled-components';

const Container = styled.div`
	width: ${props => props.width || 'auto'};
	display: flex;
  flex: ${props => props.flex || 'auto'};
	flex-direction: column;
`;

const Grid = ({ children, className, rowPadding, noGutter }) => (
  <Container className={className}>
    {React.Children.map(children, child =>
      React.cloneElement(child, { rowPadding, noGutter }))}
  </Container>
)

Grid.propTypes = {
  noGutter: PropTypes.bool,
  rowPadding: PropTypes.number,
  stack: PropTypes.bool
};

Grid.defaultProps = {
  noGutter: false,
  rowPadding: 5,
  stack: false
}

Grid.displayName = 'SimpleFlexGrid'

export default Grid;
