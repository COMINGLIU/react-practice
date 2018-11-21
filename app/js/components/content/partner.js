const React = require('react');
const ListItem = requie('./listItem.js');

class Partner extends React.Component {
    constructor(props){
        super(props);
    }
    render(){
        let partnerList = this.props.partnerList;
        return(
            <div id="partner">
                <div class="title">
                    <h3>Featured</h3>
                    <h3>Brands</h3>
                </div>
                <ListItem classNm={this.props.classNm}>{partnerList}</ListItem>
            </div>
        );
    }
}
module.exports =Partner;