(function(u){function ka(a){i=u.document.createElement("canvas");i.style.webkitTransform="translate3d(0,0,0)";i.style.position="absolute";i.style.pointerEvents="none";i.style.left=0;i.style.top=0;a.appendChild(i);e=i.getContext("2d");e.lineCap="round";e.lineJoin="round";e.lineWidth=1;try{e.mozImageSmoothingEnabled=!1}catch(b){}}function aa(a){a=a||{};N=void 0!==a.strokeRoofs?a.strokeRoofs:N;O=a.wallColor||O;P=a.roofColor||P;Q=a.strokeColor||Q}function v(a,b){var c={},a=a/R,b=b/R;c[r]=0>=b?90:1<=b?
-90:la*(2*ma(na(w*(1-2*b)))-ba);c[x]=360*(1===a?1:(a%1+1)%1)-180;return c}function oa(a,b){return a.replace(/\{ *([\w_]+) *\}/g,function(a,d){return b[d]||""})}function pa(a,b){var c=new XMLHttpRequest;c.onreadystatechange=function(){4!==c.readyState||!c.status||200>c.status||299<c.status||c.responseText&&b(JSON.parse(c.responseText))};c.open("GET",a);c.send(null);return c}function H(){if(S&&!(h<I)){var a=v(z-y,A-o),b=v(z+y,A+o);J&&J.abort();J=pa(oa(S,{w:a[x],n:a[r],e:b[x],s:b[r],z:h}),qa)}}function ca(a,
b){var b=b||[],c=a[0]?a:a.features,d,f,n,j;if(c){d=0;for(j=c.length;d<j;d++)ca(c[d],b);return b}"Feature"===a.type&&(d=a.geometry,f=a.properties);if("Polygon"==d.type&&f.height){c=d.coordinates[0];n=[];d=0;for(j=c.length;d<j;d++)n.push(c[d][1]),n.push(c[d][0]);b.push([f.height,n])}return b}function da(a,b,c){for(var d,f,n=[],j,e,g,k=T-b,l=0,i=a.length;l<i;l++){j=a[l][0];e=a[l][1];g=new Int32Array(e.length);for(var h=0,p=e.length-1;h<p;h+=2){d=e[h+1];f=ea<<b;var o=U(1,ra(0,0.5-sa(ta(ua+ba*e[h]/180))/
w/2));d=~~((d/360+0.5)*f);f=~~(o*f);g[h]=d;g[h+1]=f}n[l]=[U(j>>k,fa),g,c]}return n}function ga(a,b){y=a;o=b;B=~~(y/2);K=~~(o/2);D=B;E=o;i.width=y;i.height=o}function ha(a,b){z=a;A=b}function ia(a){h=a;R=ea<<h;L=1-0.3*(h-I)/(T-I)}function va(){V=!0;s()}function qa(a){var b,c,d,e=[],n=0,j=0;J=null;if(a&&a.meta.z===h){d=a.meta;c=a.data;if(k&&f&&k.z===d.z){n=k.x-d.x;j=k.y-d.y;a=0;for(b=f.length;a<b;a++)e[a]=f[a][F][0]+n+","+(f[a][F][1]+j)}k=d;f=[];a=0;for(b=c.length;a<b;a++)f[a]=c[a],f[a][M]=U(f[a][M],
fa),d=f[a][F][0]+","+f[a][F][1],f[a][W]=!(e&&~e.indexOf(d));ja()}}function ja(){C=0;clearInterval(X);X=setInterval(function(){C+=0.1;if(1<C){clearInterval(X);C=1;for(var a=0,b=f.length;a<b;a++)f[a][W]=0}s()},33)}function s(){var a,b,c,d;e.clearRect(0,0,y,o);if(k&&f&&!(h<I||V)){var i=Y(O,L),n=Y(P,L),j=Y(Q,L);e.strokeStyle=j;var s,g,r,l,w=z-B-k.x,x=A-K-k.y,p,t,m,q,G,u,v,j=0;for(s=f.length;j<s;j++){a=f[j];l=!1;b=a[F];p=new Int32Array(b.length);g=0;for(r=b.length-1;g<r;g+=2)p[g]=c=b[g]-w,p[g+1]=d=b[g+
1]-x,l||(l=0<c&&c<y&&0<d&&d<o);if(l){e.fillStyle=i;g=a[W]?a[M]*C:a[M];l=Z/(Z-g);t=new Int32Array(p.length-2);m=[];g=0;for(r=p.length-1-2;g<r;g+=2)q=p[g],G=p[g+1],u=p[g+2],v=p[g+3],c=~~((q-D)*l+D),d=~~((G-E)*l+E),a=~~((u-D)*l+D),b=~~((v-E)*l+E),(u-q)*(d-G)>(c-q)*(v-G)?(m.length||(m.unshift(G),m.unshift(q),m.push(c),m.push(d)),m.unshift(v),m.unshift(u),m.push(a),m.push(b)):($(m),m=[]),t[g]=c,t[g+1]=d;$(m);e.fillStyle=n;$(t,N)}}}}function $(a,b){e.beginPath();e.moveTo(a[0],a[1]);for(var c=2,d=a.length;c<
d;c+=2)e.lineTo(a[c],a[c+1]);e.closePath();b&&e.stroke();e.fill()}function Y(a,b){var c=a.match(/rgba?\((\d+),(\d+),(\d+)(,([\d.]+))?\)/);return"rgba("+[c[1],c[2],c[3],c[4]?b*c[5]:b].join()+")"}u.Int32Array=u.Int32Array||Array;var na=Math.exp,sa=Math.log,ta=Math.tan,ma=Math.atan,U=Math.min,ra=Math.max,w=Math.PI,ba=w/2,ua=w/4,la=180/w,r="latitude",x="longitude",M=0,F=1,W=2,y=0,o=0,B=0,K=0,z=0,A=0,h,R,J,i,e,S,N,O="rgb(200,190,180)",P="rgb(250,240,230)",Q="rgb(145,140,135)",t,k,f,L=1,C=1,X,ea=256,I=
14,T,D=B,E=o,Z=400,fa=Z-50,V=!1,q=u.OSMBuildings=function(a,b){S=a;aa(b)};q.prototype.VERSION="0.1a";q.prototype.render=s;q.prototype.setStyle=aa;q.prototype.setData=function(a){a?(t=ca(a),k={n:90,w:-180,s:-90,e:180,x:0,y:0,z:h},f=da(t,h,!0),ja()):(t=null,s())};(function(a){a.VERSION+="-leaflet-patch";a.addTo=function(b){function c(){var a=b._size.divideBy(2);return b._getTopLeftPoint().add(a)}a.map=b;ka(document.querySelector(".leaflet-control-container"));T=b._layersMaxZoom;ga(b._size.x,b._size.y);
var d=c();ha(d.x,d.y);ia(b._zoom);var e;window.addEventListener("resize",function(){e=setTimeout(function(){clearTimeout(e);ga(b._size.x,b._size.y);s();H()},100)},!1);b.on({move:function(){var a=c();ha(a.x,a.y);s()},moveend:function(){c();var a=v(z-B,A-K),b=v(z+B,A+K);k&&(a[r]>k.n||a[x]<k.w||b[r]<k.s||b[x]>k.e)&&H()},zoomstart:va,zoomend:function(){var a=b._zoom;V=!1;ia(a);t?(f=da(t,h),s()):H()}});b.attributionControl.addAttribution('Buildings &copy; <a href="http://osmbuildings.org">OSM Buildings</a>');
H()};a.removeFrom=function(b){b.attributionControl.removeAttribution('Buildings &copy; <a href="http://osmbuildings.org">OSM Buildings</a>');b.off({});i.parentNode.removeChild(i);a.map=null}})(q.prototype)})(this);
