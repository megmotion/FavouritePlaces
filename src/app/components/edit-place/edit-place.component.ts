import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

import { ApiService } from '../../api.service';

@Component({
  selector: 'app-edit-place',
  templateUrl: './edit-place.component.html',
  styleUrls: ['./edit-place.component.css']
})
export class EditPlaceComponent implements OnInit {
	id;
	place;
  	name:any;
  	link:any;
  	address:any;
  	description:any;
  constructor(
  	private router:Router,
  	private route: ActivatedRoute,
  	private api:ApiService
  ) { }

  ngOnInit() {
  	this.id = this.route.snapshot.params['id'];
  	  this.api.getPlaceDetails(this.id).subscribe(
      data => {
        this.name = data.name,
  		this.link = data.link,
  		this.address = data.address,
  		this.description = data.description
      },
      error => {
        console.log(error);
      }
    )
  }

  onEditSubmit() {
  	let place = {
  		id: this.id,
  		name: this.name,
  		link: this.link,
  		address: this.address,
  		description: this.description
  	}

    this.api.updatePlace(place).subscribe(
      error => {
        console.log(error);
      }
    )
    this.router.navigate(['/list']);
  }
   

}
