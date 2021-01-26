import { Component } from '@angular/core';
import { Task } from './task/task';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  todo: Task[] = [
    { title: 'Task 1', description: 'Learn Angular'},
    { title: 'Task 2', description: 'Learn React'},
    { title: 'Task 3', description: 'Get ready for CDC'}
  ];
}
