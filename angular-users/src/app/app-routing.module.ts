import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserListComponent } from './components/user-list/user-list.component';
import { UserFormComponent } from './components/user-form/user-form.component';
import { ConttattiComponent } from './conttatti/conttatti.component';

const routes: Routes = [
  {path: 'users', component: UserListComponent},
  {path: 'add', component: UserFormComponent},
  {path: 'conttatti', component: ConttattiComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
