const React = require('react');
class UlList extends React.Component {
    constructor(props){
        super(props);
    }
    render(){
        const items = this.props.items;
        const listItems = items.map(item =>
            <li key={item.value}>
                <a href={item.url}>{item.value}</a>
            </li>
        );
        return (
           <ul className="nav">{listItems}</ul>
        )
    }
}
class Header extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            navEle: [{
                value: 'Home',
                url: '',
            },{
                value: "About",
                url: ''
            },{
                value: "Products",
                url: ''
            },{
                value: "Support",
                url: ''
            },{
               value: "News & Blog",
               url: ''
            },{
                value: "Testimonials",
                url: ''
            },{
                value: "Contact",
                url: ''
            }]
        };
    }
    render(){
        return (
            <div id="header">
                <div className="width1160">
                    <a href="#" id="logo">
                        <img src="/app/images/logo.png" width="210px" height="85.56px"/>
                    </a>
                    <UlList items={this.state.navEle}/>
                </div>
            </div>
        )
    }
}

module.exports = Header;