import { Component, OnInit } from '@angular/core';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import {ApiService} from "../services/services.service";
import {Country} from "../models/country.entity";
import {MatList, MatListItem} from "@angular/material/list";
import {MatLine} from "@angular/material/core";
import {AsyncPipe, NgForOf} from "@angular/common";
import {MatCard, MatCardContent} from "@angular/material/card";

@Component({
  selector: 'app-countries',
  standalone: true,
  imports: [
    MatIconModule,
    MatButtonModule,
    MatToolbarModule,
    MatListItem,
    MatList,
    MatLine,
    AsyncPipe,
    NgForOf,
    MatCard,
    MatCardContent
  ],
  templateUrl: './countries.component.html',
  styleUrl: './countries.component.css'
})
export class CountriesComponent implements OnInit {
    countries: any[] = [];
    country: Country = new Country();
    constructor(private apiService:ApiService) { }

    ngOnInit(): void {
       this.created();
    }
    created(){
         this.apiService.getData().subscribe( data=> {
             console.log(data);
             for( let i = 0; i < data.length; i++){
                  this.country = new Country(data[i].name, data[i].capital, data[i].population, data[i].area, data[i].region, data[i].subregion, data[i].flag);
                  this.countries.push(this.country);
             }
         })
    }
}
