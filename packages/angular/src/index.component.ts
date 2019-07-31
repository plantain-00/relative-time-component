import { Component, Input } from '@angular/core'

import * as common from 'relative-time-component'

import { indexTemplateHtml } from './variables'

/**
 * @public
 */
@Component({
  selector: 'relative-time',
  template: indexTemplateHtml
})
export class RelativeTimeComponent {
  @Input()
  time!: Date | number
  @Input()
  locale!: common.Locale | null

  get title() {
    return common.format(this.time)
  }
  private get relativeTime() {
    return common.getRelativeTime(this.time, this.locale, this.forceUpdateFlag)
  }
  private timer!: number
  private isHovering = false
  private forceUpdateFlag = false

  get timeText() {
    return this.isHovering ? this.title : this.relativeTime
  }

  ngOnInit() {
    this.timer = setInterval(() => {
      this.forceUpdateFlag = !this.forceUpdateFlag
    }, 60 * 1000)
  }

  ngOnDestroy() {
    if (this.timer) {
      clearInterval(this.timer)
    }
  }

  mouseenter() {
    this.isHovering = true
  }

  mouseleave() {
    this.isHovering = false
  }
}
