import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Todo } from 'src/app/models/Todo';
import { TodoServiceService } from '../../services/todo-service.service';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})

export class TodoItemComponent implements OnInit {
  @Input() todo: Todo;
  @Output() deleteTodo: EventEmitter<Todo> = new EventEmitter();

  constructor(private todoService:TodoServiceService) { }

  ngOnInit() {
  }

  // Seting dynamic classes
  setClasses() {
    let classes = {
      todo: true,
      "is-complete": this.todo.completed
    }

    return classes;
  }

  // On toggle event
  onToggle(todo) {
    todo.completed = ! this.todo.completed;

    this.todoService.toggleCompleted(todo).subscribe(todo => console.log(todo));
  }

  onDeleted(todo) {
    this.deleteTodo.emit(todo);
  }
}
