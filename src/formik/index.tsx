import { lazy } from 'react'

const FormikForm = {
  path: 'formik',
  LazyRender: lazy(async () => await import('./formik-form'))
}

export default FormikForm
