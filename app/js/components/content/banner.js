const React = require('React');


class Banner extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            lastStyle: 'checkSwiper-last',
            newStyle: 'checkSwiper-new',
            imgUrl: [
                {
                    url: '/app/images/F143874703.jpg',
                    to: '',
                    styleNow: 'checkSwiper-new'
                },{
                    url: '/app/images/F143872115.jpg',
                    to: '',
                    styleNow: 'checkSwiper-last'
                },{
                    url: '/app/images/F143872116.jpg',
                    to: '',
                    styleNow: 'checkSwiper-last'
                },{
                    url: '/app/images/F143872105.jpg',
                    to: '',
                    styleNow: 'checkSwiper-last'
                }
            ],
            checkPoint: [
                'newPoint',
                'oldPoint',
                'oldPoint',
                'oldPoint'
            ]
        };
        this.clickSwiperHandle = this.clickSwiperHandle.bind(this);
    }
    componentDidMount(){
        let count=1;
        let sum = this.state.imgUrl.length;
        this.timerId = setInterval(
            () => {
                this.autoSwiper(count);
                count<sum-1?count++:count=0;
            },
            6000
        );
    }
    componentWillUnmount(){
        clearInterval(this.timerId);
    }
    autoSwiper(count) {
        let aimImgUrl = this.state.imgUrl;
        let newImgArr = [];
        let aimCheckPoint = this.state.checkPoint;
        let newCheckPoint = [];
        for(let i=0,len=this.state.imgUrl.length;i<len;i++){
            if(i!==count){
                if(i==count+1) {
                    newImgArr.push(this.checkSwiper(aimImgUrl[i],'checkSwiper-next'));
                }else {
                    newImgArr.push(this.checkSwiper(aimImgUrl[i],'checkSwiper-last'));
                }
            }else {
                newImgArr.push(this.checkSwiper(aimImgUrl[count],'checkSwiper-new'));
            }
        }
        for(let j=0,len=aimCheckPoint.length;j<len;j++){
            if(j!==count){
                newCheckPoint.push('oldPoint');
            }else {
                newCheckPoint.push('newPoint');
            }
        }
        this.setState({
            imgUrl: newImgArr,
            checkPoint: newCheckPoint
        });
    }
    checkSwiper(aim,classNm){
        let res = Object.assign({},aim,{styleNow: classNm});
        return res;
    }
    clickSwiperHandle(count){
        clearInterval(this.timerId);
        this.autoSwiper(count);
        let num=count+1;
        let sum = this.state.imgUrl.length;
        this.timerId = setInterval(
            () => {
                this.autoSwiper(num);
                count<sum-1?num++:num=0;
            },
            6000
        );
    }
    render(){
        let lists = this.state.imgUrl;
        let listItems = lists.map((item,index) =>
            <li key={index} className={item.styleNow}>
                <a href={item.to}>
                    <img src={item.url} />
                </a>
            </li>
        );
        let pointsClass = this.state.checkPoint;
        let checkPoints = pointsClass.map( (item,index) =>
            <span key={index} className={item} onClick={(e) => this.clickSwiperHandle(index,e)}></span>
        );
        return (
            <div id="banner">
                <ul id="swiper">{listItems}</ul>
                <div className="checkBtn">
                    {checkPoints}
                </div>
            </div>
        );
    }
}
module.exports = Banner;