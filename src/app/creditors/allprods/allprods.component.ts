import { CookieService } from 'ngx-cookie-service';
import { Component, OnInit } from '@angular/core';
import { CreditorsService } from '../../../service/creditors.service';
import { ToastrService } from 'ngx-toastr';
import { AppStateKey } from '../../../interface/app-state.interface';
import { AppStateService } from '../../../service/app-state.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-allprods',
  providers: [CreditorsService],
  templateUrl: './allprods.component.html',
  styleUrls: ['./allprods.component.css']
})
export class AllprodsComponent implements OnInit {

  constructor(private Cookie: CookieService, private creditorsService: CreditorsService, private appState: AppStateService, private toastr: ToastrService, private router: Router, private Route: ActivatedRoute) {
    this.Prods = [{
      ID: '',
      Name: '',
      Code: ''
    }];
    this.formData = {
      ContructID: '',
      Name: '',
      Code: ''
    };
  }
  formData: {
    ContructID: any,
    Name: any,
    Code: any,

  } ;
  Prods: {
    ID: any,
    Name: any,
    Code: any
  }[] ; 
  name: any;
  RoleID = this.Cookie.get('RID');

  submissionErrors?: object;
  inProgress = false;
  GetAllProds() {
    return this.creditorsService
      .AllProds(this.Route.snapshot.paramMap.get('id'))
      .then((res) => {
        this.Prods = res['Products'];
        console.log(this.Prods);
      })
      .catch(res => this.submissionErrors = res.error)
      .then(() => this.inProgress = false);

  }

  AddProd() {
    this.formData.ContructID = this.Route.snapshot.paramMap.get('id');
    return this.creditorsService
      .AddProds(this.formData)
      .then((res) => {
        window.location.reload();
        console.log(this.Prods);
      })
      .catch(res => this.submissionErrors = res.error)
      .then(() => this.inProgress = false);

  }
  deleteProd(ID) {
    return this.creditorsService
      .DeleteProds({ "ProductID": ID })
      .then((res) => {
        this.GetAllProds();

      })
      .catch(res => this.submissionErrors = res.error)
      .then(() => this.inProgress = false);

  }
  ngOnInit() {
    this.GetAllProds();
  }

}
