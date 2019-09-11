import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../api.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  places = [{name: "loading list..."}];

  constructor(private api:ApiService) { 
  	this.getPlaces();
  }

  ngOnInit() {
  }

  getPlaces = () => {
  	this.api.getAllPlaces().subscribe(
  		data => {
  			this.places = data;
  		},
  		error => {
  			console.log(error);
  		}
  	)
  }

}
