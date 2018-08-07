import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatrixService } from '../../services/matrix.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-control',
  templateUrl: './control.component.html',
  styleUrls: ['./control.component.css']
})
export class ControlComponent implements OnInit {
  mockDropDownData;
  mockMultiDropDownData;
  isCheckedChecklist = false;
  controlText;
  selectedGroup;
  selectedAditionalProcedure;
  businessContinuity;
  trackingNumber;
  selectedcheckList;
  selectedFramework;
  selectedEnhancementProject;
  selectedControl;
  selectedElements;
  comment;
  selectedProcedure;
  selectedManagementAssertion;
  dataJson;
  implemented;

  constructor(private fb: FormBuilder, private matrixService: MatrixService, private router: Router) {
  }

  ngOnInit() {
    this.implemented = false;
    this.preloadData();
  }
  checkRadio(value) {
    console.log('radio value', value);
    if (value === 'implemented') {
      this.implemented = true;
       this.selectedEnhancementProject = '';
      this.trackingNumber = '';
    } else {
      this.implemented = false;
      this.selectedEnhancementProject = 'defaultdata';
      this.trackingNumber = 'defaultdata';
    }
  }
  preloadData() {
    this.matrixService.getMatrixData().subscribe(
      (data) => {
        this.mockDropDownData = data;
      }
    );
    this.matrixService.getMatrixMultiSelect().subscribe(
      (data) => {
        this.mockMultiDropDownData = data;
      }
    );
  }

  changeAditionalProcedure(event) {
    if (event === 'none') {
      this.selectedAditionalProcedure = [];
    } else {
      this.selectedAditionalProcedure = event;
    }
  }

     changeselectedElements(event) {
    if (event === 'none') {
      this.selectedElements = [];
    } else {
      this.selectedElements = event;
    }
  }

    changeselectedManagementAssertion(event) {
    if (event === 'none') {
      this.selectedManagementAssertion = [];
    } else {
      this.selectedManagementAssertion = event;
    }
  }
    /* This method will enable or disable the Save button based on the mandatory fields selected */
  disable() {
    if ( !this.selectedControl || !this.selectedFramework
      || !this.selectedElements || !this.businessContinuity || !this.selectedEnhancementProject || !this.trackingNumber) {
      return true;
    } else {
      return false;
    }
  }

  // /* This method will reset all values to default */
  resetAll() {
  this.controlText = '';
  this.selectedGroup = '';
  this.selectedAditionalProcedure = [];
  this.businessContinuity = '';
  this.trackingNumber = '';
  this.selectedcheckList = '';
  this.selectedFramework = '';
  this.selectedEnhancementProject = '';
  this.selectedControl = '';
  this.selectedElements = [];
  this.comment = '';
  this.selectedProcedure = '';
  this.selectedManagementAssertion = [];
}

  saveControlForm() {
    // if (!this.disable()) {
      this.dataJson = {
        'controlText': this.controlText,
        'group': this.selectedGroup,
        'aditionalProcedure': this.selectedAditionalProcedure,
        'businessContinuity': this.businessContinuity,
        'trackingNumber': this.trackingNumber,
        'checkList': this.selectedcheckList,
        'framework': this.selectedFramework,
        'enhancementProject': this.selectedEnhancementProject,
        'control': this.selectedControl,
        'elements': this.selectedElements,
        'comment': this.comment,
        'procedure': this.selectedProcedure,
        'managementAssertion': this.selectedManagementAssertion
      };
    // }
    console.log('data.......', this.dataJson);
  }

}
