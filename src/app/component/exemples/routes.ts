import { Route } from "@angular/router";

export const INFOS_ROUTES: Route[] = [
    {
        path: '',
        // component: TwoComponent, // do not define a component here, instead just define child routes
        children: [
            {
                path: 'worgtab/users',
                loadComponent: () => import('./worgtab/users/users.component').then(module => module.UsersComponent)
            },
            {
                path: 'worgtab/multiple',
                loadComponent: () => import('./worgtab/multiple/multiple.component').then(module => module.MultipleComponent)
            }
        ],
    },
];