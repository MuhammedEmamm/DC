export default interface AppStateInterface {
  Token: string;
  UserDetails: object;
}

export enum AppStateKey {
  Token = 'Token',
  CreditorDetails = 'CreditorDetails',
  DebtorDetails = 'DebtorDetails',
  EmployeeDetails = 'EmployeeDetails'
}
