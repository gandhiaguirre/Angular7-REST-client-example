import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { RaccoonFeeling } from '../model/feeling';

@Injectable({
  providedIn: 'root'
})
export class FeelingRacconObserver_Service {
  viewDetail: Subject<RaccoonFeeling> = new Subject();
  selected: Subject<RaccoonFeeling> = new Subject();
}
