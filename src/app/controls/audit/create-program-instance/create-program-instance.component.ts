import { Component, OnInit } from '@angular/core';
import { MaintenanceService } from '../../maintenance/services/maintenance.service';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-create-program-instance',
  templateUrl: './create-program-instance.component.html',
  styleUrls: ['./create-program-instance.component.css']
})
export class CreateProgramInstanceComponent implements OnInit {

  mockDropDownData;
   selectedProgram;
    programStartDate;
    programEndDate;
    externalAuditor;
  dataJson;
  itemsPath: MenuItem[];
  home: MenuItem;

  constructor(private dropdownService: MaintenanceService) {
    this.home = { icon: 'fa fa-home' };

    this.itemsPath = [{ label: 'Audit'},
    { label: 'Create Program Instance'}];
  }

  ngOnInit() {
    this.dropdownService.getDropdownData().subscribe(
      (data) => {
        this.mockDropDownData = data;
      }
    );
  }

    disable() {
    if (!this.selectedProgram  || !this.programStartDate || !this.programEndDate || !this.externalAuditor) {
      return true;
    } else {
      return false;
    }
  }

  saveData() {
        if (!this.disable()) {
      this.dataJson = {
        'program': this.selectedProgram,
        'programStartDate': this.programStartDate.toString(),
        'programEndDate': this.programEndDate.toString(),
        'externalAuditor': this.externalAuditor
      };
    }

    console.log('dataJson', this.dataJson);
  }
  resetAll() {
    this.selectedProgram = '';
    this.programStartDate = new Date();
    this.programEndDate = new Date();
    this.externalAuditor = '';
  }

}
