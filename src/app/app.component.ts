import { Component, OnInit, OnDestroy, AfterViewInit } from '@angular/core';
import { FeelingsService } from './services/feelings.service';
import { MatSnackBar } from '@angular/material';
import { RaccoonFeeling } from './model/feeling';
declare var $: any;
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent implements OnInit, AfterViewInit {

  feelings_array: Array<RaccoonFeeling> = new Array();
  typeView: boolean = false;
  isLoading: boolean = true;
  constructor(private feelingService: FeelingsService, private snackBar: MatSnackBar) {
  }

  ngOnInit(): void {
    this.feelingService.getAll().subscribe(
      (data: any) => {
        this.feelings_array = data.feelings;
        this.isLoading = false;
      }, error => { });

  }

  ngAfterViewInit() {
    setTimeout(() => {
      this.openSnackBar('Bienvenido =)', '');

    }, 200);

  }


  openSnackBar(message: string, action: string) {
    this.snackBar.open(message, action, {
      duration: 2000,
    });
  }








}
