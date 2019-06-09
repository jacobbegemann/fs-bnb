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
  }

  async ngOnInit() {
    this.trips = await this.dataService.getData().getBookings(
      parseInt(localStorage.getItem("id"))
    );
    this.trips.forEach(async (value) => {
      value.rental = await this.dataService.getData().getRental(value.rentalID);
    });
  }

  goToRental(trip: Trip) {
    this.navctrl.navigateForward('/rental',
      { queryParams: { rentalID: trip.rental.id } });
  }

  goToExplore() {
    this.navctrl.navigateForward('tabs/tab4');
  }

}
