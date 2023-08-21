import React from 'react';
import { styled } from 'styled-components';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import StyledButton from './StyledButton';
import { useNavigate } from 'react-router-dom'

const StyledFormik = styled(Formik)`
	display: flex;
	justify-content: center;
	align-items: center;
`
const StyledForm = styled(Form)`
  padding: 10px;
  border-radius: 5px;
	width: 90%;
	display: flex;
	flex-direction: column;
`;

const StyledField = styled(Field)`
  padding: 10px;
  margin-bottom: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  width: 90%;
`;

const StyledErrorMessage = styled(ErrorMessage)`
  color: red;
  font-size: 14px;
`;

const StyledLabel = styled.label`
	font-weight: bold;
	font-size: 12px;
`
const StyledContainerMessageAndLabel = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: space-between;
`

const EmailForm = () => {
	const navigate = useNavigate()
	const initialValues = {
		email: '',
	}

	const validationSchema = Yup.object({
		email: Yup.string().email('Invalid email format').required('Valid email is required'),
	})

	const handleSubmit = (e) => {
		navigate('success', {
			state: {
				email: e.email
			}	
		})
  };

	return (
		<StyledFormik 
			initialValues={initialValues}
			validationSchema={validationSchema}
			onSubmit={handleSubmit}
		>
			{({ values, isValid }) => (
				<StyledForm>
					<div>
						<StyledContainerMessageAndLabel>
							<StyledLabel htmlFor="email">Email address</StyledLabel>
							<StyledErrorMessage name="email" component="div" /> 
						</StyledContainerMessageAndLabel>
						<br />
						<StyledField type="email" id="email" name="email" placeholder="email@company.com" />
					</div>
					<StyledButton type="submit" disabled={!isValid}>Subscribe to monthly newsletter</StyledButton>
				</StyledForm>
			)}
		</StyledFormik>
	);
}

export default EmailForm;