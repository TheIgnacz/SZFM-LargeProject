import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'myfilter',
    pure: false
})
export class MyFilterPipe implements PipeTransform {
    transform(items: any[], filter: (item: any) => boolean): any {
        if (!items || !filter) {
            return items;
        }
        return items.filter(item => filter(item));
    }
}