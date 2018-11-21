const React = require('react');
const LinkList = require('./footer/linkList.js');
const SecFlo = require('./footer/secFlo.js');

class Footer extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            footHead: {
                title: "You've got questions? We've got answers!",
                titleC1: "Contact us by phone or by email and if we're not available,",
                titleC2: 'one of our representatives will get back to you within 24 hours.'
            },
            siteMapList:[
                {
                    url: '',
                    value: 'Home'
                },{
                    url: '',
                    value: 'About'
                },{
                    url: '',
                    value: 'Suport'
                },{
                    url: '',
                    value: 'News & Blog'
                },{
                    url: '',
                    value: 'Products'
                },{
                    url: '',
                    value: 'Testimonials'
                },{
                    url: '',
                    value: 'Contact'
                },{
                    url: '',
                    value: 'My Account'
                },{
                    url: '',
                    value: 'Track My Order'
                },{
                    url: '',
                    value: 'Dealer Login'
                },
            ],
            maxAdvancedBrakesList: ['280 Hillmount Road','Unit 5','Markham, ON L6C 3A1'],
            customerSupportList: [
                'Store Hours:',
                'Mon - Fri: 9AM - 6PM EST',
                'Toll-Free Phone Support:',
                '1-888-827-7927',
                'Mon - Thursday: 8AM - 9PM EST',
                'Friday: 8AM - 5PM EST',
                'Sat - Sun: CLOSED',
                'sales@maxbrakes.com'
            ],
            otherInfoList: [
                {
                    url: '',
                    value: 'Price Match Request'
                },{
                    url: '',
                    value: 'Privacy Policy'
                },{
                    url: '',
                    value: 'Accessibility Multi-Year Plan'
                }
            ],
            helpList: [
                {
                    url: '',
                    value: "FAQ's"
                },{
                    url: '',
                    value: 'Warranty'
                },{
                    url: '',
                    value: 'Shipping & Returns'
                },{
                    url: '',
                    value: 'Request Product Return'
                },
            ],
            secureShop: {
                img: [
                    '/app/images/F98926746.png',
                    '/app/images/F98926609.png',
                    '/app/images/F98926610.png'
                ],
                content: 'All prices displayed on our website are USD. To pay in CAD, please call or e-mail us.',
                tel: '1-888-827-7927',
                email: 'sales@maxbrakes.com'
            },
            flowList: [
                
            ]
        };
    }
    render(){
        return(
            <div id="footer">
                <div className="title">
                    <div className="width1160">
                        <h2>{this.state.footHead.title}</h2>
                        <h3>{this.state.footHead.titleC1}</h3>
                        <h3>{this.state.footHead.titleC2}</h3>
                    </div>
                </div>
                <div className="infos">
                    <div className="width1160">
                        <ul>
                            <li>
                                <LinkList lists={this.state.siteMapList} sig={true} classNm="siteMap" title="Site Map"/>
                            </li>     
                            <li> 
                                <ul>
                                    <li>
                                        <LinkList lists={this.state.maxAdvancedBrakesList} sig={false} classNm="max" title="Max Advanced Brakes"/>
                                    </li>
                                    <li>
                                        <LinkList lists={this.state.customerSupportList} sig={false} classNm="customer" title="Customer Support"/>
                                    </li>
                                </ul>
                            </li>
                            <li>
                                <ul>
                                    <li>
                                        <LinkList lists={this.state.otherInfoList} sig={true} classNm="other" title="Other Information"/>
                                    </li>
                                    <li>
                                        <LinkList lists={this.state.helpList} sig={true} classNm="help" title="Help Topics"/>
                                    </li>
                                </ul>
                            </li>
                            <li>
                                <SecFlo title='Secure Shopping' secImgLists={this.state.secureShop.img} secContent={this.state.secureShop.content} secTel={this.state.secureShop.tel} secEmail={this.state.secureShop.email}/>
                            </li>
                        </ul>
                    </div>
                </div>
                <div id="fall">
                    <div className="width1160">
                        <i>Copyright © 2018 MaxBrakes.com. All Rights Reserved.</i><br/>
                        <i>Powered by <em>Web Shop Manager.</em></i>
                    </div>
                </div>
            </div>
        );
    }
}
module.exports = Footer;