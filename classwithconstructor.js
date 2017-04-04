"use strict"
function Person(FirstName,LastName) {
    this.firstname=FirstName;
    this.lastname=LastName;
    this.fullName=function()
    {
        return this.firstname+this.lastname;
    }
}

function withoutVar() {
    this.test="sdfds";
 
   // return this.test;
}

