(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{143:function(n,t,e){"use strict";e.r(t);var o=e(0),i=e.n(o),r=e(7),a=e.n(r),s=e(161),p=(e(162),e(33),e(74)),u=e.n(p),c=e(159),l=function(n){function t(){for(var t,e=arguments.length,o=new Array(e),i=0;i<e;i++)o[i]=arguments[i];return(t=n.call.apply(n,[this].concat(o))||this).state={height:500},t._updateDimensions=function(){var n=window.innerHeight;t.setState({height:n})},t}a()(t,n);var e=t.prototype;return e.componentDidMount=function(){"undefined"!=typeof window&&(window.addEventListener("resize",this._updateDimensions),this._updateDimensions())},e.componentWillUnmount=function(){"undefined"!=typeof window&&window.removeEventListener("resize",this._updateDimensions)},e.render=function(){var n=this.props,t=n.children,e=u()(n,["children"]);return"undefined"!=typeof window?i.a.createElement(c.a,Object.assign({style:{height:this.state.height}},e),t):null},t}(i.a.Component),d=function(n){function t(){return n.apply(this,arguments)||this}return a()(t,n),t.prototype.render=function(){var n=this.props,t=n.position,e=n.zoom;n.points;return"undefined"!=typeof window?i.a.createElement(l,{center:t,zoom:e},i.a.createElement(s.a,{attribution:'© <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',url:"https://{s}.tile.osm.org/{z}/{x}/{y}.png"})):null},t}(i.a.Component),h=function(n){function t(){for(var t,e=arguments.length,o=new Array(e),r=0;r<e;r++)o[r]=arguments[r];return(t=n.call.apply(n,[this].concat(o))||this)._onChange=function(n){t.props.onChange(n.target.value)},t._renderOptions=function(){return t.props.options.map(function(n){return i.a.createElement("option",{key:n.key,value:n.key},n.spinner)})},t}return a()(t,n),t.prototype.render=function(){var n=this.props.selectedOption;return i.a.createElement("div",{id:"spinner_container"},i.a.createElement("select",{value:n,onChange:this._onChange},this._renderOptions()))},t}(i.a.Component);h.defaultProps={options:[]};var f=function(n){function t(t){var e;return(e=n.call(this,t)||this)._onChangeObstruction=function(n){return e.setState({selectedOption:n})},e.state={points:[],selectedOption:t.options[0].key},e}return a()(t,n),t.prototype.render=function(){var n=this.props,t=n.position,e=n.zoom,o=n.options,r=this.state,a=r.points,s=r.selectedOption;return i.a.createElement("div",null,i.a.createElement(d,{position:t,zoom:e,points:a}),i.a.createElement(h,{options:o,selectedOption:s,onChange:this._onChangeObstruction}))},t}(i.a.Component);e.d(t,"query",function(){return m});t.default=function(n){var t=n.data;return i.a.createElement("div",{id:"map"},i.a.createElement(f,{position:[41.881832,-87.623177],zoom:11,options:t.file.childrenObstructionsJson}))};var m="135617739"}}]);
//# sourceMappingURL=component---src-pages-index-js-a21b2a2fb6db3e0fe00d.js.map