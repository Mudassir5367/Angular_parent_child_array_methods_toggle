import { outputAst } from '@angular/compiler';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Data } from '@angular/router';

@Component({
  selector: 'app-child1',
  templateUrl: './child1.component.html',
  styleUrls: ['./child1.component.scss']
})
export class Child1Component implements OnInit {
  @Input() data:any
  @Input() DataFromParent:string=''
  @Input() data1:any
  @Input() dataIsFromParent:string=''
  @Input() arr:any[] = [];
  @Input() ArrayFromparent:any=[]
  @Input() data2:any[] = [];
  @Input() Array2:any [] = []
// practice Again parent child relation
  @Input() arr2:any[]= [];
  @Input() Arr2DataFromParent:any[] = []
// practice Again parent child relation
  @Input() practice:any;
  @Input() dataFromParentToChild:any;
  
  // from child1 to parent
  @Output() passDataToParent1:EventEmitter<string> = new EventEmitter()
  @Output() dataToParent:EventEmitter<string> = new EventEmitter()
  @Output() childToParent:EventEmitter<string> = new EventEmitter()

  constructor() { }

  ngOnInit(): void {
    console.log('array:',this.ArrayFromparent);
  }
  submit(){
    this.childToParent.emit("The Data is received from child 1")
  }
  change(){
    this.dataToParent.emit("The Data is received from child 1")
  }
  transferData(){
    this.passDataToParent1.emit("The Data is recieved from the child 1")
  }

}
