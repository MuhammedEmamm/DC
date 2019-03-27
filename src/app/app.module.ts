// import { MessagingService } from '../service/messaging.service';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { RouterModule, Router } from '@angular/router';
import { routes } from './app.routes';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { FormsModule, EmailValidator } from '@angular/forms';
import { CookieService } from 'ngx-cookie-service'
import { AppComponent } from './app.component';
import { SideBarComponent } from './side-bar/side-bar.component';
import { AddEmployeeComponent } from './employee/add-employee/add-employee.component';
import { HeaderComponent } from './header/header.component';
import { DataTablesComponent } from './employee/data-tables/data-tables.component';
import { FooterComponent } from './footer/footer.component';
import { UserActivityReportComponent } from './employee/user-activity-report/user-activity-report.component';
import { TheCreditorComponent } from './creditors/the-creditor/the-creditor.component';
import { DepartmentOfCreditorsComponent } from './creditors/department-of-creditors/department-of-creditors.component';
import { CreditorPaymentComponent } from './creditors/creditor-payment/creditor-payment.component';
import { AddDebtorComponent } from './debtor/add-debtor/add-debtor.component';
import { AllDeptorsComponent } from './debtor/all-deptors/all-deptors.component';
import { DeptorPaymentComponent } from './debtor/deptor-payment/deptor-payment.component';
import { DeptorCalllogComponent } from './debtor/deptor-calllog/deptor-calllog.component';
import { AccountingReportComponent } from './debtor/accounting-report/accounting-report.component';
import { DeterminationRateComponent } from './debtor/determination-rate/determination-rate.component';
import { CompanyCollectionComponent } from './debtor/collection/collection.component';
import { DebtorCollectionComponent } from './debtor/collection2/collection2.component';
import { LoginComponent } from './login/login.component';
import { AppStateService } from '../service/app-state.service';
import { AuthenticationGuard } from './authentication.guard';
import { AnonymousGuard } from './annonynous.guard';
import { AuthenticationService } from '../service/auth.service';
import { SubmissionErrorsComponent } from './submission-errors/submission-errors.component';
import { ToastrModule } from 'ngx-toastr';
import { DebtorProfileComponent } from './debtor/debtor-profile/debtor-profile.component';
import { FollowUpComponent } from './employee/follow-up/follow-up.component';
import { AddFollowupComponent } from './employee/add-followup/add-followup.component';
import { AddPaymentComponent } from './debtor/add-payment/add-payment.component';
import { from } from 'rxjs/observable/from';
import { CommunicationRRComponent } from './reports/communication-r-r/communication-r-r.component';
import { CommunicationRRDComponent } from './reports/communication-r-r-d/communication-r-r-d.component';
import { AllReportsComponent } from './reports/all-reports/all-reports.component';
import { CustomerPaymentsReportsComponent } from './reports/customer-payments-reports/customer-payments-reports.component';
import { CustomerDataReportsComponent } from './reports/customer-data-reports/customer-data-reports.component';
import { DetCollectionRateComponent } from './reports/det-collection-rate/det-collection-rate.component';
import { EmployeeReportComponent } from './reports/employee-report/employee-report.component';
import { PerformanceReportComponent } from './reports/performance-report/performance-report.component';
import { PerformancrReportDetailsComponent } from './reports/performancr-report-details/performancr-report-details.component';
import { PaymentsComponent } from './reports/payments/payments.component';
import { EmpCalllogComponent } from './reports/emp-calllog/emp-calllog.component';
import { NeglectedaccountComponent } from './reports/neglectedaccount/neglectedaccount.component';
import { SearchPipe } from './search.pipe';
import { AllContractsComponent } from './creditors/all-contracts/all-contracts.component';
import { AllprodsComponent } from './creditors/allprods/allprods.component';
import { DatePipe } from './date.pipe';
import { NotificationsComponent } from './notifications/notifications.component';
import { ChatService } from './chat.service';
import { SignalRModule } from 'ng2-signalr';
import { SignalRConfiguration } from 'ng2-signalr';
import { ChatComponent } from './chat/chat.component';
import { NgIdleKeepaliveModule } from '@ng-idle/keepalive';
import { MomentModule } from 'angular2-moment';
import { AllTargetsComponent } from './monthly-targets/all-targets/all-targets.component';
import { EmployeesTargetsComponent } from './monthly-targets/employees-targets/employees-targets.component';
import { SuperTargetsComponent } from './monthly-targets/super-targets/super-targets.component';
import { CallsTargetsComponent } from './monthly-targets/calls-targets/calls-targets.component';
import { KpiCollectionReportComponent } from './reports/kpi-collection-report/kpi-collection-report.component';
import { KpiCallsReportComponent } from './reports/kpi-calls-report/kpi-calls-report.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';
import { FusionChartsModule } from 'angular-fusioncharts';
import * as FusionCharts from 'fusioncharts';
import * as Charts from 'fusioncharts/fusioncharts.charts';
import * as FusionTheme from 'fusioncharts/themes/fusioncharts.theme.fusion';
import { ChartModule } from 'angular2-chartjs';
import { AllGraphsReportsComponent } from './graphical-reports/all-graphs-reports/all-graphs-reports.component';
import { GraphCollectionComponent } from './graphical-reports/graph-collection/graph-collection.component';
import { GraphEmployeesComponent } from './graphical-reports/graph-employees/graph-employees.component';
import { GraphDebtsComponent } from './graphical-reports/graph-debts/graph-debts.component';
import { GraphDebtorsComponent } from './graphical-reports/graph-debtors/graph-debtors.component';

FusionChartsModule.fcRoot(FusionCharts, Charts, FusionTheme)


export function createConfig(): SignalRConfiguration {
  const c = new SignalRConfiguration();
  c.hubName = 'signalRChatHub';
  c.url = 'http://yakensolution.cloudapp.net/DebtCollection';
  c.logging = true;
  c.executeEventsInZone = true; // optional, default is true
  c.executeErrorsInZone = false; // optional, default is false
  c.executeStatusChangeInZone = true; // optional, default is true
  return c;
}
@NgModule({
  declarations: [
    AppComponent,
    SideBarComponent,
    AddEmployeeComponent,
    HeaderComponent,
    DataTablesComponent,
    FooterComponent,
    UserActivityReportComponent,
    TheCreditorComponent,
    DepartmentOfCreditorsComponent,
    CreditorPaymentComponent,
    AddDebtorComponent,
    AllDeptorsComponent,
    DeptorPaymentComponent,
    DeptorCalllogComponent,
    AccountingReportComponent,
    DeterminationRateComponent,
    CompanyCollectionComponent,
    DebtorCollectionComponent,
    LoginComponent,
    SubmissionErrorsComponent,
    DebtorProfileComponent,
    FollowUpComponent,
    AddFollowupComponent,
    AddPaymentComponent,
    CommunicationRRComponent,
    CommunicationRRDComponent,
    AllReportsComponent,
    CustomerPaymentsReportsComponent,
    CustomerDataReportsComponent,
    DetCollectionRateComponent,
    EmployeeReportComponent,
    PerformanceReportComponent,
    PerformancrReportDetailsComponent,
    PaymentsComponent,
    EmpCalllogComponent,
    NeglectedaccountComponent,
    SearchPipe,
    AllContractsComponent,
    AllprodsComponent,
    DatePipe,
    NotificationsComponent,
    ChatComponent,
    AllTargetsComponent,
    EmployeesTargetsComponent,
    SuperTargetsComponent,
    CallsTargetsComponent,
    KpiCollectionReportComponent,
    KpiCallsReportComponent,
    ResetPasswordComponent,
    AllGraphsReportsComponent,
    GraphCollectionComponent,
    GraphEmployeesComponent,
    GraphDebtsComponent,
    GraphDebtorsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AngularFontAwesomeModule,
    BrowserAnimationsModule,
    FormsModule,
    SignalRModule.forRoot(createConfig),
    ToastrModule.forRoot(),
    RouterModule.forRoot(routes, { useHash: true }),
    MomentModule,
    NgIdleKeepaliveModule.forRoot(),
    FusionChartsModule,
    ChartModule
  ],
  providers: [
    EmailValidator,
    AuthenticationGuard,
    AnonymousGuard,
    AppStateService,
    AuthenticationService,
    CookieService,
    ChatService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
