import styled from 'styled-components';

const Grid = styled.div`
	width: ${props => props.width || 'auto'};
	display: flex;
  flex: ${props => props.flex || 1};
	flex-direction: column;
`;

Grid.displayName = 'SimpleFlexGrid'

export default Grid;
