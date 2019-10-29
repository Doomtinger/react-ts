import * as React from 'react';
import { BrowserRouter } from 'react-router-dom';
import RouterBeforeEach from './RouterBeforeEach';
import { Spin } from 'antd';
import './style.scss';

export interface routeType {
    path: string;
    component: React.ElementType;
}

const routes: routeType[] = [
    // {
    //     path: '/',
    //     component: React.lazy(() => import('../views/Video'))
    // },
]

export default function Index() {
    return (
        <BrowserRouter basename='/video'>
            <React.Suspense fallback={<div className='loading'>
                <Spin />
            </div>}>
                <RouterBeforeEach routes={routes} />
            </React.Suspense>
        </BrowserRouter>
    )
}