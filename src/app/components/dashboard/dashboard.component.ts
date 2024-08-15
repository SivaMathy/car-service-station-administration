import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent {
  data: any;
  cars:any;
  jobs:any;
  noOfCars:any;
  noOfJobs:any;

  constructor(private dataService: DataService) {}

  ngOnInit() {
    this.dataService.getDataAssets().subscribe(data => {
      this.cars = data.cars;
      this.noOfCars = data.cars.length;
      this.jobs = data.jobs;  
      this.noOfJobs = data.jobs.length;  
    });
  }
  
}