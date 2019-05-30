import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { Trip } from 'src/models/trip.model';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-tab5',
  templateUrl: './tab5.page.html',
  styleUrls: ['./tab5.page.scss'],
})
export class Tab5Page implements OnInit {

  public trips: Array<Trip>;

  constructor(private navctrl: NavController, 
    private dataService: DataService) { 
    this.trips = dataService.getData().peekUser().getBookings();
  }

  ngOnInit() {
  }

  goToRental(trip: Trip) {
    this.navctrl.navigateForward('/rental',
     {queryParams: {rentalID: trip.getRental().id}});
  }

  goToExplore() {
    this.navctrl.navigateForward('tabs/tab4');
  }

}
