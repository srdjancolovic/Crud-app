import * as yup from 'yup';

export const basicSchema = yup.object().shape({
    name: yup.string().required('Name is requried field'),
    email: yup
        .string()
        .email('Please enter correct email')
        .required('Email is required'),
});
