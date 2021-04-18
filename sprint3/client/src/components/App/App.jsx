import React from 'react';
import NavBar from '../NavBar/NavBar';
import { BrowserRouter, Route, Switch} from "react-router-dom";
import Home from "../Pages/Home/Home";
import Upload from "../Pages/Upload/Upload";




class App extends React.Component {

  render() {
    return (
      <>
        <BrowserRouter >
          <NavBar />
          <Switch>
            <Route path='/' exact component={Home} />
            <Route path='/videos/:id' render={(routerprops) => <Home videoId={routerprops.match.params.id} />}/>
            <Route path='/upload' component={Upload} />
          </Switch>
        </BrowserRouter>
      </>
    );
  }
}

export default App;



