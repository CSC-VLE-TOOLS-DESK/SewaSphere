(function(){
var P=window.PROMO||"whatsapp",$=function(i){return document.getElementById(i)},SITE="https://csc-vle-tools-desk.github.io/SewaSphere/",KEY="ss_promo_name",img=null;
var C={whatsapp:{bold:1,size:"auto"},facebook:{size:"sq"},instagram:{size:"p45",bio:1},x:{size:"sq",lim:280,short:1},telegram:{size:"auto"}}[P]||{size:"auto"};
var TAGS="#SevaSphere #CSC #FreeTools #DigitalIndia";
var T=[{
 en:{t:"Free Online Tools for CSC & Photo Work",i:"Namaste! Now you can do this work free on your phone or PC:",p:"Photo and signature resizer (exact KB)\nPAN and Aadhaar print at actual size\nPDF merge, split and compress\nJPG to PDF\nResume and application maker (Hindi and English)",e:"Free, no login. Files stay on your device.",b:"Open free tools"},
 hi:{t:"CSC और फोटो के काम के लिए फ्री ऑनलाइन टूल",i:"नमस्ते! अब ये काम फ्री में फोन या कंप्यूटर पर करें:",p:"फोटो और सिग्नेचर रीसाइज़र (सही KB में)\nPAN और आधार प्रिंट (असली साइज़)\nPDF मर्ज, स्प्लिट और कंप्रेस\nJPG से PDF\nरिज़्यूमे और एप्लीकेशन मेकर (हिंदी व अंग्रेज़ी)",e:"बिल्कुल फ्री, लॉगिन नहीं। फाइल आपके डिवाइस में ही रहती है।",b:"फ्री टूल खोलें"},l:SITE},
 {en:{t:"SevaSphere for CSC & VLE Centres",i:"Tools my centre uses every day. You can use them free:",p:"Passport photo sheet and ID card print\nPhoto, signature and thumb resizer\nPDF tools and JPG to PDF\nShop ledgers and house expense\nHaryana resume and application formats",e:"Please share with other CSC operators.",b:"Open SevaSphere"},
 hi:{t:"CSC और VLE सेंटर के लिए SevaSphere",i:"ये टूल सेंटर पर रोज़ काम आते हैं। आप भी फ्री इस्तेमाल करें:",p:"पासपोर्ट फोटो शीट और ID कार्ड प्रिंट\nफोटो, सिग्नेचर और अंगूठा रीसाइज़र\nPDF टूल और JPG से PDF\nदुकान के खाता-बही और घर का खर्च\nहरियाणा रिज़्यूमे और एप्लीकेशन फॉर्मेट",e:"कृपया दूसरे CSC संचालकों को भी भेजें।",b:"SevaSphere खोलें"},l:SITE},
 {en:{t:"Free Kids Learning: Class 1 to 5",i:"Fun practice for your child, free:",p:"Maths, English, Hindi, EVS and GK quizzes\nShort lesson before every quiz\nStars for right answers\nEnglish and Hindi, works on mobile",e:"Let your child try it today.",b:"Start learning"},
 hi:{t:"फ्री किड्स लर्निंग: कक्षा 1 से 5",i:"बच्चों के लिए मज़ेदार अभ्यास, बिल्कुल फ्री:",p:"गणित, अंग्रेज़ी, हिंदी, EVS और GK क्विज़\nहर क्विज़ से पहले छोटा पाठ\nसही उत्तर पर सितारे\nहिंदी व अंग्रेज़ी, मोबाइल पर चलता है",e:"आज ही बच्चे को आज़माने दें।",b:"सीखना शुरू करें"},l:SITE+"kids-classes.html"},
 {en:{t:"",i:"",p:"",e:"",b:"Open link"},hi:{t:"",i:"",p:"",e:"",b:"लिंक खोलें"},l:SITE}];

var SZ={sq:1080,p45:1350,story:1920},FONT="Mukta,'Noto Sans Devanagari','Segoe UI',Arial,sans-serif";
function g(i){var e=$(i);return e?e.value.trim():""}
function pts(){return g("wPts").split("\n").map(function(x){return x.trim()}).filter(Boolean)}
function mark(i){var f=$("wFmt").value;return f==="num"?(i+1)+". ":f?f+" ":""}
function linkLine(){var l=g("wLink"),b=g("wBtn");if(!l)return"";if(C.lim)return l;return C.bio?"🔗 "+(b||"Link in bio"):"👉 "+(b?b+": ":"")+l}
function build(n,nl){var o=[],t=g("wTitle"),I=g("wIntro"),E=g("wEnd"),p=pts(),tg=g("wTags"),nm=g("wName"),ll=linkLine();
 if(t)o.push(C.bold?"*"+t+"*":t);if(I&&n==null)o.push(I);
 var q=n==null?p:p.slice(0,n);if(q.length)o.push(q.map(function(x,i){return mark(i)+x}).join("\n"));
 if(E&&n==null)o.push(E);if(ll&&!nl)o.push(ll);if(nm&&n==null)o.push("— "+nm);if(tg)o.push(tg);return o.join("\n\n")}
function xlen(s){return Array.from(s.replace(/https?:\/\/\S+/g,"x".repeat(23))).length}
function msg(nl){if(!C.lim)return build(null,nl);var sh=$("wShort"),n=null;if(sh&&sh.checked){n=pts().length;while(n>0&&xlen(build(n,false))>C.lim)n--}return build(n,nl)}
function wrap(c,s,w){var ws=s.split(" "),L=[],cur="";ws.forEach(function(x){var tt=cur?cur+" "+x:x;if(c.measureText(tt).width>w&&cur){L.push(cur);cur=x}else cur=tt});if(cur)L.push(cur);return L}
function flow(c,k,dr,y){var W=1080,pad=56,iw=W-pad*2,F=function(w,s){c.font=w+" "+Math.round(s*k)+"px "+FONT},t=g("wTitle"),I=g("wIntro"),E=g("wEnd"),p=pts(),l=g("wLink"),b=g("wBtn"),nm=g("wName");
 if(t){F(800,54);wrap(c,t,iw).forEach(function(s){if(dr){c.fillStyle="#1a3fa6";c.fillText(s,pad,y)}y+=68*k});}
 if(I){y+=4*k;F(600,38);wrap(c,I,iw).forEach(function(s){if(dr){c.fillStyle="#334155";c.fillText(s,pad,y)}y+=50*k});y+=10*k}
 p.forEach(function(x,i){F(600,38);wrap(c,mark(i)+x,iw).forEach(function(s){if(dr){c.fillStyle="#0f172a";c.fillText(s,pad,y)}y+=50*k});y+=10*k});
 if(E){y+=10*k;F(600,36);wrap(c,E,iw).forEach(function(s){if(dr){c.fillStyle="#475569";c.fillText(s,pad,y)}y+=46*k});y+=10*k}
 if(l){y+=14*k;var bh=96*k,r=bh/2;if(dr){var sh=l.replace(/^https?:\/\//,"").replace(/\/$/,"");c.fillStyle="#16a34a";c.beginPath();c.moveTo(pad+r,y);c.arcTo(W-pad,y,W-pad,y+bh,r);c.arcTo(W-pad,y+bh,pad,y+bh,r);c.arcTo(pad,y+bh,pad,y,r);c.arcTo(pad,y,W-pad,y,r);c.closePath();c.fill();
  c.fillStyle="#fff";c.textAlign="center";F(800,38);c.fillText((C.bio?"🔗 ":"👉 ")+(b||"Open link"),W/2,y+12*k);F(600,26);var s2=sh;while(c.measureText(s2).width>iw-40&&s2.length>10)s2=s2.slice(0,-2);c.fillText(s2+(s2!==sh?"…":""),W/2,y+58*k);c.textAlign="left"}y+=bh+14*k}
 if(nm){if(dr){F(700,30);c.fillStyle="#1a3fa6";c.fillText(nm,pad,y+10*k)}y+=60*k}else y+=24*k;
 return y}
function draw(){var cv=$("wCv"),c=cv.getContext("2d"),W=1080,sz=$("wSize")?$("wSize").value:C.size,tgt=SZ[sz],k=1,IH=520,H;
 c.textBaseline="top";
 if(tgt){H=tgt;IH=Math.round(H*.34);while(k>.4&&flow(c,k,false,IH+40*k)>H){k-=.05}}else{H=Math.round(flow(c,1,false,IH+40))}
 cv.width=W;cv.height=H;c=cv.getContext("2d");c.textBaseline="top";c.fillStyle="#fff";c.fillRect(0,0,W,H);
 var gr=c.createLinearGradient(0,0,W,IH);gr.addColorStop(0,"#1a3fa6");gr.addColorStop(1,"#06b6d4");c.fillStyle=gr;c.fillRect(0,0,W,IH);
 if(img){var r=Math.max(W/img.width,IH/img.height),w=img.width*r,h=img.height*r;c.save();c.beginPath();c.rect(0,0,W,IH);c.clip();c.drawImage(img,(W-w)/2,(IH-h)/2,w,h);c.restore()}
 else{var fs=Math.min(150,IH*.3);c.fillStyle="rgba(255,255,255,.95)";c.font="800 "+fs+"px "+FONT;c.textAlign="center";c.fillText("SevaSphere",W/2,IH/2-fs*.6);c.font="700 "+Math.round(fs*.27)+"px "+FONT;c.fillText("Free tools for CSC & VLE centres",W/2,IH/2+fs*.55);c.textAlign="left"}
 flow(c,k,true,IH+40*k);
 var m=msg();$("wMsg").textContent=m;var ct=$("wCount");if(ct){var n=xlen(m);ct.textContent=n+" / "+C.lim+" letters"+(n>C.lim?" — too long, turn on Short version":"");ct.style.color=n>C.lim?"#dc2626":"#16a34a"}}
function fill(){var t=T[+$("wTpl").value],L=t[$("wLang").value];$("wTitle").value=L.t;$("wIntro").value=L.i;$("wPts").value=L.p;$("wEnd").value=L.e;$("wBtn").value=C.bio?($("wLang").value==="hi"?"बायो में लिंक":"Link in bio"):L.b;$("wLink").value=t.l||SITE;if($("wTags"))$("wTags").value=TAGS;draw()}
function dl(cb){$("wCv").toBlob(function(b){cb(b)},"image/png")}
function go(u){window.open(u,"_blank","noopener")}
function enc(s){return encodeURIComponent(s)}
function on(i,f){var e=$(i);if(e)e.onclick=f}
function cp(t,btn,label){var d=function(){if(btn){btn.textContent="✅ Copied";setTimeout(function(){btn.textContent=label},1500)}};if(navigator.clipboard&&navigator.clipboard.writeText)navigator.clipboard.writeText(t).then(d,function(){alert(t)});else alert(t)}
$("wTpl").onchange=fill;$("wLang").onchange=fill;
["wTitle","wIntro","wPts","wFmt","wEnd","wLink","wBtn","wName","wTags","wSize","wShort"].forEach(function(i){var e=$(i);if(!e)return;e.addEventListener("input",function(){draw();if(i==="wName")try{localStorage.setItem(KEY,e.value)}catch(x){}});e.addEventListener("change",draw)});
$("wImg").onchange=function(){var f=this.files&&this.files[0];if(!f){img=null;draw();return}var u=URL.createObjectURL(f),im=new Image();im.onload=function(){img=im;draw();URL.revokeObjectURL(u)};im.src=u};
on("wDl",function(){dl(function(b){var a=document.createElement("a");a.href=URL.createObjectURL(b);a.download="SevaSphere_"+P+"_poster.png";document.body.appendChild(a);a.click();a.remove()})});
on("wCopy",function(){cp(msg(),$("wCopy"),$("wCopy").getAttribute("data-l"))});
on("wCopyLink",function(){cp(g("wLink")||SITE,$("wCopyLink"),$("wCopyLink").getAttribute("data-l"))});
on("wWa",function(){go("https://wa.me/?text="+enc(msg()))});
on("wTg",function(){go("https://t.me/share/url?url="+enc(g("wLink")||SITE)+"&text="+enc(msg(true)||" "))});
on("wFb",function(){go("https://www.facebook.com/sharer/sharer.php?u="+enc(g("wLink")||SITE))});
on("wFbOpen",function(){go("https://www.facebook.com/")});
on("wIgOpen",function(){go("https://www.instagram.com/")});
on("wX",function(){var l=g("wLink");go("https://x.com/intent/post?text="+enc(msg(true))+(l?"&url="+enc(l):""))});
on("wWaNum",function(){var n=g("wNum").replace(/\D/g,"");if(n.length!==10){alert("Please type a 10 digit mobile number.");return}go("https://wa.me/91"+n+"?text="+enc(msg()))});
on("wShImg",function(){dl(function(b){var f=new File([b],"SevaSphere_poster.png",{type:"image/png"});if(navigator.canShare&&navigator.canShare({files:[f]})){navigator.share({files:[f],text:msg()}).catch(function(){})}else{alert("Sharing a picture works on phones. On a PC, use Download poster, then attach it yourself.")}})});
if($("wNum"))$("wNum").oninput=function(){this.value=this.value.replace(/\D/g,"").slice(0,10)};
if($("wSize"))$("wSize").value=C.size;if($("wShort"))$("wShort").checked=!!C.short;
try{$("wName").value=localStorage.getItem(KEY)||""}catch(e){}
fill();
})();
