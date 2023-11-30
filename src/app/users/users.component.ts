import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
//import { UserRole } from '../Enum/UserRole.enum'; // Adjust the path accordingly
import { User } from '../models/user';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css'],
})
export class UsersComponent implements OnInit {
  usersData: User[] = [];
  enableRefresh: boolean = false;
  showTable: boolean = false;
  isEditEnabled: (boolean | undefined)[] = [];
  sampledate: any;
  dateTwo: any;
  users: any;

  constructor(private userService: UserService<User>) { }


  ngOnInit(): void { }

  loadData(): void {
    this.userService.getUsers().subscribe(
      (users) => {
        this.usersData = users;
        this.enableRefresh = true;
        this.showTable = true;
        this.isEditEnabled = new Array(this.usersData.length).fill(false);
      },
      (error) => {
        console.error('Error loading users:', error);
      }
    );
  }

  editUser(userId: number): void {
    this.isEditEnabled[userId] = true;
    //just enable field for edit and do nothing
  }

  deleteUser(userId: number): void {
    this.userService.deleteUser(userId).subscribe(() => {
      this.loadData(); // Reload data after successful deletion
    });
  }

  saveUser(index: number): void {
    // Assuming you have a method in userService to update the user
    this.userService.updateUser(index, this.usersData[index]);
    this.isEditEnabled[index] = false;

  }

  cancelUser(index: number): void {
    // Reset the user data to its original state
    this.usersData[index] = { ...this.userService.getById(index) };
    this.isEditEnabled[index] = false;
  }
}

