import { Addess } from "./address.model";


export class User {
  public id: number;
  public name: string;
  public designation:string;
  public expertise:string;
  public adr:Addess

  constructor(id: number, adr: Addess,name:string, designation:string,exper:string) {
    this.id = id;
    this.adr = adr;
    this.designation = designation;
    this.expertise = exper;
    this.name=name
    
    
  }
}