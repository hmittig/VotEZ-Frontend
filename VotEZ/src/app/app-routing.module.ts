import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '@auth0/auth0-angular';
import { PollVotesComponent } from './components/poll-votes/poll-votes.component';
// Scaffolds when you include routing in your application
// Defined routes
const routes: Routes = [
  {
    path:'poll-votes',
    component: PollVotesComponent,
    canActivate: [AuthGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
