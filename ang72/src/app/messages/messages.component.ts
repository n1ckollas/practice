import { Component, OnInit, AfterViewInit } from '@angular/core';
import { MessageService } from '../message.service';
import { MatSnackBar, MatSnackBarVerticalPosition } from '@angular/material/snack-bar';


@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.scss']
})
export class MessagesComponent implements OnInit {
  public displayMessage:string;
  verticalPosition: MatSnackBarVerticalPosition = 'top';

  constructor(
    public mService: MessageService,
    private snackBar: MatSnackBar) { }

  ngOnInit() {
    this.mService.newMessage.subscribe(m => {
      this.displayMessage = m;
      setTimeout(()=> this.snackBar.open(m,'X',{
        duration: 1200,
        verticalPosition: this.verticalPosition
      }));
    });
  }

  confirmMessageClear(){
    this.snackBar.open("Messages are cleared", 'close', {
      duration: 2000,
      verticalPosition: this.verticalPosition,
    });
  }
}
