import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-prices',
  templateUrl: './prices.component.html',
  styleUrls: ['./prices.component.scss']
})
export class PricesComponent implements OnInit {
  Username:string;
  Lastname:string;
  checkin: string;
  checkout:string;
  Adults:any;
  Children:any;
  Rooms: any;
  constructor(private route: ActivatedRoute,private router:Router) { }
onPayment()
{
  this.router.navigateByUrl("home/payment")
}
  ngOnInit() {
    this.route.queryParams
    .subscribe(params => {
      console.log(params); 
      this.Username = params.Userneme;
      console.log(this.Username);
      this.Lastname = params.Lastname;
      console.log(this.Lastname); 
      this.checkin = params.checkin;
      console.log(this.checkin);
      this.checkout = params.checkout;
      console.log(this.checkout);
      this.Adults = params.Adults;
      console.log(this.Adults);
      this.Children = params.Children;
      console.log(this.Children);
      this.Rooms = params.Rooms;
      console.log(this.Rooms);
    });
  }
}