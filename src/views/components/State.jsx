import React, { Component } from 'react'

/**
 * State is essentially the `classNames` package implemented
 * as a React Component where the prop keys are used as classNames
 * and the prop values are used to determine if a prop key is added
 * to the classNames string or not.
 *
 * The only difference is this package assignes the final classNames
 * value to the body tag in the html file. These classNames act as
 * state in css where css rules are defined based on the current state.
 *
 * The reason these classNames are assigned to body is because some
 * components such as Models, Dialogs, Popups, etc. mount outside
 * the root element in the application. Assigning the classNames to
 * body ensures that all of the application component live under these
 * different css states.
 *
 * Example
 * --------------------------------------------------------------------
 * Component   : <State mobile={false} dark={true} />
 * Effect      : <body class='state dark' />
 * Usage (Scss): .someClass {
 *      margin: 0 4em;
 *      background: #fff;
 *
 *     .state.mobile & {
 *          margin: 0 2em;
 *     }
 *
 *     .state.dark & {
 *          background: #000;
 *     }
 * }
 */
export default class State extends Component {
  updateBodyClassNames = (prevProps) => {
    const { children, ...props } = this.props
    const { children: prevChildren, ...prevProps_ } = prevProps

    const stateClassNames = String.cx(props)
    const prevStateClassNames = String.cx(prevProps_)
    const prevStateClassNamesRegExpStr = prevStateClassNames.replace(
      /\s+/g,
      '|'
    )
    const prevStateClassNamesRegExp = new RegExp(
      prevStateClassNamesRegExpStr,
      'g'
    )

    document.body.className = String.cx(
      stateClassNames,
      document.body.className.replace(prevStateClassNamesRegExp, '')
    ).replace(/\s+/g, ' ')
  }

  componentDidUpdate(prevProps) {
    this.updateBodyClassNames(prevProps)
  }

  componentDidMount() {
    document.body.classList.add('state')
    this.updateBodyClassNames({})
  }

  render() {
    return <>{this.props.children}</>
  }
}
