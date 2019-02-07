import { Component, OnInit, AfterViewInit, OnDestroy } from '@angular/core';
import { RaccoonFeeling } from 'src/app/model/feeling';
import { FeelingRacconObserver_Service } from 'src/app/services/feelingRaccoonObserver.service';
import { Subscription } from 'rxjs';
declare var $: any;
@Component({
  selector: 'dialogDetailRaccoon',
  templateUrl: './dialogDetailRaccoon.component.html',
  styleUrls: ['./dialogDetailRaccoon.component.sass']
})
export class DialogDetailRaccoon_Component implements OnInit, AfterViewInit, OnDestroy {

  current: RaccoonFeeling;
  subscriptionObs: Subscription;
  constructor(private observerService: FeelingRacconObserver_Service) {
  }

  ngOnInit(): void {
  }

  ngAfterViewInit() {
    $("#dialogDetailId").on("hidden.bs.modal", function () {
      this.current = undefined;
    });

    this.subscriptionObs = this.observerService.viewDetail.subscribe((x) => {
      this.current = undefined;
      $('#dialogDetailId').modal('show');
      setTimeout(() => {
        this.current = x;
      }, 50);

    });

  }

  ngOnDestroy(): void {
    if (this.subscriptionObs && !this.subscriptionObs.closed) {
      this.subscriptionObs.unsubscribe();
    }
  }







}
