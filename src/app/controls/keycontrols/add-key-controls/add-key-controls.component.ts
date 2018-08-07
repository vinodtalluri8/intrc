/**
 * This file should contains all the logic
 *  or the ts code related to
 *  Add / Edit keycontrols components
 */

import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { SelectItem, Message } from 'primeng/api';
import { DepartmentsService } from '../services/departments.service';
import { CategoryService } from '../services/category.service';
import { NatureOfControlsService } from '../services/nature-of-controls.service';
import { ProcessService } from '../services/process.service';
import { AddKeyControlService } from '../services/add-key-control.service';
import { MenuItem } from 'primeng/api';
import { Router, ActivatedRoute, RouterLink, UrlSegment } from '@angular/router';
import { Department } from '../interfaces/department';

@Component({
  selector: 'app-add-key-controls',
  templateUrl: './add-key-controls.component.html',
  styleUrls: ['./add-key-controls.component.css']
})
export class AddKeyControlsComponent implements OnInit {
  @Output() resetAllFields = new EventEmitter();
  category: SelectItem[];
  departments: SelectItem[];
  natureOfControls: SelectItem[];
  process: SelectItem[];
  selectedCategory: string[];
  selectedDepartments: string;
  selectedNatureOfControls: string;
  selectedProcess: string[];
  date: Date;
  dataJson: any;
  title: string;
  savedRecord;
  msg: Message[] = [];
  itemsPath: MenuItem[];
  controlText: string;
  activeDate: Date;
  saved: boolean;
  categoryJson: any[] = [];
  processJson: any[] = [];

  constructor(private departmentService: DepartmentsService, private categoryService: CategoryService,
    private natureOfControlsService: NatureOfControlsService, private processService: ProcessService,
    private addKeyControlService: AddKeyControlService, private router: Router) {

    /* Initilase the breadcrumbs navigation data*/
    this.itemsPath = [{ label: 'Internal Controls' },
    { label: 'Key Controls' },
    { label: 'Add Key Control' }];
  }


  ngOnInit() {
    this.getDropdownValues();
  }

  /**
   * This method will assign the changed category value
   * @param event
   */
  changeCategory(event) {
    if (event === 'none') {
      this.selectedCategory = [];
    } else {
      this.selectedCategory = event;
    }
  }

  /**
   * This method will assign the changed process value
   * @param event
   */
  changeProcess(event) {
    if (event === 'none') {
      this.selectedProcess = [];
    } else {
      this.selectedProcess = event;
    }
  }

  /* This method will navigate back to keycontrol screen*/
  back() {
    this.router.navigate(['/keycontrols']);
  }

  /* Populate all the required dropdown values during the screen load */
  getDropdownValues() {
    this.departmentService.getDepartments().subscribe(data => {
      this.departments = data;
    });
    this.categoryService.getCategory().subscribe(data => {
      this.category = data;
    });

    this.natureOfControlsService.getNatureOfControls().subscribe(data => {
      this.natureOfControls = data;
    });
    this.processService.getProcess().subscribe(data => {
      this.process = data;
    });
  }

  /* This method will enable or disable the Save button based on the mandatory fields selected */
  disable() {
    if ((!this.selectedCategory || this.selectedCategory.length === 0) || !this.selectedDepartments || !this.selectedNatureOfControls
      || !this.title || !this.controlText || !this.activeDate || this.saved) {
      return true;
    } else {
      return false;
    }
  }

  /* This method will reset all values to default */
  resetAll() {
    this.title = '';
    this.controlText = '';
    this.selectedCategory = [];
    this.selectedDepartments = '';
    this.selectedNatureOfControls = '';
    this.selectedProcess = [];
    this.activeDate = new Date();
  }
  /* This method will generate JSOn for category */
  generateCategoryJson() {
    for (let i = 0; i < this.selectedCategory.length; i++) {
      this.categoryJson.push({
        'categoryId': this.selectedCategory[i],
        'categoryName': this.selectedCategory[i]
      });
    }
  }
  /* This method will generate JSOn for process */
  generateProcessJson() {
    if (this.selectedProcess) {
      for (let i = 0; i < this.selectedProcess.length; i++) {
        this.processJson.push({
          'processId': this.selectedProcess[i],
          'processName': this.selectedProcess[i]
        });
      }
    }
  }

  /* This method will save all the data in addkeycontrol screen  */
  saveKeyControl() {
    if (!this.disable()) {
      this.generateCategoryJson();
      this.generateProcessJson();
      this.dataJson = {
        'title': this.title,
        'keyControlDescription': this.controlText,
        'departmentId': this.selectedDepartments,
        'codeKeyControlNature': this.selectedNatureOfControls,
        'activeDate': this.activeDate.toString(),
        'categories': this.categoryJson,
        'processes': this.processJson,
        'createUser': 'shashi',
        'modifyUser': 'shashi'
      };

      this.addKeyControlService.addKeyControls(this.dataJson)
        .subscribe(data => {
          this.savedRecord = data;
          this.resetAll();
          console.log('saved record', data);
          this.msg.push({
            severity: 'success',
            summary: 'Record Saved Successfully.',
            detail: ' Key control id = ' + this.savedRecord['keyControlId']
          });

        });
    }
  }


}
