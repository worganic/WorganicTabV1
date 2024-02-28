import { Route } from "@angular/router";

export const INFOS_ROUTES: Route[] = [

    /** main.ts :
      {
            path: 'autres',
            loadChildren: () => import('./app/component/autres/routes').then(module => module.INFOS_ROUTES)
        },
     */
    {
        path: 'home/',
        loadComponent: () => import('./home/home.component').then(module => module.HomeComponent)
    },
    {
        path: 'pagenotfound/',
        loadComponent: () => import('./pagenotfound/pagenotfound.component').then(module => module.PagenotfoundComponent)
    }
];