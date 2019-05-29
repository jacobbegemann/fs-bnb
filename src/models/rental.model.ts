export class Rental {

  constructor(private name: string, 
    private location: string,
    private pictureSources: Array<string>,
    private hostName: string,
    private price: string) {}

    getLocation() { return this.location; }

    getPictureSources() { return this.pictureSources; }

    getCoverPhoto() { return this.pictureSources[0]; }

    getHostName() { return this.hostName; }

    getPrice() { return this.price; }

}