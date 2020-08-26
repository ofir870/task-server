import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component } from '@angular/core';


import { AppComponent } from './app.component';
import { SideBarComponent } from './components/side-bar/side-bar.component';
import { MainComponent } from './components/main/main.component';
import { LayoutComponent } from './components/layout/layout.component';
import { LoginPageComponent } from './components/login-page/login-page.component';
import { ReadingFileJsonComponent } from './components/reading-file-json/reading-file-json.component' 
import {Routes, RouterModule} from '@angular/router';
import { TaskListComponent } from './components/task-list/task-list.component';
import { SettingsPageComponent } from './components/settings-page/settings-page.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

const appRoutesAuth: Routes = [
  { path: '' , component: LoginPageComponent},
  { path: 'login' , component: LoginPageComponent}
];
const appRoutes: Routes = [
    { path: 'main' , component: MainComponent},
    { path: 'tasklist' , component: TaskListComponent},
    { path: 'settings' , component: SettingsPageComponent},
];

@NgModule({
  declarations: [
    AppComponent,
    SideBarComponent,
    MainComponent,
    LayoutComponent,
    LoginPageComponent,
    ReadingFileJsonComponent,
    TaskListComponent,
    SettingsPageComponent
  ],
  imports: [
    BrowserModule,
    FontAwesomeModule,
    
    RouterModule.forRoot(appRoutesAuth),
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
