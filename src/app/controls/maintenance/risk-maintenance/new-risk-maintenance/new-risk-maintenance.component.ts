import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { MaintenanceService } from '../../services/maintenance.service';

@Component({
  selector: 'app-new-risk-maintenance',
  templateUrl: './new-risk-maintenance.component.html',
  styleUrls: ['./new-risk-maintenance.component.css']
})
export class NewRiskMaintenanceComponent implements OnInit {

  itemsPath: MenuItem[];
  home: MenuItem;
  dataJson;
  mockDropDownData;
  typeOfRisk;
  riskCategory;

  constructor(private dropdownService: MaintenanceService) {
    this.home = { icon: 'fa fa-home' };
    this.itemsPath = [{ label: 'Risk Maintenance', routerLink: ['/riskMaintenance']},
    { label: 'New Risk'}];
   }

  ngOnInit() {
         this.dropdownService.getDropdownData().subscribe(
      (data) => {
        this.mockDropDownData = data;
      }
    );
  }

  disable() {
    if ((!this.typeOfRisk || this.typeOfRisk.length === 0) || !this.riskCategory ) {
      return true;
    } else {
      return false;
    }
  }

  saveData() {
        if (!this.disable()) {
      this.dataJson = {
        'riskCategory': this.riskCategory,
        'typeOfRisk': this.typeOfRisk
      };
    }

    console.log('dataJson', this.dataJson);
  }
  resetAll() {
    this.typeOfRisk = '';
    this.riskCategory = '';
  }
}
