import { Component, OnInit } from '@angular/core';
import { DictionaryService } from '../dictionary.service';
import { IWork } from '../iwork';

@Component({
  selector: 'app-dictionary-page',
  templateUrl: './dictionary-page.component.html',
  styleUrls: ['./dictionary-page.component.css']
})
export class DictionaryPageComponent implements OnInit {

  listWord: IWork[] = [];

  constructor(
    private dictionaryservice: DictionaryService,
  ) { }

  ngOnInit(): void {
    this.listWord = this.dictionaryservice.findAll();
  }

}
