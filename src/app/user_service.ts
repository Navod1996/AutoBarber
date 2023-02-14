import {Injectable} from '@angular/core';

interface UserDetails{
  userId: string;
  userName: string;
  userEmail: string;
  userPhone: string;
  userArea: string;
}
@Injectable()
export class UserService{
  private user: UserDetails;

  constructor(){}

  setUser(user: UserDetails){
    this.user = user;
  }

  getUID(){
    return this.user.userId;
  }
}
