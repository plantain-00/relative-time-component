import { defineComponent } from 'vue'
import * as common from 'relative-time-component'
export * from 'relative-time-component'
import { indexTemplateHtml } from './variables'

/**
 * @public
 */
export const RelativeTime = defineComponent({
  render: indexTemplateHtml,
  props: {
    time: {
      type: null,
      required: true,
    },
    locale: {
      type: null,
      required: true,
    },
  },
  data: () => {
    return {
      timer: undefined as ReturnType<typeof setInterval> | undefined,
      isHovering: false,
      forceUpdateFlag: false,
    }
  },
  computed: {
    title(): string {
      return common.format(this.time)
    },
    relativeTime(): string {
      return common.getRelativeTime(this.time, this.locale, this.forceUpdateFlag)
    },
    timeText(): string {
      return this.isHovering ? this.title : this.relativeTime
    },
  },
  beforeMount() {
    this.timer = setInterval(() => {
      this.forceUpdateFlag = !this.forceUpdateFlag
    }, 60 * 1000)
  },
  beforeUnmount() {
    if (this.timer) {
      clearInterval(this.timer)
    }
  },
  methods: {
    mouseenter() {
      this.isHovering = true
    },
    mouseleave() {
      this.isHovering = false
    }
  }
})
