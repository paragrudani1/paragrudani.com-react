import React from 'react';
import './App.css';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom'
// import Home from './containers/home page/Home'
// import About from './containers/about/about'
// import Project from './containers/project/Project'
// import Contact from './containers/contact/Contact'
// import Error from './components/Error page/Error'
import asyncComponent from './hoc/AsyncComponent'

// const AsyncProject = asyncComponent(() => {
//   return import('./containers/project/Project')
// })  
// const AsyncContact = asyncComponent(() => {
//   return import('./containers/contact/Contact')
// })  
// const AsyncAbout = asyncComponent(() => {
//   return import('./containers/about/about')
// })  
const AsyncHome = asyncComponent(() => {
  return import('./containers/home page/Home')
})  


function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Switch>
        <Route path='/' exact component={AsyncHome} />
        <Route path='/home'>
          <Redirect to='/' />
        </Route>
        {/* <Route path='/about' component={AsyncAbout} />
        <Route path='/contact' component={AsyncContact} />
        <Route path='/project' component={AsyncProject} />
        <Route component={Error} /> */}
      </Switch>
      {/* <Route path='/about' component={About} /> */}
    </div>
    </BrowserRouter>
  );
}

export default App;
