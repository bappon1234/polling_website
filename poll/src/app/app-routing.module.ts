import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { PollListComponent } from './components/poll-list/poll-list.component';
import { CreatePollComponent } from './components/create-poll/create-poll.component';
import { AboutComponent } from './components/about/about.component';
import { ContactComponent } from './components/contact/contact.component';



export const routes: Routes = [
  { path: '', redirectTo: '/polls', pathMatch: 'full' },
  { path: 'polls', component: PollListComponent },
  { path: 'create', component: CreatePollComponent },
  {path:'about', component: AboutComponent},
  {path:'contact',component:ContactComponent}
  
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
