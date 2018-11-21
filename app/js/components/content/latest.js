const React = require('react');

class Latest extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            title: 'Latst News & Blog'
        }
    }
    render(){
        let lists = this.props.lists;
        let listItem = lists.map((item,index) => 
            <li>
                <a href={item.to}>
                    <img src={item.imgUrl} />
                </a>
                <div className="into">
                    <h3>{item.title}</h3>
                    <p>
                        <em>占</em>
                        <time>{item.time}</time>
                    </p>
                    <h4>{item.content}</h4>
                </div>
            </li>
        );
        return (
            <div id="latest">
                <h2>{this.state.title}</h2>
                <ul>{listItem}</ul>
            </div>
        );
    }
}
module.exports = Latest;