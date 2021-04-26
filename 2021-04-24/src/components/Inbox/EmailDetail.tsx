import React, { Component } from 'react';
import axios from 'axios';
import { RouteComponentProps } from 'react-router-dom';
// import queryString from 'query-string';

// import MyPaper from '../../UI/Paper';
import MyProgress from '../../UI/Progress';
import MyCard from '../../UI/Card';

interface MatchParams {
  id: string;
}

interface IProps extends RouteComponentProps<MatchParams> {
}

interface IState {
  loading: boolean;
  data: {title: string, body: string} | null;
  error: any;
}

class EmailDetail extends Component<IProps>{

  state: IState = {loading: true, data: null, error: null};
  
  render(){ return <EmailDetailView{...this.state} {...this.props} />}

  componentDidMount(){
    // console.log('Email props: ', this.props);

    //fetch (id route params) from address bar
    // const id = 1;
    const id = this.props.match.params.id;

    // fecth userId & name (query params) from address bar
    // const parsed = queryString.parse(this.props.location.search); //To match the string object that in the moment can be parsed
    // console.log('EmailDetail query params: ', parsed);

    axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`)
      .then(response => this.setState({loading: false, data: response.data, error: null}))
      .catch(error => this.setState({loading: false, data: null, error: error}))

    // fetch data from backend
    // const res = fetch('https://jsonplaceholder.typicode.com/posts')
    // then( data => console.log(data); this.setState({loading: false, data: data, error: null}))
    //.catch( error => console.log(error) this.setState({loading: false, data: null, error: error}))
  }
}

interface IProps2 extends RouteComponentProps {
  loading: boolean;
  data: {title: string, body: string} | null;
  error: any;
}

class EmailDetailView extends Component<IProps2>{
  
  backButtonSelectedHandler = () => { //If not used as an arrow function, the back button wont work because it will be "undeclared"
    // console.log('Selected Email: ', id);
    // console.log('Inbox props: ', this.props);
    this.props.history.goBack();
    // console.log('EmailDetailView back button clicked...')
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
    const dataJSX = <MyCard title= {this.props.data?.title} body = {this.props.data?.body} clicked = {this.backButtonSelectedHandler}/>

    return dataJSX;
  }

  render(){
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

export default EmailDetail;
