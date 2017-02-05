import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { AboutPage } from '../pages/about/about';
import { AddPage } from '../pages/add/add';
import { WorkoutsPage } from '../pages/workouts/workouts';
import { TabsPage } from '../pages/tabs/tabs';
import { WorkoutDetailPage } from '../pages/workout-details/workout-details';

import { WorkoutService } from "../services/workout.service";

@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    AddPage,
    WorkoutsPage,
    TabsPage,
    WorkoutDetailPage
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    AddPage,
    WorkoutsPage,
    TabsPage,
    WorkoutDetailPage
  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler},
    WorkoutService
  ]
})
export class AppModule {}
