import { Component } from '@angular/core';


@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent {
  info = [
    {name:"sai" , id:"1234" , Role:"Student",Username:"Sai@1234" ,email:"sai@gmail.com" , phone:"949313336"},
    {name: "john", id: "5678", Role: "Student", Username: "John@5678", email: "john@gmail.com", phone: "1234567890"},
  ]
  facultyList = [
    { name: 'Dr. John Smith',course:"Social", email: 'john.smith@example.com', phone: '123-456-7890', active: true },
    { name: 'Dr. Jane Doe',course:"Science", email: 'jane.doe@example.com', phone: '098-765-4321', active: false }
    // Add more faculty members as needed
  ];

  visible:boolean = false
  searchText:any
  showUserInfo: boolean = false;

  filteredData = [...this.info];  // Clone of original data
  searchTerm: string = '';
  activeButton: string = 'studentsearch'; // Default to 'dashboard'
  constructor(
 
  ){
  }
  showText(section: string) {
    this.activeButton = section;
  }

  toggleUserInfo() {
    this.showUserInfo = !this.showUserInfo;
  }
   copyToClipboard(text: string) {
    navigator.clipboard.writeText(text).then(() => {
      alert(`${text} copied to clipboard!`);
    }).catch(err => {
      console.error('Could not copy text: ', err);
    });
  }

  sendEmail(email: string) {
    window.location.href = `mailto:${email}`;

  }

  callPhone(phone: string) {
    window.location.href = `tel:${phone}`;
  }

  toggleFacultyActive(faculty: any) {
    faculty.active = !faculty.active;
  }

  filterTable() {
    this.filteredData = this.info.filter(item =>
      item.name.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
      item.id.includes(this.searchTerm) ||
      item.Role.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
      item.email.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
      item.phone.includes(this.searchTerm)
    );
  }



}
