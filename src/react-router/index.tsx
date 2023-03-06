import { lazy } from 'react'

const ReactRouter = {
  path: 'react-router',
  LazyRender: lazy(async () => await import('./react-router'))
}

export default ReactRouter
