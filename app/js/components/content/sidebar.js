const React = require('react');
const Search = require('./search.js');

class SelectList extends React.Component {
    constructor(props){
        super(props);
    }
    render(){
        let option = this.props.optionList;
        let optionList = option.map((item,index) =>
            <option key={index} value={item}>{item}</option>
        );
        return (
            <select>{optionList}</select>
        );
    }
}
class SideBar extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            placement: ["-Select Placement-","Font & Rear Axle","Font Axle","Rear Axle"],
            make: ['2014','two','three','four','five','six','seven'],
            model: ['-select Make-','sdcs','esrfd','aefer'],
            subModel: ['-Select -Model-','wef','aw','rgf'],
            engineSize: ['-Select Sub Model-',43,54,132,43],
            trimOption: ['-Select Trim Option-','dv','erdfd','eef']
        };
    }
    render(){
        return (
            <div id="sidebar">
                <Search />
                <div id="sidebar-nav">
                    <div className="title">
                        <p>SEARCH BY</p>
                        <p>VEHICLE</p>
                    </div>
                    <SelectList optionList={this.state.placement}/>
                    <SelectList optionList={this.state.make}/>
                    <SelectList optionList={this.state.model}/>
                    <SelectList optionList={this.state.subModel}/>
                    <SelectList optionList={this.state.engineSize}/>
                    <SelectList optionList={this.state.trimOption}/>
                    <SelectList optionList={this.state.trimOption}/>
                </div>
            </div>
        );
    }
}

module.exports = SideBar;