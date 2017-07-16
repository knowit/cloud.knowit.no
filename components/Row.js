import styled from 'styled-components';
import colors from '../services/colors';

const Row = styled.div`
  background-color: ${props => props.color && colors[props.color] ? colors[props.color] : colors['default']};
  color: #1F2D3D;
  padding: 20px;
  font-size: 150%;

  text-align: center;
  height:100%
  width: 100%;
  
  display: flex;
  align-items: center;
  justify-content: center;
`

export default Row;
