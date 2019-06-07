import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';
import { DataService } from '../services/data.service';
import { User } from 'src/models/user.model';
import { Rental } from 'src/models/rental.model';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  public saved: Array<Rental>;

  constructor(private navctrl: NavController,
    private dataService: DataService) { }

  async ngOnInit() {
    const user: User = await this.dataService.getData().activeUser();
    this.saved = user.getSaved();
  }

  goToExplore() {
    this.navctrl.navigateForward('tabs/tab4');
  }

  goToRental(rental: Rental) {
    this.navctrl.navigateForward(
      'rental',
      { queryParams: { rentalID: rental.id } }
    );
  }

}
