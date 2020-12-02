import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { JewelryContactComponent } from './jewelry-contact/jewelry-contact.component';
import { RouchJoyasComponent } from './rouch-joyas/rouch-joyas.component';


const routes: Routes = [
  {path: '', redirectTo:'Joyas', pathMatch:'full'},
  {path: 'Joyas', component: RouchJoyasComponent},
  {path: 'Contact', component: JewelryContactComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
