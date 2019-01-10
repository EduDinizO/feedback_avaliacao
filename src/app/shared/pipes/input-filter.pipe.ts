import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'inputFilter',
    pure: false
})
export class InputFilterPipe implements PipeTransform {

    transform(value: any, filterString: string, propName: string): any {
        if (value.length === 0 || filterString === '') {
            return value;
        }
        const resultArray = [];
        for (const item of value) {
            if (item[propName].toLowerCase().includes(filterString.toLowerCase())) {
                resultArray.push(item);
            }
        }
        return resultArray;
    }

}