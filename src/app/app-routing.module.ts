import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { AddnewcarComponent } from './components/addnewcar/addnewcar.component';
import { ViewjobsComponent } from './components/viewjobs/viewjobs.component';

const routes: Routes = [
  { path: 'dashboard', component: DashboardComponent },
  { path: 'addnewcar', component: AddnewcarComponent },
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'jobs', component: ViewjobsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
