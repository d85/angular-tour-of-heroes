import { HeroDetailComponent } from './hero-detail/hero-detail.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeroesComponent } from './heroes/heroes.component';
import { DashboardComponent } from './dashboard/dashboard.component';

/* A typical Angular Route has two properties
 *  1. path: a string that matches the URL in the browser address bar
 *  2. component: the component that the router should create when navigating
 *  to this route */
const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full'},
  { path: 'dashboard', component: DashboardComponent },
  { path: 'detail/:id', component: HeroDetailComponent},
  { path: 'heroes', component: HeroesComponent },
];

/* RouterModule.forRoot()
 * You first must initialize the router and start it listening for
 * browser location changes.
 * Add RouterModule to the @NgModule.imports array and configure it 
 * with routes in one step by calling RouterModule.forRoot() within
 * the imports array:
 * The method is called forRoot() because you configure the router
 * at the application's root level. The forRoot() method supplies
 * the service providers and directives needed for routing, and
 * performs the initial investigation based on the current browser URL.
 * Exporting the RouterModule makes router directives available
 * for use in the AppModule components that will need them */
@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
