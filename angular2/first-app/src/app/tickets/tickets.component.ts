import {Component, Injectable, OnInit} from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tickets',
  templateUrl: './tickets.component.html',
  styleUrls: ['./tickets.component.css']
})
export class TicketsComponent implements OnInit {
private tickets=[];
  constructor( private router: Router) { }

  ngOnInit() {
   this.tickets=[{
     movie: "Fida",
     Rating: "3.5",
     Review: "Worth watch movie- TG-pilla Movie"
   },
     {

       movie: "Ninnu Kori",
       Rating: "3.5",
       Review: "One more hit for NANI"

     },{
       movie: "Shamantakamani",
       Rating: "3",
       Review: "Good Direction! Same style of acting from Nara Rohith"
     }]
  }

  _moredetails(ticket){
      this.router.navigate(['ticket', ticket.movie]);
  }
}
