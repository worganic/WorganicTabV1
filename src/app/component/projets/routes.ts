import { Route } from "@angular/router";

export const INFOS_ROUTES: Route[] = [
    {
        path: '',
        // component: TwoComponent, // do not define a component here, instead just define child routes
        children: [
            {
                path: 'worgtab/WorgTabTutoComponent',
                loadComponent: () => import('./worgtab/worgTabTuto/worgTabTuto.component').then(module => module.WorgTabTutoComponent)
            },
            {
                path: 'worgtab/users',
                loadComponent: () => import('./worgtab/exemples/users/users.component').then(module => module.UsersComponent)
            },
            {
                path: 'worgtab/multiple',
                loadComponent: () => import('./worgtab/exemples/multiple/multiple.component').then(module => module.MultipleComponent)
            },
            {
                path: 'WorgMenuTuto',
                loadComponent: () => import('./worgMenu/worgMenuTuto/worgMenuTuto.component').then(module => module.WorgMenuTutoComponent)
            },
            {
                path: 'worgMenu/worgMenuExemples',
                loadComponent: () => import('./worgMenu/worgMenuExemples/worgMenuExemples.component').then(module => module.WorgMenuExemplesComponent)
            },
            {
                path: 'worgMenu/worgMenuAfaire',
                loadComponent: () => import('./worgMenu/worgMenuAfaire/worgMenuAfaire.component').then(module => module.worgMenuAfaireComponent)
            }

            
        ],
    },
];