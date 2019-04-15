import {
  Component,
  OnInit
} from '@angular/core'

import licensePlans from '../../../assets/data/data.json'

export class LicensePlan {
  name: string;
  amount: number;
	packets: [];
}

export class Document {
  licenseCount: number;
  totalAmount: number = 0;
  licensePlan: LicensePlan;
  results: any;
}

@Component({
  selector: 'app-task1',
  templateUrl: './task1.component.html',
  styleUrls: ['./task1.component.css']
})
export class Task1Component implements OnInit {
  dataFormFile: any
	LicensePlans: any;
  public document = new Document()

  constructor() {}
  ngOnInit() {
    // создаем документ и делаем установки по умолчанию:
    // кол-во лицензий 10
    // план по умолчанию - первая запись в licensePlans
		this.LicensePlans = licensePlans
    this.document.licensePlan = this.LicensePlans[0]
    this.document.licenseCount = this.LicensePlans[0].packets[0]
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
    this.totalAmount()
  }
  totalAmount() {
    this.document.totalAmount = this.document.licenseCount * this.document.licensePlan.amount
    console.log("Total amount", this.document)
  }
  buyNow(document) {
    alert(JSON.stringify(document))
    window.location.href = "/"
  }
}
