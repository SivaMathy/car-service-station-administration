import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import assest from '../../asstes/data.json';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private data = assest;

  constructor() {}

  getDataAssets(): Observable<any> {
    return of(this.data);
  }

  updateJobStatus(carId: number, jobId: number, newStatus: string): Observable<any> {
    const car = this.data.cars.find(car => car.id === carId);
    if (car) {
      const job = car.jobs.find(job => job.jobId === jobId);
      if (job) {
        job.status = newStatus;
      }
    }

    const jobInList = this.data.jobs.find(job => job.jobId === jobId);
    if (jobInList) {
      jobInList.status = newStatus;
    }

    return of({ success: true, updatedCar: car });
  }
}
