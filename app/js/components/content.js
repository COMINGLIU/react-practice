const React = require('react');
const SideBar = require('./content/sidebar.js');
const Banner = require('./content/banner.js');
const SmallBanner = require('./content/listItem.js');
const FeatureCatBanner = require('./content/featureCatBanner.js');
const Partner = require('./content/partner.js');
const Latest = require('./content/latest.js');

class Content extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            smallBanners: [
                {
                    url: '/app/images/F143872111.jpg',
                    to: ''
                },{
                    url: '/app/images/F143872110.jpg',
                    to: ''
                },{
                    url: '/app/images/F143872112.jpg',
                    to: ''
                },{
                    url: '/app/images/F143872113.jpg',
                    to: ''
                }
            ],
            featureCatList: [
                {
                    url: '/app/images/F143872160.jpg',
                    to: '',
                    name: 'SHOP BRAKE ROTORS'
                },{
                    url: '/app/images/F143872161.jpg',
                    to: '',
                    name: 'SHOP BRAKES KITS'
                },{
                    url: '/app/images/F143872158.jpg',
                    to: '',
                    name: 'SHOP BRAKES PADS'
                }
            ],
            partnerList:[
                {
                    url: '/app/images/F143872163.png',
                    to: ''
                },{
                    url: '/app/images/F143872155.png',
                    to: ''
                },{
                    url: '/app/images/F143872162.png',
                    to: ''
                },{
                    url: '/app/images/F143872165.png',
                    to: ''
                }
            ],
            latestList: [
                {
                    title: '',
                    imgUrl: '',
                    time: '',
                    content: ''
                },{
                    title: '',
                    imgUrl: '',
                    time: '',
                    content: ''
                }
            ]
        };
    }
    render(){
        return (
            <div id="content">
                <div className="width1160">
                    <div id="content-nav">
                        <SideBar />
                        <Banner />
                        <SmallBanner classNm="smallBanner" lists={this.state.smallBanners}/>
                    </div>
                    <FeatureCatBanner classNm="featureCatBanner" lists={this.state.featureCatList} title="FEATURE CATEGORIES"/>
                    <Partner classNm='partnerUl' partnerList={this.state.partnerList}/>
                    <Latest lists={this.state.latestList}/>
                </div>
            </div>
        );
    }
}
module.exports = Content;