import { Injectable } from '@angular/core';
import { Data } from 'src/models/data.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private data: Data;

  constructor(private client: HttpClient) { 
    this.data = new Data(this.client);
  }

  getData() {
    return this.data;
  }

}
