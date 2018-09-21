import { PipeTransform, Pipe } from "@angular/core";


@Pipe({
    name:'userFilter'
})
export class UserFilter implements PipeTransform{
    
    transform(value:any,filterString:string,propName:string):any{
         if(value.length===0){
             return 0;
         }
         const resultArray=[];
        for(const item of value){
            
            if(item[propName]===filterString){
                resultArray.push(item);
            }



            
        }
        return resultArray;
    }
}