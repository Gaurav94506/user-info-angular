import { Pipe, PipeTransform } from '@angular/core';
import {Injectable} from '@angular/core'
@Pipe({
    name:'userFilter'
})

@Injectable()
export class UserFilter implements PipeTransform{


       //------------------------------First Approach -----------------------------------------------------------------------------------
    //  public transform(value, keys?: any,designation?: any,
    //                   expertise?: any,pincode?: any,
    //                           state?: any) {
            
    //               if (keys == undefined && designation == undefined && expertise == undefined && pincode == undefined && state == undefined) {
    //                   return value;
    //               }
    //              // debugger;
    //          return value.filter(function(item){
               
    //            return ( 
    //               (keys == "" || keys == undefined ? true : item.name.includes(keys) ? true : false) &&
    //              (designation == "" || designation == undefined ? true : item.designation.includes(designation)? true : false)) &&
    //              (expertise == "" || expertise == undefined ? true : item.expertise.includes(expertise)? true : false) &&
    //              (pincode == "" || pincode == undefined ? true : String(item.adr.pincode).includes(pincode)? true : false)  
                 
    //           &&             
    //              (state == "" || state == undefined ? true : item.adr.state.includes(state)? true : false)  
                
                
    //             })
   
    //              } 

///.................................................................................................--------------------
// ---------------------------------------second approach---------------------------------------------------------------
     public transform(value, keys: string, term: string) {
        // debugger;
         if (!term) return value;
    
         if(keys==='pincode' || keys==='state'){
             return (value || []).filter((item) => keys.split(',').
             some(key => item.adr.hasOwnProperty(key) && new RegExp(term, 'gi').test(item.adr[key])));
         }
         return (value || []).filter((item) => keys.split(',').
                 some(key => item.hasOwnProperty(key) && new RegExp(term, 'gi').test(item[key])));

     }




}