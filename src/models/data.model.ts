import { User } from './user.model';
import { Rental } from './rental.model';

export class Data {

  private users: Array<User>;
  private rentals: Array<Rental>;

  constructor() {
    this.users = new Array();
    this.rentals = new Array();
  }

  addUser(user: User) {
    this.users.push(user);
  }

  addRental(rental: Rental) {
    this.rentals.push(rental);
  }

  validate(username: string, password: string): boolean {
    let found: boolean = false;
    this.users.forEach((user) => {
      if (user.getUsername() === username && user.getPassword() === password) {
        found = true;
      }
    });
    return found;
  }

  find(username: string) {
    let found: boolean = false;
    this.users.forEach((user) => {
      if (user.getUsername() === username) found = true;
    });
    return found;
  }

}