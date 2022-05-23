import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { LoginComponent } from './login/login.component';
import { SalesComponent } from './sales/sales.component';


const routes: Routes = [
  {
    path:'',
    component:LoginComponent,
    
  },
  {
    path:'menu',
    component:HeaderComponent,
    children:[
      {
        path:'sales',
        component:SalesComponent,
      },
      
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
