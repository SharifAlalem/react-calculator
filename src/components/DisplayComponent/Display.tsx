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
            <div id="display" className="display">{this.props.calculation !== '' ? this.props.calculation : 'm̧͙͉̪͈̏̓͝͡a̷͓̝̣̝ͮ̀͛̎͛̿̎̓͋͘͡ͅd̀e̎̕ b̘̲̒̎̀͌ÿ̶̴̮̦̟̞̘̞̤̫͋͛̚̕ͅ s̵̨͕̙͎̞͈̯̯̼̱̍̆ͬ̂ͪͥ̄͜͝͞h̛̜̟̬̠̬̤̉ͬͨ͛̐ͥ̏̕̚ar̵͉̤̝̦̘̳͕͖͙̰̈ͭ̃̾̌ͨ̀if̝̣̲̝̱̥̂̓ͅ ȃ̝̫̮͉͑ͤͨl̨̦̓͢a͙͙̼̼͂ͫͩͅl̵̢̖̮̯̬͙̜̩ͯͬ͟e̘̦ͩ̃m̊͘ 2̴̵̛͖̗̗̯̖́͛͗̋̊͢0̴̡̢̯̳͖̻̯̉͛̅͐͑̚2̨͍͍͑͑ͧ̃́͜4_̧̭͖͈ͫ̇̒͛̀͐͆ͧ'}</div>
         );
    }
}
 
export default Display ;