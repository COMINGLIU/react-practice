const React = require('react');

class FeatureCatBanner extends React.Component {
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
                <h3>{item.name}</h3>
            </li>
        );
        return (
            <div className={this.props.classNm}>
                <h2>{this.props.title}</h2>
                <ul >{listItem}</ul>
            </div>
        );
    }
}
module.exports = FeatureCatBanner;