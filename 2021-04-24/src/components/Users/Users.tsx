import React, { Component } from 'react';
import axios from 'axios';
import MyTable from '../../UI/Table';
import MyProgress from '../../UI/Progress';

interface IProps {
  loading: boolean;
  data: any;
  error: any;
}

class Users extends Component{

  state = {loading: true, data: null, error: null};
  
  render(){ return <UsersView{...this.state} />}

  componentDidMount(){

    axios.get('https://jsonplaceholder.typicode.com/users')
      .then(response => {
        //Modify data here
        const users: any[] = response.data;
        const modUsers = users.map( (user: any) => {
            return {User: user.name, Email: user.email, City: user.address.city, Phone: user.phone, Company: user.company.name};
        });

        // console.log(modUsers);

        this.setState({loading: false, data: modUsers, error: null})
      })

      .catch(error => this.setState({loading: false, data: null, error: error}))

    // fetch data from backend
    // const res = fetch('https://jsonplaceholder.typicode.com/posts')
    // then( data => console.log(data); this.setState({loading: false, data: data, error: null}))
    //.catch( error => console.log(error) this.setState({loading: false, data: null, error: error}))
  }
}


class UsersView extends Component<IProps>{
  
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
    const dataJSX = <MyTable rows = {this.props.data}/>

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

export default Users;