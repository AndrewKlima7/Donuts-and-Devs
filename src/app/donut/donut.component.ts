import { Component, OnInit } from '@angular/core';
import { Donuts, ResultsData } from '../donuts';
import { DonutService } from '../donuts.service';

@Component({
  selector: 'app-donut',
  templateUrl: './donut.component.html',
  styleUrls: ['./donut.component.css'],
  providers:[DonutService]
})
export class DonutComponent {

  constructor(private donut: DonutService) { 
    this.getDonut();
  }
  d: ResultsData | null | undefined = this.donut.currentDonut;

  getDonut() {
    this.donut.getDonut()
    .subscribe((topListing: Donuts) => {
      console.log(topListing.data);
      this.d = topListing.data[1];
    });
  }

}
