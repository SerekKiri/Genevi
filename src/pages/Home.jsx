import * as React from 'react'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'

export default class Home extends React.Component {
  render () {
    return (
      <div>
        <Navbar />
        <Footer />
      </div>
    )
  }
}
