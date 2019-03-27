import { CommunicationRRComponent } from './reports/communication-r-r/communication-r-r.component';
import { Routes } from '@angular/router';
import { AuthenticationGuard } from './authentication.guard';
import { AnonymousGuard } from './annonynous.guard';

import { AddEmployeeComponent } from './employee/add-employee/add-employee.component';
import { DataTablesComponent } from './employee/data-tables/data-tables.component';
import { UserActivityReportComponent } from './employee/user-activity-report/user-activity-report.component';
import { CreditorPaymentComponent } from './creditors/creditor-payment/creditor-payment.component';
import { TheCreditorComponent } from './creditors/the-creditor/the-creditor.component';
import { DepartmentOfCreditorsComponent } from './creditors/department-of-creditors/department-of-creditors.component';
import { AddDebtorComponent } from './debtor/add-debtor/add-debtor.component';
import { AllDeptorsComponent } from './debtor/all-deptors/all-deptors.component';
import { DeptorPaymentComponent } from './debtor/deptor-payment/deptor-payment.component';
import { DeptorCalllogComponent } from './debtor/deptor-calllog/deptor-calllog.component';
import { AccountingReportComponent } from './debtor/accounting-report/accounting-report.component';
import { DeterminationRateComponent } from './debtor/determination-rate/determination-rate.component';
import { CompanyCollectionComponent } from './debtor/collection/collection.component';
import { DebtorCollectionComponent } from './debtor/collection2/collection2.component';
import { LoginComponent } from './login/login.component';
import { DebtorProfileComponent } from './debtor/debtor-profile/debtor-profile.component';
import { FollowUpComponent } from './employee/follow-up/follow-up.component';
import { AddFollowupComponent } from './employee/add-followup/add-followup.component';
import { AddPaymentComponent } from './debtor/add-payment/add-payment.component';
import { a } from '@angular/core/src/render3';
import { AllReportsComponent } from './reports/all-reports/all-reports.component';
import { CommunicationRRDComponent } from './reports/communication-r-r-d/communication-r-r-d.component';
import { CustomerPaymentsReportsComponent } from './reports/customer-payments-reports/customer-payments-reports.component';
import { CustomerDataReportsComponent } from './reports/customer-data-reports/customer-data-reports.component';
import { DetCollectionRateComponent } from './reports/det-collection-rate/det-collection-rate.component';
import { EmployeeReportComponent } from './reports/employee-report/employee-report.component';
import { PerformanceReportComponent } from './reports/performance-report/performance-report.component';
import { PerformancrReportDetailsComponent } from './reports/performancr-report-details/performancr-report-details.component';
import { PaymentsComponent } from './reports/payments/payments.component';
import { EmpCalllogComponent } from './reports/emp-calllog/emp-calllog.component';
import { NeglectedaccountComponent } from './reports/neglectedaccount/neglectedaccount.component';
import { AllContractsComponent } from './creditors/all-contracts/all-contracts.component';
import { AllprodsComponent } from './creditors/allprods/allprods.component';
import { NotificationsComponent } from './notifications/notifications.component';
import { ChatService } from './chat.service';
import { ChatComponent } from './chat/chat.component';
import { AllTargetsComponent } from './monthly-targets/all-targets/all-targets.component';
import { EmployeesTargetsComponent } from './monthly-targets/employees-targets/employees-targets.component';
import { SuperTargetsComponent } from './monthly-targets/super-targets/super-targets.component';
import { CallsTargetsComponent } from './monthly-targets/calls-targets/calls-targets.component';
import { KpiCollectionReportComponent } from './reports/kpi-collection-report/kpi-collection-report.component';
import { KpiCallsReportComponent } from './reports/kpi-calls-report/kpi-calls-report.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';
import { GraphCollectionComponent } from './graphical-reports/graph-collection/graph-collection.component';
import { GraphDebtsComponent } from './graphical-reports/graph-debts/graph-debts.component';
import { GraphDebtorsComponent } from './graphical-reports/graph-debtors/graph-debtors.component';
import { GraphEmployeesComponent } from './graphical-reports/graph-employees/graph-employees.component';
import { AllGraphsReportsComponent } from './graphical-reports/all-graphs-reports/all-graphs-reports.component';

const routes: Routes = [{
  path: '',
  redirectTo: 'login',
  pathMatch: 'full'
}, {
  path: 'login',
  component: LoginComponent,
}, {
  path: 'add-employee',
  component: AddEmployeeComponent,
  canActivate: [AuthenticationGuard]
}, {
  path: 'data-table',
  component: DataTablesComponent,
  canActivate: [AuthenticationGuard],
},
{
  path: 'chat',
  component: ChatComponent,
  canActivate: [AuthenticationGuard],
  resolve: { connection: ChatService }
},

{
  path: 'user-activity/:id',
  component: UserActivityReportComponent,
  canActivate: [AuthenticationGuard]
}, {
  path: 'user-followup',
  component: FollowUpComponent,
  canActivate: [AuthenticationGuard]
}, {
  path: 'add-followup',
  component: AddFollowupComponent,
  canActivate: [AuthenticationGuard]
}, {
  path: 'creditor-payment/:id',
  component: CreditorPaymentComponent,
  canActivate: [AuthenticationGuard]
}, {
  path: 'add-creditor',
  component: TheCreditorComponent,
  canActivate: [AuthenticationGuard]
}, {
  path: 'department-of-creditors',
  component: DepartmentOfCreditorsComponent,
  canActivate: [AuthenticationGuard]
}, {
  path: 'add-debtor',
  component: AddDebtorComponent,
  canActivate: [AuthenticationGuard]
}, {
  path: 'debtor-profile',
  component: DebtorProfileComponent,
  canActivate: [AuthenticationGuard]
}

  , {
  path: 'debtor-profile/:id',
  component: DebtorProfileComponent,
  canActivate: [AuthenticationGuard]
}
  , {
  path: 'all-debtors',
  component: AllDeptorsComponent,
  canActivate: [AuthenticationGuard]
}, {
  path: 'debtor-payment/:id',
  component: DeptorPaymentComponent,
  canActivate: [AuthenticationGuard]
}, {
  path: 'add-payment',
  component: AddPaymentComponent,
  canActivate: [AuthenticationGuard]
},
{
  path: 'add-payment/:id',
  component: AddPaymentComponent,
  canActivate: [AuthenticationGuard]
},
{
  path: 'debtor-calllog',
  component: DeptorCalllogComponent,
  canActivate: [AuthenticationGuard]
}, {
  path: 'debtor-calllog/:id/:id2',
  component: DeptorCalllogComponent,
  canActivate: [AuthenticationGuard]
}

  , {
  path: 'accounting-report',
  component: AccountingReportComponent,
  canActivate: [AuthenticationGuard]
},
{
  path: 'accounting-report/:id',
  component: AccountingReportComponent,
  canActivate: [AuthenticationGuard]
}, {
  path: 'determination-rate',
  component: DeterminationRateComponent,
  canActivate: [AuthenticationGuard]
}, {
  path: 'company-collection',
  component: CompanyCollectionComponent,
  canActivate: [AuthenticationGuard]
}, {
  path: 'debtor-collection',
  component: DebtorCollectionComponent,
  canActivate: [AuthenticationGuard]
}
  , {
  path: 'all-reports',
  component: AllReportsComponent,
  canActivate: [AuthenticationGuard]
}
  , {
  path: 'communication-record-report',
  component: CommunicationRRComponent,
  canActivate: [AuthenticationGuard]
}
  , {
  path: 'communication-record-report-details/:id',
  component: CommunicationRRDComponent,
  canActivate: [AuthenticationGuard]
}
  , {
  path: 'customer-payment-report',
  component: CustomerPaymentsReportsComponent,
  canActivate: [AuthenticationGuard]
}
  , {
  path: 'customer-data-report',
  component: CustomerDataReportsComponent,
  canActivate: [AuthenticationGuard]
}
  , {
  path: 'determination-of-collection-rate',
  component: DetCollectionRateComponent,
  canActivate: [AuthenticationGuard]
}
  , {
  path: 'employees-report',
  component: EmployeeReportComponent,
  canActivate: [AuthenticationGuard]
}
  , {
  path: 'employee-call-log',
  component: DeptorCalllogComponent,
  canActivate: [AuthenticationGuard]
}
  , {
  path: 'performance-report',
  component: PerformanceReportComponent,
  canActivate: [AuthenticationGuard]
}
  , {
  path: 'performance-report-details/:id',
  component: PerformancrReportDetailsComponent,
  canActivate: [AuthenticationGuard]
}
  , {
  path: 'payments-report',
  component: PaymentsComponent,
  canActivate: [AuthenticationGuard]
}, {
  path: 'neglected-report',
  component: NeglectedaccountComponent,
  canActivate: [AuthenticationGuard]
}
  , {
  path: 'kpi-collection-report',
  component: KpiCollectionReportComponent,
  canActivate: [AuthenticationGuard]
}
  , {
  path: 'kpi-calls-report',
  component: KpiCallsReportComponent,
  canActivate: [AuthenticationGuard]
}
  , {
  path: 'emp-callLog/:id',
  component: EmpCalllogComponent,
  canActivate: [AuthenticationGuard]
}
  , {
  path: 'Allcontracts/:id',
  component: AllContractsComponent,
  canActivate: [AuthenticationGuard]
}
  , {
  path: 'Allproducts/:id',
  component: AllprodsComponent,
  canActivate: [AuthenticationGuard]
}
  , {
  path: 'notifications',
  component: NotificationsComponent,
  canActivate: [AuthenticationGuard]
}

  , {
  path: 'all-targets',
  component: AllTargetsComponent,
  canActivate: [AuthenticationGuard]
}
  , {
  path: 'emps-targets',
  component: EmployeesTargetsComponent,
  canActivate: [AuthenticationGuard]
}

  , {
  path: 'supers-targets',
  component: SuperTargetsComponent,
  canActivate: [AuthenticationGuard]
}
  , {
  path: 'calls-targets',
  component: CallsTargetsComponent,
  canActivate: [AuthenticationGuard]
}

  , {
  path: 'reset-password',
  component: ResetPasswordComponent,
  canActivate: [AuthenticationGuard]
}

  , {
  path: 'all-graphs-reports',
  component: AllGraphsReportsComponent,
  canActivate: [AuthenticationGuard]
}

  , {
  path: 'graph-collection',
  component: GraphCollectionComponent,
  canActivate: [AuthenticationGuard]
}


  , {
  path: 'graph-debts',
  component: GraphDebtsComponent,
  canActivate: [AuthenticationGuard]
}


  , {
  path: 'graph-debtors',
  component: GraphDebtorsComponent,
  canActivate: [AuthenticationGuard]
}

  , {
  path: 'graph-employees',
  component: GraphEmployeesComponent,
  canActivate: [AuthenticationGuard]
}







];

export { routes };
