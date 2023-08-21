import { styled } from "styled-components"

const StyledImg = styled.img`
	background-image: url('${process.env.PUBLIC_URL}/images/illustration-sign-up-desktop.svg');
	background-size: cover;
	width: 95%;
  height: 100%;
	@media (max-width: 450px) {
		background-image: url('${process.env.PUBLIC_URL}/images/illustration-sign-up-mobile.svg');
		width: 100%;
		background-size: auto;
  }
`
export default StyledImg