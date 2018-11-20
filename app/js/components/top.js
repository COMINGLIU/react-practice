const React = require('react');
class Top extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            itemsNum: 0
        };
    }
    render(){
        return (
            <div id="top">
                <div className="width1160">
                    <div className="left">
                        <i>Welcome Guest</i>
                        <span>My Acount</span>
                        <span>Need Help?</span>
                        <span className="color-f-orange">Track My Order</span>
                        <span className="color-f-orange">Dealer Login</span>
                    </div>
                    <div className="right">
                        <em className="color-b-orange">占位</em>
                        <span><span className="item-num">{this.state.itemsNum}</span>Items in Cart</span>
                    </div>
                </div>
            </div>
        )
    }
}
module.exports = Top;