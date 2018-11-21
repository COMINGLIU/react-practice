const React = require('react');

class Footer extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            footHead: {
                title: 'You’ve got questions? We’ve got answers!',
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
            MaxAdvancedBrakesList: ['280 Hillmount Road','Unit 5','Markham, ON L6C 3A1'],
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
                <div class="title">
                    <h2>{this.state.footHead.title}</h2>
                    <h3>{this.state.footHead.titleC1}</h3>
                    <h3>{this.state.footHead.titleC2}</h3>
                </div>
            </div>
        );
    }
}
module.exports = Footer;