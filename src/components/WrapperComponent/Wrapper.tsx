import { Component } from "react";
import './Wrapper.scss';
import Numbers from "../NumbersComponent/Numbers";
import Display from "../DisplayComponent/Display";
import Operation from "../OperationsComponent/Operations";
import Mexp from 'math-expression-evaluator';
import { flushSync } from "react-dom";

type WrapperState = {
    leftZero: boolean,
    decimalApplied: boolean,
    result: number,
    display : string
}

const operations = new Set(['+', '-', '*','/','.']);

class Wapper extends Component<{},WrapperState> {
    constructor(props:any) {
        super(props);

        this.state= {
            leftZero: true,
            decimalApplied: false,
            result: 0,
            display: ''
        }
    }

    cleanExpression = (expression:string) => {
        return expression.replace(/([-+*/]){2,}/g, (match:any) => {
          return match.endsWith('-') ? match.slice(-2) : match.slice(-1);
        });
    };

    calculateResult = () => {
        const mexp = new Mexp();
        const evaluatedResult = mexp.eval(this.cleanExpression(this.state.display));
        flushSync(()=>{this.setState({display: String(evaluatedResult),result: evaluatedResult})});
    };

    resetCalculator = () => {
        flushSync(()=>{this.setState({
            result: 0,
            display: '0',
            leftZero:true,
            decimalApplied: false,
        })});
    }

    handleClick = (e:any)=>{
        let char = String(e.target.innerHTML);
        if(char =='AC') this.resetCalculator();
        else if(char === '=') this.calculateResult();
        else {
            if(this.state.result != 0) flushSync(()=>{this.setState({display: String(this.state.result)+ char,result:0})});
            else {
                if(operations.has(char)){
                    if(char == '.' && this.state.decimalApplied == false)
                        flushSync(()=>{this.setState({display: this.state.display + char, leftZero:true,decimalApplied:true})})
                    else if(char == '.' && this.state.decimalApplied == true)
                        flushSync(()=>{this.setState({display: this.state.display, leftZero:true,decimalApplied:true})})  
                    else  flushSync(()=>{this.setState({display: this.state.display + char,decimalApplied:false, leftZero:true})}) 
                }
                else {
                    if(this.state.leftZero == true && char !== '0' && this.state.display[this.state.display.length-1] == '0')
                        flushSync(()=>{this.setState({display: this.state.display.slice(0,-1) + char,leftZero:false})})
                    else if(this.state.leftZero == true && char == '0' && !operations.has(this.state.display[this.state.display.length-1])) 
                        flushSync(()=>{this.setState({display: this.state.display.slice(0,-1) + char})})
                    else if(this.state.leftZero == true && char == '0' && operations.has(this.state.display[this.state.display.length-1]))
                        flushSync(()=>{this.setState({display: this.state.display + char, leftZero:true})})
                    else flushSync(()=>{this.setState({display: this.state.display + char, leftZero:false})}) 
                }  
            } 
        }
    }

    render() { 
        return ( 
            <main className="main-wrapper">
                <div className="calculator-base">
                    <Display calculation={this.state.display} />
                    <div className="row">
                        <Numbers handleClick={this.handleClick}/>
                        <Operation handleOperation={this.handleClick}/>
                    </div>
                </div>
            </main>
         );
    }
}
 
export default Wapper;