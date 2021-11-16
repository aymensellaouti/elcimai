import { Pipe, PipeTransform } from '@angular/core';
const EXCHANGE_RATE = 60269;
@Pipe({
  name: 'usdBtc'
})
export class UsdBtcPipe implements PipeTransform {
  transform(amount: number, isBtcUsd: number = 1): number {
    if (isBtcUsd) {
      return amount * EXCHANGE_RATE;
    } else {
      return amount / EXCHANGE_RATE;
    }
  }
}
