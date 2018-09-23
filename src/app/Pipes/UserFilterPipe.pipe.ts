import {Injectable, PipeTransform, Pipe } from "@angular/core";


@Pipe({
    name:'userFilter'
})

@Injectable()
export class UserFilter implements PipeTransform{

    public transform(value, keys: string, term: string) {

        if (!term) return value;
       // debugger;
        if(keys==='pincode' || keys==='state'){
            return (value || []).filter((item) => keys.split(',').
            some(key => item.adr.hasOwnProperty(key) && new RegExp(term, 'gi').test(item.adr[key])));
        }
        return (value || []).filter((item) => keys.split(',').
                some(key => item.hasOwnProperty(key) && new RegExp(term, 'gi').test(item[key])));
    
      }


}