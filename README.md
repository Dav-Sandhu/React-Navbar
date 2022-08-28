A basic easy-to-use navigation bar for websites made in react, to use it simply add the folder to your local React project and import it into whichever file you wish to use it in using "import Navbar from './foldername/Navbar'". After that you can implement it by adding a Navbar component with the properties of title="your-title" items={items-arr} , with the "items" being the content of the navigation bar. For Example: 
```javascript
 import { BrowserRouter, Route, Routes } from 'react-router-dom'
 import {useId} from 'react'
 import Navbar from './Navbar'
 import Home from './Home'
 import Projects from './Projects'
 import Games from './Games'
 import About from './About'

 const myApp = () => {
 
  const items = [
    {
      name: "Home",
      path: "/",
      element: <Home />,
      id: useId()
    },
    {
      name: "Projects",
      path: "/Projects",
      element: <Projects />,
      id: useId()
    },
    {
      name: "Games",
      path: "/Games",
      element: <Games />,
      id: useId()
    },
    {
      name: "About",
      path: "/About",
      element: <About  />,
      id: useId()
    }
  ]
  
  return (
   <BrowserRouter>
    <Navbar title="Website" items={items} />
    <Routes>
     {items.map(i => <Route path={i.path} element={i.element} key={i.id} />)}
    </Routes>
   </BrowserRouter>
  )
 }
 
 export default myApp
```
Also make sure that in your top level css file that you have the following for best effect:
```css
*{
  margin: 0px;
  padding: 0px;
 }
```
When fully implemented it should look as follows:

![image](https://i.imgur.com/kaHlUvN.png)
