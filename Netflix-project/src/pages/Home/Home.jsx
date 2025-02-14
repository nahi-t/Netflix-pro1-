import React, { Component } from 'react'
import Header from '../../Componet/Header/Header'
import Footer from '../../Componet/Footer/Footer'
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
