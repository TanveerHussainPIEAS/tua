import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { UnauthorizedComponent } from './unauthorized/unauthorized.component';
import { AngularMaterialModule } from '../angular-material/angular-material.module';



@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    UnauthorizedComponent
  ],
  imports: [
    CommonModule,
    AngularMaterialModule,
  ],
  exports: [HeaderComponent,FooterComponent,UnauthorizedComponent]
})
export class CoreViewModule { }
