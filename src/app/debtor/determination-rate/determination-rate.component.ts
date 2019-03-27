import { Component, OnInit } from '@angular/core';
import { DebtorsService } from '../../../service/debtors.service';

@Component({
  selector: 'app-determination-rate',
  providers: [DebtorsService],
  templateUrl: './determination-rate.component.html',
  styleUrls: ['./determination-rate.component.css']
})
export class DeterminationRateComponent implements OnInit {

  constructor(private debtorsService: DebtorsService) { }

  determinationRate: {};

  ngOnInit() {
    return this.debtorsService
      .debtorsDeterminationRate()
      .then((data) => {
        this.determinationRate = data;
      })
      .catch(res => console.log('res', res))
      .then(() => { });
  }

}
