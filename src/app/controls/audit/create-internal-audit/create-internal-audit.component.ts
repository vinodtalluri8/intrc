import { Component, OnInit } from '@angular/core';
import { MaintenanceService } from '../../maintenance/services/maintenance.service';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-create-internal-audit',
  templateUrl: './create-internal-audit.component.html',
  styleUrls: ['./create-internal-audit.component.css']
})
export class CreateInternalAuditComponent implements OnInit {
  auditName;
  department;
  reportClosedDate;
  dataJson;
  mockDropDownData;
  itemsPath: MenuItem[];
  home: MenuItem;

  constructor(private dropdownService: MaintenanceService) {
    this.home = { icon: 'fa fa-home' };
    this.itemsPath = [{ label: 'Audit'},
    { label: 'Create Internal Audit'}];
   }

  ngOnInit() {
       this.dropdownService.getDropdownData().subscribe(
      (data) => {
        this.mockDropDownData = data;
      }
    );
  }

  disable() {
    if ((!this.department || this.department.length === 0) || !this.auditName || !this.reportClosedDate ) {
      return true;
    } else {
      return false;
    }
  }

  saveData() {
        if (!this.disable()) {
      this.dataJson = {
        'auditName': this.auditName,
        'department': this.department,
        'reportClosedDate': this.reportClosedDate.toString()
      };
    }

    console.log('dataJson', this.dataJson);
  }
  resetAll() {
    this.auditName = '';
    this.department = '';
    this.reportClosedDate = new Date();
  }

}
