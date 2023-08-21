import { styled } from "styled-components";


const StyledButton = styled.button`
  background-color: hsl(235, 18%, 26%);
  color: #fff;
  padding: 10px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
	width: 97%;
	transition: background-color 0.3s ease-in-out;

	&:hover {
		background-color: hsl(4, 100%, 67%);
	}
`;
export default StyledButton