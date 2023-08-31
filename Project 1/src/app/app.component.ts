import { Component,HostListener, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl:  `./app.component.html`,
  styleUrls: ['./app.component.css'],
  encapsulation:ViewEncapsulation.None
})
export class AppComponent {
  title = 'SAMPRIT';

  Stygian = 'c3';

  conditionClsproop = 'c4';

  getClsName(){
    return 'c3';
  }

pageHeading = "Welcome to Angular World - Interpolation"; // string

pageCount= 10; // number

userObject = { 'FirstName': 'ANGULAR', 'lastName': 'DEVLOPER' } //Object

isUserLoggedIn = false;

txtcolorval= 'blue';

colval = 2;

imgUrl = 'http://tigerday.org/wp-content/uploads/2013/04/Siberischer_tiger.jpg; width="100" height="100"'




//  @HostListener('click',['$event'])

//  disply(){
//   alert("Blast");
// }

//   Show(){
//     alert("Hello");
//   }

//   changeValue(){
    
//   }

//   success_msg= false;

  name="Sam";
 
 contacts = [
  {
   'FirstName' : 'JAY',
   'LastName'  :  'SHREE RADHE',
   'ContactId' : 54525
  },

  {
    'FirstName' : 'Shree',
    'LastName'  :  'SHREE KRISHNA',
    'ContactId' : 999654
   },
   {
    'FirstName' : 'RAM',
    'LastName'  :  'SHREE JAGANNATH',
    'ContactId' : 996542
   },
   {
    'FirstName' : 'RAM',
    'LastName'  :  'SHREE JAGANNATH',
    'ContactId' : 996542
   },
   {
    'FirstName' : 'RAM',
    'LastName'  :  'SHREE JAGANNATH',
    'ContactId' : 996542
   },
   {
    'FirstName' : 'RAM',
    'LastName'  :  'SHREE JAGANNATH',
    'ContactId' : 996542
   },
   {
    'FirstName' : 'RAM',
    'LastName'  :  'SHREE JAGANNATH',
    'ContactId' : 996542
   },
 ];

sayHello(){
  console.log("Love from Samprit");
}

highlightBGcolor(a: number, b: number, c: number){
  console.log("Hi i m being Highlight"+a+b+c);
}

inputBox(){
  console.log("this is input box");
}

username = "samprit";

month = 110;

lowerCaseExample = "WELLCOME TO ANGULAR WORLD"

upperCaseExampl = "welcome to Angular world"

DateExample = Date.now();

jsonExample = { username: "Angular", major: "World", expprience: 10 };

currencyExample = 125;

percentExample = 0.6568;


}
