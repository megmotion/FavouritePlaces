import { Component, OnInit } from '@angular/core';
import { FlashMessagesService } from 'angular2-flash-messages';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(
  	public flashMessage:FlashMessagesService
  ) { }

  ngOnInit() {
  }

  login(){
  	this.flashMessage.show('You are logged in', {cssClass:'alert-success', timeout: 2000});
  }

}
