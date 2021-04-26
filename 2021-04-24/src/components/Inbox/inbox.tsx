import React, { Component } from 'react';
import axios from 'axios';
import { RouteComponentProps } from 'react-router-dom';

import MyPaper from '../../UI/Paper';
import MyProgress from '../../UI/Progress';

interface IProps extends RouteComponentProps {
}

interface IState {
  loading: boolean;
  data: {}[] | null;
  error: any;
}

class Inbox extends Component <IProps>{

  state: IState = {loading: true, data: null, error: null};
  
  render(){ return <InboxView{...this.state} {...this.props} />}

  componentDidMount(){
    // console.log('Inbox Props: ', this.props);
    axios.get('https://jsonplaceholder.typicode.com/posts')
      .then(response => this.setState({loading: false, data: response.data, error: null}))
      .catch(error => this.setState({loading: false, data: null, error: error}))

    // fetch data from backend
    // const res = fetch('https://jsonplaceholder.typicode.com/posts')
    // then( data => console.log(data); this.setState({loading: false, data: data, error: null}))
    //.catch( error => console.log(error) this.setState({loading: false, data: null, error: error}))
  }
}

interface IProps2 extends RouteComponentProps { //Extending so typescript stops having issues with "history.push"
  loading: boolean;
  data: {}[] | null;
  error: any;
}

class InboxView extends Component<IProps2>{

  mailSelectedHandler = (id: string, userId: string) => { //Same thing here as in EmailDetail so we don't have "undefined" objects
    // console.log('Selected Email: ', id);
    // console.log('Inbox props: ', this.props);
    this.props.history.push( {pathname: `/home/inbox/${id}`, search: `?userId=${userId}&name=steve`}); //And we can continue giving params such as &age=
  }
  
  renderLoading( ){
    const dataJSX = <h3> <MyProgress /></h3>
    return dataJSX;
  }

  renderError( ){
    const dataJSX = <h3>Sorry! An error occured!</h3>
    return dataJSX;
  }

  renderSuccess( ){
    // const dataJSX = <h3> Succesfully retrieved data! </h3>>
    const dataJSX = this.props.data?.map( (item: any) => {
      // return <MyPaper key={item.id} title={item.title} body = {item.body} clicked = { this.mailSelectedHandler}/>
      return <MyPaper key={item.id} title={item.title} body = {item.body} clicked = { () => this.mailSelectedHandler(item.id, item.userId)}/>
    })

    return dataJSX;
  }

  render(){
    // console.log('InboxView props: ', this.props);
    if (this.props.loading){
      //loading view
      return this.renderLoading();
    } else if (this.props.data){
      //load data view
      return this.renderSuccess();
    } else {
      //load error view
      return this.renderError();
    }
  }
}

export default Inbox;