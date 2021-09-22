import { Component } from "@angular/core";
@Component({
    selector:'app-assignment3',
    templateUrl:'assigment3.component.html',
    styleUrls:['assignment3.component.css']
})
export class assignment3Component{
    count=0;
    displayDetails:boolean=false;
    clicks=[];
    buttonClicked(){
        this.clicks.push(this.count);
        this.count++;
        this.displayDetails=true;
    }
}