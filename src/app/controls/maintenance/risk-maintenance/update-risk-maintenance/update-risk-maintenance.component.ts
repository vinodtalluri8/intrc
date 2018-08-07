import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { MaintenanceService } from '../../services/maintenance.service';

@Component({
  selector: 'app-update-risk-maintenance',
  templateUrl: './update-risk-maintenance.component.html',
  styleUrls: ['./update-risk-maintenance.component.css']
})
export class UpdateRiskMaintenanceComponent implements OnInit {

  itemsPath: MenuItem[];
  home: MenuItem;
  mockDropDownData;
  typeOfRisk;
  riskCategory;
  dataJson;

  constructor(private dropdownService: MaintenanceService) {
    this.home = { icon: 'fa fa-home' };
    this.itemsPath = [{ label: 'Risk Maintenance', routerLink: ['/riskMaintenance']},
    { label: 'Risk Update'}];
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
