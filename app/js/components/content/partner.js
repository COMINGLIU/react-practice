const React = require('react');
const ListItem = require('./listItem.js');

class Partner extends React.Component {
    constructor(props){
        super(props);
    }
    render(){
        let partnerList = this.props.partnerList;
        return(
            <div id="partner">
                <div className="width1160">
                    <div className="title">
                        <p>Featured</p>
                        <p>Brands</p>
                    </div>
                    <ListItem classNm="partnerList" lists={partnerList}/>
                </div>
            </div>
        );
    }
}
module.exports =Partner;