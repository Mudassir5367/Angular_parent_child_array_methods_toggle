import { Component, OnInit } from '@angular/core';
import { developer } from '../model';

@Component({
  selector: 'app-array',
  templateUrl: './array.component.html',
  styleUrls: ['./array.component.scss']
})
export class ArrayComponent implements OnInit {
arr: developer []=[]

  constructor() { }

  ngOnInit() {
    this.intialis();
    this.formValues();
    this.addressShow();
    this.nameShow();
    this.unshift()
    this.splice()
    this.indexOf()
    console.log("kkkkkkkk", this.arr);

    
  }

  


intialis(){
  this.arr = [
    { id:1,name:"Ali",address:"Multan" },
    { id:2,name:"Haider",address:"Bahawalpur" },
    { id:3,name:"Noor",address:"Lahore" },
    { id:4,name:"Hassan",address:"Karachi" },
    { id:5,name:"Arslan",address:"Peshawar" },
    { id:6,name:"Amir",address:"Kot Addu" },
  ];
}

formValues(){
  let obj = { id:7,name:"Ali",address:"Multan" };
  this.arr.push(obj);
}
addressShow(){
  let address: any[] = []
this.arr.forEach((obj)=>{
  address.push(obj.address);
});
console.log("address:", address);
}

nameShow(){
  let name: any[] = []
this.arr.map((obj)=>{
  name.push(obj.name);
});
console.log("name:", name);
}

unshift(){
  let obj = { id:8,name:"Shahzad",address:"Multan" };
  this.arr.unshift(obj)
  
}

splice(){
  let obj = { id:9,name:"Ahmad",address:"Multan" };
  this.arr.splice(0,0,obj)
}

indexOf(){
  let obj = this.arr.findIndex((object:any)=>{
   return object.name==="Noor";
 })
    console.log("The index of Noor is:",obj);
        
  
}

}
