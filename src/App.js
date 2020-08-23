import React, { Component } from 'react';
import Navbar from './Components/navbar';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './Components/home'
import Contact from './Components/contact';
import About from './Components/about';
import Post from './Components/post'
import Posts from './Components/Posts'
import Alert from './Components/AlertOption'
// import Ninjas from './ninja';
// import Addninja from './addninja'

class App extends Component {
  // state = {
  //   ninjaa: [
  //     { name: "ryu", age: "30", belt: "black", id: "1" },
  //     { name: "ryu1", age: "20", belt: "yellow", id: "2" },
  //     { name: "ryu2", age: "40", belt: "pink", id: "3" },
  //   ]
  // }
  // i = 3;
  // addid = () => {
  //   this.i++;
  //   return this.i;
  // }
  // addNinja = (ninja) => {
  //   ninja.id = this.addid();
  //   let ninjas = [...this.state.ninjaa, ninja];
  //   this.setState({
  //     ninjaa: ninjas
  //   })
  // }
  // deleteNinja = (id) => {
  //   let ninjas = this.state.ninjaa.filter(ninja => {
  //     return ninja.id !== id
  //   });
  //   this.setState({
  //     ninjaa: ninjas
  //   })
  // }
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Navbar name="meet" />
          <Switch>
            <Route exact path="/" component={Home}></Route>
            <Route path="/about" component={About}></Route>
            <Route path="/contact" component={Contact}></Route>
            <Route path="/posts" component={Posts}></Route>
            <Route path="/post/:post_id" component={Post}></Route>
            <Route path="/alert" component={Alert}></Route>
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
//  {/* <Ninjas deleteNinja={this.deleteNinja} ninjas={this.state.ninjaa} name="Meet" />
//         <Addninja addninja={this.addNinja} /> */}