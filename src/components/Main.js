require('normalize.css/normalize.css');
require('styles/App.scss');

import React from 'react';

// 获取图片相关的数据
  var imageDatas = require('../data/imageDatas.json');
// 利用自执行函数，将图片名信息转出图片URL路径信息
 imageDatas = (function getImageUrl(imageDatasArr){
   for(var i=0,j=imageDatasArr.length;i<j;i++){
     let singleImageData = imageDatasArr[i];
     singleImageData.imageUrl = require('../images/'+singleImageData.fileName);
     imageDatasArr[i] = singleImageData;
   }
   return imageDatasArr;
 })(imageDatas);

class ImgFigure extends React.Component {
  render() {
    return (
      <figure className="img-figure">
        <img src = {this.props.data.imageUrl} alt = {this.props.data.title}/>
        <figcaption>
          <h2 className="img-title">{this.props.data.title}</h2>
        </figcaption>
      </figure>
    );
  }
}

class AppComponent extends React.Component {
  render() {
    let controllerUnits = [],imgFigures = [];
    imageDatas.forEach(function(value) {
      imgFigures.push(<ImgFigure data = {value}/>);
    });
    return (
      <section className="stage">
        <section className="img-sec">
          {imgFigures}
        </section>
        <nav className="constroller-nav">
          {controllerUnits}
        </nav>
      </section>
    );
  }
}

AppComponent.defaultProps = {
};

export default AppComponent;
