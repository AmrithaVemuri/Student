import { Component } from '@angular/core';

@Component({
  selector: 'app-faculty',
  templateUrl: './faculty.component.html',
  styleUrls: ['./faculty.component.css']
})
export class FacultyComponent {
  activeButton: string = 'Dashboard';
  showUserInfo: boolean = false;

  // dummy-students.ts

students = [
  {
    id: 1,
    name: 'Alice Smith',
    email: 'alice.smith@example.com',
    phone: '123-456-7891',
    photo: 'https://via.placeholder.com/100',
  },
  {
    id: 2,
    name: 'Bob Johnson',
    email: 'bob.johnson@example.com',
    phone: '123-456-7892',
    photo: 'https://via.placeholder.com/100',
  },
  {
    id: 3,
    name: 'Charlie Brown',
    email: 'charlie.brown@example.com',
    phone: '123-456-7893',
    photo: 'https://via.placeholder.com/100',
  },
  {
    id: 4,
    name: 'Diana Prince',
    email: 'diana.prince@example.com',
    phone: '123-456-7894',
    photo: 'https://via.placeholder.com/100',
  },
  {
    id: 5,
    name: 'Ethan Hunt',
    email: 'ethan.hunt@example.com',
    phone: '123-456-7895',
    photo: 'https://via.placeholder.com/100',
  },
  // Add more students as needed
];


  info=[
    {
      id: 1,
      name: 'Alice Smith',
      email: 'alice@example.com',
      phone: '123-456-7891',
      photo: 'https://via.placeholder.com/100',
      Role:'Teacher'
    },
  ]
  
  showText(button: string) {
    this.activeButton = button;
   
  }

  toggleUserInfo() {
    this.showUserInfo = !this.showUserInfo;
  }
}
