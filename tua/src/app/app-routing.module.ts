import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeaderComponent } from './core-view/header/header.component';
import { UnauthorizedComponent } from './core-view/unauthorized/unauthorized.component';
import { HomeModule } from './views/home/home.module';
import { SignUpComponent } from './views/home/sign-up/sign-up.component';

const routes: Routes = [

{
  path: 'unauthorized',
  component: UnauthorizedComponent,
},
{
  path: '',
  component: SignUpComponent,

},
  { path: 'home', component: HeaderComponent, loadChildren: () => import('./views/home/home.module').then(c => c.HomeModule)},  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
