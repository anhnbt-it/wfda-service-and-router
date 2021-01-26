import { Injectable } from '@angular/core';
import { IWork } from './iwork';

@Injectable({
  providedIn: 'root'
})
export class DictionaryService {

  private words: IWork[] = [
    {
      key: 'service',
      meaning: 'Dich vu'
    }, {
      key: 'service provider',
      meaning: 'Nha cung cap dich vu'
    }, {
      key: 'provide',
      meaning: 'Cung cap'
    }, {
      key: 'efficient',
      meaning: 'Hieu qua'
    }, {
      key: 'snow',
      meaning: 'Tuyet'
    }
  ];

  constructor() { }

  search(word: string | null): string {
    if (!word) {
      return '';
    }
    const w = this.words.find(item => item.key === word.toLowerCase());
    if (w) {
      return w.meaning;
    }
    return 'Not Found';
  }

  findAll(): IWork[] {
    return this.words;
  }
}
