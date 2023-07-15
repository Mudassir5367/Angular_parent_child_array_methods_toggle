import { Component, OnInit,Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss']
})
export class ChildComponent implements OnInit {
@Input() data: any;
firstNumber?: number=0;
secondNumber?: number=0;
//
@Input() getDatafromParent: string = '';
@Output() passDataToParent: EventEmitter<string> = new EventEmitter()
//.
@Input() getNumberfromParent: number = 0;

items: any = [
  {
    firstNumber: this.firstNumber,
    secondNumber: this.secondNumber,
  }
]

 
 constructor(){
  console.log('constructor');
 }

 ngOnInit(): void {
   console.log('ngOnInit');
 }
 //
 clickEvent(){
  this.passDataToParent.emit('Received data from child component');
 }
 //.

 submit(item: any){
  console.log("item:", this.firstNumber);
  //items.forEach((item: any)=>{
    console.log("ITEM:", item);
    if(item.firstNumber == 5){
      console.log("IFFFFFF", item.firstNumber + item.secondNumber);    
    }else{
      console.log("ELSE:", item.firstNumber * item.secondNumber);
      
    }
    
 // })
 }

}
