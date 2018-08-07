import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { MaintenanceService } from '../../services/maintenance.service';

@Component({
  selector: 'app-new-control-objective',
  templateUrl: './new-control-objective.component.html',
  styleUrls: ['./new-control-objective.component.css']
})
export class NewControlObjectiveComponent implements OnInit {

  itemsPath: MenuItem[];
  home: MenuItem;
  selectedProgram;
  mockDropDownData;
  BusinessProcess;
  mockMultiDropDownData;
  description;
  changeAditionalProcedure;
  selectedRiskCategory;
  title;
  dataJson;

  constructor(private dropdownService: MaintenanceService) {
    this.home = { icon: 'fa fa-home' };

    this.itemsPath = [{ label: 'Maintenance'},
    { label: 'Control Objectives Maintenance', routerLink: ['/controlObjectivesMaintenance'] },
    { label: 'New Control Objective'}];
   }

  ngOnInit() {
        this.dropdownService.getDropdownData().subscribe(
      (data) => {
        this.mockDropDownData = data;
      }
    );
       this.dropdownService.getMultiDropdownData().subscribe(
      (data) => {
        this.mockMultiDropDownData = data;
      }
    );
  }

    changeRiskCategory(event) {
    if (event === 'none') {
      this.selectedRiskCategory = [];
    } else {
      this.selectedRiskCategory = event;
    }
  }

    disable() {
    if ((!this.selectedProgram ||
      this.selectedProgram.length === 0) || !this.title || (!this.selectedRiskCategory || this.selectedRiskCategory.length === 0)
      || !this.description ) {
      return true;
    } else {
      return false;
    }
  }

  saveData() {
        if (!this.disable()) {
      this.dataJson = {
        'title': this.title,
        'selectedProgram': this.selectedProgram,
        'selectedRiskCategory': this.selectedRiskCategory,
        'description': this.description
      };
    }

    console.log('dataJson', this.dataJson);
  }
  resetAll() {
    this.selectedProgram = '';
    this.title = '';
    this.selectedRiskCategory = [];
    this.description = '';
  }
}
