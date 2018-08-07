import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-core-programs',
  templateUrl: './core-programs.component.html',
  styleUrls: ['./core-programs.component.css']
})
export class CoreProgramsComponent implements OnInit {

  itemsPath: MenuItem[];
  constructor() {
        this.itemsPath = [
      { label: 'coreProgram'},
      { label: 'viewCoreProgram', routerLink: 'viewCoreProgram'},
      { label: 'editCoreProgram', routerLink: 'editCoreProgram'},
      { label: 'addCoreProgram', routerLink: 'addCoreProgram'}
      ];
  }
  ngOnInit() {
  }

}
