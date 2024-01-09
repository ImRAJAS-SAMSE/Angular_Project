// string.service.ts
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class StringService {
  constructor() {}

  CountCapital(str: string): number {
    let count = 0;
    for (let i = 0; i < str.length; i++) {
      if (str[i] === str[i].toUpperCase()) {
        count++;
      }
    }
    return count;
  }
}
