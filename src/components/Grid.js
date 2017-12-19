import React from 'react';
import Row from './Row';
import styled from 'styled-components';

const Container = styled.div`
	width: ${props => props.width || 'auto'};
	display: flex;
  flex: ${props => props.flex || 'auto'};
	flex-direction: column;
`;

const Grid = ({ children, className, verticalPadding }) => (
  <Container className={className}>
    {React.Children.map(children, child =>
      React.cloneElement(child, { verticalPadding }))}
  </Container>
)

Grid.displayName = 'SimpleFlexGrid'

export default Grid;
