import { styled } from "styled-components"
import EmailForm from "./EmailForm"


const StyledTitle = styled.h1`
  font-size: 50px;
`

const StyledP = styled.p`
  margin-top: 0px;
  width: 90%;
`

const StyledList = styled.ul`
  list-style: none;
  padding: 0;
  width: 90%;
`

const StyledListItem = styled.li`
  position: relative;
  padding-left: 30px; /* Space for the icon */
  margin-bottom: 10px;
  background-image: url('/newsletter/images/icon-list.svg'); 
  background-repeat: no-repeat;
  background-size: 15px; /* Adjust the size as needed */
  background-position: left center;
  padding: 0 0 0 25px; /* Create space for the icon */
`;

const StyledDiv = styled.div`
  margin-top: 15px;
  padding: 10px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  width: 50%;
  height: 80%;
  @media (max-width: 450px) {
    margin-top: 0px;
    width: 90%
  }
`

const StyledInfoSide = () => {
	return (
		<StyledDiv>
			<StyledTitle>Stay updated!</StyledTitle>
      <StyledP>Join 60,000+ product managers receiving monthly updates on:</StyledP>
      <StyledList>
        <StyledListItem>Product discovery and building what matters</StyledListItem>
        <StyledListItem>Measuring to ensure updates are a success</StyledListItem>
        <StyledListItem>And much more!</StyledListItem>
      </StyledList>
      <EmailForm/>
		</StyledDiv>
	)
}


export default StyledInfoSide