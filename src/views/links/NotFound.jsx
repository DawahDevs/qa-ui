import Provider from '@anew/provider'
import React from 'react'

import NotFoundImage from 'assets/images/404.png'
import ClassNames from './NotFound.module.scss'

class NotFound extends React.PureComponent {
  static mapMethodsToProps = ({ dispatch }) => ({
    push: dispatch.router.push,
    goBack: dispatch.router.goBack,
  })

  render() {
    const {
      push,
      goBack,
      location: { pathname },
    } = this.props

    return (
      <div>
        <img
          src={NotFoundImage}
          className={ClassNames.NotFoundLogo}
          alt="404"
        />
        <div>
          The following page <b>{pathname}</b> does not exists
        </div>
        <div>
          <button onClick={() => push({ name: 'home' })}>Go Home</button>
          <button onClick={goBack}>Go Back</button>
        </div>
      </div>
    )
  }
}

export default Provider.connect(NotFound)
