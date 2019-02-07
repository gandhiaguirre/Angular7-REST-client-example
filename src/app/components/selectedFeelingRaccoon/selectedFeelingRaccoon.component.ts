import { Component, OnInit, OnDestroy, AfterViewInit } from '@angular/core';
import { RaccoonFeeling } from 'src/app/model/feeling';
import { Subscription } from 'rxjs';
import { FeelingRacconObserver_Service } from 'src/app/services/feelingRaccoonObserver.service';
declare var $: any;
@Component({
  selector: 'selectedFeelingRaccoon',
  templateUrl: './selectedFeelingRaccoon.component.html',
  styleUrls: ['./selectedFeelingRaccoon.component.sass']
})
export class SelectedFeelingRaccoon_Component implements OnInit, AfterViewInit ,OnDestroy{
  current: RaccoonFeeling;
  subscriptionObs: Subscription;
  constructor(private observerService: FeelingRacconObserver_Service) {
  }

  ngOnInit(): void {
  }

  ngAfterViewInit() {

    this.subscriptionObs = this.observerService.selected.subscribe((x) => {
      this.current = x;
      alert(x.desc + ' is an interesting feeling =) ');

    });

  }

  ngOnDestroy(): void {
    if (this.subscriptionObs && !this.subscriptionObs.closed) {
      this.subscriptionObs.unsubscribe();
    }
  }






}
