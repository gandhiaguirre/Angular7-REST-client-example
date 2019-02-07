import { Component, OnInit, AfterViewInit, Input } from '@angular/core';
import { RaccoonFeeling } from 'src/app/model/feeling';
import { FeelingRacconObserver_Service } from 'src/app/services/feelingRaccoonObserver.service';
declare var $: any;
@Component({
  selector: 'tableFeelingsRaccoon',
  templateUrl: './tableFeelingsRaccoon.component.html',
  styleUrls: ['./tableFeelingsRaccoon.component.sass']
})
export class TableFeelingsRaccoon_Component implements OnInit, AfterViewInit {

  @Input('list')
  list: Array<RaccoonFeeling> = new Array();
  constructor(private observerService: FeelingRacconObserver_Service) { }

  ngOnInit(): void {
  }

  ngAfterViewInit() {

  }

  onClicked_viewDetail(x: RaccoonFeeling) {
    this.observerService.viewDetail.next(x);
  }

  onClicked_select(x: RaccoonFeeling) {
    this.observerService.selected.next(x);
  }





}
