import { Routes, RouterModule } from '@angular/router';

import { DashboardComponent } from "./dashboard/dashboard.component";
import { AboutComponent } from "./about/about.component";

const appRoutes: Routes = [
    { path: '', component: DashboardComponent, pathMatch: 'full' },
    { path: 'about', component: AboutComponent, pathMatch: 'full' }
];

export const AppRouter = RouterModule.forRoot( appRoutes );