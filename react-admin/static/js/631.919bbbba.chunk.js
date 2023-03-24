"use strict";(self.webpackChunkreact_admin=self.webpackChunkreact_admin||[]).push([[631],{45993:function(e,n,t){t.d(n,{Z:function(){return l}});var r=t(97025),o=t(48221),a={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M884 256h-75c-5.1 0-9.9 2.5-12.9 6.6L512 654.2 227.9 262.6c-3-4.1-7.8-6.6-12.9-6.6h-75c-6.5 0-10.3 7.4-6.5 12.7l352.6 486.1c12.8 17.6 39 17.6 51.7 0l352.6-486.1c3.9-5.3.1-12.7-6.4-12.7z"}}]},name:"down",theme:"outlined"},i=t(45356),c=function(e,n){return o.createElement(i.Z,(0,r.Z)((0,r.Z)({},e),{},{ref:n,icon:a}))};c.displayName="DownOutlined";var l=o.forwardRef(c)},81087:function(e,n,t){t.d(n,{Z:function(){return j}});var r=t(32967),o=t(66878),a=t(73499),i=t.n(a),c=t(13666),l=t(52110),s=t(48221),d=t(22674),u=t(60799),p=t(45993),m=t(16875),f=function(e){var n=e.children,t=(0,s.useContext(d.E_).getPrefixCls)("breadcrumb");return s.createElement("li",{className:"".concat(t,"-separator"),"aria-hidden":"true"},""===n?n:n||"/")};f.__ANT_BREADCRUMB_SEPARATOR=!0;var b=f,g=function(e,n){var t={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&n.indexOf(r)<0&&(t[r]=e[r]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var o=0;for(r=Object.getOwnPropertySymbols(e);o<r.length;o++)n.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(e,r[o])&&(t[r[o]]=e[r[o]])}return t},h=function(e){var n=e.prefixCls,t=e.separator,r=void 0===t?"/":t,o=e.children,a=e.menu,i=e.overlay,c=e.dropdownProps,l=e.href,u=g(e,["prefixCls","separator","children","menu","overlay","dropdownProps","href"]),f=(0,s.useContext(d.E_).getPrefixCls)("breadcrumb",n);var h;return h=function(e){if(a||i){var n=Object.assign({},c);if(a){var t=a||{},r=t.items,o=g(t,["items"]);n.menu=Object.assign(Object.assign({},o),{items:null===r||void 0===r?void 0:r.map((function(e,n){var t=e.title,r=e.label,o=e.path,a=g(e,["title","label","path"]),i=null!==r&&void 0!==r?r:t;return o&&(i=s.createElement("a",{href:"".concat(l).concat(o)},i)),Object.assign(Object.assign({},a),{key:n,label:i})}))})}else i&&(n.overlay=i);return s.createElement(m.Z,Object.assign({placement:"bottom"},n),s.createElement("span",{className:"".concat(f,"-overlay-link")},e,s.createElement(p.Z,null)))}return e}(h=void 0!==l?s.createElement("a",Object.assign({className:"".concat(f,"-link"),href:l},u),o):s.createElement("span",Object.assign({className:"".concat(f,"-link")},u),o)),void 0!==o&&null!==o?s.createElement(s.Fragment,null,s.createElement("li",null,h),r&&s.createElement(b,null,r)):null};h.__ANT_BREADCRUMB_ITEM=!0;var v=h,y=t(66340),S=t(31488),x=t(56330),O=function(e){var n,t,o=e.componentCls,a=e.iconCls;return(0,r.Z)({},o,Object.assign(Object.assign({},(0,x.Wf)(e)),(t={color:e.breadcrumbBaseColor,fontSize:e.breadcrumbFontSize},(0,r.Z)(t,a,{fontSize:e.breadcrumbIconFontSize}),(0,r.Z)(t,"ol",{display:"flex",flexWrap:"wrap",margin:0,padding:0,listStyle:"none"}),(0,r.Z)(t,"a",Object.assign({color:e.breadcrumbLinkColor,transition:"color ".concat(e.motionDurationMid),padding:"0 ".concat(e.paddingXXS,"px"),borderRadius:e.borderRadiusSM,height:e.lineHeight*e.fontSize,display:"inline-block",marginInline:-e.marginXXS,"&:hover":{color:e.breadcrumbLinkColorHover,backgroundColor:e.colorBgTextHover}},(0,x.Qy)(e))),(0,r.Z)(t,"li:last-child",{color:e.breadcrumbLastItemColor}),(0,r.Z)(t,"".concat(o,"-separator"),{marginInline:e.breadcrumbSeparatorMargin,color:e.breadcrumbSeparatorColor}),(0,r.Z)(t,"".concat(o,"-link"),(0,r.Z)({},"\n          > ".concat(a," + span,\n          > ").concat(a," + a\n        "),{marginInlineStart:e.marginXXS})),(0,r.Z)(t,"".concat(o,"-overlay-link"),(n={borderRadius:e.borderRadiusSM,height:e.lineHeight*e.fontSize,display:"inline-block",padding:"0 ".concat(e.paddingXXS,"px"),marginInline:-e.marginXXS},(0,r.Z)(n,"> ".concat(a),{marginInlineStart:e.marginXXS,fontSize:e.fontSizeIcon}),(0,r.Z)(n,"&:hover",{color:e.breadcrumbLinkColorHover,backgroundColor:e.colorBgTextHover,a:{color:e.breadcrumbLinkColorHover}}),(0,r.Z)(n,"a",{"&:hover":{backgroundColor:"transparent"}}),n)),(0,r.Z)(t,"&".concat(e.componentCls,"-rtl"),{direction:"rtl"}),t)))},C=(0,y.Z)("Breadcrumb",(function(e){var n=(0,S.TS)(e,{breadcrumbBaseColor:e.colorTextDescription,breadcrumbFontSize:e.fontSize,breadcrumbIconFontSize:e.fontSize,breadcrumbLinkColor:e.colorTextDescription,breadcrumbLinkColorHover:e.colorText,breadcrumbLastItemColor:e.colorText,breadcrumbSeparatorMargin:e.marginXS,breadcrumbSeparatorColor:e.colorTextDescription});return[O(n)]})),w=function(e,n){var t={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&n.indexOf(r)<0&&(t[r]=e[r]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var o=0;for(r=Object.getOwnPropertySymbols(e);o<r.length;o++)n.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(e,r[o])&&(t[r[o]]=e[r[o]])}return t};function E(e){var n=e.breadcrumbName,t=e.children,r=w(e,["breadcrumbName","children"]),o=Object.assign({title:n},r);return t&&(o.menu={items:t.map((function(e){var n=e.breadcrumbName,t=w(e,["breadcrumbName"]);return Object.assign(Object.assign({},t),{title:n})}))}),o}var Z=function(e,n){var t={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&n.indexOf(r)<0&&(t[r]=e[r]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var o=0;for(r=Object.getOwnPropertySymbols(e);o<r.length;o++)n.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(e,r[o])&&(t[r[o]]=e[r[o]])}return t};var k=function(e){var n,t=e,a=t.prefixCls,p=t.separator,m=void 0===p?"/":p,f=t.style,g=t.className,h=t.rootClassName,y=t.routes,S=t.items,x=t.children,O=t.itemRender,w=t.params,k=void 0===w?{}:w,j=Z(t,["prefixCls","separator","style","className","rootClassName","routes","items","children","itemRender","params"]),z=s.useContext(d.E_),M=z.getPrefixCls,P=z.direction,T=M("breadcrumb",a),N=C(T),I=(0,o.Z)(N,2),D=I[0],L=I[1],B=function(e,n){return(0,s.useMemo)((function(){return e||(n?n.map(E):null)}),[e,n])}(S,y);var H=O||function(e){var n=function(e,n){if(void 0===e.title)return null;var t=Object.keys(n).join("|");return"object"===typeof e.title?e.title:String(e.title).replace(new RegExp(":(".concat(t,")"),"g"),(function(e,t){return n[t]||e}))}(e,k);return n};if(B&&B.length>0){var R=[],X=S||y;n=B.map((function(e,n){var t=e.path,r=e.key,o=e.type,a=e.menu,i=e.overlay,c=e.onClick,d=e.className,u=e.separator,p=function(e,n){if(void 0===n)return n;var t=(n||"").replace(/^\//,"");return Object.keys(e).forEach((function(n){t=t.replace(":".concat(n),e[n])})),t}(k,t);void 0!==p&&R.push(p);var f=null!==r&&void 0!==r?r:n;if("separator"===o)return s.createElement(b,{key:f},u);var g={},h=n===B.length-1;a?g.menu=a:i&&(g.overlay=i),d&&(g.className=d);var y=e.href;return R.length&&void 0!==p&&(y="#/".concat(R.join("/"))),s.createElement(v,Object.assign({key:f},g,(0,l.Z)(e,{data:!0,aria:!0}),{href:y,separator:h?"":m,onClick:c}),H(e,k,X,R))}))}else if(x){var _=(0,c.Z)(x).length;n=(0,c.Z)(x).map((function(e,n){if(!e)return e;var t=n===_-1;return(0,u.Tm)(e,{separator:t?"":m,key:n})}))}var W=i()(T,(0,r.Z)({},"".concat(T,"-rtl"),"rtl"===P),g,h,L);return D(s.createElement("nav",Object.assign({className:W,style:f},j),s.createElement("ol",null,n)))};k.Item=v,k.Separator=b;var j=k},76962:function(e,n,t){t.d(n,{Z:function(){return b}});var r=t(32967),o=t(66878),a=t(73499),i=t.n(a),c=t(48221),l=t(22674),s=t(66340),d=t(31488),u=t(56330),p=function(e){var n,t=e.componentCls,o=e.sizePaddingEdgeHorizontal,a=e.colorSplit,i=e.lineWidth;return(0,r.Z)({},t,Object.assign(Object.assign({},(0,u.Wf)(e)),(n={borderBlockStart:"".concat(i,"px solid ").concat(a),"&-vertical":{position:"relative",top:"-0.06em",display:"inline-block",height:"0.9em",margin:"0 ".concat(e.dividerVerticalGutterMargin,"px"),verticalAlign:"middle",borderTop:0,borderInlineStart:"".concat(i,"px solid ").concat(a)},"&-horizontal":{display:"flex",clear:"both",width:"100%",minWidth:"100%",margin:"".concat(e.dividerHorizontalGutterMargin,"px 0")}},(0,r.Z)(n,"&-horizontal".concat(t,"-with-text"),{display:"flex",alignItems:"center",margin:"".concat(e.dividerHorizontalWithTextGutterMargin,"px 0"),color:e.colorTextHeading,fontWeight:500,fontSize:e.fontSizeLG,whiteSpace:"nowrap",textAlign:"center",borderBlockStart:"0 ".concat(a),"&::before, &::after":{position:"relative",width:"50%",borderBlockStart:"".concat(i,"px solid transparent"),borderBlockStartColor:"inherit",borderBlockEnd:0,transform:"translateY(50%)",content:"''"}}),(0,r.Z)(n,"&-horizontal".concat(t,"-with-text-left"),{"&::before":{width:"5%"},"&::after":{width:"95%"}}),(0,r.Z)(n,"&-horizontal".concat(t,"-with-text-right"),{"&::before":{width:"95%"},"&::after":{width:"5%"}}),(0,r.Z)(n,"".concat(t,"-inner-text"),{display:"inline-block",padding:"0 1em"}),(0,r.Z)(n,"&-dashed",{background:"none",borderColor:a,borderStyle:"dashed",borderWidth:"".concat(i,"px 0 0")}),(0,r.Z)(n,"&-horizontal".concat(t,"-with-text").concat(t,"-dashed"),{"&::before, &::after":{borderStyle:"dashed none none"}}),(0,r.Z)(n,"&-vertical".concat(t,"-dashed"),{borderInlineStart:i,borderInlineEnd:0,borderBlockStart:0,borderBlockEnd:0}),(0,r.Z)(n,"&-plain".concat(t,"-with-text"),{color:e.colorText,fontWeight:"normal",fontSize:e.fontSize}),(0,r.Z)(n,"&-horizontal".concat(t,"-with-text-left").concat(t,"-no-default-orientation-margin-left"),(0,r.Z)({"&::before":{width:0},"&::after":{width:"100%"}},"".concat(t,"-inner-text"),{paddingInlineStart:o})),(0,r.Z)(n,"&-horizontal".concat(t,"-with-text-right").concat(t,"-no-default-orientation-margin-right"),(0,r.Z)({"&::before":{width:"100%"},"&::after":{width:0}},"".concat(t,"-inner-text"),{paddingInlineEnd:o})),n)))},m=(0,s.Z)("Divider",(function(e){var n=(0,d.TS)(e,{dividerVerticalGutterMargin:e.marginXS,dividerHorizontalWithTextGutterMargin:e.margin,dividerHorizontalGutterMargin:e.marginLG});return[p(n)]}),{sizePaddingEdgeHorizontal:0}),f=function(e,n){var t={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&n.indexOf(r)<0&&(t[r]=e[r]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var o=0;for(r=Object.getOwnPropertySymbols(e);o<r.length;o++)n.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(e,r[o])&&(t[r[o]]=e[r[o]])}return t};var b=function(e){var n,t=c.useContext(l.E_),a=t.getPrefixCls,s=t.direction,d=e.prefixCls,u=e.type,p=void 0===u?"horizontal":u,b=e.orientation,g=void 0===b?"center":b,h=e.orientationMargin,v=e.className,y=e.rootClassName,S=e.children,x=e.dashed,O=e.plain,C=f(e,["prefixCls","type","orientation","orientationMargin","className","rootClassName","children","dashed","plain"]),w=a("divider",d),E=m(w),Z=(0,o.Z)(E,2),k=Z[0],j=Z[1],z=g.length>0?"-".concat(g):g,M=!!S,P="left"===g&&null!=h,T="right"===g&&null!=h,N=i()(w,j,"".concat(w,"-").concat(p),(n={},(0,r.Z)(n,"".concat(w,"-with-text"),M),(0,r.Z)(n,"".concat(w,"-with-text").concat(z),M),(0,r.Z)(n,"".concat(w,"-dashed"),!!x),(0,r.Z)(n,"".concat(w,"-plain"),!!O),(0,r.Z)(n,"".concat(w,"-rtl"),"rtl"===s),(0,r.Z)(n,"".concat(w,"-no-default-orientation-margin-left"),P),(0,r.Z)(n,"".concat(w,"-no-default-orientation-margin-right"),T),n),v,y),I=Object.assign(Object.assign({},P&&{marginLeft:h}),T&&{marginRight:h});return k(c.createElement("div",Object.assign({className:N},C,{role:"separator"}),S&&"vertical"!==p&&c.createElement("span",{className:"".concat(w,"-inner-text"),style:I},S)))}},52110:function(e,n,t){t.d(n,{Z:function(){return l}});var r=t(97025),o="".concat("accept acceptCharset accessKey action allowFullScreen allowTransparency\n    alt async autoComplete autoFocus autoPlay capture cellPadding cellSpacing challenge\n    charSet checked classID className colSpan cols content contentEditable contextMenu\n    controls coords crossOrigin data dateTime default defer dir disabled download draggable\n    encType form formAction formEncType formMethod formNoValidate formTarget frameBorder\n    headers height hidden high href hrefLang htmlFor httpEquiv icon id inputMode integrity\n    is keyParams keyType kind label lang list loop low manifest marginHeight marginWidth max maxLength media\n    mediaGroup method min minLength multiple muted name noValidate nonce open\n    optimum pattern placeholder poster preload radioGroup readOnly rel required\n    reversed role rowSpan rows sandbox scope scoped scrolling seamless selected\n    shape size sizes span spellCheck src srcDoc srcLang srcSet start step style\n    summary tabIndex target title type useMap value width wmode wrap"," ").concat("onCopy onCut onPaste onCompositionEnd onCompositionStart onCompositionUpdate onKeyDown\n    onKeyPress onKeyUp onFocus onBlur onChange onInput onSubmit onClick onContextMenu onDoubleClick\n    onDrag onDragEnd onDragEnter onDragExit onDragLeave onDragOver onDragStart onDrop onMouseDown\n    onMouseEnter onMouseLeave onMouseMove onMouseOut onMouseOver onMouseUp onSelect onTouchCancel\n    onTouchEnd onTouchMove onTouchStart onScroll onWheel onAbort onCanPlay onCanPlayThrough\n    onDurationChange onEmptied onEncrypted onEnded onError onLoadedData onLoadedMetadata\n    onLoadStart onPause onPlay onPlaying onProgress onRateChange onSeeked onSeeking onStalled onSuspend onTimeUpdate onVolumeChange onWaiting onLoad onError").split(/[\s\n]+/),a="aria-",i="data-";function c(e,n){return 0===e.indexOf(n)}function l(e){var n,t=arguments.length>1&&void 0!==arguments[1]&&arguments[1];n=!1===t?{aria:!0,data:!0,attr:!0}:!0===t?{aria:!0}:(0,r.Z)({},t);var l={};return Object.keys(e).forEach((function(t){(n.aria&&("role"===t||c(t,a))||n.data&&c(t,i)||n.attr&&o.includes(t))&&(l[t]=e[t])})),l}}}]);
//# sourceMappingURL=631.919bbbba.chunk.js.map