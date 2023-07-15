import { Component, Input, Output } from '@angular/core';
import { FormGroup,FormControl } from '@angular/forms'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
// Reactive Form
loginForm = new FormGroup({
  user: new FormControl(''),
  password: new FormControl(''),
})

detailForm = new FormGroup({
  user1: new FormControl(''),
  email: new FormControl(''),
  password: new FormControl(''),
  })




  
//   ng-style and ng-class

color1 = "orange"
err=true;

updateColor(){
  this.err=! this.err
}

// Switch Statemet
color="yellow"





  a: number = 10;
  b: number = 7;
  //
  @Output() passDataToChild:string = "Hello Child Component...";
// from child to parent
public getData2:string='';
public fetchData:string=''
  public getData:string = '';
  // practice Again parent child relation
  // the below is use for child to parent data relation
// public  getData4: any;
//

public getNumber:number = 10;

//.
// from child 1 to parent
getData1:string='';

// child-1

@Output() passDataToChild1:string=" Yes Data passing from parent to child";
public dataToChld1:string="The data is passing from parent to child";

public arr:any=[
  {Name:"Umar",age:26,depart:"BSCS"},
  {Name:"Ahad",age:24,depart:"BSCS"},
  {Name:"Noman",age:24,depart:"BSCS"},
  {Name:"Mudassir",age:22,depart:"BSCS"}
]
public arr1:any=[
  {fName:"Ali",age:10},
  {fName:"Akmal",age:15},
  {fName:"Abid",age:20}
]





// from child-1 to parent
// practice Again parent child relation

public dataFromParentToChild:string="Yes The Data is passing from parent to child"
// the below is use for child to parent data relation
// public  getData5: any;


// practice Again parent child relation

public arr2:any = [
{ Name:"ABC",Phone:"XYZ" },
{ Name:"ABC",Phone:"XYZ" },
{ Name:"ABC",Phone:"XYZ" }
]


// Day-3
constructor(){}

// ngOnInit(){
//   this.statements();
// }

form(){
  console.log(this.loginForm.value);
  
}

gainData(event:string){
  this.getData2 = event

}
gettingData(event:string){
  this.fetchData = event
}

//.
receivedData(event:string){
  this.getData = event;
}
  //.

  // from child 1 to parent
  fromChild1(event:string){
    this.getData1=event
  }

data="hello";

updateData(){
this.data = "Hi...";

}

// *ngIf-Else

// show="yes";

// simple if-else


//  n: any =50;
//  test(){
//   if (this.n%2==0) {
//     console.log("This is even number", this.n);
    
//   }
//   else
//   {
//     console.log("This is Odd number",this.n);
    
//   }
//  }

// statements(){
// if(this.a > 10){
//   console.log("TTTTTTT");
  
// }else{
//   console.log("ffff",this.a + this.b);
// }

// }



// employ: any=["Ahad","Umer","Noman","Mudassir"];

 // forEach

// arrObj:any=[
//      {name:"Umar",age:26, depart:"CS"},
//      {name:"Noman",age:25, depart:"CS"},
//      {name:"Mudassir",age:22, depart:"CS"},

// ];










// Day-1 & 2


//   students: any[] = [
//     {
//       firstName: "",
//       lastName: ""
//     }
//   ];
// Array of object
// employ: any=["Ahad","Umer","Noman","Mudassir"];
// arrObj:any=[
//   {name:"Umar",age:26, depart:"CS"},
//   {name:"Noman",age:25, depart:"CS"},
//   {name:"Mudassir",age:22, depart:"CS"},
 

// ];
// // *ngIf
//   title: string = '1122';
//   showTitle:boolean = false;



//   firstName: string = "";
//   lastName: string = "";

  


//   name="Mudassir";
//   disable=false;

//   val:any="";

//   clickEvent(val:any){
//     this.showTitle = true;


//   }

//   submit(students: any){
//     console.log("student", students);
    
//   }
  
//   ShowClick(){
//     alert("Show Alert!")
//   }

// function n(arg0: string, n: any) {
//   throw new Error('Function not implemented.');
// }
} 



