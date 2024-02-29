/// <reference types="@angular/localize" />

import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

// DELETE import { AppModule } from './app/app.module';

import { BrowserModule, bootstrapApplication } from '@angular/platform-browser';
import { importProvidersFrom } from '@angular/core';
import { provideAnimations } from '@angular/platform-browser/animations';
import { withInterceptorsFromDi, provideHttpClient } from '@angular/common/http';
import { provideRouter, Routes } from '@angular/router';

import { AppComponent } from './app/app.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/',
    pathMatch: 'full'
  },
  {
    path: '',
    loadComponent: () => import("./app/component/autres/home/home.component").then(module => module.HomeComponent)
  },
  {
    path: 'divers',
    loadChildren: () => import('./app/component/divers/routes').then(module => module.INFOS_ROUTES)
  },
  {
    path: 'autres',
    loadChildren: () => import('./app/component/autres/routes').then(module => module.INFOS_ROUTES)
  },
  {
    path: 'projets',
    loadChildren: () => import('./app/component/projets/routes').then(module => module.INFOS_ROUTES)
  },
  {
    path: 'tutos',
    loadChildren: () => import('./app/component/tutos/routes').then(module => module.INFOS_ROUTES_TUTOS)
  },
  {
      path: '**',
      loadComponent: () => import("./app/component/autres/pagenotfound/pagenotfound.component").then(module => module.PagenotfoundComponent)
  }
];

// DELETE platformBrowserDynamic().bootstrapModule(AppModule)
// DELETE   .catch(err => console.error(err));

 bootstrapApplication(AppComponent, {
    providers: [
        importProvidersFrom(BrowserModule,),
        provideAnimations(),
        provideHttpClient(withInterceptorsFromDi()),
        provideRouter(routes)
    ]
  })
  .catch(err => console.error(err));