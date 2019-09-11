import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { ApiService } from '../../api.service';

@Component({
  selector: 'app-add-place',
  templateUrl: './add-place.component.html',
  styleUrls: ['./add-place.component.css']
})
export class AddPlaceComponent implements OnInit {
  places:any;
  name:any;
  link:any;
  address:any;
  description:any;

  constructor(
  	private router:Router,
  	private api:ApiService
  ) { }

  ngOnInit() {
  }

  onAddSubmit = () => {
  	let place = {
  		name: this.name,
  		link: this.link,
  		address: this.address,
  		description: this.description
  	}
    this.api.createPlace(place).subscribe(
      data => {
        this.places.push(data);
      },
      error => {
        console.log(error);
      }
    )

    this.router.navigate(['list']);
  }

}
