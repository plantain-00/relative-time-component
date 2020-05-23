import React from 'react'
import { Text } from 'react-native'
import * as common from 'relative-time-component'
export * from 'relative-time-component'

/**
 * @public
 */
export class RelativeTime extends React.PureComponent<{
  time: Date | number;
  locale?: common.Locale | null;
}, unknown> {
  public state = {
    relativeTime: '',
    title: '',
    isHovering: false
  }
  private timer!: NodeJS.Timer

  private get timeText() {
    return this.state.isHovering ? this.state.title : this.state.relativeTime
  }

  UNSAFE_componentWillMount() {
    let relativeTime = common.getRelativeTime(this.props.time, this.props.locale)
    const title = common.format(this.props.time)
    this.setState({ relativeTime, title })
    this.timer = setInterval(() => {
      relativeTime = common.getRelativeTime(this.props.time, this.props.locale)
      this.setState({ relativeTime })
    }, 60 * 1000)
  }

  componentWillUnmount() {
    if (this.timer) {
      clearInterval(this.timer)
    }
  }

  render() {
    return (
      <Text onPress={() => this.onPress()}>{this.timeText}</Text>
    )
  }

  private onPress() {
    this.setState({ isHovering: !this.state.isHovering })
  }
}
