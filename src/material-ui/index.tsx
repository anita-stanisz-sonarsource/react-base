import { lazy } from 'react'

const MaterialUIPage = {
  path: 'material-ui',
  LazyRender: lazy(async () => await import('./material-ui'))
}

export default MaterialUIPage
