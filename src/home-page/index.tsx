import { lazy } from 'react'

const HomePage = {
    path: '/',
    LazyRender: lazy(() => import('./home-page')),
}

export default HomePage
