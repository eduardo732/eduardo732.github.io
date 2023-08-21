import { styled } from "styled-components"

const StyledImg = styled.img`
	background-image: url('/images/illustration-sign-up-desktop.svg');
	background-size: cover;
	max-width: 90%;
  height: 100%;
	@media (max-width: 450px) {
		background-image: url('/images/illustration-sign-up-mobile.svg');
		max-width: 100%;
		background-size: auto;
  }
`
export default StyledImg