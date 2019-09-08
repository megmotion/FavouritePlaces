import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  baseurl = "http://localhost:8000";
  httpHeaders = new HttpHeaders({'Content-Type': 'application/json'})

  constructor(private http: HttpClient) { }

  getAllPlaces(): Observable<any>{
  	return this.http.get(this.baseurl + '/places/', 
  		{headers: this.httpHeaders});
  }

  getOnePlace(id): Observable<any>{
  	return this.http.get(this.baseurl + '/places/' + id + "/", 
  		{headers: this.httpHeaders});
  }

  updatePlace(place): Observable<any>{
  	const body = {name:place.name, link:place.link, address:place.address, description:place.description};
  	return this.http.put(this.baseurl + '/places/' + place.id + "/", body,
  		{headers: this.httpHeaders});
  }

  createPlace(place): Observable<any>{
  	const body = {name:place.name, link:place.link, address:place.address, description:place.description};
  	return this.http.post(this.baseurl + '/places/', body,
  		{headers: this.httpHeaders});
  }

  deletePlace(id): Observable<any>{
  	return this.http.delete(this.baseurl + '/places/' + id + "/",
  		{headers: this.httpHeaders});
  }
}
