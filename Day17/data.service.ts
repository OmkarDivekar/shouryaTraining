import { Injectable } from '@angular/core';

export namespace Contacts
{
  @Injectable({
    providedIn: 'root'
  })
  export class DataService {
  
    constructor() { }
  
  }
  @Injectable({
    providedIn: 'root'
  })
  export class AddNewContact {
  
    constructor() { }
    DisplayNewContact():string
    {
      return "New Contact Addedd";
    }
    
  }
  @Injectable({
    providedIn: 'root'
  })
  export class EditContact {
  
    constructor() { }
    DisplayEditContact():string
    {
       return "Contact Updated";
    }
    
  }
  @Injectable({
    providedIn: 'root'
  })
  export class DeleteContact {
  
    constructor() { }
    DisplayDeleteContact():string
    {
      return "Contact Deleted";
    }
    
  }
  @Injectable({
    providedIn: 'root'
  })
  export class ListContact {
  
    constructor() { }
    DisplayListContact():string
    {
      return "Contact List";
    }
    
  }
}