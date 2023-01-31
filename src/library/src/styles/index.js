import styled from "styled-components";

const standardYDividerHeight = '20px';
export const standardLargeYDividerHeight = '30px';

export const YDivider = styled.View`
height: ${props => props.height}
`


export const StandardYDivider = styled.View`
height: ${standardYDividerHeight}
`