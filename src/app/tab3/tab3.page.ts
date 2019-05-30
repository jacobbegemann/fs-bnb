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

  ngOnInit() {
    const user: User = this.dataService.getData().peekUser();
    this.messages = user.getMessages();
  }

}
