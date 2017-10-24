import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Redirect,
  withRouter,
  Switch
    
} from 'react-router-dom';
class Panicbuying extends Component{
    componentWillMount(){
        console.log('出现前')
    }
    componentDidMount(){
        console.log('出现后')
    }
    render(){
        window.scrollTo(0,0);
        return (
            <div>
                <div className="search">
                    <input type="text" placeholder="搜索目的地国家/城市/关键字" />
                </div>
                <div className="pk_5">
                    <img src={require('../images/36.png')} />
                </div>
                <ul className="periphery_5">
                    <li>
                        <a href="javascript:;">周边游</a>
                    </li>
                    <li>
                        <a href="javascript:;">国内游</a>
                    </li>
                    <li>
                        <a href="javascript:;">出境游</a>
                    </li>
                    <li>
                        <a href="javascript:;">门票</a>
                    </li>
                </ul>
                <ul className="immediately_5">
                    <li>
                        <a href="javascript:;">
                            <img src="http://pic.lvmama.com/uploads/pc/place2/2017-08-18/21505b1e-f916-4e8c-ba18-1fa6bfa0bdb2_480_320.jpg" />
                            <p className="p1">【8.26南宫水世界自驾亲子游特卖】住1晚北京南宫温泉度假酒店＋次日早餐＋水世界进馆1次＋儿童欢乐城堡畅玩＋彩虹工坊儿童DIY1次＋南宫书堂国学课1次＋赠送水枪</p>
                            <p className="p2">
                                <span className="span1">¥</span>
                                <span className="span2">640</span>
                                <span className="span3">起</span>
                            </p>
                            <span className="p3">仅余15份</span>
                            <button>立即抢</button>
                        </a>
                    </li>
                    <li>
                        <a href="javascript:;">
                            <img src="http://pic.lvmama.com/uploads/pc/place2/2015-05-20/a27c7514-4c89-482d-bbc4-54623c393882_480_320.jpg" />
                            <p className="p1">【长白山2天1晚自由行特卖】住长白山万达智选假日酒店＋早餐＋接送机＋夏季娱乐项目（汉拿山温泉、万达水乐园、趣味自行车、度假区缆车、西坡往返巴士）</p>
                            <p className="p2">
                                <span className="span1">¥</span>
                                <span className="span2">766</span>
                                <span className="span3">起</span>
                            </p>
                            <span className="p3">仅余18份</span>
                            <button>立即抢</button>
                        </a>
                    </li>
                    <li>
                        <a href="javascript:;">
                            <img src="http://pic.lvmama.com/uploads/pc/place2/2016-10-27/cd2c2891-d683-4b52-9007-6fc5094f76a4_480_320.jpg" />
                            <p className="p1">【青岛金沙滩2天1晚自由行特卖】住1晚青岛金沙滩希尔顿酒店＋次日双人自助早餐＋双人自助晚餐＋赠双人咖啡，漫步黄岛金沙滩，享亲子、休闲度假时光！</p>
                            <p className="p2">
                                <span className="span1">¥</span>
                                <span className="span2">1500</span>
                                <span className="span3">起</span>
                            </p>
                            <span className="p3">仅余21份</span>
                            <button>立即抢</button>
                        </a>
                    </li>
                    <li>
                        <a href="javascript:;">
                            <img src="http://pic.lvmama.com/uploads/pc/place2/2017-02-23/58f9fde8-d807-48b0-8f87-2f5616eee0e1_480_320.jpg" />
                            <p className="p1">【密云古北水镇2天1晚自由行特卖】住古北水镇大酒店（含双早）＋流年美味餐券1张（中餐／西餐2选1）＋温泉票＋漫游水镇门票＋长城门票＋特色手工（三选一）＋小镇特色纪念品一份</p>
                            <p className="p2">
                                <span className="span1">¥</span>
                                <span className="span2">1280</span>
                                <span className="span3">起</span>
                            </p>
                            <span className="p3">仅余20份</span>
                            <button>立即抢</button>
                        </a>
                    </li>
                    <li>
                        <a href="javascript:;">
                            <img src="http://pic.lvmama.com/uploads/pc/place2/2016-05-30/b368826e-7977-4a1d-8d13-809227787443_480_320.jpg" />
                            <p className="p1">【呼伦贝尔草原 5天4晚自由行特卖】住品质酒店4晚＋穿越草原深处＋拍摄莫日格勒河＋白桦林＋游根河湿地＋巴尔虎蒙古部落＋赏186彩带河＋中俄界河＋到达满洲里体验异国情调</p>
                            <p className="p2">
                                <span className="span1">¥</span>
                                <span className="span2">3780</span>
                                <span className="span3">起</span>
                            </p>
                            <span className="p3">仅余43份</span>
                            <button>立即抢</button>
                        </a>
                    </li>
                    <li>
                        <a href="javascript:;">
                            <img src="http://pic.lvmama.com/uploads/pc/place2/2017-04-07/918983f0-7d6e-4f04-af52-0da5a5beb347_480_320.jpg" />
                            <p className="p1">【大连发现王国2天1晚自由行特卖】住1晚大连发现王国度假酒店＋双早（家庭房含第三人早餐）＋入住当天到次日退房不限次进出发现王国门票【赠送2日有效票】</p>
                            <p className="p2">
                                <span className="span1">¥</span>
                                <span className="span2">500</span>
                                <span className="span3">起</span>
                            </p>
                            <span className="p3">仅余26份</span>
                            <button>立即抢</button>
                        </a>
                    </li>
                    <li>
                        <a href="javascript:;">
                            <img src="http://pic.lvmama.com/uploads/pc/place2/2017-03-16/cd93a7e8-a91a-4bd5-876a-f8d2cbea8e9b_720_.jpg" />
                            <p className="p1">【天津极地海洋快活2天1晚自由行特卖】住天津滨海假日酒店房型自选（行政房含2份自助烧烤晚餐）＋2大1小中西式自助早餐＋天津海昌极地海洋世界门票2张＋儿童娱乐＋恒温泳池＋健身房</p>
                            <p className="p2">
                                <span className="span1">¥</span>
                                <span className="span2">998</span>
                                <span className="span3">起</span>
                            </p>
                            <span className="p3">仅余37份</span>
                            <button>立即抢</button>
                        </a>
                    </li>
                    <li>
                        <a href="javascript:;">
                            <img src="http://pic.lvmama.com/uploads/pc/place2/2017-05-13/8641c782-b0be-496c-8814-acd318d79bf6_720_.jpg" />
                            <p className="p1">北戴河2日巴士跟团游([开心驴行]看鳄鱼表演，捡贝壳，金沙湾沙雕大世界、海滨浴场、游轮，纯游玩，无购物，住海边，赏美景【特卖】)</p>
                            <p className="p2">
                                <span className="span1">¥</span>
                                <span className="span2">348</span>
                                <span className="span3">起</span>
                            </p>
                            <span className="p3">仅余14份</span>
                            <button>立即抢</button>
                        </a>
                    </li>
                    <li>
                        <a href="javascript:;">
                            <img src="http://pic.lvmama.com/uploads/pc/place2/2017-07-04/b5fe8128-acaa-4de8-ad46-ed88b5eacb11_720_.jpg" />
                            <p className="p1">【2017相约普陀2天1晚双人套餐·自由行特卖】住普陀山小米山庄精装客栈1晚＋普陀山风景区双人门票</p>
                            <p className="p2">
                                <span className="span1">¥</span>
                                <span className="span2">345</span>
                                <span className="span3">起</span>
                            </p>
                            <span className="p3">仅余44份</span>
                            <button>立即抢</button>
                        </a>
                    </li>
                    <li>
                        <a href="javascript:;">
                            <img src="http://pic.lvmama.com/uploads/pc/place2/2017-02-08/3c9e4243-de00-4783-9423-bfeffde6989d_720_.jpg" />
                            <p className="p1">【古北水镇2天1晚 温泉秘密花园自由行特卖】住古北水镇十三妹女子主题温泉酒店（含早）＋古北水镇门票＋私密温泉体验（高级大床C 除外）</p>
                            <p className="p2">
                                <span className="span1">¥</span>
                                <span className="span2">1590</span>
                                <span className="span3">起</span>
                            </p>
                            <span className="p3">仅余28份</span>
                            <button>立即抢</button>
                        </a>
                    </li>
                </ul>
                <ul className="butt">
                    <li>
                        <Link to="/Homepage">
                            <img src={require('../images/44.png')} />
                            <span>首页</span>
                        </Link>
                    </li>
                    <li>
                        <Link to="/Classification">
                            <img src={require('../images/45.png')} />
                            <span>分类</span>
                        </Link>
                    </li>
                    <li>
                        <Link to="/Panicbuying">
                            <img src={require('../images/46.png')} />
                            <span className="active">抢购</span>
                        </Link>
                    </li>
                    <li>
                        <Link to="/Mine">
                            <img src={require('../images/47.png')} />
                            <span>我的</span>
                        </Link>
                    </li>
                </ul>
            </div>
        )
    }
}
export default Panicbuying;