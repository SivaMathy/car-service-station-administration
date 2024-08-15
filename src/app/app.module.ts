import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DataService } from './services/data.service';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { AddnewcarComponent } from './components/addnewcar/addnewcar.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ViewjobsComponent } from './components/viewjobs/viewjobs.component'; 

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    AddnewcarComponent,
    ViewjobsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule 
  ],
  providers: [
    DataService,
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
