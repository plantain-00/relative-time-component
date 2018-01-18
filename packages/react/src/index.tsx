import * as React from 'react'
import * as common from 'relative-time-component'
export * from 'relative-time-component'

/**
 * @public
 */
export class RelativeTime extends React.PureComponent<{
  time: Date | number;
  locale?: common.Locale | null;
}, {}> {
  private get relativeTime () {
    return common.getRelativeTime(this.props.time, this.props.locale)
  }
  private get title () {
    return common.format(this.props.time)
  }
  private timer: NodeJS.Timer
  private isHovering = false

  private get timeText () {
    return this.isHovering ? this.title : this.relativeTime
  }

  componentWillMount () {
    this.timer = setInterval(() => {
      this.forceUpdate()
    }, 60 * 1000)
  }

  componentWillUnmount () {
    if (this.timer) {
      clearInterval(this.timer)
    }
  }

  render () {
    return (
            <span title={this.title} onMouseEnter={() => this.mouseenter()} onMouseLeave={() => this.mouseleave()}>{this.timeText}</span>
    )
  }

  private mouseenter () {
    this.isHovering = true
    this.setState({ isHovering: this.isHovering })
  }

  private mouseleave () {
    this.isHovering = false
    this.setState({ isHovering: this.isHovering })
  }
}
