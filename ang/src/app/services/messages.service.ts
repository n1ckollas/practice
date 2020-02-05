import { Injectable } from '@angular/core';
@Injectable({
  providedIn: 'root'
})
export class MessagesService {
  messages: String[] = [];

  constructor() { }

  add(message:String){
    this.messages.push(message);
  }
  clear(){
    this.messages = []
  }
}
