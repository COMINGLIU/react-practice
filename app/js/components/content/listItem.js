const React = require('react');

class ListItem extends React.Component {
    constructor(props){
        super(props);
    }
    render(){
        let lists = this.props.lists;
        let listItem = lists.map((item,index) => 
            <li key={index}>
                <a href={item.to}>
                    <img src={item.url} />
                </a>
            </li>
        );
        return(
            <ul className={this.props.classNm}>{listItem}</ul>
        );
    }
}
module.exports = ListItem;