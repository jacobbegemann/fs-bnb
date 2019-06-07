import { Component } from '@angular/core';
import { User } from 'src/models/user.model';
import { DataService } from '../services/data.service';
import { Message } from 'src/models/message.model';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {

  public messages: Array<Message>;

  constructor(private dataService: DataService) {
    
  }

  async ngOnInit() {
    const user: User = await this.dataService.getData().activeUser();
    this.messages = user.getMessages();
  }

}
