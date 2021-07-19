import { HttpClient } from "@angular/common/http";
import { Donuts } from "./donuts";
import { Inject, Injectable } from '@angular/core';
@Injectable({
    providedIn: 'root'
})
export class DonutService{
    constructor(private http: HttpClient){

    }

    baseURL: string = 'https://grandcircusco.github.io/demo-apis/donuts.json'
    currentDonut: any;
     getDonut(): any{
        return this.http.get<Donuts>(this.baseURL);
     }
}