(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{145:function(t,n,e){"use strict";e.r(n);var o=e(0),r=e.n(o),i=e(7),a=e.n(i),s=e(163),u=e(164),c=e.n(u),p=(e(33),e(76)),l=e.n(p),d=e(161),f=function(t){function n(){for(var n,e=arguments.length,o=new Array(e),r=0;r<e;r++)o[r]=arguments[r];return(n=t.call.apply(t,[this].concat(o))||this).state={},n._updateDimensions=function(){if("undefined"!=typeof window){var t=window.innerHeight;n.setState({height:t}),n.forceUpdate()}},n}a()(n,t);var e=n.prototype;return e.componentDidMount=function(){"undefined"!=typeof window&&(window.addEventListener("resize",this._updateDimensions),this._updateDimensions())},e.componentWillUnmount=function(){"undefined"!=typeof window&&window.removeEventListener("resize",this._updateDimensions)},e.render=function(){var t=this.props,n=t.children,e=l()(t,["children"]),o=this.state.height;return"undefined"!=typeof window&&o?r.a.createElement(d.a,Object.assign({style:{height:o}},e),n):null},n}(r.a.Component),h=e(142),m=e.n(h),g=function(t){function n(){return t.apply(this,arguments)||this}return a()(n,t),n.prototype.render=function(){var t=this.props,n=t.position,e=t.zoom,o=t.points;return r.a.createElement("div",{className:m.a.map},r.a.createElement(f,{center:n,zoom:e},r.a.createElement(s.a,{attribution:'© <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',url:"https://{s}.tile.osm.org/{z}/{x}/{y}.png"}),o&&o.length>0&&r.a.createElement(c.a,{points:o,latitudeExtractor:function(t){return t[0]},longitudeExtractor:function(t){return t[1]},intensityExtractor:function(t){return parseFloat(t[2])}})))},n}(r.a.Component),v=e(143),w=e.n(v),y=function(t){function n(){for(var n,e=arguments.length,o=new Array(e),i=0;i<e;i++)o[i]=arguments[i];return(n=t.call.apply(t,[this].concat(o))||this)._onChange=function(t){n.props.onChange(t.target.value)},n._renderOptions=function(){return n.props.options.map(function(t){return r.a.createElement("option",{key:t.key,value:t.key},t.spinner)})},n}return a()(n,t),n.prototype.render=function(){var t=this.props.selectedOption;return r.a.createElement("div",{className:w.a.spinner_container},r.a.createElement("select",{value:t,onChange:this._onChange},this._renderOptions()))},n}(r.a.Component);y.defaultProps={options:[]};var E=function(t){function n(n){var e;return(e=t.call(this,n)||this)._onChangeObstruction=function(t){return e.setState({selectedOption:t})},e.state={selectedOption:n.options[0].key},e}return a()(n,t),n.prototype.render=function(){var t=this.props,n=t.position,e=t.zoom,o=t.options,i=t.getGroupedPoints,a=this.state.selectedOption,s=i(a);return r.a.createElement("div",null,r.a.createElement(g,{position:n,zoom:e,points:s}),r.a.createElement(y,{options:o,selectedOption:a,onChange:this._onChangeObstruction}))},n}(r.a.Component);e(75),e(55),e(36),e(176),e(178);e.d(n,"query",function(){return O});n.default=function(t){var n,e=t.data;return r.a.createElement("div",{id:"map"},r.a.createElement(E,{position:[41.881832,-87.623177],zoom:11,options:e.obstructions.result,getGroupedPoints:(n=e.points.file.result,function(t){var e=n.filter(function(n){return n.obstruction===t||"all"===t}).reduce(function(t,n){var e,o=n.lat,r=n.long,i=o+","+r,a=t[i],s=a?a.count:0;return Object.assign({},t,((e={})[i]={lat:o,long:r,count:s+1},e))},{});return Object.values(e).sort(function(t,n){return n.count-t.count}).map(function(t){return[t.lat,t.long,t.count]})})}))};var O="4263337636"}}]);
//# sourceMappingURL=component---src-pages-index-js-1899731063e6f86fd305.js.map