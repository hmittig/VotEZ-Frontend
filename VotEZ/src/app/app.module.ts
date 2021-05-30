import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PollVotesComponent } from './components/poll-votes/poll-votes.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { AuthModule } from '@auth0/auth0-angular';
import { AuthComponent } from './components/auth/auth.component';
import { environment } from 'src/environments/environment';
import { YourPollsComponent } from './components/your-polls/your-polls.component';
import { YourPollHistoryComponent } from './components/your-poll-history/your-poll-history.component';
import { CreatePollComponent } from './components/create-poll/create-poll.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    PollVotesComponent,
    NavBarComponent,
    AuthComponent,
    YourPollsComponent,
    YourPollHistoryComponent,
    CreatePollComponent
  ],
  // Where external modules are declared so they can be utilized
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgbModule,
    FormsModule,
    AuthModule.forRoot(
      {
        domain: environment.DOMAIN,
        clientId: environment.CLIENTID
      }
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
