
/**
 * This file should contains all logic
 * or the data releated to side nav bar
 */

import {
  Component, OnDestroy, ViewEncapsulation, Input, HostListener, Inject, OnInit
} from '@angular/core';
import { Location } from '@angular/common';
import { Router, ActivatedRoute, RouterLink, UrlSegment, RouterLinkActive } from '@angular/router';



@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  navItems = [
    {
      displayName: 'Matrix',
      children: [
        {
          displayName: 'Select a Matrix',
          route: 'selectMatrix'
        },
        {
          displayName: 'New Matrix',
          route: 'Matrix'
        }
       ]
    },
    {
      displayName: 'Key Controls',
      route: 'keycontrols'
    },
     {
      displayName: 'Core Programs',
      children: [
        {
          displayName: 'View Core Program',
          route: 'viewCoreProgram'
        },
        {
          displayName: 'Edit Core Program',
          route: 'editCoreProgram'
        },
        {
          displayName: 'Add Core Program',
          route: 'addCoreProgram'
        }]
    },
     {
      displayName: 'Audit',
       children: [
        {
          displayName: 'Create Program Instance',
          route: 'createProgramInstance'
        },
        {
          displayName: 'Edit Program Instance',
          route: 'editProgramInstance'
        },
        {
          displayName: 'Create Internal Audit',
          route: 'createInternalAudit'
        },
        {
          displayName: 'Edit Internal Audit',
          route: 'editInternalAudit'
        }]
    },
     {
      displayName: 'Maintenance',
      children: [
        {
          displayName: 'Control Objectives Maintenance',
          route: 'controlObjectivesMaintenance'
        },
        {
          displayName: 'Risk Maintenance',
          route: 'riskMaintenance'
        }]
    }
  ];
  ngOnInit() {
  }

}
