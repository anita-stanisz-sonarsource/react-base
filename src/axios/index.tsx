import { lazy } from 'react'

const AxiosPage = {
  path: 'axios',
  LazyRender: lazy(async () => await import('./axios'))
}

export default AxiosPage
