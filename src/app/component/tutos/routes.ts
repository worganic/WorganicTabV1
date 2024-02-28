import { NgModule } from "@angular/core";
import { Route } from "@angular/router";



export const INFOS_ROUTES_TUTOS: Route[] = [
    {
        path: '',
        // component: TwoComponent, // do not define a component here, instead just define child routes
        children: [
            {
                path: 'design',
                loadComponent: () => import('./design/design.component').then(module => module.DesignComponent)
            },
            {
                path: 'ngbootstrap',
                loadComponent: () => import('./ngbootstrap/ngbootstrap.component').then(module => module.NgbootstrapComponent)
            },
            {
                path: 'injected',
                loadComponent: () => import('./injected/injected.component').then(module => module.InjectedComponent)
            }
        ],
    },
];
