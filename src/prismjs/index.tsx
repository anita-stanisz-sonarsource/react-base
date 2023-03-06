import { lazy } from 'react'

const PrismJs = {
  path: 'prismjs',
  LazyRender: lazy(async () => await import('./prismjs'))
}

export default PrismJs
