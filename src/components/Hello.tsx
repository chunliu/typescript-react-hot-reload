import * as React from "react";

export interface HelloProps { compiler: string; framework: string; }

// 'HelloProps' describes the shape of props.
// State is never set so we use the 'undefined' type.
export class Hello extends React.Component<HelloProps, undefined> {
    public render() : JSX.Element {
        return (
            <h1>Hello world from {this.props.compiler} and {this.props.framework}!</h1>
        );
    }
}