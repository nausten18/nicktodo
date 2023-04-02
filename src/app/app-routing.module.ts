import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TodoComponent } from './todo/todo.component';
import { AboutComponent } from './about/about.component';
import { GuidesComponent } from './guides/guides.component';
import { HomeComponent } from './home/home.component';
import { SupportComponent } from './support/support.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  { path: 'todo', component: TodoComponent },
  { path: 'about', component: AboutComponent },
  { path: 'guides', component: GuidesComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'support', component: SupportComponent },
  { path: 'login', component: LoginComponent },

];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
