import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.scss']
})
export class BookingComponent implements OnInit {

  Username:string;
  Lastname:string;
  checkin: string;
  checkout:string;
  Adults:any;
  Children:any;
  Rooms:any;
  constructor(private route: ActivatedRoute,private router:Router) { }

  ngOnInit() {
   
  }
  onLogin(){
    console.log(); 
      this.router.navigate(['home/prices'], { queryParams: {Username: this.Username, Lastname: this.Lastname, checkin: this.checkin,  checkout: this.checkout, Adults: this.Adults, Children: this.Children,  Rooms: this.Rooms }});
    }
   
}  

