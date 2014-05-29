var OSMBuildings=function(){function Aa(a,b){var c=a.x-b.x,d=a.y-b.y;return c*c+d*d}function Ua(a){for(var b=Infinity,c=-Infinity,d=Infinity,f=-Infinity,e=0,g=a.length-3;e<g;e+=2)b=W(b,a[e]),c=N(c,a[e]),d=W(d,a[e+1]),f=N(f,a[e+1]);return{x:b+(c-b)/2<<0,y:d+(f-d)/2<<0}}function ba(a,b){var c={};a/=X;b/=X;c[Va]=0>=b?90:1<=b?-90:Ba*(2*Wa(Xa(E*(1-2*b)))-O);c[Ya]=360*(1===a?1:(a%1+1)%1)-180;return c}function Ca(a,b,c){function d(a){if("XDomainRequest"in Y&&a!==f.readyState&&(f.readyState=a,f.onreadystatechange))f.onreadystatechange()}
a=a.replace(/\{ *([\w_]+) *\}/g,function(a,c){return b[c]||a});var f="XDomainRequest"in Y?new XDomainRequest:new XMLHttpRequest;f.onerror=function(){f.status=500;f.statusText="Error";d(4)};f.ontimeout=function(){f.status=408;f.statusText="Timeout";d(4)};f.onprogress=function(){d(3)};f.onload=function(){f.status=200;f.statusText="Ok";d(4)};f.onreadystatechange=function(){4===f.readyState&&f.status&&!(200>f.status||299<f.status)&&c&&f.responseText&&c(JSON.parse(f.responseText))};d(0);f.open("GET",a);
d(1);f.send(null);d(2);return f}function Da(a){C=a.w;y=a.h;P=C/2<<0;ma=y/2<<0;Q=P;R=y;F.setSize(C,y);na=G-50}function Ea(a){D=a;X=Za<<D;a=ba(t+P,s+ma);Fa=Math.abs(40075040*ca(a.latitude)/oa(2,D+8));u=oa(0.95,D-K);pa=I.alpha(u)+"";da=ea.alpha(u)+"";Z=S.alpha(u)+""}var Ga=Ga||Array,Ha=Ha||Array,m=Math,Xa=m.exp,$a=m.log,qa=m.sin,ca=m.cos,Ia=m.tan,Wa=m.atan,fa=m.atan2,W=m.min,N=m.max,ga=m.sqrt,Ja=m.ceil,Ka=m.floor,La=m.random,oa=m.pow,Y=window,ra=document;Y.console||(Y.console={});var J,sa=function(a,
b,c){0>c&&(c+=1);1<c&&(c-=1);return c<1/6?a+6*(b-a)*c:0.5>c?b:c<2/3?a+6*(b-a)*(2/3-c):a},ab={aliceblue:"#f0f8ff",antiquewhite:"#faebd7",aqua:"#00ffff",aquamarine:"#7fffd4",azure:"#f0ffff",beige:"#f5f5dc",bisque:"#ffe4c4",black:"#000000",blanchedalmond:"#ffebcd",blue:"#0000ff",blueviolet:"#8a2be2",brown:"#a52a2a",burlywood:"#deb887",cadetblue:"#5f9ea0",chartreuse:"#7fff00",chocolate:"#d2691e",coral:"#ff7f50",cornflowerblue:"#6495ed",cornsilk:"#fff8dc",crimson:"#dc143c",cyan:"#00ffff",darkblue:"#00008b",
darkcyan:"#008b8b",darkgoldenrod:"#b8860b",darkgray:"#a9a9a9",darkgreen:"#006400",darkkhaki:"#bdb76b",darkmagenta:"#8b008b",darkolivegreen:"#556b2f",darkorange:"#ff8c00",darkorchid:"#9932cc",darkred:"#8b0000",darksalmon:"#e9967a",darkseagreen:"#8fbc8f",darkslateblue:"#483d8b",darkslategray:"#2f4f4f",darkturquoise:"#00ced1",darkviolet:"#9400d3",deeppink:"#ff1493",deepskyblue:"#00bfff",dimgray:"#696969",dodgerblue:"#1e90ff",firebrick:"#b22222",floralwhite:"#fffaf0",forestgreen:"#228b22",fuchsia:"#ff00ff",
gainsboro:"#dcdcdc",ghostwhite:"#f8f8ff",gold:"#ffd700",goldenrod:"#daa520",gray:"#808080",green:"#008000",greenyellow:"#adff2f",honeydew:"#f0fff0",hotpink:"#ff69b4",indianred:"#cd5c5c",indigo:"#4b0082",ivory:"#fffff0",khaki:"#f0e68c",lavender:"#e6e6fa",lavenderblush:"#fff0f5",lawngreen:"#7cfc00",lemonchiffon:"#fffacd",lightblue:"#add8e6",lightcoral:"#f08080",lightcyan:"#e0ffff",lightgoldenrodyellow:"#fafad2",lightgray:"#d3d3d3",lightgreen:"#90ee90",lightpink:"#ffb6c1",lightsalmon:"#ffa07a",lightseagreen:"#20b2aa",
lightskyblue:"#87cefa",lightslategray:"#778899",lightsteelblue:"#b0c4de",lightyellow:"#ffffe0",lime:"#00ff00",limegreen:"#32cd32",linen:"#faf0e6",magenta:"#ff00ff",maroon:"#800000",mediumaquamarine:"#66cdaa",mediumblue:"#0000cd",mediumorchid:"#ba55d3",mediumpurple:"#9370db",mediumseagreen:"#3cb371",mediumslateblue:"#7b68ee",mediumspringgreen:"#00fa9a",mediumturquoise:"#48d1cc",mediumvioletred:"#c71585",midnightblue:"#191970",mintcream:"#f5fffa",mistyrose:"#ffe4e1",moccasin:"#ffe4b5",navajowhite:"#ffdead",
navy:"#000080",oldlace:"#fdf5e6",olive:"#808000",olivedrab:"#6b8e23",orange:"#ffa500",orangered:"#ff4500",orchid:"#da70d6",palegoldenrod:"#eee8aa",palegreen:"#98fb98",paleturquoise:"#afeeee",palevioletred:"#db7093",papayawhip:"#ffefd5",peachpuff:"#ffdab9",peru:"#cd853f",pink:"#ffc0cb",plum:"#dda0dd",powderblue:"#b0e0e6",purple:"#800080",red:"#ff0000",rosybrown:"#bc8f8f",royalblue:"#4169e1",saddlebrown:"#8b4513",salmon:"#fa8072",sandybrown:"#f4a460",seagreen:"#2e8b57",seashell:"#fff5ee",sienna:"#a0522d",
silver:"#c0c0c0",skyblue:"#87ceeb",slateblue:"#6a5acd",slategray:"#708090",snow:"#fffafa",springgreen:"#00ff7f",steelblue:"#4682b4",tan:"#d2b48c",teal:"#008080",thistle:"#d8bfd8",tomato:"#ff6347",turquoise:"#40e0d0",violet:"#ee82ee",wheat:"#f5deb3",white:"#ffffff",whitesmoke:"#f5f5f5",yellow:"#ffff00",yellowgreen:"#9acd32"},T=function(a,b,c,d){this.H=a;this.S=b;this.L=c;this.A=d},m=T.prototype;m.toString=function(){var a=Math.min(360,Math.max(0,this.H)),b=Math.min(1,Math.max(0,this.S)),c=Math.min(1,
Math.max(0,this.L)),d=Math.min(1,Math.max(0,this.A)),f;if(0===b)a=f=b=c;else{var e=0.5>c?c*(1+b):c+b-c*b,c=2*c-e,a=a/360,b=sa(c,e,a+1/3);f=sa(c,e,a);a=sa(c,e,a-1/3)}b*=255;f*=255;a*=255;return 1===d?"#"+(16777216+(b<<16)+(f<<8)+a).toString(16).slice(1,7):"rgba("+[Math.round(b),Math.round(f),Math.round(a),d.toFixed(2)].join()+")"};m.hue=function(a){return new T(this.H*a,this.S,this.L,this.A)};m.saturation=function(a){return new T(this.H,this.S*a,this.L,this.A)};m.lightness=function(a){return new T(this.H,
this.S,this.L*a,this.A)};m.alpha=function(a){return new T(this.H,this.S,this.L,this.A*a)};J=function(a){var b=0,c=0,d=0,f=1,e;a=(""+a).toLowerCase().replace("grey","gray");a=ab[a]||a;if(e=a.match(/^#(\w{2})(\w{2})(\w{2})$/))b=parseInt(e[1],16),c=parseInt(e[2],16),d=parseInt(e[3],16);if(e=a.match(/rgba?\((\d+)\D+(\d+)\D+(\d+)(\D+([\d.]+))?\)/))b=parseInt(e[1],10),c=parseInt(e[2],10),d=parseInt(e[3],10),f=e[4]?parseFloat(e[5]):1;b/=255;c/=255;d/=255;a=Math.max(b,c,d);var g=Math.min(b,c,d),h;e=(a+g)/
2;var l=a-g;if(l){g=0.5<e?l/(2-a-g):l/(a+g);switch(a){case b:h=(c-d)/l+(c<d?6:0);break;case c:h=(d-b)/l+2;break;case d:h=(b-c)/l+4}h*=60}else h=g=0;return new T(h,g,e,f)};var Ma,m=Math,ta=m.PI,v=m.sin,H=m.cos,Na=m.tan,Oa=m.asin,Pa=m.atan2,L=ta/180,ha=23.4397*L;Ma=function(a,b,c){c=L*-c;b*=L;a=a.valueOf()/864E5-0.5+2440588-2451545;var d=L*(357.5291+0.98560028*a),f=L*(1.9148*v(d)+0.02*v(2*d)+3E-4*v(3*d)),f=d+f+102.9372*L+ta,d=Oa(v(0)*H(ha)+H(0)*v(ha)*v(f)),f=Pa(v(f)*H(ha)-Na(0)*v(ha),H(f));c=L*(280.16+
360.9856235*a)-c-f;return{altitude:Oa(v(b)*v(d)+H(b)*H(d)*H(c)),azimuth:Pa(v(c),H(c)*v(b)-Na(d)*H(b))-ta/2}};var x={YARD_TO_METER:0.9144,FOOT_TO_METER:0.3048,INCH_TO_METER:0.0254,METERS_PER_LEVEL:3,clockwise:"CW",counterClockwise:"CCW",getWinding:function(a){var b,c,d,f,e=0,g,h;g=0;for(h=a.length-3;g<h;g+=2)b=a[g],c=a[g+1],d=a[g+2],f=a[g+3],e+=b*f-d*c;return 0<e/2?this.clockwise:this.counterClockwise},makeWinding:function(a,b){if(this.getWinding(a)===b)return a;for(var c=[],d=a.length-2;0<=d;d-=2)c.push(a[d],
a[d+1]);return c},toMeters:function(a){a=""+a;var b=parseFloat(a);return b===a||~a.indexOf("m")?b<<0:~a.indexOf("yd")?b*this.YARD_TO_METER<<0:~a.indexOf("ft")?b*this.FOOT_TO_METER<<0:~a.indexOf("'")?(a=a.split("'"),a[0]*this.FOOT_TO_METER+a[1]*this.INCH_TO_METER<<0):b<<0},getRadius:function(a){for(var b=90,c=-90,d=0,f=a.length;d<f;d+=2)b=W(b,a[d]),c=N(c,a[d]);return 6378137*((c-b)/Ba)/2<<0},materialColors:{brick:"#cc7755",bronze:"#ffeecc",canvas:"#fff8f0",concrete:"#999999",copper:"#a0e0d0",glass:"#e8f8f8",
gold:"#ffcc00",plants:"#009933",metal:"#aaaaaa",panel:"#fff8f0",plaster:"#999999",roof_tiles:"#f08060",silver:"#cccccc",slate:"#666666",stone:"#996666",tar_paper:"#333333",wood:"#deb887"},baseMaterials:{asphalt:"tar_paper",bitumen:"tar_paper",block:"stone",bricks:"brick",glas:"glass",glassfront:"glass",grass:"plants",masonry:"stone",granite:"stone",panels:"panel",paving_stones:"stone",plastered:"plaster",rooftiles:"roof_tiles",roofingfelt:"tar_paper",sandstone:"stone",sheet:"canvas",sheets:"canvas",
shingle:"tar_paper",shingles:"tar_paper",slates:"slate",steel:"metal",tar:"tar_paper",tent:"canvas",thatch:"plants",tile:"roof_tiles",tiles:"roof_tiles"},getMaterialColor:function(a){a=a.toLowerCase();return"#"===a[0]?a:this.materialColors[this.baseMaterials[a]||a]||null},alignProperties:function(a){var b={};a=a||{};b.height=this.toMeters(a.height);b.height||(a["building:height"]&&(b.height=this.toMeters(a["building:height"])),a.levels&&(b.height=a.levels*this.METERS_PER_LEVEL<<0),a["building:levels"]&&
(b.height=a["building:levels"]*this.METERS_PER_LEVEL<<0),b.height||(b.height=bb));b.minHeight=this.toMeters(a.min_height);b.min_height||(a["building:min_height"]&&(b.minHeight=this.toMeters(a["building:min_height"])),a.min_level&&(b.minHeight=a.min_level*this.METERS_PER_LEVEL<<0),a["building:min_level"]&&(b.minHeight=a["building:min_level"]*this.METERS_PER_LEVEL<<0));b.wallColor=a.wallColor||a.color;b.wallColor||(a.color&&(b.wallColor=a.color),a["building:material"]&&(b.wallColor=this.getMaterialColor(a["building:material"])),
a["building:facade:material"]&&(b.wallColor=this.getMaterialColor(a["building:facade:material"])),a["building:cladding"]&&(b.wallColor=this.getMaterialColor(a["building:cladding"])),a["building:color"]&&(b.wallColor=a["building:color"]),a["building:colour"]&&(b.wallColor=a["building:colour"]));b.roofColor=a.roofColor;b.roofColor||(a["roof:material"]&&(b.roofColor=this.getMaterialColor(a["roof:material"])),a["building:roof:material"]&&(b.roofColor=this.getMaterialColor(a["building:roof:material"])),
a["roof:color"]&&(b.roofColor=a["roof:color"]),a["roof:colour"]&&(b.roofColor=a["roof:colour"]),a["building:roof:color"]&&(b.roofColor=a["building:roof:color"]),a["building:roof:colour"]&&(b.roofColor=a["building:roof:colour"]));switch(a["building:shape"]){case "cone":case "cylinder":b.shape=a["building:shape"];break;case "dome":b.shape="dome";break;case "sphere":b.shape="cylinder"}if(("cone"===a["roof:shape"]||"dome"===a["roof:shape"])&&a["roof:height"])b.shape="cylinder",b.roofShape=a["roof:shape"],
b.roofHeight=this.toMeters(a["roof:height"]);b.roofHeight&&(b.height=N(0,b.height-b.roofHeight));return b}},Qa,Ra=function(a){var b,c,d,f,e,g=[],h=[],l=0;d=[];switch(a.type){case "GeometryCollection":b=0;for(c=a.geometries.length;b<c;b++)if(g=Ra(a.geometries[b]))d=d.concat(g);return d;case "Polygon":f=a.coordinates;break;case "MultiPolygon":f=a.coordinates[0];break;default:return d}e=f[0];b=0;for(c=e.length;b<c;b++)g.push(e[b][1],e[b][0]),void 0!==e[b][2]&&(l+=e[b][2]);b=0;for(c=f.length-1;b<c;b++){e=
f[b+1];h[b]=[];a=0;for(d=e.length;a<d;a++)h[b].push(e[a][1],e[a][0]);h[b]=x.makeWinding(h[b],x.counterClockwise)}return[{outer:x.makeWinding(g,x.clockwise),inner:h.length?h:null,height:l/f[0].length}]};Qa=function(a,b){var c,d,f,e,g=[],h,l,j,k;c=0;for(d=a.length;c<d;c++)if(h=a[c],!("Feature"!==h.type||!1===b(h))){j=x.alignProperties(h.properties);l=Ra(h.geometry);f=0;for(e=l.length;f<e;f++){k=j;var n={},q=void 0;for(q in k)k.hasOwnProperty(q)&&(n[q]=k[q]);k=n;k.footprint=l[f].outer;if("cone"===k.shape||
"cylinder"===k.shape)k.radius=x.getRadius(k.footprint);k.holes=l[f].inner;k.id=h.id||h.properties.id||[k.footprint[0],k.footprint[1],k.height,k.minHeight].join();g.push(k)}}return g};var Sa,Ta=function(a){return(a=a.tags)&&!a.landuse&&(a.building||a["building:part"])&&(!a.layer||0<=a.layer)},va=function(a){if(a){for(var b=[],c,d=0,f=a.length;d<f;d++)c=ua[a[d]],b.push(c[0],c[1]);b[b.length-2]!==b[0]&&b[b.length-1]!==b[1]&&b.push(b[0],b[1]);if(!(8>b.length))return b}},cb=function(a,b){for(var c in b)b.hasOwnProperty(c)&&
(a[c]=b[c]);return a},wa=function(a,b){var c=x.alignProperties(a.tags);a.id&&(c.id=a.id);b&&(c.footprint=x.makeWinding(b,x.clockwise));if("cone"===c.shape||"cylinder"===c.shape)c.radius=x.getRadius(c.footprint);return c},ua,$,ia,ja;Sa=function(a,b){ua={};$={};ia=[];ja=b;for(var c,d=0,f=a.length;d<f;d++)switch(c=a[d],c.type){case "node":ua[c.id]=[c.lat,c.lon];break;case "way":if(Ta(c)){var e=void 0,e=void 0;if((e=va(c.nodes))&&!1!==ja(c))e=wa(c,e),ia.push(e)}else if(e=c.tags,!e||!e.highway&&!e.railway&&
!e.landuse)$[c.id]=c;break;case "relation":var g=c,h=void 0,l=void 0;c=[];var j=l=void 0,k=void 0,e=void 0;if(Ta(g)&&!("multipolygon"!==g.tags.type&&"building"!==g.tags.type||!1===ja(g))){for(var h=g.members,l=j=void 0,k=[],n=0,q=h.length;n<q;n++)j=h[n],"way"===j.type&&$[j.ref]&&(!j.role||"outer"===j.role?l=$[j.ref]:("inner"===j.role||"enclave"===j.role)&&k.push($[j.ref]));h=l?{outer:l,inner:k}:void 0;if(h&&(j=wa(g),l=h.outer))if((k=va(l.nodes))&&!1!==ja(l)){l=wa(l,k);g=0;for(k=h.inner.length;g<k;g++)(e=
va(h.inner[g].nodes))&&c.push(x.makeWinding(e,x.counterClockwise));c.length&&(l.holes=c);ia.push(cb(l,j))}}}return ia};var E=Math.PI,O=E/2,db=E/4,Ba=180/E,Za=256,K=15,Va="latitude",Ya="longitude",C=0,y=0,P=0,ma=0,t=0,s=0,D,X,I=J("rgba(200, 190, 180)"),ea=I.lightness(0.8),S=I.lightness(1.2),pa=""+I,da=""+ea,Z=""+S,U,Fa=1,u=1,na,bb=5,Q,R,G=450,ka,xa={time:new Date,data:{},add:function(a,b){this.data[b]={data:a,time:Date.now()}},get:function(a){return this.data[a]&&this.data[a].data},purge:function(){this.time.setMinutes(this.time.getMinutes()-
5);for(var a in this.data)this.data[a].time<this.time&&delete this.data[a]}},B={currentItemsIndex:{},items:[],cropDecimals:function(a){return parseFloat(a.toFixed(5))},getPixelFootprint:function(a){for(var b,c,d=new Ga(a.length),f=0,e=a.length-1;f<e;f+=2)b=a[f+1],c=W(1,N(0,0.5-$a(Ia(db+O*a[f]/180))/E/2)),b=(b/360+0.5)*X<<0,c=c*X<<0,d[f]=b,d[f+1]=c;a=d;d=a.length/2;f=new Ha(d);e=0;b=d-1;var g,h,l,j=[],k=[],n=[];for(f[e]=f[b]=1;b;){g=0;for(c=e+1;c<b;c++){h=a[2*c];var q=a[2*c+1],p=a[2*e],m=a[2*e+1],
z=a[2*b],t=a[2*b+1],s=z-p,w=t-m,r=void 0;if(0!==s||0!==w)r=((h-p)*s+(q-m)*w)/(s*s+w*w),1<r?(p=z,m=t):0<r&&(p+=s*r,m+=w*r);s=h-p;w=q-m;h=s*s+w*w;h>g&&(l=c,g=h)}2<g&&(f[l]=1,j.push(e),k.push(l),j.push(l),k.push(b));e=j.pop();b=k.pop()}for(c=0;c<d;c++)f[c]&&n.push(a[2*c],a[2*c+1]);d=n;if(!(8>d.length))return d},createClosure:function(a){var b=this;return function(c){c=b.parse(c);xa.add(c,a);b.addRenderItems(c,!0)}},parse:function(a){return!a?[]:"FeatureCollection"===a.type?Qa(a.features,this.each):a.osm3s?
Sa(a.elements,this.each):[]},resetItems:function(){this.items=[];this.currentItemsIndex={}},addRenderItems:function(a,b){for(var c=this.scale(a),d=0,f=c.length;d<f;d++)this.currentItemsIndex[c[d].id]||(c[d].scale=b?0:1,this.items.push(c[d]),this.currentItemsIndex[c[d].id]=1);U||(U=setInterval(function(){for(var a=B.items,b=!1,c=0,d=a.length;c<d;c++)1>a[c].scale&&(a[c].scale+=0.1,1<a[c].scale&&(a[c].scale=1),b=!0);F.render();b||(clearInterval(U),U=null)},33))},scale:function(a){var b,c,d,f,e=[],g,
h,l,j,k,n,q,p,m,s=6/oa(2,D-K);b=0;for(c=a.length;b<c;b++)if(g=a[b],h=g.height/s,l=isNaN(g.minHeight)?0:g.minHeight/s,!(l>na)&&(j=this.getPixelFootprint(g.footprint))){p=[];if(g.holes){d=0;for(f=g.holes.length;d<f;d++)(m=this.getPixelFootprint(g.holes[d]))&&p.push(m)}f=d=null;if(g.wallColor&&(k=J(g.wallColor)))d=k.alpha(u),f=""+d.lightness(0.8),d=""+d;n=null;if(g.roofColor&&(k=J(g.roofColor)))n=""+k.alpha(u);q=g.roofHeight/s;h<=l&&0>=q||e.push({id:g.id,footprint:j,height:W(h,na),minHeight:l,wallColor:d,
altColor:f,roofColor:n,roofShape:g.roofShape,roofHeight:q,center:Ua(j),holes:p.length?p:null,shape:g.shape,radius:g.radius/Fa})}return e},set:function(a){this.isStatic=!0;this.resetItems();this.addRenderItems(this.staticData=this.parse(a),!0)},load:function(a){this.url=a||"http://overpass-api.de/api/interpreter?data=[out:json];(way[%22building%22]({s},{w},{n},{e});node(w);way[%22building:part%22=%22yes%22]({s},{w},{n},{e});node(w);relation[%22building%22]({s},{w},{n},{e});way(r);node(w););out;";(this.isStatic=
!/(.+\{[nesw]\}){4,}/.test(this.url))?(this.resetItems(),Ca(this.url,{},function(a){this.addRenderItems(this.staticData=this.parse(a),!0)})):this.update()},update:function(){this.resetItems();if(!(D<K))if(this.isStatic)this.addRenderItems(this.staticData);else if(this.url){var a,b,c,d,f=ba(t,s);a=ba(t+C,s+y);var e=0.0075*Ja(f.latitude/0.0075),g=0.015*Ja(a.longitude/0.015);a=0.0075*Ka(a.latitude/0.0075);for(f=0.015*Ka(f.longitude/0.015);a<=e;a+=0.0075)for(b=f;b<=g;b+=0.015)a=this.cropDecimals(a),b=
this.cropDecimals(b),d=a+","+b,(c=xa.get(d))?this.addRenderItems(c):Ca(this.url,{n:this.cropDecimals(a+0.0075),e:this.cropDecimals(b+0.015),s:a,w:b},this.createClosure(d));xa.purge()}},each:function(){}},A={circle:function(a,b,c,d,f){a.fillStyle=f;a.beginPath();a.arc(b,c,d,0,2*E);a.stroke();a.fill()},draw:function(a,b,c,d,f,e,g,h,l,j){var k=G/(G-e);e=aa.project(b,c,k);f*=k;g&&(k=G/(G-g),c=aa.project(b,c,k),b=c.x,c=c.y,d*=k);(k=A.getTangents(b,c,d,e.x,e.y,f))?(g=fa(k[0].y1-c,k[0].x1-b),k=fa(k[1].y1-
c,k[1].x1-b)):(g=0,k=1.5*E);a.fillStyle=h;a.beginPath();a.arc(e.x,e.y,f,O,g,!0);a.arc(b,c,d,g,O);a.closePath();a.fill();a.fillStyle=l;a.beginPath();a.arc(e.x,e.y,f,k,O,!0);a.arc(b,c,d,O,k);a.closePath();a.fill();A.circle(a,e.x,e.y,f,j)},shadow:function(a,b,c,d,f,e,g){e=M.project(b,c,e);var h;g&&(c=M.project(b,c,g),b=c.x,c=c.y);var l=A.getTangents(b,c,d,e.x,e.y,f);l?(g=fa(l[0].y1-c,l[0].x1-b),h=fa(l[1].y1-c,l[1].x1-b),a.moveTo(l[1].x2,l[1].y2),a.arc(e.x,e.y,f,h,g),a.arc(b,c,d,g,h)):(a.moveTo(b+d,c),
a.arc(b,c,d,0,2*E))},footprintMask:function(a,b,c,d){a.moveTo(b+d,c);a.arc(b,c,d,0,2*E)},getTangents:function(a,b,c,d,f,e){var g=a-d,h=b-f,l=c-e,j=g*g+h*h;if(!(j<=l*l)){var j=ga(j),g=-g/j,h=-h/j,l=l/j,j=[],k,n,q;k=ga(N(0,1-l*l));for(var p=1;-1<=p;p-=2)n=g*l-p*k*h,q=h*l+p*k*g,j.push({x1:a+c*n<<0,y1:b+c*q<<0,x2:d+e*n<<0,y2:f+e*q<<0});return j}}},aa={project:function(a,b,c){return{x:(a-Q)*c+Q<<0,y:(b-R)*c+R<<0}},drawSolid:function(a,b,c,d,f){for(var e={x:0,y:0},g={x:0,y:0},h,l,j=[],k=0,n=a.length-3;k<
n;k+=2)e.x=a[k]-t,e.y=a[k+1]-s,g.x=a[k+2]-t,g.y=a[k+3]-s,h=this.project(e.x,e.y,b),l=this.project(g.x,g.y,b),c&&(e=this.project(e.x,e.y,c),g=this.project(g.x,g.y,c)),(g.x-e.x)*(h.y-e.y)>(h.x-e.x)*(g.y-e.y)&&(this.context.fillStyle=e.x<g.x&&e.y<g.y||e.x>g.x&&e.y>g.y?f:d,this.drawFace([g.x,g.y,e.x,e.y,h.x,h.y,l.x,l.y],!0)),j[k]=h.x,j[k+1]=h.y;return j},drawFace:function(a,b,c){var d=this.context,f,e,g,h;if(a.length){d.beginPath();d.moveTo(a[0],a[1]);f=2;for(e=a.length;f<e;f+=2)d.lineTo(a[f],a[f+1]);
if(c){f=0;for(e=c.length;f<e;f++){a=c[f];d.moveTo(a[0],a[1]);g=2;for(h=a.length;g<h;g+=2)d.lineTo(a[g],a[g+1])}}d.closePath();b&&d.stroke();d.fill()}},render:function(){var a=this.context;a.clearRect(0,0,C,y);if(!(D<K||ka)){var b,c,d,f,e,g,h,l={x:Q+t,y:R+s},j=t,k=t+C,n=s,q=s+y,p,m,z,r,u,w=B.items;w.sort(function(a,b){return a.minHeight-b.minHeight||Aa(b.center,l)-Aa(a.center,l)||b.height-a.height});b=0;for(c=w.length;b<c;b++)if(e=w[b],!ya.isSimple(e)){z=!1;p=e.footprint;d=0;for(f=p.length-1;d<f;d+=
2)z||(z=p[d]>j&&p[d]<k&&p[d+1]>n&&p[d+1]<q);if(z)switch(d=1>e.scale?e.height*e.scale:e.height,g=G/(G-d),h=f=0,e.minHeight&&(f=1>e.scale?e.minHeight*e.scale:e.minHeight,h=G/(G-f)),z=e.wallColor||pa,r=e.altColor||da,u=e.roofColor||Z,a.strokeStyle=r,e.shape){case "cylinder":g=e.center.x-t;h=e.center.y-s;p=e.radius;A.draw(a,g,h,p,p,d,f,z,r,u);"cone"===e.roofShape&&A.draw(a,g,h,p,0,d+e.roofHeight,d,u,""+J(u).lightness(0.9));"dome"===e.roofShape&&A.draw(a,g,h,p,p/2,d+e.roofHeight,d,u,""+J(u).lightness(0.9));
break;case "cone":A.draw(a,e.center.x-t,e.center.y-s,e.radius,0,d,f,z,r);break;case "dome":A.draw(a,e.center.x-t,e.center.y-s,e.radius,e.radius/2,d,f,z,r);break;default:p=this.drawSolid(p,g,h,z,r);m=[];if(e.holes){d=0;for(f=e.holes.length;d<f;d++)m[d]=this.drawSolid(e.holes[d],g,h,z,r)}a.fillStyle=u;this.drawFace(p,!0,m)}}}}},ya={maxZoom:K+2,maxHeight:2,isSimple:function(a){return D<=this.maxZoom&&a.height+a.roofHeight<this.maxHeight},getFace:function(a){for(var b=[],c=0,d=a.length-3;c<d;c+=2)b[c]=
a[c]-t,b[c+1]=a[c+1]-s;return b},drawFace:function(a,b){if(a.length){var c=this.context,d,f,e,g;c.beginPath();c.moveTo(a[0],a[1]);d=2;for(f=a.length;d<f;d+=2)c.lineTo(a[d],a[d+1]);if(b){d=0;for(f=b.length;d<f;d++){a=b[d];c.moveTo(a[0],a[1]);e=2;for(g=a.length;e<g;e+=2)c.lineTo(a[e],a[e+1])}}c.closePath();c.stroke();c.fill()}},render:function(){this.context.clearRect(0,0,C,y);if(!(D<K||ka||D>this.maxZoom)){var a,b,c,d,f,e=t,g=t+C,h=s,l=s+y,j,k,n,q=B.items;a=0;for(b=q.length;a<b;a++)if(f=q[a],!(f.height>=
this.maxHeight)){n=!1;j=f.footprint;c=0;for(d=j.length-1;c<d;c+=2)n||(n=j[c]>e&&j[c]<g&&j[c+1]>h&&j[c+1]<l);if(n)if(c=f.altColor||da,n=f.roofColor||Z,this.context.strokeStyle=c,"cylinder"===f.shape||"cone"===f.shape||"dome"===f.shape)A.circle(this.context,f.center.x-t,f.center.y-s,f.radius,n);else{j=this.getFace(j);k=[];if(f.holes){c=0;for(d=f.holes.length;c<d;c++)k[c]=this.getFace(f.holes[c])}this.context.fillStyle=n;this.drawFace(j,k)}}}}},M={enabled:!0,color:"#666666",blurColor:"#000000",blurSize:15,
date:new Date,direction:{x:0,y:0},project:function(a,b,c){return{x:a+this.direction.x*c,y:b+this.direction.y*c}},render:function(){var a=this.context,b,c,d;a.clearRect(0,0,C,y);if(this.enabled&&!(D<K||ka))if(b=ba(t+P,s+ma),b=Ma(this.date,b.latitude,b.longitude),!(0>=b.altitude)){c=1/Ia(b.altitude);d=5>c?0.75:5*(1/c);this.direction.x=ca(b.azimuth)*c;this.direction.y=qa(b.azimuth)*c;var f,e,g,h,l,j,k,n,q,p,m,r,v,x;b=[];c=[];var w=B.items;a.canvas.style.opacity=d/(2*u);a.shadowColor=this.blurColor;a.shadowBlur=
this.blurSize*(u/2);a.fillStyle=this.color;a.beginPath();d=0;for(f=w.length;d<f;d++){j=w[d];q=!1;k=j.footprint;h=[];e=0;for(g=k.length-1;e<g;e+=2)h[e]=l=k[e]-t,h[e+1]=n=k[e+1]-s,q||(q=0<l&&l<C&&0<n&&n<y);if(q)if(l=1>j.scale?j.height*j.scale:j.height,k=0,j.minHeight&&(k=1>j.scale?j.minHeight*j.scale:j.minHeight),"cylinder"===j.shape||"cone"===j.shape||"dome"===j.shape)b.push({shape:j.shape,center:{x:j.center.x-t,y:j.center.y-s},radius:j.radius,h:l,mh:k}),("cone"===j.roofShape||"dome"===j.roofShape)&&
b.push({shape:j.roofShape,center:{x:j.center.x-t,y:j.center.y-s},radius:j.radius,h:l+j.roofHeight,mh:l});else{n=null;e=0;for(g=h.length-3;e<g;e+=2)q=h[e],p=h[e+1],m=h[e+2],r=h[e+3],v=this.project(q,p,l),x=this.project(m,r,l),k&&(p=this.project(q,p,k),r=this.project(m,r,k),q=p.x,p=p.y,m=r.x,r=r.y),(m-q)*(v.y-p)>(v.x-q)*(r-p)?(1===n&&a.lineTo(q,p),n=0,e||a.moveTo(q,p),a.lineTo(m,r)):(0===n&&a.lineTo(v.x,v.y),n=1,e||a.moveTo(v.x,v.y),a.lineTo(x.x,x.y));k||c.push(h);if(j.holes){e=0;for(g=j.holes.length;e<
g;e++){n=j.holes[e];q=[n[0]-t,n[1]-s];a.moveTo(q[0],q[1]);h=2;for(l=n.length;h<l;h+=2)q[h]=n[h]-t,q[h+1]=n[h+1]-s,a.lineTo(q[h],q[h+1]);k||c.push(q)}}}}d=0;for(f=b.length;d<f;d++)switch(j=b[d],w=j.center.x,e=j.center.y,g=j.radius,j.shape){case "cylinder":A.shadow(a,w,e,g,g,j.h,j.mh);break;case "cone":A.shadow(a,w,e,g,0,j.h,j.mh);break;case "dome":A.shadow(a,w,e,g,g/2,j.h,j.mh)}a.closePath();a.fill();a.shadowBlur=null;a.globalCompositeOperation="destination-out";a.beginPath();d=0;for(f=c.length;d<
f;d++){n=c[d];a.moveTo(n[0],n[1]);e=2;for(g=n.length;e<g;e+=2)a.lineTo(n[e],n[e+1]);a.lineTo(n[0],n[1])}d=0;for(f=b.length;d<f;d++)j=b[d],("cylinder"===j.shape||"cone"===j.shape||"dome"===j.shape)&&!j.mh&&A.footprintMask(a,j.center.x,j.center.y,j.radius);a.fillStyle="#00ff00";a.fill();a.globalCompositeOperation="source-over"}}},za=function(a,b,c,d,f){var e=d-b,g=f-c,h=ga(e*e+g*g),l=La(),j=1.5*La()*ga(h);b+=e*l;c+=g*l;e=e/h*j;g=g/h*j;a.bezierCurveTo(b+g,c-e,b-g,c+e,d,f)},la=function(a,b,c,d,f,e){var g=
b+ca(f)*d;f=c+qa(f)*d;b+=ca(e)*d;c+=qa(e)*d;za(a,g,f,b,c)},eb={enable:function(a){var b=0,c=0,d=0,f=0,e=a.moveTo,g=a.beginPath,h=a.closePath;a.moveTo=function(g,j){d=b=g;f=c=j;e.call(a,g,j)};a.lineTo=function(b,c){za(a,d,f,d=b,f=c)};a.beginPath=function(){a.lineWidth=2*Math.random()/(2*u);b=d;c=f;g.call(a)};a.closePath=function(){za(a,d,f,b,c);h.call(a)};a.arc=function(b,c,d,e,f,g){var h=E/2;if(g){for(;f-e>h;)la(a,b,c,d,f,f-h),f-=h;la(a,b,c,d,f,e)}else{for(;f-e>h;)la(a,b,c,d,e,e+h),e+=h;la(a,b,c,
d,e,f)}};return a}},F={container:ra.createElement("DIV"),items:[],init:function(){this.container.style.pointerEvents="none";this.container.style.position="absolute";this.container.style.left=0;this.container.style.top=0;M.context=this.createContext();ya.context=this.createContext();aa.context=this.createContext()},render:function(){M.render();ya.render();aa.render()},createContext:function(){var a=ra.createElement("CANVAS");a.style.webkitTransform="translate3d(0,0,0)";a.style.imageRendering="optimizeSpeed";
a.style.position="absolute";a.style.left=0;a.style.top=0;var b=a.getContext("2d");b.lineCap="round";b.lineJoin="round";b.lineWidth=1;b.mozImageSmoothingEnabled=!1;b.webkitImageSmoothingEnabled=!1;this.items.push(a);this.container.appendChild(a);eb.enable(b);return b},appendTo:function(a){a.appendChild(this.container)},remove:function(){this.container.parentNode.removeChild(this.container)},setSize:function(a,b){for(var c=0,d=this.items.length;c<d;c++)this.items[c].width=a,this.items[c].height=b},
screenshot:function(){var a=ra.createElement("CANVAS"),b=a.getContext("2d"),c,d,f;a.width=C;a.height=y;clearInterval(U);U=null;f=B.items;c=0;for(d=f.length;c<d;c++)f[c].scale=1;this.render();c=0;for(d=this.items.length;c<d;c++)f=this.items[c],""!==f.style.opacity&&(b.globalAlpha=parseFloat(f.style.opacity)),b.drawImage(f,0,0),b.globalAlpha=1;return a.toDataURL("image/png")},setPosition:function(a,b){this.container.style.left=a+"px";this.container.style.top=b+"px"}};F.init();var V=OpenLayers.Layer.prototype,
m=function(a){this.offset={x:0,y:0};V.initialize.call(this,this.name,{projection:"EPSG:900913"});a.addLayer(this)},r=m.prototype=new OpenLayers.Layer;r.name="OSM Buildings";r.attribution='&copy; <a href="http://osmbuildings.org">OSM Buildings</a>';r.isBaseLayer=!1;r.alwaysInRange=!0;r.setOrigin=function(){var a=this.map,b=a.getLonLatFromPixel(new OpenLayers.Pixel(0,0)),a=a.resolution,c=this.maxExtent,d=(c.top-b.lat)/a<<0;t=(b.lon-c.left)/a<<0;s=d};r.setMap=function(a){this.map||V.setMap.call(this,
a);F.appendTo(this.div);Da(a.size);Ea(a.zoom);this.setOrigin();B.update()};r.removeMap=function(a){F.remove();V.removeMap.call(this,a);this.map=null};r.onMapResize=function(){var a=this.map;V.onMapResize.call(this);Da(a.size.w,a.size.h);F.render();B.update()};r.moveTo=function(a,b,c){var d=this.map;a=V.moveTo.call(this,a,b,c);if(!c){c=parseInt(d.layerContainerDiv.style.left,10);var f=parseInt(d.layerContainerDiv.style.top,10);this.div.style.left=-c+"px";this.div.style.top=-f+"px"}this.setOrigin();
this.offset.x=0;this.offset.y=0;c=this.offset;Q=P+c.x;R=y+c.y;b?(b=d.zoom,ka=!1,Ea(b),B.update(),F.render()):(F.render(),B.update());return a};r.moveByPx=function(a,b){this.offset.x+=a;this.offset.y+=b;var c=V.moveByPx.call(this,a,b),d=this.offset;Q=P+d.x;R=y+d.y;aa.render();return c};r.setStyle=function(a){a=a||{};var b;if(b=a.color||a.wallColor)I=J(b),pa=""+I.alpha(u),ea=I.lightness(0.8),da=""+ea.alpha(u),S=I.lightness(1.2),Z=""+S.alpha(u);a.roofColor&&(S=J(a.roofColor),Z=""+S.alpha(u));void 0!==
a.shadows&&(M.enabled=!!a.shadows);F.render();return this};r.setDate=function(a){M.date=a;M.render();return this};r.loadData=function(a){B.load(a);return this};r.setData=function(a){B.set(a);return this};r.each=function(a,b){B.each=function(c){return a.call(b,c)};return this};r.screenshot=function(a){var b=F.screenshot();a&&(Y.location.href=b.replace("image/png","image/octet-stream"));return b};m.VERSION="0.1.9a";m.ATTRIBUTION='&copy; <a href="http://osmbuildings.org">OSM Buildings</a>';return m}();
