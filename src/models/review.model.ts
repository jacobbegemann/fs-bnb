import { User } from './user.model';

export class Review {

  constructor(private reviewer: User,
    private reviewee: User,
    private text: string,
    private rating: number) {}

}