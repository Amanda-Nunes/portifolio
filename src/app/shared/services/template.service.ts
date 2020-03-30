import { Injectable, EventEmitter } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TemplateService {

  private _notificadorMobile: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(window.innerWidth < 896);

  notificadorScrrenSize = new EventEmitter<any>(true);
  isMobile: boolean;

  constructor() {
    this.listenMobile();
  }

  private listenMobile(breakPoint = 896): void{
    window.innerWidth < breakPoint ? this.notificadorMobile.next(true) : this.notificadorMobile.next(false);
    this.isMobile = window.innerWidth < breakPoint;
    window.addEventListener('resize', (event: any) => {
      event.target.innerWidth < breakPoint ? this.notificadorMobile.next(true) : this.notificadorMobile.next(false);
      this.notificadorScrrenSize.emit(event.target.innerWidth);
      this.isMobile = event.target.innerWidth < breakPoint;
    });
  }

  get notificadorMobile(): BehaviorSubject<boolean> {
    return this._notificadorMobile;
  }

}
