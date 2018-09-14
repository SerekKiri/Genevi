import * as React from 'react'
import Footer from '../components/Footer'
import Head from '../components/Header'
import Prev from '../components/Preview'

export default class Home extends React.Component {
  render () {
    return (
      <div>
        <Head />
        <Prev />
        <Footer />
      </div>
    )
  }
}
