import{u as l}from"./index.eAxEnfzI.js";import{_ as c,m as d,c as o,b as e,F as n,r as h,o as s,t as u}from"./entry.cIXOSRg3.js";const g={data(){return{}},computed:{...d(["neighbourhoodProperties"])},setup(){l({title:"Neighborhoods | Tomorrow Luxury Property",description:"Explore properties at amazing neighborhoods in Dubai."})},methods:{goToNeighborhoodProperty(t){t&&t.title?this.$router.push(`/search/${t.title.trim().replaceAll(" ","-").toLowerCase()}`):alert(t)}}},b={class:"bg-white px-6 md:px-28 md:p-8"},m=e("div",{class:"text-center my-20"},[e("h1",{class:"text-3xl josefin-slab font-extrabold"}," All neighborhood DUBAI , UAE ")],-1),p={class:"grid grid-cols-1 md:grid-cols-3 gap-4 mt-12"},_=["onClick"],f=e("div",{class:"absolute inset-0 bg-black opacity-30"},null,-1),x=["src"],v={class:"absolute bottom-0 w-full text-center font-bold text-2xl md:text-xl text-white p-4 pb-3 montserrat-font"};function w(t,$,k,A,N,i){return s(),o("div",b,[m,e("div",p,[(s(!0),o(n,null,h(t.neighbourhoodProperties,(r,a)=>(s(),o("div",{onClick:y=>i.goToNeighborhoodProperty(r),key:a,class:"rounded-lg border bg-card shadow-sm relative w-full cursor-pointer","data-v0-t":"card"},[f,e("img",{src:`/assets/images/neighbourhood/${a+1}.png`,alt:"DUBAILAND",class:"w-full h-36 object-cover",width:"350",height:"150",style:{"aspect-ratio":"350 / 150","object-fit":"cover"}},null,8,x),e("h3",v,u(r.title),1)],8,_))),128))])])}const P=c(g,[["render",w]]);export{P as default};