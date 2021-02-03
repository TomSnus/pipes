import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name:'shorten',
})
export class ShortenPipe implements PipeTransform {

    transform(value: any, ...args: any[]) {
        if(value.length>args[1])
        return value.substr(args[0],args[1]) + ' ...';
        return value;
    }
}