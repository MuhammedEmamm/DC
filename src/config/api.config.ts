const urls = {
  serverUrl: 'http://yakensolution.cloudapp.net/DebtCollection/api'
};

const endpoints = {
  login: '/Sigin/login ',
  logout: '/Users/logout',
  addEmployee: '/Users/add',
  detailsEmployee: '/Users/Details',
  editEmployee: '/Users/update',
  deleteEmployee: '/Users/delete',
  allEmployee: '/Users/AllEmployees',
  addFollowUp: '/Users/AddFollowUp',
  editFollowUp: '/Users/EditFollowUp', //fix api link
  userFollowup: '/Users/FollowUp', //fix api link here
  deleteFollowup: '/Users/DeleteFollowUp',
  employeeCollection: '/Users/Collection',
  addCreditor: '/Creditors/AddCompany',
  editCreditor: '/Creditors/EditCompany',
  deleteCreditor: '/Creditors/DeleteCompany',
  allCreditorsPayment: '/Creditors/AllPayment',
  allCreditorsComapnies: '/Creditors/AllCompanies',
  addDebtor: '/Debtors/AddDebtor',
  editDebtor: '/Debtors/EditDebtor',
  debtorsPayment: '/Debtors/AllBatches', //fix component
  addPayment: '/Debtors/AddBatche', //fix component
  editPayment: '/Debtors/EditBatche',//fix component
  deletePayment: '/Debtors/DeleteBatche',//fix component
  debtorProfile: '/Debtors/GetDebtorProfile?id=',
  allDebtors: '/Debtors/AllDebtors',
  deptorCallLog: '/Debtors/GetDebtorCall?id=',
  addCall: '/Debtors/AddCall', //fix component
  debtorsAccountingReport: '/Reports/GetDebtorsCollection?id=', //fix component
  debtorsDeterminationRate: '/Reports/GetClientPayment', //not true
  companyCollection: '/Users/CollectionByAdmin?id=',
  debtorsCollection: '/Users/CollectionByEmployee?id=',
  debtorsCollection2: '/Reports/GetDebtorsCollection',
  allContracts: '/Creditors/AllContruct?id=',
  allProds: '/Creditors/AllProduct?id=',
  addProds: '/Creditors/AddProduct',
  deleteProds: '/Creditors/DeleteProduct',

  userActivity: '/Reports/UserActivityReport',

  performanceReport: '/Reports/PerformanceReport',
  performanceReport2: '/Reports/EmployeePerformanceReport',
  ListTargetCollection: '/Users/AllListTargetCollection',
  ListTargetCalls: '/Users/AllListTargetCalls',
  SetTargetCalls: '/Users/SetTargetCalls',
  SetTargetCollection: '/Users/SetTargetCollection',
  ResetPassword: '/Sigin/ResetPassword',
  TargetCollection: '/Reports/TagetCollectionReport',
  TargetCalls: '/Reports/TagetCallsReport',

  assignDebt: '/Debtors/AssignDebtorsToUser',
  addContract: '/Creditors/AddContruct',
  debtorsAllCall: '/Debtors/GetAllDebtorCall',
  empCount: '/Users/GetEmployeeCustomerCount',
  custCalls: '/Reports/GetCustomerCalls?id=',
  performanceReportDetails: '/Reports/PerformanceReportDetails',
  payments: '/Creditors/AllPayment',
  Neglectedaccount: '/Reports/GetAccountNeglected?NeglectedNumber=',
  AddNeglectedaccount: '/Users/AddNeglectedNumber',

  Notifications: '/Users/GetAllNotifications?id=',
  NotificationsRead: '/Users/NotificationIsRead?id=' , 

  CollectionReport:'/Creditors/CollectionReport?Date=',
  CollectionReportCompany:`/Creditors/CollectionReport?Date=${(new Date().getMonth()+1) + '-' + new Date().getDate() + '-' + new Date().getFullYear()}&companyID=`,
  CollectionReportCompanies:`/Creditors/CollectionReportCompanies?Date=`, 
  EmpolyeesReport:'/Creditors/EmpolyeesReport?Date='  , 
  CallsReport : '/Creditors/CallsReport?Date=' , 
  DebtsReport : '/Creditors/DebtsReport',
  DebtsReportCompanies : '/Creditors/DebtsReport?companyID=',
  CompanyDebtReport : `/Creditors/CompanyDebtReport?Date=${(new Date().getMonth()+1) + '-' + new Date().getDate() + '-' + new Date().getFullYear()}&companyID=`,
  CompanyDebtReportAll : `/Creditors/CompanyDebtReport?Date=${(new Date().getMonth()+1) + '-' + new Date().getDate() + '-' + new Date().getFullYear()}`,
  CallStatusReport:'/Creditors/CallsStatusReport?Date=',
  CallStatusReportCompany:'/Creditors/CallsStatusReport'
};

export function endpoint(name) {
  return urls.serverUrl + endpoints[name];
}
