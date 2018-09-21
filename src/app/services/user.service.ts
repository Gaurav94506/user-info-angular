import { Injectable } from '@angular/core';
import { Http , Response,Headers } from '@angular/http';
import { IProduct } from '../product'
import 'rxjs/add/operator/map';
import { User } from '../model/user.model';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class UserService {

  userlistChanged = new Subject<User[]>();
   //private _producturl='products.json';
   constructor(private _http: Http){}
   
   getproducts()
   {
   //  const headers=new Headers({'content-type':'application/json;charset=UTF-8','Access-Control-Allow-Origin':'GET, POST, DELETE, PUT'});
        return  this._http.get('http://localhost:9013/employees/').map(function(res){
              return <User> res.json();
        });
 
    }
 
  deleteUser(id){

    return this._http.delete('http://localhost:9013/employees/'+id);
  }
  getuser(id){
    
    return this._http.get('http://localhost:9013/employees/'+id)
        .map(function(res){
          return <User> res.json();
        });
  }

    updateUser(id,user:User){

    const headers=new Headers({'content-type':'application/json'});
    return this._http.put('http://localhost:9013/employees/'+id,user);
  }

  saveUser(user:User){

    const headers=new Headers({'content-type':'application/json'});
    return this._http.post('http://localhost:9013/employees/',
          user,{headers:headers})
    //return this._http.post('http://localhost:9013/employees/');
  }
}