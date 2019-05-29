import { Component } from '@angular/core';
import { User } from 'src/models/user.model';
import { DataService } from '../data.service';
import { UserReview } from 'src/models/user-review.model';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  private numReviews: number;
  private reviews: Array<UserReview>;
  private numBookings: number;
  private location: string;
  private firstName: string;
  private lastName: string;
  private photoSource: string;
  private yearJoined: number;

  constructor(private dataService: DataService) {
    const user: User = dataService.getData().peekUser();
    this.numReviews = user.getReviews().length;
    this.reviews = user.getReviews();
    this.numBookings = user.getNumBookings();
    this.location = user.getLocation();
    this.firstName = user.getFirstName();
    this.lastName = user.getLastName();
    this.photoSource = user.getPhotoSource();
    this.yearJoined = user.getYearJoined();
  }

}
