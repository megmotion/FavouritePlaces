import { Component } from '@angular/core';
import { ApiService } from './api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [ApiService],
})
export class AppComponent {
  places = [{name: "loading list..."}];
  selectedPlace;
  
  constructor(private api:ApiService){
  	this.getPlaces();
    this.selectedPlace = {id:-1, name:'',link:'', address:'', description:''}
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
  placeClicked = (place) => {
    this.api.getOnePlace(place.id).subscribe(
      data => {
        this.selectedPlace = data;
      },
      error => {
        console.log(error);
      }
    )
  }

  updatePlace = () => {
    this.api.updatePlace(this.selectedPlace).subscribe(
      data => {
        this.getPlaces();
      },
      error => {
        console.log(error);
      }
    )
  }

  createPlace = () => {
    this.api.createPlace(this.selectedPlace).subscribe(
      data => {
        this.places.push(data);
      },
      error => {
        console.log(error);
      }
    )
  }

  deletePlace = () => {
    this.api.deletePlace(this.selectedPlace.id).subscribe(
      data => {
        this.getPlaces();
      },
      error => {
        console.log(error);
      }
    )
  }
}
