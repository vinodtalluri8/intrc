import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatrixService } from '../../services/matrix.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-general-matrix-info',
  templateUrl: './general-matrix-info.component.html',
  styleUrls: ['./general-matrix-info.component.css']
})
export class GeneralMatrixInfoComponent implements OnInit {
    display: boolean;
  mockDropDownData;
  mockMultiDropDownData;
  selectedGroup;
  matrixName;
  processOverview;
  selectedbusinessFunction;
  selectedCertificationResponsibility;
  selectedInherentRiskRating;
  selectedmatrixType;
  selectedRelatedSystems;
  selectedControlRiskRating;
  dataJson;
  certificateResponseJson;

  constructor(private fb: FormBuilder, private matrixService: MatrixService, private router: Router) {
  }
  ngOnInit() {
    this.preloadData();
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
  displayModel() {
    this.display = true;
  }
    /**
   * This method will assign the changed process value
   * @param event
   */
  changeselectedRelatedSystems(event) {
    if (event === 'none') {
      this.selectedRelatedSystems = [];
    } else {
      this.selectedRelatedSystems = event;
    }
  }
  changeCertificationResponsibility(event) {
    if (event === 'none') {
      this.selectedCertificationResponsibility = [];
    } else {
      this.selectedCertificationResponsibility = event;
      console.log(event);

    }
  }

    /* This method will enable or disable the Save button based on the mandatory fields selected */
  disable() {
    if ( !this.selectedbusinessFunction || !this.selectedmatrixType || !this.matrixName || !this.selectedCertificationResponsibility
      || !this.processOverview) {
      return true;
    } else {
      return false;
    }
  }

  // /* This method will reset all values to default */
  resetAll() {
  this.selectedGroup = '';
  this.matrixName = '';
  this.processOverview = '';
  this.selectedbusinessFunction = '';
  this.selectedCertificationResponsibility = [];
  this.selectedInherentRiskRating = '';
  this.selectedmatrixType = '';
  this.selectedRelatedSystems = [];
  this.selectedControlRiskRating = '';
}

  saveKeyControl() {
    // if (!this.disable()) {

      this.dataJson = {
        'group': this.selectedGroup,
        'businessFunction': this.selectedbusinessFunction,
        'matrixType': this.selectedmatrixType,
        'matrixName': this.matrixName,
        'certificationResponsibility': this.selectedCertificationResponsibility,
        'relatedSystems': this.selectedRelatedSystems,
        'processOverview': this.processOverview,
        'inherentRiskRating': this.selectedInherentRiskRating,
        'controlRiskRating': this.selectedControlRiskRating
      };
    // }
    console.log('data.......', this.dataJson);
  }

}
