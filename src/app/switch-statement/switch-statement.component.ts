import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-switch-statement',
  templateUrl: './switch-statement.component.html',
  styleUrls: ['./switch-statement.component.scss']
})
export class SwitchStatementComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  color="orange"
// ngStyle

  getColor(country: any) { 
    if(country){
      switch (country) {
        case 'UK':
          return 'orange';
        case 'USA':
          return 'blue';
        case 'HK':
          return 'red';
          case 'PAK':
            return 'Orange';
      }
    }
  }

  people: any[] = [
    {
      "name": "Umar",
      "country": 'UK'
    },
    {
      "name": "Ahad",
      "country": 'USA'
    },
    {
      "name": "Noman",
      "country": 'HK'
    },
    {
      "name": "Mudassir",
      "country": 'PAK'
    },
   
  ];


  getColor1(country:any){
    if(country){
      switch(country){
        case 'PAK':
          return 'Orange';
          case 'AFG':
            return 'red';
            case 'CHINA':
              return 'yellow';
      }
    }
  }


  arr=[
    { name:'Mudassir',country:"PAK" },
    { name:'Arslan',country:"AFG" },
    { name:'Hassan',country:"CHINA" },
  ];



}
