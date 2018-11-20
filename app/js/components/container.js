const React = require('react');
const Top = require('./top.js');
const Header = require('./header.js');
const Content = require('./content.js');
const Footer = require('./footer.js');

class Container extends React.Component {
    constructor(props){
        super(props);
    }
    render(){
        return(
            <div id="container">
                <Top />
                <Header />
                <Content />
                {/* <Footer /> */}
            </div>
        );
    }
}
module.exports = Container;