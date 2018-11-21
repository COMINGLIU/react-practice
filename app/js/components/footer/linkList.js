const React = require('react');

class LinkList extends React.Component {
    constructor(props){
        super(props);
    }
    render(){
        let lists = this.props.lists;
        let linkSig = this.props.sig;
        let linkItem = lists.map((item,index) => 
            <li key={index}>
                <a href={item.url}>
                    {item.value}
                </a>
            </li>
        );
        
        let noLinkItem = lists.map((item,index) => 
            <li key={index}>
                {item}
            </li>
        );
        console.log(linkSig);
        return (
            <ul className={this.props.classNm}>
                {this.props.title}
                {linkSig?linkItem:noLinkItem}
            </ul>
        )
    }
}
module.exports = LinkList;
