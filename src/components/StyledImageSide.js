import { styled } from "styled-components"
import StyledImg from "./StyledImg"

const StyledImgDiv = styled.div`
	width: 50%;
	height: 90%;
	margin: auto;
	@media (max-width: 400px) {
    height:100%;
    flex-direction: column-reverse;
		width:100%;
  }
`


const StyledImageSide = () => {
	const isMobile = window.innerWidth <= 400
	const imageSrc = isMobile ? "" : "/images/illustration-sign-up-desktop.svg"
	return(
		<StyledImgDiv>
			<StyledImg src={imageSrc} alt="desktop"/>
		</StyledImgDiv>
	)
}


export default StyledImageSide