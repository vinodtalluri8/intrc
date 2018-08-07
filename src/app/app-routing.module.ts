import { ControlEvidenceComponent } from './controls/matrix/new-matrix/control-evidence/control-evidence.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { KeycontrolsComponent } from './controls/keycontrols/keycontrols.component';
import { CoreProgramsComponent } from './controls/core-programs/core-programs.component';
import { AuditComponent } from './controls/audit/audit.component';
import { MaintenanceComponent } from './controls/maintenance/maintenance.component';
import { MatrixComponent } from './controls/matrix/matrix.component';
import { ControlsModule } from './controls/controls.module';
import { AddKeyControlsComponent } from './controls/keycontrols/add-key-controls/add-key-controls.component';
import { GeneralMatrixInfoComponent } from './controls/matrix/new-matrix/general-matrix-info/general-matrix-info.component';
import { ControlComponent } from './controls/matrix/new-matrix/control/control.component';
import { BusinessActivityComponent } from './controls/matrix/new-matrix/business-activity/business-activity.component';
import { BusinessProcessComponent } from './controls/matrix/new-matrix/business-process/business-process.component';
import { RiskAssessmentComponent } from './controls/matrix/new-matrix/risk-assessment/risk-assessment.component';
// tslint:disable-next-line:max-line-length
import { ControlObjectivesMaintenanceComponent } from './controls/maintenance/control-objectives-maintenance/control-objectives-maintenance.component';
import { RiskMaintenanceComponent } from './controls/maintenance/risk-maintenance/risk-maintenance.component';
import { NewControlObjectiveComponent } from './controls/maintenance/control-objectives-maintenance/new-control-objective/new-control-objective.component';
import { UpdateControlObjectiveComponent } from './controls/maintenance/control-objectives-maintenance/update-control-objective/update-control-objective.component';
import { UpdateRiskMaintenanceComponent } from './controls/maintenance/risk-maintenance/update-risk-maintenance/update-risk-maintenance.component';
import { NewRiskMaintenanceComponent } from './controls/maintenance/risk-maintenance/new-risk-maintenance/new-risk-maintenance.component';
import { SelectMatrixComponent } from './controls/matrix/select-matrix/select-matrix.component';
import { CreateProgramInstanceComponent } from './controls/audit/create-program-instance/create-program-instance.component';
import { CreateInternalAuditComponent } from './controls/audit/create-internal-audit/create-internal-audit.component';
import { EditInternalAuditComponent } from './controls/audit/edit-internal-audit/edit-internal-audit.component';
import { EditProgramInstanceComponent } from './controls/audit/edit-program-instance/edit-program-instance.component';
import { ViewCoreProgramComponent } from './controls/core-programs/view-core-program/view-core-program.component';
import { EditCoreProgramComponent } from './controls/core-programs/edit-core-program/edit-core-program.component';
import { AddCoreProgramComponent } from './controls/core-programs/add-core-program/add-core-program.component';

const routes: Routes = [
  { path: '', redirectTo: '/keycontrols', pathMatch: 'full' },
  { path: 'keycontrols', component: KeycontrolsComponent },
  { path: 'audit', component: AuditComponent, children: [
    { path: '', redirectTo: 'createProgramInstance', pathMatch: 'full' },
    { path: 'createProgramInstance', component: CreateProgramInstanceComponent},
    { path: 'editProgramInstance', component: EditProgramInstanceComponent},
    { path: 'createInternalAudit', component: CreateInternalAuditComponent},
    { path: 'editInternalAudit', component: EditInternalAuditComponent}
  ]
},
    { path: 'createProgramInstance', component: CreateProgramInstanceComponent },
    { path: 'createInternalAudit', component: CreateInternalAuditComponent},

  { path: 'Matrix', component: MatrixComponent, children: [
    { path: '', redirectTo: 'generalMatrixInformation', pathMatch: 'full' },
    { path: 'generalMatrixInformation', component: GeneralMatrixInfoComponent },
    { path: 'riskAssessment', component: RiskAssessmentComponent},
    { path: 'businessProcess', component: BusinessProcessComponent },
    { path: 'businessActivity', component: BusinessActivityComponent },
    { path: 'control', component: ControlComponent },
    { path: 'controlEvidence', component: ControlEvidenceComponent},
  ]
},
    { path: 'selectMatrix', component: SelectMatrixComponent}
,
  { path: 'coreProgram', component: CoreProgramsComponent, children: [
    { path: '', redirectTo: 'createProgramInstance', pathMatch: 'full' },
    { path: 'viewCoreProgram', component: ViewCoreProgramComponent},
    { path: 'editCoreProgram', component: EditCoreProgramComponent},
    { path: 'addCoreProgram', component: AddCoreProgramComponent}
  ]},
  { path: 'viewCoreProgram', component: ViewCoreProgramComponent},
    { path: 'editCoreProgram', component: EditCoreProgramComponent},
    { path: 'addCoreProgram', component: AddCoreProgramComponent},
  { path: 'keycontrols/addKeyControl', component: AddKeyControlsComponent },
  { path: 'maintainence', component: MaintenanceComponent },
  { path: 'controlObjectivesMaintenance', component: ControlObjectivesMaintenanceComponent},
  { path: 'controlObjectivesMaintenance/add', component: NewControlObjectiveComponent},
  { path: 'controlObjectivesMaintenance/update', component: UpdateControlObjectiveComponent},
  { path: 'riskMaintenance', component: RiskMaintenanceComponent },
  { path: 'riskMaintenance/add', component: NewRiskMaintenanceComponent},
  { path: 'riskMaintenance/update', component: UpdateRiskMaintenanceComponent}
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes),
    ControlsModule
  ],
  exports: [RouterModule, ControlsModule],
  declarations: []
})
export class AppRoutingModule { }
