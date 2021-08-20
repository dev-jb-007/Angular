import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { ServerComponent } from "./server/server.component";
import { FooterComponent} from "./Footer/footer.component";
import { ServersComponent } from './servers/servers.component';
import { SuccessComponent} from "./warnings/success/success.component";

@NgModule({
  declarations: [
    AppComponent,
    ServerComponent,
    FooterComponent,
    ServersComponent,
    SuccessComponent
  ],
  imports: [
    BrowserModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
