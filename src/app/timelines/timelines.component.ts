import { Component, OnInit } from '@angular/core';
import { DateUtilService } from '../date-util.service';

@Component({
  selector: 'app-timelines',
  templateUrl: './timelines.component.html',
  styleUrls: ['./timelines.component.css']
})
export class TimelinesComponent implements OnInit {

  output: string = '';

  constructor(
    private dateutilService: DateUtilService
  ) { }

  ngOnInit(): void {
  }

  onChange($event: any) {
    console.log($event.target.value);
    const value = $event.target.value;
    this.output = this.dateutilService.getDiffToNow(value);
  }

}
