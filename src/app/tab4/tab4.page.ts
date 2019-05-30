import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';
import { Rental } from 'src/models/rental.model';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-tab4',
  templateUrl: './tab4.page.html',
  styleUrls: ['./tab4.page.scss'],
})
export class Tab4Page implements OnInit {

  public rentals: Array<Rental>;

  constructor(private data: DataService,
    private navctrl: NavController) { 
    this.rentals = data.getData().getRentals();
  }

  ngOnInit() {
  }

  goToRental(rental: Rental) {
    this.navctrl.navigateForward(
      'rental',
      {queryParams: {rentalID: rental.id}}
    );
  }

}
