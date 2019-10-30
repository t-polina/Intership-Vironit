import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'my-app-child',
  template: `<p>{{name}}</p> <button (click)="change(1)">+</button> <button (click)="change(0)">+</button>`,
  styleUrls: ['./hello-user.component.css']
})
export class HelloUserComponent {
 @Input() name: string
 @Output() onChanged = new EventEmitter<number>();
 change(increased:any) {
     this.onChanged.emit(increased);
 }
}
