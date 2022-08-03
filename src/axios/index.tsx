import { lazy } from 'react';

const AxiosPage = {
    path: 'axios',
    LazyRender: lazy(() => import('./axios'))
}

export default AxiosPage;