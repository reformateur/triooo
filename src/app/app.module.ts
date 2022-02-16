import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from "@angular/forms";
import { CommonModule } from '@angular/common';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SwiperModule } from 'swiper/angular';
import { RouterModule, Routes } from '@angular/router';
import { RegisterComponent } from './client-app/register/register.component';
import { TimelineComponent } from './client-app/timeline/timeline.component';
import { HumourComponent } from './client-app/timeline/humour/humour.component';
import { MusiqueComponent } from './client-app/timeline/musique/musique.component';
import { CoachingComponent } from './client-app/timeline/coaching/coaching.component';
import { UserProfilComponent } from './client-app/user-profil/user-profil.component';
import { EventComponent } from './client-app/event/event.component';




const appRoutes: Routes = [
  { path: 'register', component: RegisterComponent },
  { path: 'timeline', component: TimelineComponent },
  { path: 'timeline/concert', component: MusiqueComponent },
  { path: 'timeline/humour', component: HumourComponent },
  { path: 'timeline/coaching', component: CoachingComponent },
  { path: 'profil', component: UserProfilComponent },
  { path: 'event', component: EventComponent },
  { path: '', redirectTo: 'register', pathMatch: 'full'},
  { path:  '**', redirectTo: 'register'}
];

@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    TimelineComponent,
    HumourComponent,
    MusiqueComponent,
    CoachingComponent,
    UserProfilComponent,
    EventComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoutes),
    CommonModule,
    FormsModule,
    SwiperModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
