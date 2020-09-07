import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component } from '@angular/core';

import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { SideBarComponent } from './components/side-bar/side-bar.component';
import { MainComponent } from './components/main/main.component';
import { LayoutComponent } from './components/layout/layout.component';
import { LoginPageComponent } from './components/login-page/login-page.component';
import { Routes, RouterModule } from '@angular/router';
import { TaskListComponent } from './components/task-list/task-list.component';
import { SettingsPageComponent } from './components/settings-page/settings-page.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { TaskDetailsComponent } from './components/task-list/task-details/task-details.component';
import { HeaderComponent } from './components/header/header.component';
import { ModalFadeTasklistComponent } from './components/task-list/modal-fade-tasklist/modal-fade-tasklist.component';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { ModalModule } from 'ngx-bootstrap/modal';
import { MeasurementTypesComponent } from './components/measurement-types/measurement-types.component';
import { ModalFadeMeasurementTypesComponent } from './components/measurement-types/modal-fade-measurement-types/modal-fade-measurement-types.component';



const appRoutesAuth: Routes = [
  { path: '', component: LoginPageComponent },
  { path: 'login', component: LoginPageComponent }
];
const appRoutes: Routes = [
  { path: 'main', component: MainComponent },
  { path: 'tasklist/taskdetails/:name', component: TaskDetailsComponent },
  { path: 'measurementtypes', component: MeasurementTypesComponent },
  { path: 'tasklist', component: TaskListComponent },
  { path: 'settings', component: SettingsPageComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    SideBarComponent,
    MainComponent,
    LayoutComponent,
    LoginPageComponent,
    TaskListComponent,
    SettingsPageComponent,
    TaskDetailsComponent,
    HeaderComponent,
    ModalFadeTasklistComponent,
    MeasurementTypesComponent,
    ModalFadeMeasurementTypesComponent
  ],
  imports: [
    BrowserModule,
    FontAwesomeModule,
    HttpClientModule,
    BsDropdownModule.forRoot(),
    TooltipModule.forRoot(),
    ModalModule.forRoot(),
    RouterModule.forRoot(appRoutesAuth),
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
