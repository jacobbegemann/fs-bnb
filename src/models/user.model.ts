import { Review } from './review.model';

export class User {

  constructor(private username: string,
    private password: string,
    private firstName: string,
    private lastName: string,
    private birthday: string,
    private phone: string,
    private photoSource: string,
    private yearJoined: number,
    private numBookings: number,
    private location: string,
    private reviews: Array<Review>) {}

}