import React, { Component } from 'react'
import Header from '../../Header/Header'
import Footer from '../../Footer/Footer'
import Banner from '../Banner/Banner'



export default class Home extends Component {
  render() {
    return (
      <>
        <Header/>
        <Banner/>
        <Footer/>
       
      </>
    )
  }
}
