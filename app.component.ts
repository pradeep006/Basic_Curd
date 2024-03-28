import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'curd';
  users: any[] = [
    { id: 1, name: 'John Doe', email: 'john@example.com' },
    { id: 2, name: 'John Doe', email: 'john@example.com' },
    { id: 3, name: 'John Doe', email: 'john@example.com' }
  ];

  visible: boolean = false;
  headerName: string = '';
  buttonName: string = '';

  showDialog() {
      this.visible = true;
  }

  closeDialog() {
    this.visible = false;
  }

  addUser(){
    this.showDialog();
    this.headerName = 'Add User';
    this.buttonName = 'Add';
  }

  editUser(user: any): void {
    this.showDialog();
    this.headerName = 'Edit User';
    this.buttonName = 'Update';
  }

  deleteUser(user: any): void {
    // Logic to handle deleting a user
  }

  onSubmit(){
    alert('User Added !')
  }
}
