import React, { Component } from 'react';
import { Scrollbars } from 'react-custom-scrollbars';

export default class Scrollbar extends Component {

    constructor(props, ...rest) {
        super(props, ...rest);
        this.renderView = this.renderView.bind(this);
        this.renderThumbX = this.renderThumbX.bind(this);
        this.renderThumbY = this.renderThumbY.bind(this);
    }

    renderView(props) {
        return (
            <div
                className="scroll-inner"
                {...props}/>
        );
    }

    renderThumbX(props) {
        return (
            <div
                className="scroll-x"
                {...props}/>
        );
    }
    
    renderThumbY(props) {
        return (
            <div
                className="scroll-y"
                {...props}/>
        );
    }

    render() {
        return (
            <Scrollbars
                renderView={this.renderView}
                renderThumbHorizontal={this.renderThumbX}
                renderThumbVertical={this.renderThumbY}
                {...this.props}/>
        );
    }
}