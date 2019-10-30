import { Component, Input, Output } from '@angular/core';

@Component({
  selector: 'my-app-parent',
  template: `<input type="text" [(ngModel)]="name" (ngModelChange)="nameOnConsole()" />{{clicks}}<my-app-child [name]="name" (onChanged)="onChanged($event)"></my-app-child>`,
  styleUrls: ['./input-comp.component.css']
})

export class InputCompComponent {

  name = "";
  clicks: number = 0;
  onChanged(increased: any) {
    increased === 1 ? this.clicks++ : this.clicks--;
  }
  nameOnConsole(): void {
    console.log(this.clicks);
    console.log(this.name);
  }
}
