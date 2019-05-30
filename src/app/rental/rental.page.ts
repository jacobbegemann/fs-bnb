import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from '../data.service';

@Component({
  selector: 'app-rental',
  templateUrl: './rental.page.html',
  styleUrls: ['./rental.page.scss'],
})
export class RentalPage implements OnInit {

  public location: string;
  public coverPhoto: string;
  public name: string;
  public hostName: string;
  public email: string;
  public found: boolean = false;

  constructor(private activatedRoute: ActivatedRoute,
    private dataService: DataService) { }

  ngOnInit() {
    this.activatedRoute.queryParamMap.subscribe(
      (data: any) => {
        this.find(data.params.rentalID);
      }
    )
  }

  find(rentalID: number) {
    this.dataService.getData().getRentals().forEach((item) => {
      if (item.id == rentalID) {
        this.found = true;
        this.location = item.getLocation();
        this.coverPhoto = item.getCoverPhoto();
        this.name = item.getName();
        this.hostName = `${item.getHost().getFirstName()} ${item.getHost().getLastName()}`;
        this.email = item.getEmail();
      } 
    });
  }

}
