import { Routes } from '@angular/router';
import {CountriesComponent} from "./countries/components/countries.component";

export const routes: Routes = [

  { path: '', redirectTo: '/countries', pathMatch: 'full' },
  {path:'countries', component: CountriesComponent},

];
