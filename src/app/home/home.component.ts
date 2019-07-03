import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  list = [ {name:'About',path:'/home/about'},
  {name:'Booking',path:'/home/booking'},
   {name:'personal details',path:'/home/prices'}, 
    {name:'Payment',path:'/home/payment'}
];


constructor(private router:Router) { 
}


onNavigate(item){
  this.router.navigateByUrl(item.path);
}

  ngOnInit() {
  }

}
