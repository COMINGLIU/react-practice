const React = require('react');
const SideBar = require('./content/sidebar.js');
const Banner = require('./content/banner.js');

class Content extends React.Component {
    constructor(props){
        super(props);
    }
    render(){
        return (
            <div id="content">
                <div className="width1160">
                    <div id="content-nav">
                        <SideBar />
                        <Banner />
                    </div>
                </div>
            </div>
        );
    }
}
module.exports = Content;