import{u as m}from"./vue.f36acd1f.iKzSNLwv.js";import{_ as u,m as f,c as n,a as s,F as g,r as h,o as c,t as o}from"./entry.Grc7pGnp.js";const _={data(){return{}},setup(){m({title:"Exclusive Off-Plan Investment Opportunities in Dubai's Thriving Real Estate Market",meta:[{name:"description",content:"At Tomorrow Luxury Property, you will receive comprehensive information on the latest off-plan projects and developments in Palm Jebel Ali, Palm Jumeirah, Dubai Island, and Downtown Dubai, UAE"}]})},computed:{...f(["listings"]),offPlanProperties(){let e=JSON.parse(JSON.stringify(this.listings));return e?e.map(t=>(t.name=t.title,t.subtitle=t.price?`STARTING PRICE - AED ${t.price.toLocaleString("en-US")}`:"AMAZING STARTING PRICES",t.image=t.img1||t.images[0],t.completionText=t.yearBuilt?`Completed in ${t.yearBuilt}`:"Completed",t)).filter(t=>t.isOffPlan):[]}},methods:{addMetaTags({title:e,description:t}){if(!this.isMetaTagsAdded){document.title=e;const a=document.createElement("meta");a.setAttribute("name","title"),a.setAttribute("content",e),document.querySelector("head").appendChild(a);const i=document.createElement("meta");i.setAttribute("name","description"),i.setAttribute("content",t),document.querySelector("head").appendChild(i)}},goToProperty(e){if(e&&e.propertyName&&e.title&&e.address){const t=e.propertyName.trim().replaceAll(" ","-").replaceAll(",","").replaceAll(".","").toLowerCase(),a=e.title.trim().replaceAll(" ","-").replaceAll(",","").replaceAll(".","").toLowerCase().trim(),i=e.address.trim().replaceAll(" ","-").replaceAll(",","").replaceAll(".","").toLowerCase().trim();this.$router.push(`/listing/${i}/${t}/${a}`)}else console.log("No listing found")}}},x={class:"bg-white px-6 md:px-28 py-6 md:py-8"},p=s("div",{class:"mt-6"},[s("h1",{class:"text-2xl md:text-2xl font-extrabold montserrat-font mb-20"}," OFF PLAN ")],-1),b={class:"grid grid-cols-1 md:grid-cols-3 gap-4 mt-12 mx-auto"},T=["onClick"],A={class:"relative"},v=["src"],w={class:"items-center gap-6 border px-4 w-full text-xl font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent text-white bg-black/50 py-6 montserrat-font absolute bottom-0 overflow-hidden text-ellipsis"},P={class:"text-sm md:text-2xl font-extrabold montserrat-font mr-10"},q={class:"flex items-start gap-1"},N=s("svg",{xmlns:"http://www.w3.org/2000/svg",class:"w-4 h-4 md:w-6 md:h-6",viewBox:"0 -960 960 960",fill:"#fff"},[s("path",{d:"M480-480q33 0 56.5-23.5T560-560q0-33-23.5-56.5T480-640q-33 0-56.5 23.5T400-560q0 33 23.5 56.5T480-480Zm0 294q122-112 181-203.5T720-552q0-109-69.5-178.5T480-800q-101 0-170.5 69.5T240-552q0 71 59 162.5T480-186Zm0 106Q319-217 239.5-334.5T160-552q0-150 96.5-239T480-880q127 0 223.5 89T800-552q0 100-79.5 217.5T480-80Zm0-480Z"})],-1),C={class:"text-sm md:text-lg"},S={class:"p-4 pb-8 w-full bg-gray-100"},E={class:"text-sm md:text-lg font-semibold"},$={class:"text-[0.85rem] md:text-[1rem] josefin-slab mt-2"};function k(e,t,a,i,I,r){return c(),n("div",x,[p,s("div",b,[(c(!0),n(g,null,h(r.offPlanProperties,(l,d)=>(c(),n("div",{onClick:L=>r.goToProperty(l),class:"relative cursor-pointer w-fit",key:d},[s("div",A,[s("img",{src:l.image,alt:"Property",class:"w-[613px] h-auto",style:{"aspect-ratio":"3/4","object-fit":"cover"}},null,8,v),s("div",w,[s("p",P,o(l.name),1),s("div",q,[N,s("span",C,o(l.address),1)])])]),s("div",S,[s("p",E,o(l.subtitle),1),s("p",$,o(l.completionText),1)])],8,T))),128))])])}const B=u(_,[["render",k]]);export{B as default};
