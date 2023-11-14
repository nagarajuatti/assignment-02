import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  usersData:any []=[]
  enableRefresh:boolean=false
  showTable!: true;

  users = [
  { 
  "id": 0,
  "fn": "Atti" , 
  "mn": "Naga", 
  "ln": "Raju", 
  "email": "attinagaraju100@gmail.com", 
  "phone":"8978989551", 
  "Role": "Admin", 
  "place":"Anantapur"},

  { 
  "id": 1,
  "fn": "atti" , 
  "mn": "dushyanth", 
  "ln": "chaktravarthy", 
  "email": "attinagjaraju897@gmail.com", 
  "phone":"89789894551", 
  "Role": "Guest", 
  "place":"Bangalore"},

  { 
  "id": 2,
  "fn": "atti" , 
  "mn": "Pragna", 
  "ln": "Priya", 
  "email": "attinagjaraju8088@gmail.com", 
  "phone":"89789894551", 
  "Role": "User", 
  "place":"Hyd"}]; 
option: any;


  constructor(){}
  
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
  
  isEditEnabled: boolean[] = [];

  loadData(): void {
    this.usersData=this.users
    this.enableRefresh=true
    this.showTable=true
    this.isEditEnabled = new Array(this.users.length).fill(false);
  }

  editUser(index: number): void {
    this.isEditEnabled[index] = true;
  }

  deleteUser(index: number): void {
    this.users.splice(index, 1);
  }

  saveUser(index: number): void {
    this.isEditEnabled[index] = false;
  }

  cancelEdit(index: number): void {
    this.isEditEnabled[index] = false;
  }
}


