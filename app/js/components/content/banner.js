const React = require('React');


class ListItem extends React.Component {
    constructor(props){
        super(props);
    }
    render(){
        let lists = this.props.lists;
        let listItems = lists.map((item,index) =>
            <li key={index}>
                <a href={item.to}>
                    <img src={item.url} />
                </a>
            </li>
        );
        return (
            <div id="banner">
                <ul id="swiper">{listItems}</ul>
                <div className="checkBtn">
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            </div>
        );
    }
}

class Banner extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            imgUrl: [
                {
                    url: '/app/images/F143874703.jpg',
                    to: ''
                },{
                    url: '/app/images/F143872115.jpg',
                    to: ''
                },{
                    url: '/app/images/F143872116.jpg',
                    to: ''
                },{
                    url: '/app/images/F143872105.jpg',
                    to: ''
                }
            ]
        };
    }
    render(){
        return (
            <ListItem lists={this.state.imgUrl}/>
        );
    }
}

module.exports = Banner;