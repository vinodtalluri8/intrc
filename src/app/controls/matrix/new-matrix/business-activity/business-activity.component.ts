import { Component, OnInit } from '@angular/core';
import { MatrixService } from '../../services/matrix.service';
import { Router } from '@angular/router';
import { MenuItem, SelectItem, Message } from 'primeng/api';

@Component({
  selector: 'app-business-activity',
  templateUrl: './business-activity.component.html',
  styleUrls: ['./business-activity.component.css']
})
export class BusinessActivityComponent implements OnInit {
  mockDropDownData;
  mockMultiDropDownData;
  selectedTitle;
  activity;
  subActivity;
  selectedenhancementProject;
  trackingNumber;
  implemented;
  dataJson;
  selectedImplementation = 'Will be Implemented';

  enhancementProject: SelectItem[];

  constructor(private matrixService: MatrixService, private router: Router) {
   }

  ngOnInit() {
    this.implemented = true;
    this.preloadData();
  }
  checkRadio(value) {
    console.log('radio value', value);
    if (value === 'implemented') {
      this.implemented = false;
      this.selectedenhancementProject = 'defaultdata';
      this.trackingNumber = 'defaultdata';
    } else {
      this.implemented = true;
      this.selectedenhancementProject = '';
      this.trackingNumber = '';
    }
  }
  preloadData() {
    this.matrixService.getMatrixData().subscribe(
      (data) => {
        this.mockDropDownData = data;
      }
    );
    this.matrixService.getEnhancementProject().subscribe(
      (data) => {
        this.enhancementProject = data;
      }
    );
  }

  disable() {
    if ( !this.activity || !this.selectedenhancementProject || !this.trackingNumber || !this.selectedTitle) {
      return true;
    } else {
      return false;
    }
  }

  // /* This method will reset all values to default */
  resetAll() {
  this.selectedTitle = '';
  this.activity = '';
  this.subActivity = '';
  this.selectedenhancementProject = '';
  this.trackingNumber = '';
}

  savebusinessActivityForm() {
    // if (!this.disable()) {
      this.dataJson = {
        'title': this.selectedTitle,
        'activity': this.activity,
        'subActivity': this.subActivity,
        'enhancementProject': this.selectedenhancementProject,
        'trackingNumber': this.trackingNumber
      };
    // }
    console.log('data.......', this.dataJson);
  }
}
