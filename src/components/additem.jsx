
import React from 'react'


const products =[ 
    { id: 40, name: 'Mediocre Iron Watch', priceInCents: 400 },
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
             myArrayList:[],
             productTotal:0, 
             counter:0,
            }
    
   

    updateQuantity=(e) =>{
        e.preventDefault();   
        this.setState({quantity:e.target.value});
        
    }  
    updateProduct=(e) =>{
        e.preventDefault();
        this.setState({productValue:e.target.value})
    }  

    addToProductList=() =>{
       

        const product = products.find(p =>{
            return(p.id === parseInt(this.state.productValue))
        })  

        //get the product and quantity together in newProductList
        const newProductList = {'quantity': this.state.quantity,
                                'selectedProduct':product
                              };

        
        //check for quantity validating
        if(this.state.quantity === 0 || this.state.quantity ==="" || isNaN(this.state.quantity)){
            alert("Quantity is required in number!!!")
            return;
        }
       //arrays are mutable - using spread operator to spread out values in new object 
        const newProduct =  [...this.state.myArrayList, newProductList];
        
        

        //calculate the product total
        let currentCounter="";
        const total = newProduct.reduce((acc, curr,index) =>{
            currentCounter = index +1;
            return acc + curr.selectedProduct.priceInCents * curr.quantity;
            },0);
         
        //put everything in myArrayList which list items selected to be put in the cart
        this.setState({myArrayList:newProduct, productTotal:total, counter:currentCounter,quantity:0});

        
    };
    
  render(){
    return(
        <div className="container">
            <div className="list-group">
                <div className="list-group-item">
                    <div className="row"> 
                        
                        <div>Products<span>*</span></div>
                        <select onChange={this.updateProduct}>
                            <option value="none" >Please select</option>
                            {products.map((product)=>
                            <option value={product.id}>{product.name} {product.priceInCents}</option>
                             )}
                        </select>
                        <div>Quantity<span>*</span></div>
                        <input value={this.state.quantity ? this.state.quantity:""} onChange={this.updateQuantity}></input>
                    </div>
                    <br/>
                    <button type="button" className="btn btn-primary" onClick={this.addToProductList}>Submit</button> 
                </div>
                
                <div>  
                    <div>Current Cart: Number of Items in Cart:<span>({this.state.counter})</span></div>
                        {this.state.myArrayList.map((listitems,index) =>
                        <div className="list-group-item">    
                            <div className="row">
                                <div className="col-md-8">{listitems.selectedProduct.name}</div>
                                <div className="col-md-2">${listitems.selectedProduct.priceInCents}</div>
                                <div className="col-md-2">{listitems.quantity}</div>
                            </div>
                        </div>
                        
                        )}
                        
                    Current Price Total: <span>${this.state.productTotal}</span>
                    
                </div>
                
                
            </div>
        </div>
        );
  }
}



export default AddItem