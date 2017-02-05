import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';
import {WorkoutService} from "../../services/workout.service";
import {WorkoutsPage} from "../workouts/workouts";

@Component({
  selector: 'page-add',
  templateUrl: 'add.html'
})
export class AddPage {
  title;
  note;
  type;
  result = [];
  

  constructor(public navCtrl: NavController, public workoutService: WorkoutService) {

  }

  onSubmit(){
    var workout = {
      title: this.title,
      note: this.note,
      type: this.type,

    }
    this.workoutService.addWorkout(workout).subscribe(data => {
      this.result = data
    },
      err => console.log(err),
      () => console.log("Workout Added!"));

      this.navCtrl.setRoot(WorkoutsPage);
  }

}
