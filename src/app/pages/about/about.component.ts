import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {
  companyImgGroup: any[];

  constructor() {
    this.companyImgGroup = [
      {'name': '/assets/imgs/verzel.png', description: 'Company focused on digital solutions, working with development'},
      {'name': '/assets/imgs/softwillians.png', description: 'Develop innovative and sustainable solutions, without losing focus on the results to be achieved'},
      {'name': '/assets/imgs/agrotools.png', description: 'A company that makes agribusiness more profitable and efficient'},
      {'name': '/assets/imgs/kazaverde.png', description: 'Transmit a culture of healthy eating through education'},
    ]
   }

  ngOnInit() {
  }

}
