import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Task } from '../../interfaces/task'

@Component({
  selector: 'app-task',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss'],
})


export class TaskComponent {

  @Input() tasks?: string = ""; 

  taskTitle: string = "";
  taskDescription: string = "";
  errorMsg = "";

  completedTask: Task[] = [];
  removedTasked: string = "";
  listOfTasks: Task[] = [];
  
  addTask(task: string, description: string) {
    if( task && description ) {
      const newTask: Task = {title: task, description: description}
      this.listOfTasks = [...this.listOfTasks, newTask ];
      this.setDefaults();
    } else {
      this.errorMsg = "Enter title and description";
    }
  }

  deleteTask(taskNumber: number) {
    this.completedTask = [...this.completedTask, this.listOfTasks[taskNumber]]
    this.listOfTasks.splice(taskNumber, 1);
  }

  setDefaults() {
    this.taskTitle = "";
    this.taskDescription = "";
    this.errorMsg = "";
  }

}
