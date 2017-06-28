import * as React from "react";
import * as common from "./common";

export class RelativeTime extends React.PureComponent<{
    time: Date | number;
    locale?: common.Locale | null;
}, {}> {
    relativeTime = "";
    title = "";
    timer: NodeJS.Timer;
    isHovering = false;

    get timeText() {
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

    mouseenter() {
        this.isHovering = true;
        this.setState({ isHovering: this.isHovering });
    }

    mouseleave() {
        this.isHovering = false;
        this.setState({ isHovering: this.isHovering });
    }

    render() {
        return (
            <span title={this.title} onMouseEnter={() => this.mouseenter()} onMouseLeave={() => this.mouseleave()}>{this.timeText}</span>
        );
    }
}
