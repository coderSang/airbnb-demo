import styled from "styled-components";

export const LeftWrapper = styled.div`
  flex: 1;
  display: flex;
  color: ${props => props.theme.isAlpha ? '#FFF' : props.theme.color.primaryColor};
  .logo{
    cursor: pointer;
    margin-left: 24px;
  }
`
