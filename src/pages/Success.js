import StyledContainer from "../components/StyledContainer"
import StyledCard from "../components/StyledCard"
import { styled } from "styled-components"
import StyledImg from "../components/StyledImg"
import StyledButton from "../components/StyledButton"
import { useNavigate } from "react-router-dom"

const StyledInfo = styled(StyledCard)`
	flex-direction: column;
	width: 375px;
	height: 60%;
`
const StyledImageWithouthBackground = styled(StyledImg)`
	background-image: none;
`
const StyledDivIcon = styled.div`
	width: 15%;
	height: 15%;
	margin: 30px 30px 10px;
`
const StyledDivInfo = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	width: 100%;
`
const StyledTitle = styled.h1`
	width: 80%;
	margin: 0;
`

const StyledP = styled.p`
	width: 80%;
`

const StyledButtonDismiss = styled(StyledButton)`
	width: 80%;
`
const Success = ({ children }) => {
	const navigate = useNavigate()

	const handleSubmit = (e) => {
		navigate('/')
	}
	return (
		<StyledContainer>
			<StyledInfo>
				<StyledDivIcon>
					<StyledImageWithouthBackground src="/newsletter/images/icon-success.svg" alt="desktop" />
				</StyledDivIcon>
				<StyledDivInfo>
					<StyledTitle>Thanks for subscribing!</StyledTitle>
					<StyledP>A confirmation email has been sent to <strong>{children}</strong>. Please open it and click the button inside to confirm your subscription. </StyledP>
					<StyledButtonDismiss type="submit" onClick={handleSubmit}>Dismiss message</StyledButtonDismiss>
				</StyledDivInfo>
			</StyledInfo>
		</StyledContainer>
	)
}

export default Success