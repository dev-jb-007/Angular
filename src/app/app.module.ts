import { NgModule } from '@angular/core';
import { FormsModule } from "@angular/forms";
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { ServerComponent } from "./server/server.component";
import { FooterComponent} from "./Footer/footer.component";
import { ServersComponent } from './servers/servers.component';
import { SuccessComponent} from "./warnings/success/success.component";
import { TestComponent} from "./test/test.component";

@NgModule({
  declarations: [
    AppComponent,
    ServerComponent,
    FooterComponent,
    ServersComponent,
    SuccessComponent,
    TestComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
