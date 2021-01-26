import { Component } from '@angular/core';
import { Task } from './task/task';
import {CdkDragDrop, transferArrayItem} from '@angular/cdk/drag-drop';
import { MatDialog} from '@angular/material/dialog';
import {TaskDialogComponent, TaskDialogResult} from './task-dialog/task-dialog.component';

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
  inProgress: Task[] = [];
  done: Task[] = [];

  constructor(private dialog: MatDialog) {}

  drop(event: CdkDragDrop<Task[]>): void {
    if (event.previousContainer === event.container) {
      return; // task is in the same container
    }
    transferArrayItem(
      event.previousContainer.data,
      event.container.data,
      event.previousIndex,
      event.currentIndex
    );
  }

  edit(list: string, task: Task): void {
  }

  newTask(): void {
    const dialogRef = this.dialog.open(TaskDialogComponent, {
      width: '270px',
      data: {
        task: {}
      }
      });
    dialogRef.afterClosed()
      .subscribe((result: TaskDialogResult) => this.todo.push(result.task));
  }
}
