import { CookieService } from 'ngx-cookie-service';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { DebtorsService } from '../../../service/debtors.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-debtor-profile',
  providers: [DebtorsService],
  templateUrl: './debtor-profile.component.html',
  styleUrls: ['./debtor-profile.component.css']
})
export class DebtorProfileComponent implements OnInit {

  constructor(private debtorsService: DebtorsService , private toastr: ToastrService , private Route : ActivatedRoute , private Cookie : CookieService) { }
  ID :any  = this.Route.snapshot.paramMap.get('id') ; 
  debtorsData: {Name:string , ID:any , Job:any , IdentityType : any , IdentityNumber : any , Phone:any , Adrees:any , ProductCode : any ,ProductName:any , Date:any} = {Name : "" , ID :"" , IdentityNumber : "" , IdentityType:"" , Job:"" , Phone:"" , Adrees:"" , ProductCode:"" , ProductName:"" , Date:""};
  formData = {};
  submissionErrors?: object;
  inProgress = false;
  RoleID = this.Cookie.get('RID') ; 
  onSubmit() {
    console.log('dataa', this.debtorsData);
    this.debtorsData.ID = this.ID;  
    this.inProgress = true;
    this.submissionErrors = null;
    return this.debtorsService
      .editDebtor(this.debtorsData)
      .then((res) => {
        if (res['isSuccess'] == true) {
          this.toastr.success('لقد تم تعديل البيانات الشخصية');
          window.location.reload() ; 
        }
      })
      .catch(res => this.submissionErrors = res.error)
      .then(() => this.inProgress = false);
  }
  ngOnInit() {
    return this.debtorsService
      .debtorProfile(this.ID)
      .then((data) => {
        this.debtorsData = data['Debtors'];
      })
      .catch(res => console.log('res', res))
      .then(() => { });
  }

}
