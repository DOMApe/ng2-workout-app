import { Component } from '@angular/core';

import { NavController, NavParams } from 'ionic-angular';
import {WorkoutService} from "../../services/workout.service";
import {WorkoutsPage} from "../workouts/workouts";

@Component({
  selector: 'page-detail',
  templateUrl: 'workout-details.html'
})
export class WorkoutDetailPage {

  workout = [];
  result = [];

  constructor(public navCtrl: NavController, public navParams: NavParams, public workoutService: WorkoutService) {
    this.navCtrl = navCtrl;
    this.navParams = navParams;
    this.workout = this.navParams.get('workout');

  }

  deleteWorkout(workoutId){
        this.workoutService.deleteWorkout(workoutId).subscribe(workout => {
				this.result = workout
			},
			err => console.log(err),
			() => console.log('Workout Deleted!')
			);
			this.navCtrl.setRoot(WorkoutsPage);
    }
}
