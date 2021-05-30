import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '@auth0/auth0-angular';
import { CreatePollComponent } from './components/create-poll/create-poll.component';
import { PollVotesComponent } from './components/poll-votes/poll-votes.component';
// Scaffolds when you include routing in your application
// Defined routes
const routes: Routes = [
  {
    path:'poll-votes',
    component: PollVotesComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'create-poll',
    component: CreatePollComponent,
    canActivate: [AuthGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
