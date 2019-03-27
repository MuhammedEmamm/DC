import { CookieService } from 'ngx-cookie-service';
import { Component, OnInit } from '@angular/core';
import { DebtorsService } from '../../../service/debtors.service';
import * as XLSX from 'ts-xlsx';
import { AppStateKey } from '../../../interface/app-state.interface';
import { AppStateService } from '../../../service/app-state.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

@Component({
  selector: 'app-all-deptors',
  providers: [DebtorsService],
  templateUrl: './all-deptors.component.html',
  styleUrls: ['./all-deptors.component.css']
})
export class AllDeptorsComponent implements OnInit {

  constructor(private Cookie: CookieService, private debtorsService: DebtorsService, private appState: AppStateService, private toastr: ToastrService, private router: Router) { }
  submissionErrors?: object;
  name: any;
  sname: any;

  inProgress = false;
  arrayBuffer: any;
  file: File;
  allDebtors: {}[];
  Debtor: {};
  RoleID = this.Cookie.get('RID');
  incomingfile(event) {
    this.file = event.target.files[0];
    console.log(this.file);
    let fileReader = new FileReader();
    fileReader.onload = (e) => {
      this.arrayBuffer = fileReader.result;
      var data = new Uint8Array(this.arrayBuffer);
      var arr = new Array();
      for (var i = 0; i != data.length; ++i) arr[i] = String.fromCharCode(data[i]);
      var bstr = arr.join("");
      var workbook = XLSX.read(bstr, { type: "binary" });
      var first_sheet_name = workbook.SheetNames[0];
      var worksheet = workbook.Sheets[first_sheet_name];
      this.Debtor = XLSX.utils.sheet_to_json(worksheet, { raw: true });
      console.log(this.Debtor);
    }
    fileReader.readAsArrayBuffer(this.file);
  }

  Upload() {

    return this.debtorsService.addDebtor(this.Debtor).then((res) => {
      this.inProgress = true;
      this.submissionErrors = null;
      if (res['isSuccess'] == true) {
        this.toastr.success('لقد تم اضافه المدين');
        window.location.reload();
      }
      else if (res['errorMessage']) {
        this.submissionErrors = res['errorMessage'];
      }

    })
      .catch(res => this.submissionErrors = res.error)
      .then(() => this.inProgress = false);
  }

  ngOnInit() {
    return this.debtorsService
      .AllDebtors()
      .then((data) => {
        this.allDebtors = data['Debtors'];
        if (this.Cookie.get('RID') === '0')
          this.allDebtors = this.allDebtors.filter(it => it['UserID'] == this.Cookie.get('UID'));

      })
      .catch(res => console.log('res', res))
      .then(() => { });

  }

  debtorAccountReport(debtor) {
    this.appState.setState(AppStateKey.DebtorDetails, debtor);
    this.router.navigateByUrl('/accounting-report');
  }

}
