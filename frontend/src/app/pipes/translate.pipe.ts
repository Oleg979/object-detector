import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'translate' })
export class TranslationPipe implements PipeTransform {
  translationMap = {
    plane: 'самолёт',
    car: 'машина',
    bird: 'птица',
    cat: 'кошка',
    deer: 'олень',
    dog: 'собака',
    frog: 'лягушка',
    horse: 'лошадь',
    ship: 'корабль',
    truck: 'грузовик',
  };

  transform(value: string): string {
    return this.translationMap[value];
  }
}
