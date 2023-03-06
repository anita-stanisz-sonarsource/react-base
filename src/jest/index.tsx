import { lazy } from 'react'

const JestPage = {
  path: 'jest',
  LazyRender: lazy(async () => await import('./jest'))
}

export default JestPage
