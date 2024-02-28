import { Route } from "@angular/router";

export const INFOS_ROUTES: Route[] = [

    {
        path: 'abouts',
        loadComponent: () => import('./abouts/abouts.component').then(module => module.AboutsComponent)
    }
];