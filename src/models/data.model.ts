import { User } from './user.model';
import { Rental } from './rental.model';
import { UserReview } from './user-review.model';
import { Message } from './message.model';

export class Data {

  private users: Array<User>;
  private rentals: Array<Rental>;

  constructor() {
    this.users = new Array();
    this.rentals = new Array();
    this.addDummyData();
  }

  peekUser(): User {
    return this.users[this.users.length - 1];
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

  addDummyData() {
    const johnDoe = new User(
      "example", "password", "John",
      "Doe", "01/01/1900", "1234567890",
      "assets/gettyimages-985138634-612x612.jpg",
      2010, "New York");
    const janeSmith = new User(
      "example", "password", "Jane",
      "Smith", "01/01/1900", "1234567890",
      "assets/gettyimages-985138634-612x612.jpg",
      2010, "New York"
    );
    const bobDylan = new User(
      "example", "password", "Bob",
      "Dylan", "01/01/1900", "1234567890",
      "assets/gettyimages-985138634-612x612.jpg",
      2010, "New York"
    );
    this.users.push(johnDoe);
    const sampleReview1 = new UserReview(bobDylan, johnDoe,
       "This host was excellent, very clean and very nice. Definitely recommend!", 5);
    const sampleReview2 = new UserReview(janeSmith, johnDoe,
       "This host pretty good, clean and mostly left you alone. Would recommend!", 4);
    johnDoe.addReview(sampleReview1);
    johnDoe.addReview(sampleReview2);
    const save1 = new Rental(
      "A nice home in suburban MA...",
      "Norwood, Massachusetts",
      ["assets/2L6A5804-HDR-Mail-altrd_1_-_small.webp"],
      "Alice Jones",
      "$50/night"
    );
    johnDoe.saveHome(save1);
    const message1 = new Message(
      janeSmith, johnDoe, "Hello there! Welcome to fs-bnb.", "10:00"
    );
    johnDoe.recieveMessage(message1);
  }

}