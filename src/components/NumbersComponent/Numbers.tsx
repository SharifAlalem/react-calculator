import { Component } from "react";
import './Numbers.scss';

type NumbersProps = {
    handleClick: (e:any)=>void
}

class Numbers extends Component<NumbersProps> {
    constructor(props: any) {
        super(props);
    }

    render() { 
        return ( 
            <div className="numbers">
                <ul className="numbers-list">
                    <li id="seven" className="number" onClick={this.props.handleClick}>7</li>
                    <li id="eight" className="number" onClick={this.props.handleClick}>8</li>
                    <li id="nine" className="number" onClick={this.props.handleClick}>9</li>
                    <li id="four" className="number" onClick={this.props.handleClick}>4</li>
                    <li id="five" className="number" onClick={this.props.handleClick}>5</li>
                    <li id="six" className="number" onClick={this.props.handleClick}>6</li>
                    <li id="one" className="number" onClick={this.props.handleClick}>1</li>
                    <li id="two" className="number" onClick={this.props.handleClick}>2</li>
                    <li id="three" className="number" onClick={this.props.handleClick}>3</li>
                    <li id="zero" className="number" onClick={this.props.handleClick}>0</li>
                    <li id="decimal" className="number" onClick={this.props.handleClick}>.</li>
                </ul>
            </div>
         );
    }
}
 
export default Numbers;