import * as React from 'react';
import {Button} from 'react-bootstrap';

export interface HelloProps { compiler: string; framework: string; }

// 'HelloProps' describes the shape of props.
// State is never set so we use the 'undefined' type.
export class Hello extends React.Component<HelloProps, undefined> {
    public render() : JSX.Element {
        return (
            <div>
                <h1>Hello world from {this.props.compiler} and {this.props.framework}!</h1>
                <Button bsStyle="success" bsSize="small" onClick={()=>{alert("Button is clicked. ");}}>Click me!</Button>
            </div>
        );
    }
}