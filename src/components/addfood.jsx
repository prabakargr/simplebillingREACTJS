import React, { Component } from 'react';
import {getFoods} from '../services/footItemsSevice';
class AddFood extends Component {
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
            this.props.onOrders(this.state.orders)
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
        this.setState({addFood:{ qty: event.target.value ,
                   foodItemId:this.state.addFood.foodItemId,
                   foodName:this.state.addFood.foodName,
                   prize:this.state.addFood.prize
        }},()=>{
          console.log(this.state)
    
        })
    
      }

    render() { 
        return ( 

            <React.Fragment>
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
            </React.Fragment>

         );
    }
}
 
export default AddFood;