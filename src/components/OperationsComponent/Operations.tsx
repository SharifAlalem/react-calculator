import { Component } from "react";
import './Operations.scss';

interface OperationProps {
    handleOperation: (e:any)=>void
}
 
interface OperationState {
    
}
 
class Operation extends Component<OperationProps, OperationState> {
    constructor(props: OperationProps) {
        super(props);
    }
    render() { 
        return ( 
            <div className="operations">
                <div id="clear" className="operation" onClick={this.props.handleOperation}>AC</div>
                <div id="add" className="operation" onClick={this.props.handleOperation}>+</div>
                <div id="subtract" className="operation" onClick={this.props.handleOperation}>-</div>
                <div id="multiply" className="operation" onClick={this.props.handleOperation}>*</div>
                <div id="divide" className="operation" onClick={this.props.handleOperation}>/</div>
                <div id="equals" className="operation" onClick={this.props.handleOperation}>=</div>
            </div>
         );
    }
}
 
export default Operation;