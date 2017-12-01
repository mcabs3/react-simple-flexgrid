import styled from 'styled-components';

const Grid = styled.div`
	width: ${props => props.width || 'auto'}
	display: flex;
	flex-direction: column;
`;

export default Grid;
