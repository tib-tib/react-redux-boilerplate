import React, { Component } from 'react'

export default class ErrorBoundary extends Component {
  constructor(props) {
    super(props)
    this.state = { hasError: false }
  }

  componentDidCatch() {
    this.setState({ hasError: true })
  }

  render() {
    const { hasError } = this.state
    const { children } = this.props
    if (hasError) {
      return <div>Something went wrong.</div>
    }
    return children
  }
}
