import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';
import { DataService } from '../data.service';
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
    private dataService: DataService) {
    const user: User = dataService.getData().peekUser();
    this.saved = user.getSaved();
  }

  goToExplore() {
    this.navctrl.navigateForward('tabs/tab4');
  }

}
