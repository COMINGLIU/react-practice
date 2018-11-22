const React = require('react');

class Sec extends React.Component {
    constructor(props){
        super(props);
    }
    render(){
        let lists = this.props.secImgLists;
        let listItem = lists.map((item,index) => 
            <li key={index}>
                <img src={item} />
            </li>
        );
        return(
            <div>
                <p>{this.props.title}</p>
                <ul>
                    {listItem}
                </ul>
                <h3>{this.props.secContent}</h3>
                <p>
                    <span>{this.props.secTel}</span>|
                    <span>{this.props.secEmail}</span>
                </p>
            </div>
        )
    }
}

class SecFlo extends React.Component {
    constructor(props){
        super(props);
    }
    render(){
        return(
            <Sec title={this.props.title} secImgLists={this.props.secImgLists} secContent={this.props.secContent} secTel={this.props.secTel} secEmail={this.props.secEmail}/>
        )
    }
}
module.exports = SecFlo;