import { Injectable, EventEmitter } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { Skill } from '../models/skill';

@Injectable({
  providedIn: 'root'
})
export class TemplateService {

  private _notificadorMobile: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(window.innerWidth < 896);
  header = new HttpHeaders().append('ApplicationId', 'portfolio');
  notificadorScrrenSize = new EventEmitter<any>(true);
  isMobile: boolean;

  constructor(private http: HttpClient) {
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

  getCategoriasCatalogo(): Observable<Skill[]> {
    return this.http.get<Skill[]>(`${environment.apiUrl}skills`, {headers: this.header});
  }

  get notificadorMobile(): BehaviorSubject<boolean> {
    return this._notificadorMobile;
  }

}
