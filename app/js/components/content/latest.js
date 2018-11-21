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
            <li key={index}>
                <a href={item.to}>
                    <img src={item.imgUrl} />
                </a>
                <div className="into">
                    <h3>{item.title}</h3>
                    <p>
                        <em>-</em>
                        <time>{item.time}</time>
                    </p>
                    <h4>{item.content}</h4>
                </div>
            </li>
        );
        return (
            <div id="latest">
                <div className="width1160">
                    <h2>{this.state.title}</h2>
                    <p className="segLineDouble"></p>
                    <p className="segLineSingle"></p>
                    <ul>{listItem}</ul>
                </div>
            </div>
        );
    }
}
module.exports = Latest;