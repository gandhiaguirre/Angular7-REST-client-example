import { Component, OnInit, AfterViewInit, Input } from '@angular/core';
import { RaccoonFeeling } from 'src/app/model/feeling';
import { FeelingRacconObserver_Service } from 'src/app/services/feelingRaccoonObserver.service';
@Component({
  selector: 'gridFeelingsRaccoon',
  templateUrl: './gridFeelingsRaccoon.component.html',
  styleUrls: ['./gridFeelingsRaccoon.component.sass']
})
export class GridFeelingsRaccoon_Component implements OnInit, AfterViewInit {

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
