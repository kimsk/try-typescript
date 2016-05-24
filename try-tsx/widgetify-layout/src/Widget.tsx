import * as React from 'react';
import * as ReactDOM from 'react-dom';
import * as $ from 'jquery';
import * as _ from 'underscore';
require('jquery-ui/draggable');

let Widgetify = (C: __React.ComponentClass<any>, widgetTitle: string = null) => class Widget extends React.Component<any, any>{
    static WIDGET_STYLE = {
        display: 'flex',
        flexRow: 'column',
        flexWrap: 'wrap',
        alignItems: 'flex-start',
        alignContent: 'flex-start',
        position: 'absolute',
        borderRadius: 4,
        border: 'black solid 1px'
    }

    static TOOLBAR_STYLE = {
        width: '100%',
        height: 30,
        margin: '0px 0px',
        padding: '0px 0px',
        color: 'white',
        background: 'grey',
        display: 'flex',
        alignItems: 'center',
        borderRadius: 4
    }

    static CONTENT_STYLE = {
        width: '100%'
    }

    static DRAGGABLE_TOOLBAR = 'draggable-toolbar'
    static DRAGGABLE_TOOLBAR_SELECTOR = '.draggable-toolbar'

    componentDidMount() {
        let ref = this.refs['widget'];
        let elem = $(ref);
        elem.draggable({
            cursor: 'move',
            handle: Widget.DRAGGABLE_TOOLBAR_SELECTOR,
            revert: true,
            snap: true,
            start: () => {
                (ref as HTMLDivElement).style.opacity = '0.5';
            },
            stop: () => {
                (ref as HTMLDivElement).style.opacity = '1';
            }
        });
    }

    render() {
        const widgetStyle = $.extend({
            height: this.props.height,
            width: this.props.width,
            top: this.props.y,
            left: this.props.x
        }, Widget.WIDGET_STYLE);

        let contentProps = _.clone(this.props);
        $.extend(contentProps, {
            height: this.props.height - Widget.TOOLBAR_STYLE.height
        });

        return (
            <div ref='widget'
                style={widgetStyle} >
                <div ref='toolbar'
                    className={Widget.DRAGGABLE_TOOLBAR}
                    style={Widget.TOOLBAR_STYLE}
                    onMouseOver={() => (this.refs['toolbar'] as HTMLDivElement).style.cursor = 'move'}>
                    <span>{this.props.title ? this.props.title : widgetTitle}</span>
                </div>
                <div ref='content'
                    style={Widget.CONTENT_STYLE}>
                    <C {...contentProps}/>
                </div>
            </div>
        );
    }
}

export { Widgetify };