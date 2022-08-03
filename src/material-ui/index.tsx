import { lazy } from 'react';

const MaterialUIPage = {
    path: 'material-ui',
    LazyRender: lazy(() => import('./material-ui'))
}

export default MaterialUIPage;