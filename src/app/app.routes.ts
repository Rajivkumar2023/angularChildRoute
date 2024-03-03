import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CustomerComponent } from './customer/customer.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { AdminComponent } from './admin/admin.component';
import { ProductComponent } from './product/product.component';

export const routes: Routes = [
    {path:'',redirectTo:"",pathMatch:'full'},
    {path:"",component:HomeComponent},
    {path:"customer",component:CustomerComponent},
    {path:"contact-us",component:ContactUsComponent},
    {path:'product',component:ProductComponent},
    {path:"product",children:[
        {path:'admin',component:AdminComponent}
    ]},
    {path:"",children:[
        {path:'admin',component:AdminComponent}
    ]}

];
