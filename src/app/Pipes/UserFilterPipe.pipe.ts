import {Injectable, PipeTransform, Pipe } from "@angular/core";


@Pipe({
    name:'userFilter'
})

@Injectable()
export class UserFilter implements PipeTransform{

    public transform(value, keys: string, term: string) {

        if (!term) return value;
        return (value || []).filter((item) => keys.split(',').
                some(key => item.hasOwnProperty(key) && new RegExp(term, 'gi').test(item[key])));
    
      }

    // transform(items: any[], searchText: string): any[] {
    //     if(!items) return [];
    //     if(!searchText) return items;
    //             searchText = searchText.toLowerCase();
    //      return items.filter( it => {
    //           return it.toLowerCase().includes(searchText);
    //     });
    //    }

    //   transform(items: any[], field: string, value: string): any[] {
    //       if (!items) return items;
    //       return items.filter(it => it[field] == value);
    //     }



    //  transform(value:any,filterString:string,propName:string):any{
    //      if(value.length===0){
    //           return 0;
    //      }
    //       const resultArray=[];
    //      for(const item of value){
            
    //          if(item[propName]===filterString){
    //              resultArray.push(item);
    //          }



            
    //     }
    //      return resultArray;
    //  }
}