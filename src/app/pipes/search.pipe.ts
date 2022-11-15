import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'serach'
})
export class SerachPipe implements PipeTransform {

  transform(allFilms: any[], keyWord: string): any[] {
    if (keyWord == undefined)
      return allFilms;
    return allFilms.filter((allFilms) => {
      if (allFilms.original_title == undefined)
        return allFilms.original_name.toLowerCase().includes(keyWord.toLowerCase())
      else
        return allFilms.original_title.toLowerCase().includes(keyWord.toLowerCase())
    });
  }

}
