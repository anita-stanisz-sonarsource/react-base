import { lazy } from 'react'

const HomePage = {
  path: '/',
  LazyRender: lazy(async () => await import('./home-page'))
}

export default HomePage
