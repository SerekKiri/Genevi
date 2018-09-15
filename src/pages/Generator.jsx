import * as React from 'react'

// CSS
import '../css/main.css'
import '../css/generator.css'

// Components
import ComponentsList from '../components/ComponentsList'
import Footer from '../components/Footer'

export default class Generator extends React.Component {
  render () {
    return (
      <div className="cont">
        <ComponentsList />
        <Footer />
      </div>
    )
  }
}
