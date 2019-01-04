import React, { Component } from 'react';

class Table extends Component {
    
    render() { 

        
        const calculateT = (order)=>{
            let totalCalz=parseInt(order.prize)*parseInt(order.qty);
            return totalCalz;
            
          }
          const finalAmt = (orders) =>{
      
            let sum=0;
            orders.map((order) => {
              sum+=parseInt(order.prize)*parseInt(order.qty)
            });
            return parseInt(sum)
          }
        return ( 
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
                
                {this.props.sendOrder.map((order,index)=>(
                  <tr key={index}>
                  <th scope="row">{index+1}</th>
                  <td>{order.foodName}</td>
                  <td>{order.prize}</td>
                  <td>{order.qty}</td>
                  <td>{calculateT(order)}</td>
                  </tr>
                ))}
                
                <tr>
                  <td colSpan="3" className="text-right">Total</td>
                  <td className="">{finalAmt(this.props.sendOrder)}</td>
                </tr>
              </tbody>
            </table>
          </div>
         );
    }
}
 
export default Table;