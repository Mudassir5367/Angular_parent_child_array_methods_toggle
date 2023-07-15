import { Component, OnInit } from '@angular/core';
import { IForm } from '../model';
@Component({
  selector: 'app-template-form',
  templateUrl: './template-form.component.html',
  styleUrls: ['./template-form.component.scss']
})
export class TemplateFormComponent implements OnInit {
  // users:any[] = [];
  formArr: any[] = [];
  isNameValid:boolean = false;
  
  formData:IForm = {
    // id: 0,
    name:'',
    // fname:'',
    lname:'',
    dropdown:'',
    religion:'',
    date:'',
    box:false,

  }

  // table

  // onClick(uname:any,udept:any,userNmbr:any){
  //   this.users.push({
  //     name:uname.value,
  //     dept:udept.value,
  //     srNo:userNmbr.value
  //   });

  //   localStorage.setItem('user',JSON.stringify(this.users))
  // }

  // onRemove(i:any){
  //   this.users.splice(i,1);
  //   localStorage.setItem('users',JSON.stringify(this.users))
  // }




//  UMAR BHAI VALIDATON

  submitEvent(){
    console.log("The value is:",this.formData);
    if(this.formData && this.formData.fname === '' ){
      this.isNameValid = true;
    } else if(this.formData && this.formData.fname?.length){
      this.isNameValid = false;
    }
   
   
  }

  forms:IForm[] = [
    {fname:"",lname:'',dropdown:'',religion:'',date:'',box:false},
  ];



  // formSubmitEvent(){
  //   console.log('formSubmitEvent:',this.formData);
    
  // }
  // Template-Form
  user(form: any){
    this.formArr.push(form);
    console.log( 'The form data is :',this.formArr);
  }


  // without binding get data

  // user(item:any){
  //   console.log( 'The form data is :',item)
  
  // }





//
  

  constructor() { }

  ngOnInit(): void {
  }

  

  test(val: any){
    console.log("ooo",val);
    
  }
}
