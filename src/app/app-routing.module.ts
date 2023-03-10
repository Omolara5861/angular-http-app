import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UsersComponent } from './components/users/users.component';
import { UserDetailComponent } from './components/user-detail/user-detail.component';
import { UserResolver } from './services/user.resolver';

const routes: Routes = [
  {path: 'users', component: UsersComponent},
  {path: 'user/:uuid', component: UserDetailComponent, resolve: {resolvedUser: UserResolver}},
  {path: '**', redirectTo: 'users'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
