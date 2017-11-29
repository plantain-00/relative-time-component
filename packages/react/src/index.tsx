import * as React from "react";
import * as common from "relative-time-component";
export * from "relative-time-component";

/**
 * @public
 */
export class RelativeTime extends React.PureComponent<{
    time: Date | number;
    locale?: common.Locale | null;
}, {}> {
    private relativeTime = "";
    private title = "";
    private timer: NodeJS.Timer;
    private isHovering = false;

    private get timeText() {
        return this.isHovering ? this.title : this.relativeTime;
    }

    componentWillMount() {
        this.relativeTime = common.getRelativeTime(this.props.time, this.props.locale);
        this.title = common.format(this.props.time);
        this.setState({ relativeTime: this.relativeTime, title: this.title });
        this.timer = setInterval(() => {
            this.relativeTime = common.getRelativeTime(this.props.time, this.props.locale);
            this.setState({ relativeTime: this.relativeTime });
        }, 60 * 1000);
    }

    componentWillUnmount() {
        if (this.timer) {
            clearInterval(this.timer);
        }
    }

    render() {
        return (
            <span title={this.title} onMouseEnter={() => this.mouseenter()} onMouseLeave={() => this.mouseleave()}>{this.timeText}</span>
        );
    }

    private mouseenter() {
        this.isHovering = true;
        this.setState({ isHovering: this.isHovering });
    }

    private mouseleave() {
        this.isHovering = false;
        this.setState({ isHovering: this.isHovering });
    }
}
