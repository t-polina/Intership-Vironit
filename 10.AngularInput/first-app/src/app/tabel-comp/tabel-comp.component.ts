import { Component, OnInit } from '@angular/core';
import { User } from './user';
import { UserService } from './user.service';

@Component({
  selector: 'app-tabel-comp',
  templateUrl: './tabel-comp.component.html',
  styleUrls: ['./tabel-comp.component.css']
})
export class TabelCompComponent {
  constructor(private userServer: UserService) { }
  user: User[];
  selectedUser: User;
  onSelect(user: User): void {
    this.selectedUser = user;
  }
  ngOnInit(){
    this.getUsers();
  }
  getUsers(): void {
    this.user = this.userServer.getUser();
  }
}
