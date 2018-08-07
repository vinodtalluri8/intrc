import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatrixService } from '../../services/matrix.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-business-process',
  templateUrl: './business-process.component.html',
  styleUrls: ['./business-process.component.css']
})
export class BusinessProcessComponent implements OnInit {

  mockDropDownData: any = [];
  BusinessProcess;
  selectedApplicableTo;
  dataJson;

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
  }

  disable() {
    if ( !this.BusinessProcess || !this.selectedApplicableTo ) {
      return true;
    } else {
      return false;
    }
  }

  // /* This method will reset all values to default */
  resetAll() {
  this.BusinessProcess = '';
  this.selectedApplicableTo = [];
  }

  savebusinessProcessForm() {
    // if (!this.disable()) {
      this.dataJson = {
        'businessProcess': this.BusinessProcess,
        'applicableTo': this.selectedApplicableTo
      };
    // }
    console.log('data.......', this.dataJson);
  }

}
