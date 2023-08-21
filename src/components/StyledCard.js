import { styled } from "styled-components"

const StyledCard = styled.div`
  height: 90%;
  background-color: hsl(0, 0%, 100%);
  display: flex;
  flex-direction: row;
  border-radius: 30px;
  @media (max-width: 400px) {
    height:100%;
    flex-direction: column-reverse;
  }
`
export default StyledCard