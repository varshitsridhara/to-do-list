import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-to-do-list',
  templateUrl: './to-do-list.component.html',
  styleUrls: ['./to-do-list.component.css']
})

export class ToDoListComponent {

  title = 'To-do-list';
  list: any[] = [];
  @ViewChild('task', { static: false }) taskInput!: ElementRef;

  addTask(item: string) {
    item = this.taskInput.nativeElement.value;
    if (!item.trim()) {
      return;
    }

    this.list.push({ id: this.list.length, name: item });
    console.warn(this.list);
    this.taskInput.nativeElement.value = '';
  }

  removeTask(id: number) {
    this.list = this.list.filter(item => item.id !== id);
  }

  updateTask(updatedTask: any) {
    updatedTask.editMode = !updatedTask.editMode;
    const index = this.list.findIndex(task => task.id === updatedTask.id);
    if (index !== -1) {
      this.list[index] = updatedTask;
    }
  }
}
