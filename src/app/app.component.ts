import { Component } from '@angular/core';
import { TodoItem } from './todoItem';
import { TodoList } from './todoList';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  private list = new TodoList("TMR", [new TodoItem("Go fo run", true),
  new TodoItem("Get flowers"),
  new TodoItem("Collect Tickets")]);

  get userName(): string {
    return this.list.user;
  }

  get itemCount(): number {
    return this.items.length
  }

  get items():  TodoItem[] {
    return this.list.items.filter(item => this.showComplete || !item.complete);
  }
  addItem(newItem: string) {
    if (newItem != "") {
      this.list.addItem(newItem);
    }
  }
  showComplete: boolean = false;

  
}
