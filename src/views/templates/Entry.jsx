import React, { Component } from 'react'
import Provider from '@anew/provider'

import { State } from 'views/components'
import './Entry.scss'

class Entry extends Component {
  render() {
    const { RouterView } = this.props

    return <State>{RouterView()}</State>
  }
}

export default Provider.connect(Entry)
