import { styled } from "styled-components"
import StyledImg from "./StyledImg"

const StyledImgDiv = styled.div`
	width: 50%;
	height: 90%;
	margin: auto;
	@media (max-width: 450px) {
    height:100%;
    flex-direction: column-reverse;
		width:100%;
  }
`


const StyledImageSide = () => {
	return(
		<StyledImgDiv>
			<StyledImg src="/newsletter/images/illustration-sign-up-desktop.svg"/>
		</StyledImgDiv>
	)
}


export default StyledImageSide