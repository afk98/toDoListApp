import { Component } from '@angular/core';

@Component({
  selector: 'task-list',
  templateUrl: './task-list.component.html',
  styleUrl: './task-list.component.css'
})
export class TaskListComponent {

  tasks : Task [] = [
    new Task ('Visit Ann'),
    new Task ('Eat Breakfast'),
    new Task ('Repair Car'),
    new Task ('Shop for food')
  ]

  addToList(newTask : string) {
    //this.tasks.push(newTask)
    newTask ? this.tasks.push(new Task(newTask)) : alert('Enter your task')
  }

  remove(existingTask : Task) {
    let isConfirmed = confirm('Following task will be deleted \n' + existingTask.title)

    if(isConfirmed) {
      this.tasks = this.tasks.filter (task => task != existingTask)
    }

  }
  
}

class Task {
  constructor(public title : string) {
    
  }

  isDoneToggle() { 
    //alert('Task : " ' + existingTask.title + ' " will be marked as done')
    this.isDone = !this.isDone;
  }

  public isDone = false;
}
