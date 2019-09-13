import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router'; 
import { FlashMessagesModule } from 'angular2-flash-messages';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { ListComponent } from './components/list/list.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { PlaceComponent } from './components/place/place.component';
import { AddPlaceComponent } from './components/add-place/add-place.component';
import { EditPlaceComponent } from './components/edit-place/edit-place.component';

const appRoutes: Routes = [
	{path:'', component:HomeComponent},
	{path:'list', component:ListComponent},
  {path:'place/:id', component:PlaceComponent},
  {path:'add-place', component:AddPlaceComponent},
  {path:'edit-place/:id', component:EditPlaceComponent},
]

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ListComponent,
    NavbarComponent,
    PlaceComponent,
    AddPlaceComponent,
    EditPlaceComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FlashMessagesModule.forRoot(),
    FormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
