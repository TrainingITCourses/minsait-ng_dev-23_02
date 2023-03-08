import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CurrencyService {
  convert(source: number) {
    return source * 1.5;
  }
}
