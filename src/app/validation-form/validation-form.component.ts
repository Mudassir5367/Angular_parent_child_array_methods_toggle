import { Component, OnInit } from '@angular/core';
import { IForm } from '../model';

@Component({
  selector: 'app-validation-form',
  templateUrl: './validation-form.component.html',
  styleUrls: ['./validation-form.component.scss']
})
export class ValidationFormComponent implements OnInit {


  formArr: any[] = [];
  fNameValid:boolean = false;
  lNameValid:boolean = false;
  selectValid:boolean = false;
  religionValid:boolean = false;
  dateValid:boolean = false;
  boxValid:boolean = false
  
  formData:IForm = {
    // id: 0,
    name:'',
    fname:'',
    lname:'',
    dropdown:'',
    religion:'',
    date:'',
    box:false,

  }

  constructor() { }

  ngOnInit(): void {
  }


  // submitEvent(){
  //   console.log("The value is:",this.formData);
  //   if(this.formData && this.formData.fname === '' ){
  //     this.isNameValid = true;
  //   } else if(this.formData && this.formData.fname?.length){
  //     this.isNameValid = false;
  //   }
   
   
  // }

  forms:IForm [] = [
    {fname:"",
    lname:'',
    dropdown:'',
    religion:'',
    date:'',
    box:false
  },
  ];


  // user(form: any){
  //   this.formArr.push(form);
  //   console.log( 'The form data is :',this.formArr);
  // }

  
  test(){

    console.log("The value is:",this.formData);
    if(this.formData && this.formData.fname === '' ){
      this.fNameValid = true;
    } else if(this.formData && this.formData.fname && this.formData.fname?.length > 0){
      this.fNameValid = false;
    }

    console.log("The value is:",this.formData);
    if(this.formData && this.formData.lname === '')
    {
      this.lNameValid = true;
    }
    else if(this.formData && this.formData.lname && this.formData.lname?.length > 0)
    {
      this.lNameValid = false;
    }

    console.log("The vlue is: ", this.formData);
    if(this.formData && this.formData.dropdown === '')
    {
      this.selectValid = true;
    }
    else if(this.formData && this.formData.dropdown)
    {
      this.selectValid = false
    }
    
    console.log("The value is:",this.formData);
    if(this.formData && this.formData.religion === '')
    {
      this.religionValid = true;
    }
    else if(this.formData && this.formData.religion && this.formData.religion?.length > 0)
    {
      this.religionValid = false
    }
    


    console.log("The value is:",this.formData);
    if(this.formData && this.formData.date === '' ){
      this.dateValid = true;
    } else if(this.formData && this.formData.date && this.formData.date?.length > 0){
      this.dateValid = false;
    }


    console.log("The value is:",this.formData);
    if(this.formData && this.formData.box === false)
    {
      this.boxValid = true;
    }
    else if(this.formData && this.formData.box)
    {
      this.dateValid = true;
    }
    
}

  

}
