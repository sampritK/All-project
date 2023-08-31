
package-json
package-lock.json


package-json
     nam of the aap 
    version of aap

scripts
->  "npm run start"
    -> ng serve
       -> angular.json  

-> can we add more script to package.json?
    YES 


dependancies
   -> all the modules/libraries you MUST have to run prod env
   -> the prod code will nestly be optimized/minimum


devDependencies
    ->   all the modules/libraries you MUST have to develop your aap
    -> we may add packages/moduls but we may not use them



-----data binding is two types-> 1.one-way data binding, 2.two-way data binding ----

--> 2.Interpolesion
->> 2.propety Binding
--> 3. Atribut Binding
--> 4.Event Binding

------Event Binding-------

1. Event binding is one way data binding

2. from view/template to component 

3. we can  call any Event
     -> oneclick
     -> onmouseover
     -> onblur

4. syntax is 
     <button (click)="method()"></button>   

5. we can apply events to any elements  

--------Two-way Data Binding---------

1. Its a  technique which helps us send data flow from Template to component and from component to Templete

2. Data from template -> to componet -> to template

3. Two way data binding is a combination
   -> Algternative of writing ngModule
   -> property Binding and Event Binding on same element
   
   E.g
     <input [value]="data1"(input)= "$event.target.value" />

4. Angular provides a built in directive called "ngModule"
    -using ngModule - it will handle both property binding and event binding on an element  

5. <input [(ngModul)]="username" />  
  - Banana Syntax -> :)
  - the name of thhe ngModule should be declared in the component class
  - if you don't declare this variable - it will give you error
      -> Error -> property does not exist on Appcomponent

6. very very important error

  "can't bind to ngModule since it isn't a known property of input"  
  - you have not imported formModule in our AppModule
   -> How to fix it?
         Import FormsModule in our AppModu



----------Pipes in Angular-----------

1. Pipes are used to transform the data

2. Pipes will take data input and convert/transport into a desired format
3. pipes are written using the pipe operator(|)

-----TYPES OF PIPES------
    1. Built in pipes
      -> Lowercase
      -> Uppercase
      -> Currency
      -> Data

---------Multiple Router Outlats---------

1. We can have multiple router Outlets

2. by default there is always 1 router Outlet in app.component.html file
3. when we dont provide any name for router-outlate it becomes primary
4. There should be only 1 primary
5. we can define multiple router outlets by giving name to them
6. That's why we call them "names" router outlate

--------Routin Strategy--------

1. Routing behaviour of the applications URLs

2. Angular provides 2 routing strategies

       -PathLocationStrategy
         -> Default routing strategies for Angular apps
         -> HTML 5 push state URL
          - Examples 
               - https://myapp.com/dashboard



       -HashLocationstrategy
                   URL Segments/patterns
       -> Examples
           - http://myapp.com/#/dashbord

3. Why do we need ? different types of routing?

Angular is a SPA( single page app )
      -index.html

Cloud vendors
      AWS
      GCP
      AZARE
      Hosting Provider

     

4. which one i should use when?

  Really there is no difference affect your application

  Deployments
      -> Issues -> # -> /loans/add

  PathLoacationstrategy
     -> Clean URLs
     -> Simple
     -> Bookmareble
     -> Easy to Remember

--------Base Href---------     

1. Base HREf is mandetory for all Angular apps

2. Base HREF is present in your index.html file

--------Router Module/ App Routing Module/Router Module---------

1. its a single module and placeholder where all our routes are configured for that particular module

2. Each module can have its own routes


--------Configuring Component Routes---------

1. There are various options that we can configure in component Routes

2. 

---------Parametrized Routes----------

1. we can send dynamic data or Parametrized

2. URLs will look Somethings like this

     http://Localhost.com/user/10 -> get the user with Id as 10

     http://localhost.com/search/telengana/hyderabad

     http://localhost.com/user/10/photos/34 -> usre id = 10 and photo id = 34

     Large and many many dynamic values/components

---------Router Link---------

<a [RouterLink]=>"'/user'"> </a>



---------Redirect Routes----------

(
    path: '',
    reditectTo: 'home'
    pathMatch: 'full'
)

--------Query Params------

1. we can send data from form

2. we can have data from click

Basically -> URL -> http://localhost.com/search/key=10&state=telegana=hyderabad

3. Query params -> visible in the URL

4. Most used for querying, seaeching or filtering data etc
facebook.com/search?page=10&pagesize=20

---------Wildcard Routes---------

1. Any unmatched route will be intercepted by wild card route

2. This has to be the last route in your configuration

3. we define by saying the path to match "**"


--------Lazy Loading--------

1. Any angulr application is made up Multiple Modules

  Loan Manegement System
    - Loans
    - Customers
    - Payments
    - Invoices
    - Authantication
    - Authroization
    - Downloads
    - Admin

2. Angular by default will load all modules at start
   - Login

3. Loading all modules initally - whether required or not
   make your apllication slow perfomance wise

4. lazy Loading will help in keeping your build smaller
  -> ng build / compile application to deploy
     -> files
       -> the size of those files will be smaller
       -> it will load fast
       -> it will respond better

5. The module generated using the Angular CLI - for for lazy Loading
-> There will be NO entry in AppModule 
-> it will not be loaded initially   

6. ng g Module <module name> --route <module route> --module app.module

------Reactive Forms-------
         form
            Elements
               Input -> formControl
               Textarea
               buttons
               checkbox
               radio
               select
               Image

     formGroup
       * Each elements is a formControl
       * when one or more formcontrol are grouped together we call it formgroup         














