import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-viewjobs',
  templateUrl: './viewjobs.component.html',
  styleUrls: ['./viewjobs.component.scss']
})
export class ViewjobsComponent implements OnInit {
  cars: any;
  noOfCars: any;
  noOfJobs: any;

  constructor(private dataService: DataService) {}

  ngOnInit() {
    this.dataService.getDataAssets().subscribe(data => {
      this.cars = data.cars;
      this.noOfCars = data.cars.length;
      this.noOfJobs = data.jobs.length;  
    });
  }

  updateJobStatus(carId: number, jobId: number, newStatus: string) {
    this.dataService.updateJobStatus(carId, jobId, newStatus).subscribe(response => {
      if (response.success) {
        console.log('Job status updated successfully:', response.updatedCar);
      }
    });
  }
}
