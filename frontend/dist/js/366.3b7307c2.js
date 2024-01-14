"use strict";(self["webpackChunktomorrow_dubai"]=self["webpackChunktomorrow_dubai"]||[]).push([[366],{2366:function(t,e,o){o.r(e),o.d(e,{default:function(){return C}});var s=o(3396),r=o(7139);const l={class:"bg-white px-6 md:px-28 py-6 md:py-8"},i={class:"flex justify-between text-center"},a=(0,s._)("h1",{class:"text-3xl font-extrabold josefin-slab mb-20"},"OFF PLAN",-1),n=(0,s._)("h1",null,null,-1),p={class:"grid grid-cols-1 md:grid-cols-3 gap-14 mt-12 mx-auto"},c=["onClick"],m=["src"],d={class:"items-center gap-6 border px-4 w-full text-xl font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent text-white bg-black/50 absolute bottom-[102px] md:bottom-[115px] py-6 montserrat-font"},f={class:"text-sm md:text-2xl font-extrabold"},u={class:"flex items-start gap-1"},g=(0,s._)("svg",{xmlns:"http://www.w3.org/2000/svg",class:"w-4 h-4 md:w-6 md:h-6",viewBox:"0 -960 960 960",fill:"#fff"},[(0,s._)("path",{d:"M480-480q33 0 56.5-23.5T560-560q0-33-23.5-56.5T480-640q-33 0-56.5 23.5T400-560q0 33 23.5 56.5T480-480Zm0 294q122-112 181-203.5T720-552q0-109-69.5-178.5T480-800q-101 0-170.5 69.5T240-552q0 71 59 162.5T480-186Zm0 106Q319-217 239.5-334.5T160-552q0-150 96.5-239T480-880q127 0 223.5 89T800-552q0 100-79.5 217.5T480-80Zm0-480Z"})],-1),x={class:"text-sm md:text-lg"},b={class:"p-4 pb-8 w-full bg-gray-100"},w={class:"text-sm md:text-lg font-semibold"},T={class:"text-[0.85rem] md:text-[1rem] josefin-slab mt-2"};function _(t,e,o,_,h,v){return(0,s.wg)(),(0,s.iD)("div",l,[(0,s._)("div",i,[(0,s._)("span",{class:"text-xl font-extrabold josefin-slab mb-20 cursor-pointer",onClick:e[0]||(e[0]=e=>t.$router.go(-1))},(0,r.zw)("< Back")),a,n]),(0,s._)("div",p,[((0,s.wg)(!0),(0,s.iD)(s.HY,null,(0,s.Ko)(v.offPlanProperties,((t,e)=>((0,s.wg)(),(0,s.iD)("div",{onClick:e=>v.goToProperty(t),class:"relative cursor-pointer w-fit",key:e},[(0,s._)("img",{src:t.image,alt:"Property",class:"w-[513px] h-auto",style:{"aspect-ratio":"3/4","object-fit":"cover"}},null,8,m),(0,s._)("div",d,[(0,s._)("p",f,(0,r.zw)(t.name),1),(0,s._)("div",u,[g,(0,s._)("span",x,(0,r.zw)(t.address),1)])]),(0,s._)("div",b,[(0,s._)("p",w,(0,r.zw)(t.subtitle),1),(0,s._)("p",T,(0,r.zw)(t.completionText),1)])],8,c)))),128))])])}o(560);var h=o(65),v={data(){return{}},computed:{...(0,h.rn)(["properties"]),offPlanProperties(){let t=JSON.parse(JSON.stringify(this.properties));return t?t.map((t=>(t.name=t.address.toUpperCase().replaceAll("-"," ").replaceAll("."," "),t.subtitle=t.price?`STARTING PRICE - AED ${t.price.toLocaleString("en-US")}`:"AMAZING STARTING PRICES",t.image=t.img1||o(9347),t.completionText=t.yearBuilt?`Completed in ${t.yearBuilt}`:"Completed",t))):[]}},methods:{goToProperty(t){if(t&&t.title){const e=t.title.toLowerCase().replace(/ /g,"-").replace(/-$/g,"");this.$router.push(`/property/${e}`)}else console.log("No property found")}}},y=o(89);const q=(0,y.Z)(v,[["render",_]]);var C=q},9347:function(t,e,o){t.exports=o.p+"img/02.fa9da51b.png"}}]);
//# sourceMappingURL=366.3b7307c2.js.map