import {Injectable, PipeTransform, Pipe } from "@angular/core";


@Pipe({
    name:'userFilter'
})

@Injectable()
export class UserFilter implements PipeTransform{

     transform(items: any[], field: string, value: string): any[] {
         if (!items) return [];
         return items.filter(it => it[field] == value);
       }



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