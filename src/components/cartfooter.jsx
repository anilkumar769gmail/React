import React from 'react'

const date= new Date();
 const currentDate = date.getMonth() +"/"+ date.getDate()+"/" + date.getFullYear();

const CartFooter = () => {
    return (
      <nav className="navbar navbar-dark bg-dark">
          <a className="navbar-brand" href='#'>&copy;{currentDate}</a>
      </nav>
    )
  }
  
  export default CartFooter