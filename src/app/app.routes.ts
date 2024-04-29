import { Routes } from '@angular/router';
import { LayoutComponent } from "@shared/components/layout/layout.component";
export const routes: Routes = [
    {
        path: '',
        component: LayoutComponent,
        children: [
            {
                path: '',
                loadComponent: () => import('@productos/pages/list/list.component')
            },
            {
                path: 'about',
                loadComponent: () => import('@info/pages/about/about.component')
              
            },
            {
                path: 'product/:id',
                loadComponent: () => import('@productos/pages/product-datail/product-datail.component'),
            }
        ]
    },
    {
        path: '**',
        loadComponent: () => import('@info/pages/not-found/not-found/not-found.component')
    }
];
