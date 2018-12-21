import { PopUpService } from './../services/pop-up.service';
import { Component, OnInit } from '@angular/core';
import { PopUp } from '../models/PopUp';

@Component({
  selector: 'app-pop-up',
  templateUrl: './pop-up.component.html',
  styleUrls: ['./pop-up.component.scss']
})
export class PopUpComponent implements OnInit {
  private popup: PopUp;
  constructor(private popupService: PopUpService) { }

  ngOnInit() {
    this.popupService.getPopUp().subscribe(popup => {
      this.popup = popup;
    });
  }
}
