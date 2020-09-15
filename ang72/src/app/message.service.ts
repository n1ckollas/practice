import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MessageService {
  messages: string[] = [];
  newMessage: BehaviorSubject<string> = new BehaviorSubject('');
  constructor() { }

  add(message: string): void{
    this.messages.push(message);
    this.newMessage.next(message);
  }

  clear(): void {
    this.messages = [];
  }
}
