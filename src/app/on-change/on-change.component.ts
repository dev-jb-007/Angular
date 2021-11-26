import {Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';

@Component({
  selector: 'app-on-change',
  templateUrl: './on-change.component.html',
  styleUrls: ['./on-change.component.css']
})
export class OnChangeComponent implements OnInit,OnChanges{
  @Input() name:string;
  public prevValue:string;
  public currValue:string;
  constructor() { }
  ngOnChanges(changes: SimpleChanges) {
      this.prevValue=changes["name"].previousValue;
      this.currValue=changes["name"].currentValue;
  }

  ngOnInit(): void {
  }

}
