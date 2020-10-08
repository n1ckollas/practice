import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MessagesService {
  public messages = [];
  constructor() { }

  add(message: string): void {
    this.messages.push(message);
  }
   
  clear(): void {
    this.messages = [];
  }
}
