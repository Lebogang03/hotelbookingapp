import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {   FormsModule} from '@angular/forms';
import {ReactiveFormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { BookingComponent } from './booking/booking.component';
import { AboutComponent } from './about/about.component';
import { GalleryComponent } from './gallery/gallery.component';
import { PricesComponent } from './prices/prices.component';
import { from } from 'rxjs';
import { PaymentComponent } from './payment/payment.component';
import { GymComponent } from './gym/gym.component';
import { SpaComponent } from './spa/spa.component';
import { SpafacilitiesComponent } from './spafacilities/spafacilities.component';
import { ResturantComponent } from './resturant/resturant.component';
import { NewgymComponent } from './newgym/newgym.component';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    BookingComponent,
    AboutComponent,
    GalleryComponent,
    PricesComponent,
    PaymentComponent,
    GymComponent,
    SpaComponent,
    SpafacilitiesComponent,
    ResturantComponent,
    NewgymComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
