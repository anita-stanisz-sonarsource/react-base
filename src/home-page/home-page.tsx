import { Link } from 'react-router-dom';
import FormikForm from '../formik';

export default function HomePage() {
    return <Link to={FormikForm.path}>Open Formik</Link>
}
