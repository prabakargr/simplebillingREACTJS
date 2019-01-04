import React, { Component } from 'react';
import './App.css';
// import Table from './components/table';
// import AddFood from './components/addfood'
import { getFoods } from './services/footItemsSevice';
import AddFood from './components/addfood';

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      foods: getFoods(),
      orders: [],
      amts:'',
      addFood: {
        foodItemId: '',
        qty:'',
        foodName:'',
      }
    }
  }
  handleSubmit = () =>{
    let orders=this.state.orders;
    orders.push(this.state.addFood);
    this.setState({orders},()=>{
      console.log(this.state.orders)
    })
    
  }
  
  handleChange = event => {
    let _id=event.target.value;
    const foods=this.state.foods.filter(f=>f._id === _id)
    this.setState(
      { 
        addFood: {
          foodItemId: foods[0]._id,
          foodName:foods[0].name,
          prize:foods[0].prize,
          qty:this.state.addFood.qty
        }
      }, ()=>{
        console.log(this.state)
      }
    )
    
  }
  handleQtyChange = event => {
    let food;
    this.setState({addFood:{ qty: event.target.value ,
               foodItemId:this.state.addFood.foodItemId,
               foodName:this.state.addFood.foodName,
               prize:this.state.addFood.prize
    }},()=>{
      console.log(this.state)

    })

  }

  render() {
    const calculateT = (order)=>{
      let totalCalz=parseInt(order.prize)*parseInt(order.qty);
      return totalCalz;
      
    }
    const finalAmt = (orders) =>{

      let sum=0;
      orders.map(order=>{
        sum+=parseInt(order.prize)*parseInt(order.qty)
      })
      return parseInt(sum)
    }

    return (
      <div className="container">
        <form>
          <div className="row">
            <div className="col-4">
              <label className="mr-sm-2">Select Name</label>
              <select className="custom-select mr-sm-2" value={this.state.addFood.foodItemId} onChange={this.handleChange}>
                <option readOnly>Choose Food...</option>
                {this.state.foods.map(food => (
                  <option
                    key={food._id}
                    value={food._id}

                  >{food.name}</option>
                ))}

              </select>
            </div>
            <div className="col-4 addQtyGenerate">
              <label className="sr-only">Qty</label>
              <input type="Number" value={this.state.addFood.qty} onChange={this.handleQtyChange} className="form-control mr-sm-2" placeholder="Enter qty" />
            </div>
            <div className="col-4 addQtyGenerate">
              <button type="button" className="btn btn-primary" onClick={this.handleSubmit} >Add</button>
            </div>

          </div>
        </form>
        <div className="row mt-2">
          <table className="table">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">Food</th>
                <th scope="col">Prize</th>
                <th scope="col">Qty</th>
                <th scope="col">Total</th>
              </tr>
            </thead>
            <tbody>
            
              {this.state.orders.map(order=>(
                <tr key={order.foodItemId}>
                <th scope="row">1</th>
                <td>{order.foodName}</td>
                <td>{order.prize}</td>
                <td>{order.qty}</td>
                <td>{calculateT(order)}</td>
                </tr>
              ))}
              
              <tr>
                <td colSpan="3" className="text-right">Total</td>
                <td className="">{finalAmt(this.state.orders)}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

export default App;
