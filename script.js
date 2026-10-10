
/* ---------------------------------------------------------------------------
   INDIA OUTLINE — hand-built simplified boundary following the Survey of India
   map (full J&K incl. PoK & Gilgit-Baltistan, Ladakh incl. Aksai Chin, Arunachal).
   To use a surveyed file, replace INDIA_RINGS with your official GeoJSON rings.
   Coordinates are [lng, lat]. First ring = mainland, rest = islands.
--------------------------------------------------------------------------- */
const INDIA_RINGS = [
 [ // mainland (Sir Creek → clockwise via north, east, south, west)
  [68.15,23.65],[68.35,23.95],[68.75,24.25],[69.25,24.28],[69.6,24.2],[70.0,24.5],[70.1,25.0],[70.35,25.6],[70.1,26.2],[70.1,26.9],[70.4,27.6],[70.1,27.95],[70.9,28.3],[71.8,28.7],[72.6,28.95],[73.3,29.4],[73.9,29.95],[74.4,30.45],[74.6,30.95],[74.55,31.4],[74.6,31.75],[74.95,32.0],[75.2,32.35],[75.0,32.45],[74.65,32.62],[74.35,32.8],
  [74.15,32.75],[73.9,33.05],[73.55,33.5],[73.4,33.95],[73.3,34.4],[73.55,34.75],[73.9,35.05],[73.4,35.35],[72.95,35.55],[72.6,35.95],[72.8,36.4],[73.4,36.85],[73.7,36.9],[74.5,37.05],[75.0,37.0],[75.35,36.9],[75.9,36.8],[76.2,36.6],[77.0,36.4],[77.8,35.9],[78.6,35.85],[79.4,35.55],[80.2,35.4],[80.3,34.9],[79.9,34.3],[79.6,33.0],[79.4,32.7],[79.0,32.4],[78.7,32.0],[78.75,31.65],[78.4,31.1],[79.1,31.0],[79.9,30.9],[80.3,30.55],[81.05,30.2],[80.9,30.15],[80.55,29.85],[80.25,29.4],[80.2,29.2],[80.1,28.85],
  [80.5,28.65],[81.1,28.35],[81.5,28.2],[82.0,27.85],[82.7,27.6],[83.3,27.4],[83.8,27.4],[84.2,27.45],[84.7,27.1],[85.4,26.7],[86.0,26.6],[86.7,26.45],[87.3,26.4],[87.9,26.45],[88.15,26.55],[88.05,27.1],[88.15,27.6],[88.15,27.9],[88.55,28.1],[88.85,28.0],[88.9,27.55],[88.8,27.3],[88.9,27.1],[89.1,26.85],[89.6,26.75],[90.2,26.8],[90.9,26.8],[91.5,26.8],[92.0,26.85],[92.05,27.15],[91.85,27.5],[91.6,27.8],[91.65,27.95],[92.1,28.2],[92.7,28.1],[93.1,28.5],[93.7,28.65],[94.2,29.25],[94.85,29.35],[95.4,29.05],[95.9,28.5],[96.4,28.35],[96.8,28.3],[97.1,28.4],[97.4,28.25],
  [97.05,27.8],[96.9,27.55],[96.4,27.25],[96.1,27.2],[95.75,26.9],[95.35,26.5],[95.2,26.0],[95.0,25.55],[94.7,25.1],[94.3,24.35],[94.1,24.2],[93.7,23.85],[93.4,23.35],[93.15,22.95],[93.15,22.4],[92.95,22.05],[92.65,22.0],[92.4,22.7],[92.25,23.2],[92.3,23.65],[91.95,23.35],[91.7,23.05],[91.45,22.95],[91.2,23.1],[91.15,23.65],[91.3,24.0],[91.6,24.15],[91.9,24.4],[92.2,24.85],[92.02,25.17],[91.6,25.15],[91.0,25.2],[90.5,25.15],[90.0,25.2],[89.85,25.3],[89.85,25.85],[89.75,26.0],[89.4,26.15],[89.0,26.25],[88.7,26.4],[88.45,26.45],[88.4,26.15],[88.45,25.9],[88.3,25.55],[88.05,25.25],[88.25,24.9],[88.1,24.6],[88.3,24.3],[88.6,23.95],[88.75,23.6],[88.85,23.25],[89.0,22.95],[88.95,22.5],[89.0,22.1],[88.9,21.8],
  [88.7,21.6],[88.35,21.65],[88.1,21.75],[87.8,21.7],[87.2,21.55],[87.0,21.2],[86.9,20.8],[86.7,20.3],[86.2,19.95],[85.8,19.75],[85.4,19.4],[84.9,19.15],[84.4,18.7],[83.9,18.3],[83.4,17.85],[83.0,17.45],[82.5,17.0],[82.25,16.9],[81.8,16.3],[81.3,16.1],[80.9,15.75],[80.6,15.4],[80.2,14.5],[80.1,14.1],[80.3,13.5],[80.28,13.1],[80.0,12.5],[79.85,11.95],[79.8,11.4],[79.85,10.8],[79.85,10.3],[79.4,9.95],[79.15,9.4],[78.9,9.2],[78.3,8.85],[77.95,8.65],[77.55,8.08],
  [77.2,8.2],[76.9,8.45],[76.55,8.9],[76.3,9.5],[76.2,10.0],[75.9,10.7],[75.75,11.25],[75.4,11.9],[74.9,12.7],[74.75,13.2],[74.5,14.0],[74.1,14.8],[73.95,15.2],[73.75,15.5],[73.45,16.2],[73.3,17.0],[73.0,17.8],[72.85,18.6],[72.8,19.1],[72.7,19.8],[72.75,20.3],[72.7,21.1],[72.55,21.65],[72.45,22.2],[72.25,21.85],[72.15,21.8],[72.2,21.45],[71.9,21.0],[71.4,20.85],[70.95,20.7],[70.5,20.9],[70.1,21.2],[69.65,21.62],[69.2,22.0],[68.97,22.25],[69.05,22.4],[69.7,22.45],[70.05,22.55],[70.4,22.95],[69.7,22.85],[69.2,22.85],[68.7,23.15],[68.35,23.45],[68.15,23.65]
 ],
 [[92.8,13.5],[93.05,13.1],[92.95,12.3],[92.8,11.7],[92.65,11.6],[92.65,12.3],[92.7,13.0],[92.8,13.5]],      // Andaman
 [[92.45,10.8],[92.65,10.7],[92.6,10.5],[92.4,10.6],[92.45,10.8]],                                           // Little Andaman
 [[92.7,9.2],[92.85,9.25],[92.85,9.08],[92.7,9.08],[92.7,9.2]],                                              // Car Nicobar
 [[93.35,8.1],[93.6,8.05],[93.55,7.9],[93.35,8.0],[93.35,8.1]],                                              // Nancowry
 [[93.75,7.3],[93.95,7.0],[93.85,6.75],[93.65,7.0],[93.75,7.3]],                                             // Great Nicobar
 ...[[72.64,10.56],[72.2,10.85],[73.0,8.28],[72.78,11.2]].map(([x,y])=>{const r=.07;return [[x-r,y-r],[x+r,y-r],[x+r,y+r],[x-r,y+r],[x-r,y-r]]}) // Lakshadweep
];

const INDIA_FILL = {type:"FeatureCollection",features:INDIA_RINGS.map(r=>({type:"Feature",properties:{},geometry:{type:"Polygon",coordinates:[r]}}))};
const INDIA_LINES = {type:"FeatureCollection",features:INDIA_RINGS.map(r=>({type:"Feature",properties:{},geometry:{type:"LineString",coordinates:r}}))};

const CONFIG = {
  styleUrl:"https://tiles.openfreemap.org/styles/dark",
  fallbackStyle:{version:8,sources:{c:{type:"raster",tiles:["https://a.basemaps.cartocdn.com/dark_nolabels/{z}/{x}/{y}@2x.png","https://b.basemaps.cartocdn.com/dark_nolabels/{z}/{x}/{y}@2x.png"],tileSize:256}},
    layers:[{id:"bg",type:"background",paint:{"background-color":"#02040a"}},{id:"c",type:"raster",source:"c",paint:{"raster-opacity":.85}}]},
  start:{center:[-25,18],zoom:1.55,pitch:0,bearing:0},
  india:{center:[80.2,22.4],zoom:4.15,pitch:28,bearing:0},
  spinMs:3600, spinToLng:52, flyMs:5200
};

const ease = {
  inOutCubic:t=>t<.5?4*t*t*t:1-Math.pow(-2*t+2,3)/2,
  outCubic:t=>1-Math.pow(1-t,3),
  outQuart:t=>1-Math.pow(1-t,4),
  inOutSine:t=>-(Math.cos(Math.PI*t)-1)/2
};
const tween=(ms,fn,e=ease.outCubic)=>new Promise(res=>{const s=performance.now();(function f(n){const t=Math.min((n-s)/ms,1);fn(e(t),t);t<1?requestAnimationFrame(f):res()})(s)});

/* Starfield with parallax drift + occasional shooting stars */
const Starfield={
  init(){this.c=document.getElementById("starfield");this.x=this.c.getContext("2d");this.shoot=[];
    this.resize();addEventListener("resize",()=>this.resize());this.mx=0;this.my=0;
    addEventListener("pointermove",e=>{this.mx=e.clientX/innerWidth-.5;this.my=e.clientY/innerHeight-.5});
    this.sx=0;this.sy=0;requestAnimationFrame(t=>this.loop(t))},
  resize(){const d=Math.min(devicePixelRatio||1,2);this.c.width=innerWidth*d;this.c.height=innerHeight*d;this.x.setTransform(d,0,0,d,0,0);
    this.stars=Array.from({length:Math.round(innerWidth*innerHeight/7000)},()=>({x:Math.random()*innerWidth,y:Math.random()*innerHeight,r:Math.random()*1.3+.2,a:Math.random()*6,s:.006+Math.random()*.02,z:Math.random()}))},
  loop(t){const x=this.x;x.clearRect(0,0,innerWidth,innerHeight);
    this.sx+=(this.mx-this.sx)*.04;this.sy+=(this.my-this.sy)*.04;
    for(const s of this.stars){s.a+=s.s;const px=((s.x+this.sx*-30*s.z+t*.002*s.z)%innerWidth+innerWidth)%innerWidth,py=s.y+this.sy*-30*s.z;
      x.fillStyle=`rgba(225,238,255,${.2+Math.abs(Math.sin(s.a))*.75})`;x.beginPath();x.arc(px,py,s.r,0,6.283);x.fill()}
    if(Math.random()<.004)this.shoot.push({x:Math.random()*innerWidth,y:Math.random()*innerHeight*.5,l:0});
    this.shoot=this.shoot.filter(s=>{s.l+=1;s.x+=9;s.y+=4;const a=1-s.l/40;if(a<=0)return false;
      const g=x.createLinearGradient(s.x,s.y,s.x-80,s.y-36);g.addColorStop(0,`rgba(255,255,255,${a})`);g.addColorStop(1,"rgba(255,255,255,0)");
      x.strokeStyle=g;x.lineWidth=1.4;x.beginPath();x.moveTo(s.x,s.y);x.lineTo(s.x-80,s.y-36);x.stroke();return true});
    requestAnimationFrame(t=>this.loop(t))}
};

const App={
  map:null,state:"boot",pitchOn:true,breath:0,
  reduce:matchMedia("(prefers-reduced-motion: reduce)").matches,
  $(id){return document.getElementById(id)},

  init(){
    const h=this.$("introTitle");
    "INDIA".split("").forEach((c,i)=>{const s=document.createElement("span");s.textContent=c;s.style.setProperty("--i",i);h.appendChild(s)});
    Starfield.init();
    const m=this.map=new maplibregl.Map({container:"map",style:CONFIG.styleUrl,...CONFIG.start,attributionControl:false,canvasContextAttributes:{antialias:true},fadeDuration:0});
    window.__AETHER_MAP__=m;
    m.on("error",e=>{if(this.fell||this.started)return;if(/openfreemap|fetch|404|network/i.test(String(e&&e.error&&e.error.message||e))){this.fell=true;m.setStyle(CONFIG.fallbackStyle)}});
    m.on("style.load",()=>this.onStyle());
    this.$("btnReset").onclick=()=>this.reset();
    this.$("btnReplay").onclick=()=>this.play();
    this.$("btnPitch").onclick=()=>this.togglePitch();
  },

  onStyle(){
    const m=this.map;
    m.setProjection({type:"globe"});
    m.setSky({"sky-color":"#02040a","sky-horizon-blend":.6,"horizon-color":"#2a5aa8","horizon-fog-blend":.8,"fog-color":"#0a1a33","fog-ground-blend":.7,"atmosphere-blend":["interpolate",["linear"],["zoom"],0,1,4,.4,6,0]});
    // Clean slate: remove every label/icon and the basemap's own country borders
    for(const l of m.getStyle().layers){
      if(l.type==="symbol"||/boundary|border|admin/i.test(l.id)) m.setLayoutProperty(l.id,"visibility","none");
    }
    this.addIndia();
    this.gestures(this.state==="live");
    if(this.started)return;
    this.started=true;
    this.$("map").classList.add("on");
    this.reduce?this.jump():this.play();
  },

  addIndia(){
    const m=this.map;if(m.getSource("in-fill"))return;
    m.addSource("in-fill",{type:"geojson",data:INDIA_FILL});
    m.addSource("in-line",{type:"geojson",data:INDIA_LINES,lineMetrics:true});
    m.addLayer({id:"in-fill",type:"fill",source:"in-fill",paint:{"fill-color":"#5ce1e6","fill-opacity":0,"fill-antialias":true}});
    m.addLayer({id:"in-glow",type:"line",source:"in-line",layout:{"line-join":"round"},paint:{"line-color":"#5ce1e6","line-width":9,"line-blur":8,"line-opacity":0}});
    m.addLayer({id:"in-line",type:"line",source:"in-line",layout:{"line-join":"round","line-cap":"round"},paint:{"line-width":1.6,"line-gradient":this.grad(0)}});
  },
  // Gradient trick: reveals the outline from 0→p along its length ("drawing" effect)
  grad(p){
    const c="#8ff3f6",n="rgba(92,225,230,0)";
    if(p>=1)return["interpolate",["linear"],["line-progress"],0,c,1,c];
    if(p<=0)return["interpolate",["linear"],["line-progress"],0,n,1,n];
    return["interpolate",["linear"],["line-progress"],0,c,p,c,Math.min(p+.002,1),n,1,n];
  },

  gestures(on){const m=this.map,f=on?"enable":"disable";
    ["dragPan","scrollZoom","boxZoom","dragRotate","keyboard","doubleClickZoom","touchZoomRotate","touchPitch"].forEach(k=>m[k][f]())},

  ui(on){["btnReset","btnReplay","btnPitch"].forEach(i=>this.$(i).disabled=!on)},
  intro(show){const el=this.$("intro");if(show){el.style.display="";el.classList.remove("exit");el.querySelectorAll("span,p,i").forEach(n=>{n.style.animation="none";n.offsetHeight;n.style.animation=""})}else el.classList.add("exit")},

  setReveal(p){
    const m=this.map;
    m.setPaintProperty("in-line","line-gradient",this.grad(p));
    m.setPaintProperty("in-glow","line-opacity",.5*Math.min(p*1.4,1));
    m.setPaintProperty("in-fill","fill-opacity",.14*ease.outCubic(Math.max(0,(p-.35)/.65)));
  },

  // Slow "breathing" glow once the outline is complete
  startBreath(){cancelAnimationFrame(this.breath);const m=this.map,s=performance.now();
    const f=n=>{if(this.state!=="live")return;const k=ease.inOutSine((Math.sin((n-s)/1100)+1)/2);
      m.setPaintProperty("in-glow","line-opacity",.3+.35*k);m.setPaintProperty("in-glow","line-width",7+4*k);
      this.breath=requestAnimationFrame(f)};this.breath=requestAnimationFrame(f)},

  async play(){
    const m=this.map;m.stop();cancelAnimationFrame(this.breath);
    this.state="anim";this.gestures(false);this.ui(false);
    this.$("topbar").classList.remove("visible");
    this.setReveal(0);m.jumpTo({...CONFIG.start,center:[-25,18]});
    this.intro(true);
    // 1) orbital spin, decelerating toward India
    const a=-25,b=CONFIG.spinToLng;
    await tween(CONFIG.spinMs,t=>m.jumpTo({center:[a+(b-a)*t,18-(18-CONFIG.india.center[1])*.4*t],zoom:1.55+.25*t,bearing:-6*t}),ease.outQuart);
    // 2) cinematic dive
    this.intro(false);
    m.flyTo({...CONFIG.india,duration:CONFIG.flyMs,curve:1.5,essential:true,easing:ease.inOutCubic});
    await new Promise(r=>m.once("moveend",r));
    // 3) trace the outline, then settle into live mode
    this.$("topbar").classList.add("visible");
    await tween(2600,(t,raw)=>this.setReveal(t),ease.inOutCubic);
    this.setReveal(1);
    this.state="live";this.gestures(true);this.ui(true);
    this.pitchOn=m.getPitch()>5;
    if(!this._nav){m.addControl(new maplibregl.NavigationControl({visualizePitch:true}),"bottom-right");this._nav=true}
    this.startBreath();
  },

  jump(){const m=this.map;m.jumpTo(CONFIG.india);this.setReveal(1);this.$("intro").style.display="none";
    this.$("topbar").classList.add("visible");this.state="live";this.gestures(true);this.ui(true);
    this.pitchOn=true;if(!this._nav){m.addControl(new maplibregl.NavigationControl({visualizePitch:true}),"bottom-right");this._nav=true}},

  async reset(){
    if(this.state!=="live")return;
    const m=this.map;this.state="anim";cancelAnimationFrame(this.breath);this.gestures(false);this.ui(false);
    m.flyTo({...CONFIG.india,duration:1800,essential:true,easing:ease.inOutCubic});
    await new Promise(r=>m.once("moveend",r));
    this.state="live";this.gestures(true);this.ui(true);this.pitchOn=true;this.startBreath();
  },

  togglePitch(){this.pitchOn=!this.pitchOn;this.map.easeTo({pitch:this.pitchOn?CONFIG.india.pitch:0,duration:900,easing:ease.inOutCubic,essential:true})}
};
App.init();

