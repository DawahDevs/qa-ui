import Provider from '@anew/provider'
import React from 'react'

import ClassNames from './NotFound.module.scss'

class NotFound extends React.PureComponent {
  static mapMethodsToProps = ({ dispatch }) => ({
    push: dispatch.router.push,
    goBack: dispatch.router.goBack,
  })

  render() {
    const { push, goBack } = this.props

    return (
      <div className={ClassNames.NotFoundContainer}>
        <div className={ClassNames.NotFound}>
          <div className={ClassNames.NotFoundContent}>
            <h1>404</h1>
          </div>
          <h2>Oops! This Page Could Not Be Found</h2>
          <p>
            Sorry but the page you are looking for does not exist, have been
            removed. name changed or is temporarily unavailable
          </p>
          <button onClick={() => push({ name: 'home' })}>Go To Homepage</button>
          <button onClick={goBack}>Go Back</button>
        </div>
      </div>
    )
  }
}

export default Provider.connect(NotFound)
