import { Component } from '@angular/core';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  private numReviews: number;
  private numBookings: number;
  private location: string;
  private firstName: string;
  private lastName: string;

  constructor() {
    this.numReviews = 2;
    this.numBookings = 2;
    this.location = "the United States";
    this.firstName = "Jacob";
    this.lastName = "Begemann";
  }

}
