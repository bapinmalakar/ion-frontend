import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { ViewDetailsComponent } from './view-details/view-details.component';
import { AllThermoViewComponent } from './all-thermo-view/all-thermo-view.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomePageComponent },
  { path: 'views/:name', component: ViewDetailsComponent },
  { path: 'all_view', component: AllThermoViewComponent },
  { path: 'all_view/:name', component: AllThermoViewComponent },
  { path: '**', redirectTo: 'home', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
