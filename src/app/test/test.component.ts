import { Component, ViewChild } from "@angular/core";
@Component({
  selector:'app-test',
  templateUrl:'test.component.html',
  styleUrls:['test.component.css']
})
export class TestComponent{
  name:string ='';
  username:string ='';
  isCorrect:boolean=false;
  changeName(name){
    this.isCorrect=true;
    this.name=name;
  }

  //View Child
  @ViewChild('InputServerName') servername;
  showName(){
    console.log(this.servername);
  }
}

