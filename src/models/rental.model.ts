import { User } from './user.model';

export class Rental {

  public id: number;
  public hostName: string;

  constructor(private name: string, 
    private location: string,
    private pictureSources: Array<string>,
    private hostID: number,
    private price: string) {}

    getLocation() { return this.location; }

    getPictureSources() { return this.pictureSources; }

    getCoverPhoto() { return this.pictureSources[0]; }

    getHost() { return this.hostID; }

    getPrice() { return this.price; }

    getName() { return this.name; }
    
}