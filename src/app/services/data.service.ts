import { Injectable } from '@angular/core';
import { Data } from 'src/models/data.model';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private data: Data;

  constructor() { 
    this.data = new Data();
  }

  getData() {
    return this.data;
  }

}
