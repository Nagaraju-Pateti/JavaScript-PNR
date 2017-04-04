"use strict"


function Person(FirstName,LastName)
{
    this.firstname=FirstName;
    this.lastname=LastName;
    Person.prototype.fullname=function(){
        return this.firstname+" "+this.lastname;
    }
}
function Student(FirstName,LastName,Grade,SchoolName)
{
Person.call(this,FirstName,LastName);
this.grade=Grade;
this.schoolname=SchoolName;
}