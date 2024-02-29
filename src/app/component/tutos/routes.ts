import { NgModule } from "@angular/core";
import { Route } from "@angular/router";



export const INFOS_ROUTES_TUTOS: Route[] = [
    {
        path: '',
        // component: TwoComponent, // do not define a component here, instead just define child routes
        children: [
            {
                path: 'st2',
                loadComponent: () => import('./st2/st2.component').then(module => module.St2Component)
            },
            {
                path: 'st3',
                loadComponent: () => import('./st3/st3.component').then(module => module.St3Component)
            },
            {
                path: 'branch-0001',
                loadComponent: () => import('./branch-0001/branch-0001.component').then(module => module.Branch0001Component)
            },
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
