import * as React from 'react'
import * as ReactDOM from 'react-dom'
import { RelativeTime } from '../dist/'

class Main extends React.Component<{}, {}> {
  private locale = null

  private time1 = Date.now() - 1000 * 60 * 60 * 24 * 365 * 5
  private time2 = Date.now() - 1000 * 60 * 60 * 24 * 365
  private time3 = Date.now() - 1000 * 60 * 60 * 24 * 30 * 5
  private time4 = Date.now() - 1000 * 60 * 60 * 24 * 30
  private time5 = Date.now() - 1000 * 60 * 60 * 24 * 10
  private time6 = Date.now() - 1000 * 60 * 60 * 24
  private time7 = Date.now() - 1000 * 60 * 60 * 15
  private time8 = Date.now() - 1000 * 60 * 60
  private time9 = Date.now() - 1000 * 60 * 15
  private time10 = Date.now() - 1000 * 60
  private time11 = Date.now() - 1000 * 15
  private time12 = Date.now() + 1000 * 15
  private time13 = Date.now() + 1000 * 60
  private time14 = Date.now() + 1000 * 60 * 15
  private time15 = Date.now() + 1000 * 60 * 60
  private time16 = Date.now() + 1000 * 60 * 60 * 15
  private time17 = Date.now() + 1000 * 60 * 60 * 24
  private time18 = Date.now() + 1000 * 60 * 60 * 24 * 10
  private time19 = Date.now() + 1000 * 60 * 60 * 24 * 30
  private time20 = Date.now() + 1000 * 60 * 60 * 24 * 30 * 5
  private time21 = Date.now() + 1000 * 60 * 60 * 24 * 365
  private time22 = Date.now() + 1000 * 60 * 60 * 24 * 365 * 5

  UNSAFE_componentWillMount() {
    if (navigator.language === 'zh-CN') {
      import('../../core/dist/locales/' + navigator.language + '.js').then(module => {
        this.locale = module.locale
        this.setState({ locale: this.locale })
      })
    }
  }

  render() {
    return (
      <div>
        <a href='https://github.com/plantain-00/RelativeTime-component/tree/master/packages/react/demo' target='_blank'>the source code of the demo</a>
        <br />
        <RelativeTime time={this.time1} locale={this.locale}></RelativeTime>
        <br />
        <RelativeTime time={this.time2} locale={this.locale}></RelativeTime>
        <br />
        <RelativeTime time={this.time3} locale={this.locale}></RelativeTime>
        <br />
        <RelativeTime time={this.time4} locale={this.locale}></RelativeTime>
        <br />
        <RelativeTime time={this.time5} locale={this.locale}></RelativeTime>
        <br />
        <RelativeTime time={this.time6} locale={this.locale}></RelativeTime>
        <br />
        <RelativeTime time={this.time7} locale={this.locale}></RelativeTime>
        <br />
        <RelativeTime time={this.time8} locale={this.locale}></RelativeTime>
        <br />
        <RelativeTime time={this.time9} locale={this.locale}></RelativeTime>
        <br />
        <RelativeTime time={this.time10} locale={this.locale}></RelativeTime>
        <br />
        <RelativeTime time={this.time11} locale={this.locale}></RelativeTime>
        <br />
        <RelativeTime time={this.time12} locale={this.locale}></RelativeTime>
        <br />
        <RelativeTime time={this.time13} locale={this.locale}></RelativeTime>
        <br />
        <RelativeTime time={this.time14} locale={this.locale}></RelativeTime>
        <br />
        <RelativeTime time={this.time15} locale={this.locale}></RelativeTime>
        <br />
        <RelativeTime time={this.time16} locale={this.locale}></RelativeTime>
        <br />
        <RelativeTime time={this.time17} locale={this.locale}></RelativeTime>
        <br />
        <RelativeTime time={this.time18} locale={this.locale}></RelativeTime>
        <br />
        <RelativeTime time={this.time19} locale={this.locale}></RelativeTime>
        <br />
        <RelativeTime time={this.time20} locale={this.locale}></RelativeTime>
        <br />
        <RelativeTime time={this.time21} locale={this.locale}></RelativeTime>
        <br />
        <RelativeTime time={this.time22} locale={this.locale}></RelativeTime>
      </div>
    )
  }
}

ReactDOM.render(<Main />, document.getElementById('container'))
