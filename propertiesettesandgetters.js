"use strict"

function Person(FirstName,LastName) {
    this.firstName=FirstName;
    this.lastName=LastName;
    Object.defineProperties(this,{
        "fullName":{

            get:function(){
                return this.firstName+" "+this.lastName;
            },
            set:function(value){

                fullName=value;
            }
        }})
     this.Address="Hyderabad"  ;
     this.PostalCod="500081";
     Object.defineProperty(this,"Phone",{writable:true,configurable:true,enumerable:false});
}

