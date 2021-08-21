# react

Component Nesting 
Component Reusability
Component Configuration

#Stylesheet for sample app
<link
  rel="stylesheet"
  href="https://cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.4.1/semantic.min.css"
/>

#Rules of State (#54)
1. Only usable with class components (can be used in functions with hooks)
2. props and state is different
3. State is a JS object that containts data relavent to the component.
4. Updating state will cause the component to render again.
5. State must be initailied when the component is created.
6. State can **only** be updated using the function 'setState'