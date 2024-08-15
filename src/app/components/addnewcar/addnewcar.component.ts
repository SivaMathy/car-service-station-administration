import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormArray } from '@angular/forms';
import carData from '../../../asstes/data.json'; // Make sure the path is correct

@Component({
  selector: 'app-addnewcar',
  templateUrl: './addnewcar.component.html',
  styleUrl: './addnewcar.component.scss'
})
export class AddnewcarComponent {
  carForm: FormGroup;
  jobs: FormArray;
  carData = carData; 

  constructor(private fb: FormBuilder) {
    this.carForm = this.fb.group({
      licensePlate: ['', Validators.required],
      model: ['', Validators.required],
      owner: ['', Validators.required],
      jobs: this.fb.array([this.createJob()])
    });
    this.jobs = this.carForm.get('jobs') as FormArray;
  }

  createJob(): FormGroup {
    return this.fb.group({
      job_description: ['', Validators.required],
      job_status: ['', Validators.required]
    });
  }

  addJobFields() {
    this.jobs.push(this.createJob());
  }

  onSubmit() {
    if (this.carForm.valid) {
      const newCar = {
        id: this.carData.cars.length + 1,  
        licensePlate: this.carForm.value.licensePlate,
        model: this.carForm.value.model,
        owner: this.carForm.value.owner,
        jobs: this.carForm.value.jobs.map((job: any, index: number) => ({
          jobId: index + 1,  
          description: job.job_description,
          status: job.job_status
        }))
      };
      this.carData.cars.push(newCar);

      console.log(this.carData);  
    } else {
      console.log('Form is not valid');
    }
  }
}
