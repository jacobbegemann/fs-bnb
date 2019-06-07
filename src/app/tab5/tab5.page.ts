import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { Trip } from 'src/models/trip.model';
import { DataService } from '../services/data.service';
import { User } from 'src/models/user.model';

@Component({
  selector: 'app-tab5',
  templateUrl: './tab5.page.html',
  styleUrls: ['./tab5.page.scss'],
})
export class Tab5Page implements OnInit {

  public trips: Array<Trip>;

  constructor(private navctrl: NavController, 
    private dataService: DataService) { 
  }

  async ngOnInit() {
    const user: User = await this.dataService.getData().activeUser();
    this.trips = user.getBookings();
  }

  goToRental(trip: Trip) {
    this.navctrl.navigateForward('/rental',
     {queryParams: {rentalID: trip.getRental().id}});
  }

  goToExplore() {
    this.navctrl.navigateForward('tabs/tab4');
  }

}
