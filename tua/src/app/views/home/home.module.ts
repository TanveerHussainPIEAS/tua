import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SignUpComponent } from './sign-up/sign-up.component';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CoreViewModule } from 'src/app/core-view/core-view.module';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,

    children: [
      { path: 'sign-up', component: SignUpComponent },
    ],

  }];


@NgModule({
  declarations: [
    SignUpComponent,
    HomeComponent
  ],
  imports: [
    CommonModule,
    CoreViewModule,
    RouterModule.forChild(routes),
  ]
})
export class HomeModule { }
