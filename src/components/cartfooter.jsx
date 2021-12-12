/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react/jsx-no-comment-textnodes */
import React from 'react'

const date= new Date();
 const currentDate = date.getMonth() +"/"+ date.getDate()+"/" + date.getFullYear();

const CartFooter = () => {
    return (
      <div className="footer">  
        <nav className="navbar navbar-dark bg-dark">
            <a className="navbar-brand text-center"href='#' >&copy;{currentDate}</a>
        </nav>
      </div>
    )
  }
  export default CartFooter