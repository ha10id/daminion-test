import {
  Component,
  OnInit
} from '@angular/core';

export class licensePlan {
  name: string;
  amount: number;
}

export class Document {
  licenseCount: number;
  totalAmount: number = 0;
  licensePlan: licensePlan;
}

@Component({
  selector: 'app-task1',
  templateUrl: './task1.component.html',
  styleUrls: ['./task1.component.css']
})
export class Task1Component implements OnInit {
  licensePlans = [{
      name: "license plan #1",
      amount: 15
    },
    {
      name: "license plan #2",
      amount: 22
    },
    {
      name: "license plan #3",
      amount: 34
    }
  ]
  public document = new Document()

  constructor() {}

  ngOnInit() {
    // создаем документ и делаем установки по умолчанию:
    // кол-во лицензий 10
    // план по умолчанию - первая запись в licensePlans
    this.document.licenseCount = 10
    this.document.licensePlan = this.licensePlans[0]
    this.totalAmount()
  }
  ngAfterViewInit() {
    // выбираем план 1 выбранным по умолчанию
    var element = document.getElementById('licenseName0') as HTMLInputElement
    element.checked = true
    console.log("PLAN1 element", element)
  }
  // выбор лицензионного плана
  licenseSelect(self) {
    this.document.licensePlan = self
    this.totalAmount()
  }
  updateLicenseCount() {
    // console.log(this.document.licenseCount)
    this.totalAmount()
  }
  totalAmount() {
    this.document.totalAmount = this.document.licenseCount * this.document.licensePlan.amount
    console.log("Total amount", this.document)
  }
}
