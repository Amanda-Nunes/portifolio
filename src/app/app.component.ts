import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { TemplateService } from './shared/services/template.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  private changeDetector: ChangeDetectorRef;

  public mobile: boolean;

  constructor(private templateService: TemplateService) {

   }

  ngOnInit() {
    this.listenMobile();
  }

  listenMobile() {
    this.templateService.notificadorMobile.subscribe(isMobile => {
      this.mobile = isMobile
      // this.changeDetector.detectChanges();
    });
  }
}
