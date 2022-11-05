import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginGuard } from './login.guard';
import { LoginComponent } from './login/login.component';

import { NotFoundComponent } from './not-found/not-found.component';
import { RoomFormComponent } from './room-form/room-form.component';
import { RoomComponent } from './room/room.component';
import { RoomsComponent } from './rooms/rooms.component';
import { SecondPageComponent } from './second-page/second-page.component';

const routes: Routes = [
  {
    path: 'rooms',
    component: RoomsComponent,
    canActivate: [LoginGuard],
  },
  {
    path: 'room/:id',
    component: RoomComponent,
    canActivate: [LoginGuard],
  },
  {
    path: 'rooms/add',
    component: RoomFormComponent,
    canActivate: [LoginGuard],
  },
  {
    path: 'page',
    component: SecondPageComponent,
    canActivate: [LoginGuard],
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: '',
    redirectTo: 'rooms',
    pathMatch: 'full',
  },
  {
    path: '**',
    component: NotFoundComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
