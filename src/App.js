import React, { Component } from 'react';
import './App.css';
import Table from './components/table';
import AddFood from './components/addfood'
import { getFoods } from './services/footItemsSevice';


class App extends Component {


constructor(props){
  super(props)
  this.state={

    orders:[]
  }
  this.handleSend=this.handleSend.bind(this)
}

handleOrders = orders =>{

    this.setState({orders},()=>{
      console.log(this.state.orders)
    })
    

}
handleSend =(orders)=>{
return orders
}

  render() {
    return (
      <div className="container">
           <AddFood onOrders={this.handleOrders}/>
           <Table sendOrder={this.handleSend(this.state.orders)}/>
      </div>
    );
  }
}

export default App;
