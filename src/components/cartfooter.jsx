/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react/jsx-no-comment-textnodes */
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