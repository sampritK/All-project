Angular CLI


ng new <project_name>

ng generate componet
ng generate module <module_name>
ng generate module <module_name>
ng generate pipe  <pipe_name>



ng lint
 ng build 
     -> build your app and make it ready for production env deployment

ng generate
    componets(ng g c form1)
    pipes (ng g p form1)
    moduls (ng g m form1)
    services(ng g s form1)
    application (ng g a form1)     




App Architecture
    -> Blue Print
    src
     contacts -> modules 
         add-contact -> component inside module
         edit-contact -> components inside module
         delete-contact -> componets inside module
         view-contact   -> componets inside module

    users
      add-user -> componets inside module
    orders
    lads
    reports
    setting
    profile

----------Angular Modules----------
1.Angular is a modular-based architecture
     -> There are lot of mudules are build-in example-
         -BrowserModule
         -BrowserAnimationModule

-Angular Material library
    -MatButtonModule
    -MatDropDownModule  

2.All the code and functionality is grouped in a modul

3. whenever you see a @ symbol - it's a decorator

4. what modules consist
   - declarations
      -This is where we will add all the components of the module
    - imports
       - we can import modules inside a module

    - providers
        - services that we need will be injected here

    - Bootstrap
       - what is the first component - the module should load

    - exports
        - is to export and expose the component outside of the module 


5. Every Angular Application should have atleast 1 module 


6. By default, the Angular framework provides us with AppModule

7. The AppModule will have a component by the name
     - AppComponent

8. Whenever we are building Angular application
   - we will always think of Modules first

9. Feature Modules
   - You can turn on or off the module bassed on condition   

10. Modules - Grouping  
   - components
   - services
   - pipes
   - directives

11. Create a custom Module
    ng generate module contact   
    ng generate module leads   
    ng generate module setting   
    ng generate module profil   
    ng generate module authentication 

--------Angular Components--------
1. components are the most important and basic building blocks of angular application

2. Authentication Module [we will have multiple components]
    - new-user
    - login
    - forget-password
    - reset-password

3. components is a smallest functionality that you will implement in your application 

4. When we group multiple components it become a module

5. we can have parent child relationship of components

6. we can have components inside components

     Dashboard
        Display-contact-list
            Contact-grid
               Contact-options
               Contact-download [Tree hierarchy of components]
            Contact-export

7. lets create some custom component            
        ng g component add-contact
        ng g component edit-contact
        ng g component list-contact
        ng g component delete-contact

8. Every componet has 4 files auto-generated
    -component.html -> view or html or template file -> ui
    -component.ts   -> it will be a class file which will have matches > logic
    -component.spac.ts -> it will have the unit test script for componet
    -component.scss -> stylesheet of the component

9. component decorator inside the  component.ts file 

     selector -> unique identifier for the component
      > id of the component
      > using this selector we will use the component
    templateUrl ->  your HTML Code
      -component.html file 


------COMPONENT LIFECYCLE------
        8 Lifecycle Hooks
            -> ngOnChanges()
            -> ngOnlnit()
            -> ngDocheck()
            -> ngAfterContentlnit()
            -> ngAfterContentChecked()
            -> ngAfterViewlnit()
            -> ngAfterViewChecked()
            -> ngOnDestroy

Angular component lifecycle hooks

2. whichever lifecycle hooks we want to use
     1. import it in the class
     2. Extend the implement interface
     3. implement the method

3. we can have any number of lifecycle hooks implement



---------Component Communication-----------

Comunication between various Angular componets


Contact -> Module

    Contact-listing -> parent component
        contact-grid -> child component
        contact-tools -> child component
             download-pdf -> sub-child component
             download-excel

Leads -> Module

   leads-listing -> parent component

cmponent are hierarchical
parent-child relationship  


p1
    child1
         sub-child1
    child2


p2
   p2-child1

1. Communication between these components
     parent component -> child component
        @Input
     parent component <- child component
        @Output

2.communication between totally unrelated components
   component1 > Services <  component2
    
  services
     is a common reusable piece of functionality shered between different component 

----------Templates in Angular Component-----------

1. whenever we generate a component

   -4 files
       - template file(.html)
       - style.css (stylesheet)
       - Class (component.ts)
       - spec (unit test file) [e2e]

2. This is totally based on the choice at installing Angular app
     - if you selected css
     - if you selected scss
        style.css

3. <comp_name>.component.html
     -it works
     
4. Decorater it gives defination and meaning to the 
    @ - it has prefix of @
    
5. by default Angular will add "app" as prefix
    - selector -> "app-leads-listing"
    - Unique identifier to identify this coponent 
    - <app-leads-listing> 

      > can you change the default "app" prefix?
         -> YES - we can change it thoughout the app
              -> "app" -> "arc-tutorials"
              -> anular.json -> change prefix
        -> what will happen if i change?
      > what will happen if i change?
          -> Nothing happen. Only thing you Change, make sure you update with latest info
      > will your app work or will it crash?
         -> If you have updated the necessary component with latest pretix

7. Templates in Components
    
    
    - Two ways of using templates in Components
       - templateUrl
           -link the html file

    - template



    templateUrl 
        -> is always 1 single html file
        -> we will use "backtick  ~ " and NOT Single quote
           

8. stylesURL
     -> is an array
     -> it can take multiple stylesheets as input
     -> it can be one or more stylesheets
     
























