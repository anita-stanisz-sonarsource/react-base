import { lazy } from 'react';

const FormikForm = {
    path: 'formik',
    LazyRender: lazy(() => import('./formik-form'))
};

export default FormikForm;