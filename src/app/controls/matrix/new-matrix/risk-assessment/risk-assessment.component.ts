import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatrixService } from '../../services/matrix.service';
import { Router } from '@angular/router';
import { MenuItem, SelectItem, Message } from 'primeng/api';

@Component({
  selector: 'app-risk-assessment',
  templateUrl: './risk-assessment.component.html',
  styleUrls: ['./risk-assessment.component.css']
})
export class RiskAssessmentComponent implements OnInit {
  mockDropDownData: any = [];
  mockMultiDropDownData;
  driverDescription;
  selectedDriverCategory;
  selectedEventType;
  dataJson;
  driverCategoryJson;

  eventType: SelectItem[];
  driverCategory: SelectItem[];
  matrixName: string;

  constructor(private fb: FormBuilder, private matrixService: MatrixService, private router: Router) {
  }

  ngOnInit() {
    this.preloadData();
    this.matrixName = this.matrixService.getMatrixName();
  }
  preloadData() {
    this.matrixService.getDriverCategory().subscribe(
      (data) => {
        this.driverCategory = data;
      }
    );
    this.matrixService.getEventType().subscribe(
      (data) => {
        this.eventType = data;
      }
    );
  }

    changeDriverCategory(event) {
    if (event === 'none') {
      this.selectedDriverCategory = [];
    } else {
      this.selectedDriverCategory = event;
    }
  }

   disable() {
    if ( !this.driverDescription || !this.selectedDriverCategory || !this.selectedEventType) {
      return true;
    } else {
      return false;
    }
  }

  // /* This method will reset all values to default */
  resetAll() {
  this.driverDescription = '';
  this.selectedDriverCategory = [];
  this.selectedEventType = [];
  }

  saveriskAssessmentForm() {
    // if (!this.disable()) {
      this.generateDriverCategoryJson();
      this.dataJson = {
        'driverDescription': this.driverDescription,
        'driverCategory': this.selectedDriverCategory,
        'eventType': this.selectedEventType
      };
    // }
    console.log('data.......', this.dataJson);
  }

  generateDriverCategoryJson() {
    for (let i = 0; i < this.selectedDriverCategory.length; i++) {
      this.driverCategoryJson.push({
        'driverCategoryId': this.selectedDriverCategory[i],
        'driverCategoryName': this.selectedDriverCategory[i]
      });
    }
  }
}
