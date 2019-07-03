import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { BookingComponent } from './booking/booking.component';
import { AboutComponent } from './about/about.component';
import { GalleryComponent } from './gallery/gallery.component';
import { PricesComponent } from './prices/prices.component';
import { parseLazyRoute } from '@angular/compiler/src/aot/lazy_routes';
import { PaymentComponent } from './payment/payment.component';
import { GymComponent } from './gym/gym.component';
import { SpaComponent } from './spa/spa.component';
import { SpafacilitiesComponent } from './spafacilities/spafacilities.component';
import { ResturantComponent } from './resturant/resturant.component';
import { NewgymComponent } from './newgym/newgym.component';

const routes: Routes = [{path:"home",component:HomeComponent,
children:[{path:"booking",component:BookingComponent},
{path:"",component:AboutComponent},{path:"about", redirectTo:""},
{path:"gallery",component:GalleryComponent},
{path:"prices",component:PricesComponent},
{path:"payment",component:PaymentComponent},{
path:"gym",component:GymComponent}, {path:"spa",component:SpaComponent},
{path:"spafacilities",component:SpafacilitiesComponent},
{path:"resturant",component:ResturantComponent},
{path:"newgym",component:NewgymComponent}]}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
