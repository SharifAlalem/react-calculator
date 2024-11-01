import { Component } from "react";
import './Display.scss';
type DisplayProps = {
    calculation: string
}

class Display extends Component<DisplayProps> {
    constructor(props: DisplayProps) {
        super(props);
    }
    render() { 
        return ( 
            <div id="display" className="display">{this.props.calculation}</div>
         );
    }
}
 
export default Display ;