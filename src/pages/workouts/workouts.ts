import { Component, OnInit } from '@angular/core';
import { WorkoutService } from "../../services/workout.service";

import { NavController, NavParams } from 'ionic-angular';
import { WorkoutDetailPage } from '../workout-details/workout-details';
@Component({
  selector: 'page-workouts',
  templateUrl: 'workouts.html'
})
export class WorkoutsPage {


workouts = [];

  constructor(public navCtrl: NavController,
     public workoutservice: WorkoutService,
     public navParams: NavParams) {
       this.workoutservice.getWorkouts()
       .subscribe(
         workouts => {
           this.workouts = workouts;
       });

  }

  ngOnInit(){
    this.workoutservice.getWorkouts()
    .subscribe(
      workouts => {
        this.workouts = workouts;
    });
  }

  workoutSelected(event, workout){
    this.navCtrl.push(WorkoutDetailPage, {
      workout: workout
    });
  }

  
}
