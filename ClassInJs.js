"use strict"
function Person(params) {
    this.firstName="Unknown";
    this.lasName="Unknown";
    this.fullName=function()
    {
        return this.firstName+this.lasName;
    }
}


