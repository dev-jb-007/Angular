import { Component, OnInit } from '@angular/core';

@Component({
  // selector: '[app-servers]', we can use this to and then add attribute to html elements in template
  // selector:'.app-servers' we can also use class selector and add this class in html elements in template
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  showserver: string = 'none';
  showbutton:boolean=true;
  servername:string='';
  name:string='Dev Manish Patel'
  showServer(){

    if(this.showserver ==='block')
    {
      this.showserver='none';
    }
    else{
      this.showserver='block';
    }

  }
  getServerName(event){
    this.servername=event.target.value;
  }
  constructor() {
    setTimeout(()=>{
      this.showbutton=false;
    },2000)
  }

  ngOnInit(): void {
  }

}
