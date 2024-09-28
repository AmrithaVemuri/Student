import { Component } from '@angular/core';
import * as Highcharts from 'highcharts';

@Component({
  selector: 'app-administrator',
  templateUrl: './administrator.component.html',
  styleUrls: ['./administrator.component.css']
})
export class AdministratorComponent {
  activeButton: string = 'Dashboard';
  showUserInfo: boolean = false;
  Highcharts: typeof Highcharts = Highcharts;

  enrollmentChartOptions: Highcharts.Options = {
    chart: {
      type: 'line'
    },
    title: {
      text: 'Student Enrollment Trends Over the Years'
    },
    xAxis: {
      categories: ['2019', '2020', '2021', '2022', '2023']
    },
    yAxis: {
      title: {
        text: 'Number of Students'
      }
    },
    series: [
      {
        name: 'Enrolled Students',
        type: 'line',
        data: [300, 450, 400, 500, 600] // Example data
      }
    ]
  };

  // Chart options for Faculty Course Loads
  facultyChartOptions: Highcharts.Options = {
    chart: {
      type: 'bar'
    },
    title: {
      text: 'Faculty Course Loads'
    },
    xAxis: {
      categories: ['Dr. Smith', 'Prof. Lee', 'Dr. Johnson', 'Prof. Brown']
    },
    yAxis: {
      title: {
        text: 'Courses Taught'
      }
    },
    series: [
      {
        name: 'Courses',
        type: 'bar',
        data: [3, 5, 2, 4] // Example data
      }
    ]
  };

  info = [
    {
      name: 'John Doe',
      id: '12345',
      Role: 'Administrator',
      email: 'john.doe@example.com',
      phone: '+1234567890'
    }
  ];
  records = [
    {
      name: 'Alice Johnson',
      type: 'student',
      email: 'alice.johnson@student.com',
      phone: '+123456789'
    },
    {
      name: 'Bob Smith',
      type: 'student',
      email: 'bob.smith@student.com',
      phone: '+987654321'
    },
    {
      name: 'Dr. Claire Lee',
      type: 'faculty',
      email: 'claire.lee@faculty.com',
      phone: '+5647382910'
    },
    {
      name: 'Prof. David Miller',
      type: 'faculty',
      email: 'david.miller@faculty.com',
      phone: '+9081726354'
    }
  ];

  showText(button: string) {
    this.activeButton = button;
    // Additional functionality based on button click can be implemented here
  }

  toggleUserInfo() {
    this.showUserInfo = !this.showUserInfo;
  }
}
