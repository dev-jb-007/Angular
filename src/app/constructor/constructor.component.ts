import {Attribute, Component, Input, OnInit} from '@angular/core';
import {AppComponent} from "../app.component";

@Component({
  selector: 'app-constructor',
  templateUrl: './constructor.component.html',
  styleUrls: ['./constructor.component.css']
})
export class ConstructorComponent extends AppComponent implements OnInit {
    public  name: string;
    public displayName:boolean=false;
    constructor(@Attribute('name') s:string) {
      super();
      // this.time++;
      this.name=s;
    }
    @Input("name") intro:string;
  ngOnInit(): void {
  }

}
