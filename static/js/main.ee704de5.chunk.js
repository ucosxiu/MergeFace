(this["webpackJsonpmerge-face"]=this["webpackJsonpmerge-face"]||[]).push([[0],{50:function(e,t,a){e.exports=a(60)},55:function(e,t,a){},59:function(e,t,a){},60:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(8),i=a.n(c),o=(a(55),a(25)),l=a(106),s=a(102),u=a(103),m=a(40),p=a.n(m),d=a(105),f=a(95),g=a(104),h=a(108),v=a(101),E=a(99),b=a(100),x=a(98),j=function(e){var t=e.openAttribute,a=e.closeFunction,n=e.matchScreen;return r.a.createElement(h.a,{open:t,onClose:a,fullScreen:n},r.a.createElement(x.a,null,"\u62b1\u6b49"),r.a.createElement(E.a,null,r.a.createElement(b.a,null,"\u5f53\u524d\u9875\u9762\u6ca1\u6709\u8c03\u7528\u6444\u50cf\u5934\u7684\u6743\u9650,\u5982\u9700\u8bbf\u95ee\u5177\u6709\u8c03\u7528\u6444\u50cf\u5934\u6743\u9650\u7684\u9875\u9762",r.a.createElement("a",{href:"https://giorgiopeng.space/MergeFace"},"\u8bf7\u70b9\u51fb\u8fd9\u91cc"))),r.a.createElement(v.a,null,r.a.createElement(l.a,{onClick:a,color:"primary",autoFocus:!0},"\u77e5\u9053\u4e86")))},y=Object(s.a)((function(e){return{uploadDiv:{position:"relative",width:"150px",cursor:"pointer"},uploadFileInput:{opacity:"0",height:"100%",width:"100%",position:"absolute",left:"0",top:"0",zIndex:"2",cursor:"pointer"}}})),w=function(e){var t=e.fileRef,a=e.previewImg,n=y();return r.a.createElement("div",{className:n.uploadDiv},r.a.createElement(l.a,{variant:"contained",color:"primary"},"\u70b9\u51fb\u4e0a\u4f20"),r.a.createElement("input",{ref:t,type:"file",accept:"image/*",className:n.uploadFileInput,onChange:a}))},I=Object(s.a)((function(e){return{selfPhoto:{display:"flex",height:"300px",width:"100%",alignItem:"center",justifyContent:"center",border:"1px solid grey",marginBottom:"5px"},bottomUpload:{display:"flex",width:"100%",justifyContent:"center",marginTop:"5px",alignItems:"center"}}})),O=function(e){var t=e.matchScreen,a=e.selfImgData,c=e.setSelfImgData,i=Object(n.useState)(!1),s=Object(o.a)(i,2),u=s[0],m=s[1],p=Object(n.useRef)(),d=Object(n.useRef)(),f=Object(n.useRef)(),g=I();return Object(n.useEffect)((function(){if(p.current.files[0]&&p.current.files[0].size){console.log("re-draw");var e=new Image;e.src=a,e.style.transform=t?"rotate(90deg)":"",e.onload=function(){f.current.getContext("2d").drawImage(e,0,0,200,250),c(f.current.toDataURL("image/jpeg",p.current.files[0].size>19e5?19e5/p.current.files[0].size:1))}}}),[a]),r.a.createElement("div",null,r.a.createElement("div",{className:g.selfPhoto},r.a.createElement("video",{src:"",style:{display:"none"},ref:d}),r.a.createElement("canvas",{id:"canvas",width:"200",height:"250",ref:f})),r.a.createElement(l.a,{variant:"contained",color:"secondary",className:g.reShot,onClick:function(){navigator.mediaDevices?navigator.mediaDevices.getUserMedia({audio:!0,video:{width:200,height:250}}).then((function(e){console.log("getUserMedia:",e),d.current.srcObject=e,d.current.onloadedmetadata=function(e){d.current.play()},d.current.addEventListener("timeupdate",(function(){f.current.getContext("2d").drawImage(d.current,0,0,200,250)}))})):m(!0)}},"\u91cd\u62cd/\u6253\u5f00\u6444\u50cf\u5934"),r.a.createElement(l.a,{variant:"contained",color:"primary",className:g.shot,onClick:function(){console.log(d.current.srcObject),null!==d.current.srcObject&&(d.current.pause(),c(f.current.toDataURL("image/jpeg")))}},"\u62cd\u7167"),r.a.createElement("div",{className:g.bottomUpload},r.a.createElement("span",{style:{fontSize:"10px",color:"red"}},"\u4e5f\u53ef\u4ee5\u4e0a\u4f20\u56fe\u7247\u54e6"),r.a.createElement(w,{fileRef:p,previewImg:function(){null!==d.current.srcObject&&d.current.pause();var e=new FileReader;e.readAsDataURL(p.current.files[0]),e.onload=function(){c(e.result)}}})),r.a.createElement(j,{openAttribute:u,closeFunction:function(){return m(!1)},matchScreen:t}))},D=function(e){var t=Object(n.useRef)(),a=Object(n.useRef)(),c=e.matchScreen,i=e.uploadImgData,o=e.setUploadImgData,l=Object(s.a)((function(e){return{module:{display:"flex",flexDirection:"column",alignItems:"center"},moduleImg:{display:"flex",height:"300px",width:"100%",alignItems:"center",justifyContent:"center",border:"1px solid grey",marginBottom:"5px"},uploadFileInput:{opacity:"0",height:"100%",width:"100%",position:"absolute",left:"0",top:"0",zIndex:"2",cursor:"pointer"},uploadDiv:{position:"relative",width:"150px",cursor:"pointer"},uploadImg:{maxWidth:"200px",maxHeight:"250px"}}}))();return Object(n.useEffect)((function(){if(t.current.files[0]&&t.current.files[0].size){var e=document.createElement("canvas");e.width=200,e.height=250,e.getContext("2d").drawImage(a.current,0,0,200,250),o(e.toDataURL("image/jpeg",t.current.files[0].size>19e5?19e5/t.current.files[0].size:1))}}),[i]),r.a.createElement("div",{className:l.module},r.a.createElement("div",{className:l.moduleImg},r.a.createElement("img",{className:l.uploadImg,alt:"\u6a21\u677f\u7167\u7247",src:i,ref:a,style:c?{transform:"rotate(90deg)"}:{}})),r.a.createElement(w,{fileRef:t,previewImg:function(){console.log(t.current.files[0]);var e=new FileReader;e.readAsDataURL(t.current.files[0]),e.onload=function(){o(e.result)}}}))},R=(a(59),Object(s.a)((function(e){return{root:{flexGrow:2},paper:{padding:e.spacing(2),textAlign:"center",color:e.palette.text.secondary},resultImg:{maxWidth:"400px"}}})));var S=function(){var e=R(),t=Object(n.useState)(),a=Object(o.a)(t,2),c=a[0],i=a[1],s=Object(n.useState)(),m=Object(o.a)(s,2),h=m[0],v=m[1],E=Object(n.useState)(),b=Object(o.a)(E,2),x=b[0],j=b[1],y=Object(n.useRef)(),w=Object(n.useRef)(),I=Object(u.a)("(max-width:600px)");return r.a.createElement("div",{className:e.root},r.a.createElement(g.a,{container:!0,spacing:1,justify:"center"},r.a.createElement(g.a,{item:!0,xs:I?12:5},r.a.createElement(f.a,{className:e.paper},r.a.createElement(O,{matchScreen:I,selfImgData:c,setSelfImgData:i}))),r.a.createElement(g.a,{item:!0,xs:I?12:2},r.a.createElement(f.a,{className:e.paper,style:{backgroundColor:"pink",transform:I?"":"translateY(80px)"}},r.a.createElement(d.a,{required:!0,id:"filled-required",label:"api_key",inputRef:y,variant:"filled"}),r.a.createElement(d.a,{required:!0,id:"filled-required",label:"api_secret",inputRef:w,variant:"filled"}),r.a.createElement(l.a,{onClick:function(){var e=new FormData;e.append("api_key",y.current.value),e.append("api_secret",w.current.value),e.append("template_base64",h),e.append("merge_base64",c),p.a.ajax({type:"POST",url:"https://api-cn.faceplusplus.com/imagepp/v1/mergeface",data:e,processData:!1,contentType:!1,crossDomain:!0,success:function(e){"undefined"==typeof e.error_message?(console.log(e),j("data:image/jpg/png;base64,"+e.result)):alert("\u8bf7\u91cd\u65b0\u4e0a\u4f20\u7167\u7247")},error:function(e,t,a){console.log(e.responseText),alert("\u8bf7\u91cd\u65b0\u4e0a\u4f20\u7167\u7247")}})},style:{width:"100%",height:"100%",fontSize:"20px",marginTop:"10px"}},"+"))),r.a.createElement(g.a,{item:!0,xs:I?12:5},r.a.createElement(f.a,{className:e.paper},r.a.createElement(D,{matchScreen:I,uploadImgData:h,setUploadImgData:v}))),r.a.createElement(g.a,{item:!0,xs:I?12:10},r.a.createElement(f.a,{className:e.paper},r.a.createElement("img",{alt:"\u7ed3\u679c\u56fe",className:e.resultImg,src:x})))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(r.a.createElement(S,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[50,1,2]]]);
//# sourceMappingURL=main.ee704de5.chunk.js.map