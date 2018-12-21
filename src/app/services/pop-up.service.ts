import { BehaviorSubject, Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { PopUp } from '../models/PopUp';

@Injectable({
  providedIn: 'root'
})
export class PopUpService {
  private popupClass = {
    info: 'information',
    success: 'success',
    error: 'error'
  };
  private popup: PopUp = {
    information: '',
    class: ''
  };
  private popup$ = new BehaviorSubject<PopUp>(this.popup);

  constructor() { }
  getPopUp(): Observable<PopUp> {
    return this.popup$.asObservable();
  }
  setPopup(info: string, type: string): void {
    this.popup.information = info;
    this.popup.class = this.popupClass[type];
    this.popup$.next(this.popup);
    setTimeout(()=>{
      this.popup.information = '';
      this.popup$.next(this.popup);
    }, 1500);
  }
}
