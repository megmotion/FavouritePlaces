import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

import { ApiService } from '../../api.service';

@Component({
  selector: 'app-place',
  templateUrl: './place.component.html',
  styleUrls: ['./place.component.css'],
  providers: [ApiService],
})
export class PlaceComponent implements OnInit {
  id:any;
  place:any;

  constructor(
  	 private router:Router,
  	 private route:ActivatedRoute,
  	 private api:ApiService
  ) { }

  ngOnInit() {
  	//get id
  	this.id = this.route.snapshot.params['id'];

    this.api.getPlaceDetails(this.id).subscribe(
      data => {
        this.place = data;
      },
      error => {
        console.log(error);
      }
    )
  }

  onDeleteClick() {
    this.api.deletePlace(this.id).subscribe(
      error => {
        console.log(error);
      }
    )
  this.router.navigate(['/list']);
  }

}
