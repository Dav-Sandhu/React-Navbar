A basic easy-to-use navigation bar for websites made in react, to use it simply add the folder to your local React project and import it into whichever file you wish to use it in using "import Navbar from './foldername/Navbar'". After that you can implement it by adding a Navbar component with the properties of title="your-title" items={items-arr} funcs={funcs-arr}, with the "items" being the content of the navigation bar, and the "funcs" being their corresponding functions. For Example: 
```javascript
 import Navbar from './Navbar'

 const myApp = () => {
 
  let items = ["Main", "Projects", "Games", "About"]
  let funcs = [() => {console.log("Main")}, () => {console.log("Projects")}, () => {console.log("Games")}, () => {console.log("About")}]
  
  return (
   <>
    <Navbar title="Website" items={items} funcs={funcs} />
   </>
  )
 }
 
 export default myApp
```

When fully implemented it should look as follows:

![image](https://i.imgur.com/kaHlUvN.png)
