import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Subscription } from 'rxjs';
import { DictionaryService } from '../dictionary.service';
import { IWork } from '../iwork';

@Component({
  selector: 'app-dictionary-details',
  templateUrl: './dictionary-details.component.html',
  styleUrls: ['./dictionary-details.component.css']
})
export class DictionaryDetailsComponent implements OnInit, OnDestroy {

  word!: IWork;
  sub!: Subscription;

  constructor(
    private route: ActivatedRoute,
    private dictionaryService: DictionaryService
  ) { }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }

  ngOnInit(): void {
    this.sub = this.route.paramMap.subscribe((paramMap: ParamMap): void => {
      const key = paramMap.get('key');
      const meaning = this.dictionaryService.search(key);
      this.word = {
        key: key!,
        meaning: meaning
      };
    });
  }


}
