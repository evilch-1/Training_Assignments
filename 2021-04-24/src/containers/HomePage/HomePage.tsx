import React, { Component } from 'react'; 
import { Switch, Route } from 'react-router-dom';

import Layout from '../../layouts/Layout';
import Inbox from '../../components/Inbox/inbox';

import EmailDetail from '../../components/Inbox/EmailDetail';

class HomePage extends Component {

  list = [
    {text: 'Inbox', path:'/home/inbox'},
    {text: 'Starred', path: '/home/starred' }
  ]

    render() {
      // console.log('HomePage props: ', this.props);
      return (
        <Layout list= {this.list} defaultSelected={0}>
          <Switch>
            <Route path="/" exact render={ () => <h3> Welcome Home!</h3>} />
            <Route path="/home/inbox/:id" component = {EmailDetail} />
            <Route path="/home/inbox" exact component = {Inbox } />
            <Route path="/home/starred" render={ () => <h3> Starred Component </h3>} />
          </Switch>
        </Layout>
      );
    }
  }
  
  export default HomePage;