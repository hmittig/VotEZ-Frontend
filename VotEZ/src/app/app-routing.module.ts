import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '@auth0/auth0-angular';
import { AboutComponent } from './components/about/about.component';
import { AccessPollComponent } from './components/access-poll/access-poll.component';
import { CreatePollComponent } from './components/create-poll/create-poll.component';
import { HomeComponent } from './components/home/home.component';
import { PollDetailsComponent } from './components/poll-details/poll-details.component';
import { PollVotesComponent } from './components/poll-votes/poll-votes.component';
import { YourPollHistoryComponent } from './components/your-poll-history/your-poll-history.component';
import { YourPollsComponent } from './components/your-polls/your-polls.component';
// Scaffolds when you include routing in your application
// Defined routes
const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path:'poll-votes',
    component: PollVotesComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'create-poll',
    component: CreatePollComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'access-poll',
    component: AccessPollComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'your-polls',
    component: YourPollsComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'your-poll-history',
    component: YourPollHistoryComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'poll-details',
    component: PollDetailsComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'about',
    component: AboutComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
