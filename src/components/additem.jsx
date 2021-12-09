
import React from 'react'

const products =[ 
    { id: 40, name: 'Mediocre Iron Watch', priceInCents: 399 },
    { id: 41, name: 'Heavy Duty Concrete Plate', priceInCents: 499 },
    { id: 42, name: 'Intelligent Paper Knife', priceInCents: 1999 },
    { id: 43, name: 'Small Aluminum Keyboard', priceInCents: 2500 },
    { id: 44, name: 'Practical Copper Plate', priceInCents: 1000 },
    { id: 45, name: 'Awesome Bronze Pants', priceInCents: 399 },
    { id: 46, name: 'Intelligent Leather Clock', priceInCents: 2999 },
    { id: 47, name: 'Ergonomic Bronze Lamp', priceInCents: 40000 },
    { id: 48, name: 'Awesome Leather Shoes', priceInCents: 3990 },
  ]


class AddItem extends React.Component{

    state ={ quantity:0,
             productValue:40,
             myArrayList:[]
            }

    updateQuantity=(e) =>{
        e.preventDefault();
        this.setState({quantity:e.target.value})
    }  
    updateProduct=(e) =>{
        e.preventDefault();
        console.log(e.target.value);
        this.setState({productValue:e.target.value})
    }  

    addToProductList=() =>{

        const product = products.find(p =>{
            return(p.id === parseInt(this.state.productValue))
        })  
        console.log(product)   
        const newProductList = {'quantity': this.state.quantity,
                                'selectedProduct':product};
        this.setState({myArrayList:[...this.state.myArrayList, newProductList]});
        
    }

  render(){
   
  console.log(this.state.productValue);

    
        return(
            
              <div className="list-group">
                <div className="list-group-item">
                    <div className="row">
                        
                        <div>Quantity</div>
                        <input onChange={this.updateQuantity}></input>
                        
                        <div>Products</div>

                        <select onChange={this.updateProduct}>
                       {products.map((prod)=>
                        <option value={prod.id}>{prod.name} {prod.priceInCents}</option>
                       )}
                    </select>
                        {/* <Products products={products}/>  */}
                    </div>
                    <br/>
                    <button type="button" className="btn btn-primary" onClick={this.addToProductList}>Submit</button> 
                </div>
                <div>
                    {/*
                    {
                    product: {
                        id: 40,
                        name: 'Mediocre Iron Watch',
                        priceInCents: 399
                    },
                    quantity: 1
                    }, 

                    =======
                    40 Mediocre Iron Watch 399 1
                     */}
                {this.state.myArrayList.map(listitems =>
                   <p>{listitems.selectedProduct.id} {listitems.selectedProduct.name}
                   {listitems.selectedProduct.priceInCents} {listitems.quantity}</p>  
                   
                    )}
                </div>
                
              </div>
            
           
        );
  }
}



export default AddItem