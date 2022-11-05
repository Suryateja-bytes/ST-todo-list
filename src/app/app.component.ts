import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ST-todo-list';
constructor(){
  setTimeout(() => {
    this.title = "Changed title";
  }, 2000);
}
}