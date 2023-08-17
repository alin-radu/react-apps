import { object, string, number } from 'yup';

export const validationSchema = object({
  email: string().email('invalid').required('required'),
  date: string().required('required'),
  time: string().required('required'),
  guests: number().required('required'),
  occasion: string().required('equired'),
});
