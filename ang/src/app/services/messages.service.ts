import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MessagesService {
  messages: String[] = [];
  constructor() { }

  add(messgae: String){
    this.messages.push(messgae)
  }
  clear(){
    this.messages = []
  }
}
