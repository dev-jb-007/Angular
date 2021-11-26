import { NgModule } from '@angular/core';
import { FormsModule } from "@angular/forms";
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { ServerComponent } from "./server/server.component";
import { FooterComponent} from "./Footer/footer.component";
import { ServersComponent } from './servers/servers.component';
import { SuccessComponent} from "./warnings/success/success.component";
import { TestComponent} from "./test/test.component";
import { ngIfComponent } from './ngIf/ngIf.component';
import { ngSwitchComponent } from './ngSwitch/ngSwitch.component';
import { ngStyleComponent } from './ngStyle/ngStyle.component';
import { ngClassComponent } from './ngClass/ngClass.component';
import { ngForComponent } from './ngFor/ngFor.component';
import { assignment3Component } from './Assignment3/assignment3.component';
import {RouterModule} from "@angular/router";
import {TemplateComponent} from "./ngtemplate/ngtemplate.component";
import { NgTemplateOutletComponent } from './ng-template-outlet/ng-template-outlet.component';
import { ConstructorComponent } from './constructor/constructor.component';
import { OnChangeComponent } from './on-change/on-change.component';
@NgModule({
  declarations: [
    AppComponent,
    ServerComponent,
    FooterComponent,
    ServersComponent,
    SuccessComponent,
    TestComponent,
    ngIfComponent,
    ngSwitchComponent,
    ngStyleComponent,
    ngClassComponent,
    ngForComponent,
    assignment3Component,
    TemplateComponent,
    NgTemplateOutletComponent,
    ConstructorComponent,
    OnChangeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
