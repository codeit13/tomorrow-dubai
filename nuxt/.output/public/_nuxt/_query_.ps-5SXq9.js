import{_ as O}from"./Input.35oAtVwn.js";import{d as S,_ as V,a as y,b as A,c as Z}from"./SelectScrollDownButton.CQosRq4t.js";import{_ as I}from"./index.jaLpxxmC.js";import"./carousel.D4rMpP9B.js";import{u as B}from"./asyncData.rR2ldkMk.js";import{_ as E,m as N,c as n,a as t,b as c,F as x,r as g,d as v,w as d,t as a,u as M,G as D,o as l,h as L,e as b}from"./entry.Grc7pGnp.js";import{u as q}from"./index.WDvgD4sR.js";import"./vue.f36acd1f.iKzSNLwv.js";const F={components:{},data(){return{propertyOptions:["Property Type","Apartment","Penthouse","Townhouse","Plot"],minPriceOptions:["Min Price","1000000","2000000","5000000","10000000","20000000","50000000","100000000"],maxPriceOptions:["Max Price","1000000","2000000","5000000","10000000","20000000","50000000","100000000","200000000","300000000","500000000","1000000000"],isOffPlanOptions:["Yes","No"],property:null,minPrice:null,maxPrice:null,isOffPlan:null,searchText:null,displaySearchText:null,filteredProperties:[],similarProperties:[],isMetaTagsAdded:!1,filteredLocations:[]}},computed:{...N(["listings","neighbourhoodProperties","searchableLocations"])},watch:{listings:{handler(i){this.getValues(i)},deep:!0},property(){this.getValues()},minPrice(){this.getValues()},maxPrice(){this.getValues()},isOffPlan(){this.getValues()}},setup(){B(()=>{const r=M().params.query.replaceAll("-"," ")||"dubai";let u=D.find(m=>m.title.trim().toLowerCase()==r.trim().replaceAll("-"," ").toLowerCase());u?q({title:`Properties for sale in ${u.title} | Tomorrow Luxury Property`,description:u.description}):q({title:`Properties for sale in ${r.trim()} | Tomorrow Luxury Property`,description:"Discover Premium Villas and Residences for Sale in Dubai prestigeous Societies. Experience the pinnacle of luxury living in our fully authenticated 3 to 10 bedroom properties. Contact us today to find your dream mansion"})},"$sS1bXk8cEl")},mounted(){this.property=this.propertyOptions[0],this.minPrice=this.minPriceOptions[0],this.maxPrice=this.maxPriceOptions[0],this.isOffPlan=this.isOffPlanOptions[0],this.searchText=this.$route.params.query.replaceAll("-"," ")||"dubai",this.getValues()},methods:{searchTextChange(){this.searchText?(this.filteredLocations=[],this.searchableLocations.map(i=>{var r,u,m;return((r=i.address)!=null&&r.toLowerCase().trim().includes(this.searchText.toLowerCase().trim())||(u=i.title)!=null&&u.toLowerCase().trim().includes(this.searchText.toLowerCase().trim())||(m=i.name)!=null&&m.toLowerCase().trim().includes(this.searchText.toLowerCase().trim()))&&this.filteredLocations.push(i),i})):this.filteredLocations=[]},updateClick(){this.filteredLocations=[],this.getValues()},searchClick(i=null){this.filteredLocations=[],i!=null&&i.name?i.type=="LISTING"?(this.$router.push(`/search/${i==null?void 0:i.name.trim().replaceAll(" ","-").toLowerCase()}`),this.goToProperty(i)):this.$router.push(`/search/${i==null?void 0:i.name.trim().replaceAll(" ","-").toLowerCase()}`):this.query?this.$router.push(`/search/${this.query}`):this.$router.push("/search/dubai")},getValues(i=null){this.displaySearchText=this.searchText||"dubai";let r=this.searchText.toLowerCase().trim()||"dubai",u=this.minPrice==this.minPriceOptions[0]?!1:parseInt(this.minPrice),m=this.maxPrice==this.maxPriceOptions[0]?!1:parseInt(this.maxPrice),o=this.isOffPlan!=this.isOffPlanOptions[0],p=this.property==this.propertyOptions[0]?!1:this.property,f=i||this.listings;f&&(this.similarProperties=f.map(s=>{var _;return s.priceText=`AED ${(_=s.price)==null?void 0:_.toLocaleString("en-us")}`,s.locationText=s.address,s.image=s.img1||s.images[0],s.buttonText=`${s.homeType.toUpperCase()} FOR SALE`,s.tag=s.isOffPlan?"Off Plan":"Exclusive",s.featureText=`${s.bed} BEDS | ${s.bath} BATHS | ${s.sqFt} SQ FT`,s}).slice(0,3),f=f.filter(s=>(s.title.toLowerCase().includes(r)||s.address.toLowerCase().includes(r)||s.homeType.toLowerCase().includes(r))&&(u?s.price>=u:!0)&&(m?s.price<=m:!0)&&(o?s.isOffPlan==o:!0)&&(p?s.homeType==p:!0)),this.filteredProperties=f.map(s=>{var _;return{...s,title:s.title,location:s.address,featureText:`${s.bed} Beds | ${s.bath} Baths | ${s.sqFt} Sq Ft`,price:s.price,propertyImage:s.img1||s.images[0],description:s.description,amenities:s.amenities,buttonText:`${(_=s.homeType)==null?void 0:_.toUpperCase()} FOR SALE`,tag:s.isOffPlan?"Off Plan":"Exclusive"}}))},goToProperty(i){if(i&&i.propertyName&&i.title&&i.address){const r=i.propertyName.trim().replaceAll(" ","-").replaceAll(",","").replaceAll(".","").toLowerCase(),u=i.title.trim().replaceAll(" ","-").replaceAll(",","").replaceAll(".","").toLowerCase().trim(),m=i.address.trim().replaceAll(" ","-").replaceAll(",","").replaceAll(".","").toLowerCase().trim();this.$router.push(`/listing/${m}/${r}/${u}`)}else console.log("No listing found")}}},R={class:"bg-white"},U={class:"mx-auto mt-6 px-6 md:px-28"},j={class:"flex flex-wrap -mx-2"},Q={class:"w-[40%] px-2 mb-4"},G={class:"relative"},H=t("div",{class:"absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none"},[t("svg",{class:"w-4 h-4 text-gray-500 dark:text-gray-400","aria-hidden":"true",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 20 20"},[t("path",{stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"})])],-1),Y={key:0,class:"absolute md:max-w-[30vw] bg-white border border-gray-100 w-full mt-2"},z=["onClick"],X={key:0,class:"stroke-current absolute w-4 h-4 left-2 top-2",xmlns:"http://www.w3.org/2000/svg",height:"24",viewBox:"0 -960 960 960",width:"24"},$=t("path",{d:"M784-120 532-372q-30 24-69 38t-83 14q-109 0-184.5-75.5T120-580q0-109 75.5-184.5T380-840q109 0 184.5 75.5T640-580q0 44-14 83t-38 69l252 252-56 56ZM380-400q75 0 127.5-52.5T560-580q0-75-52.5-127.5T380-760q-75 0-127.5 52.5T200-580q0 75 52.5 127.5T380-400Z"},null,-1),J=[$],K={key:1,class:"stroke-current absolute w-4 h-4 left-2 top-2",xmlns:"http://www.w3.org/2000/svg",height:"24",viewBox:"0 -960 960 960",width:"24"},W=t("path",{d:"M120-120v-560h160v-160h400v320h160v400H520v-160h-80v160H120Zm80-80h80v-80h-80v80Zm0-160h80v-80h-80v80Zm0-160h80v-80h-80v80Zm160 160h80v-80h-80v80Zm0-160h80v-80h-80v80Zm0-160h80v-80h-80v80Zm160 320h80v-80h-80v80Zm0-160h80v-80h-80v80Zm0-160h80v-80h-80v80Zm160 480h80v-80h-80v80Zm0-160h80v-80h-80v80Z"},null,-1),ee=[W],te={key:2},se={class:"w-fit px-2 mb-4"},ie={class:"w-fit px-2 mb-4"},oe={class:"w-fit px-2 mb-4"},le={class:"w-fit px-2 mb-4"},re={class:"w-fit px-2 mb-4"},ne=t("hr",{class:"bg-black h-[2px] w-full"},null,-1),ae={class:"mx-auto mt-24 px-6 md:px-28"},ce={class:"text-center mb-28"},de=t("h2",{class:"text-lg mb-2"},"Search Results",-1),he={key:0,class:"text-2xl font-semibold"},ue=t("span",null,"Properties for Sale in ",-1),me={class:"capitalize font-semibold"},_e={key:1,class:"text-2xl font-semibold"},pe=t("span",null,"Properties for Sale in ",-1),fe=t("span",{class:"capitalize font-semibold"},a("dubai"),-1),xe=[pe,fe],ge={key:0,class:"text-center mb-28"},ve=t("h2",{class:"text-lg mb-2"},"No matching result",-1),be=t("p",{class:"text-2xl font-semibold"},"Try changing your Search...",-1),Te=[ve,be],Pe={key:1,class:"grid grid-cols-1 md:grid-cols-3 gap-4 my-20"},we=["onClick"],ke=["src"],Le={class:"inline-flex items-center border px-2.5 py-0.5 w-fit text-xl josefin-slab font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent text-white hover:text-black bg-black/20 text-secondary-foreground hover:bg-white/80 absolute top-4 right-4"},qe={class:"p-4"},Ce={class:"text-lg md:text-2xl font-bold"},Oe={class:"text-sm"},Se={class:"flex items-start gap-1 mt-2"},Ve=t("svg",{xmlns:"http://www.w3.org/2000/svg",height:"18",viewBox:"0 -960 960 960",fill:"#000",width:"18"},[t("path",{d:"M480-480q33 0 56.5-23.5T560-560q0-33-23.5-56.5T480-640q-33 0-56.5 23.5T400-560q0 33 23.5 56.5T480-480Zm0 294q122-112 181-203.5T720-552q0-109-69.5-178.5T480-800q-101 0-170.5 69.5T240-552q0 71 59 162.5T480-186Zm0 106Q319-217 239.5-334.5T160-552q0-150 96.5-239T480-880q127 0 223.5 89T800-552q0 100-79.5 217.5T480-80Zm0-480Z"})],-1),ye={class:"text-sm"},Ae={class:"text-sm mt-4 text-blue-600 hover:text-blue-800 cursor-pointer"},Ze={key:2,class:"mt-16"},Ie=t("h2",{class:"text-3xl font-semibold mt-32 mb-20"},"Similar Properties",-1),Be={class:"grid grid-cols-1 md:grid-cols-3 gap-4"},Ee=["onClick"],Ne=["src"],Me={class:"inline-flex items-center border px-2.5 py-0.5 w-fit josefin-slab text-xl font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent text-white bg-black/10 absolute top-4 right-4"},De={class:"p-4"},Fe={class:"text-lg font-bold"},Re={class:"text-sm"},Ue={class:"flex items-start gap-1 mt-2"},je=t("svg",{xmlns:"http://www.w3.org/2000/svg",height:"18",viewBox:"0 -960 960 960",fill:"#000",width:"18"},[t("path",{d:"M480-480q33 0 56.5-23.5T560-560q0-33-23.5-56.5T480-640q-33 0-56.5 23.5T400-560q0 33 23.5 56.5T480-480Zm0 294q122-112 181-203.5T720-552q0-109-69.5-178.5T480-800q-101 0-170.5 69.5T240-552q0 71 59 162.5T480-186Zm0 106Q319-217 239.5-334.5T160-552q0-150 96.5-239T480-880q127 0 223.5 89T800-552q0 100-79.5 217.5T480-80Zm0-480Z"})],-1),Qe={class:"text-sm"},Ge={class:"text-sm mt-4 text-blue-600 hover:text-blue-800 cursor-pointer"},He={class:"flex justify-center mb-40"};function Ye(i,r,u,m,o,p){const f=O,s=V,_=y,T=A,P=Z,w=S,C=I;return l(),n("div",R,[t("div",U,[t("div",j,[t("div",Q,[t("div",G,[H,c(f,{modelValue:o.searchText,"onUpdate:modelValue":r[0]||(r[0]=e=>o.searchText=e),onInput:p.searchTextChange,class:"block p-4 ps-10",placeholder:"Search By Title, Location,"},null,8,["modelValue","onInput"])]),o.filteredLocations&&o.filteredLocations.length?(l(),n("ul",Y,[(l(!0),n(x,null,g(o.filteredLocations.slice(0,6),(e,h)=>(l(),n("li",{key:h,onClick:k=>p.searchClick(e),class:"pl-8 pr-2 py-1 border-b-2 border-gray-100 relative cursor-pointer hover:bg-gray-50 hover:text-gray-900"},[e.type=="PROPERTY"?(l(),n("svg",X,J)):e.type=="LISTING"?(l(),n("svg",K,ee)):v("",!0),e.name?(l(),n("span",te,a(e.name)+", "+a(e.location),1)):v("",!0)],8,z))),128))])):v("",!0)]),t("div",se,[c(w,{modelValue:o.property,"onUpdate:modelValue":r[1]||(r[1]=e=>o.property=e)},{default:d(()=>[c(_,{id:"property-type"},{default:d(()=>[c(s,{placeholder:"Property Type"})]),_:1}),c(P,{position:"popper"},{default:d(()=>[(l(!0),n(x,null,g(o.propertyOptions,(e,h)=>(l(),L(T,{value:e,key:h},{default:d(()=>[b(a(e),1)]),_:2},1032,["value"]))),128))]),_:1})]),_:1},8,["modelValue"])]),t("div",ie,[c(w,{modelValue:o.minPrice,"onUpdate:modelValue":r[2]||(r[2]=e=>o.minPrice=e)},{default:d(()=>[c(_,{id:"min-price"},{default:d(()=>[c(s,{placeholder:"Min Price"})]),_:1}),c(P,{position:"popper"},{default:d(()=>[(l(!0),n(x,null,g(o.minPriceOptions,(e,h)=>(l(),L(T,{value:e,key:h},{default:d(()=>[b(a(parseInt(e)?"AED":null)+" "+a(parseInt(e)?parseInt(e).toLocaleString("en-us"):e),1)]),_:2},1032,["value"]))),128))]),_:1})]),_:1},8,["modelValue"])]),t("div",oe,[c(w,{modelValue:o.maxPrice,"onUpdate:modelValue":r[3]||(r[3]=e=>o.maxPrice=e)},{default:d(()=>[c(_,{id:"max-price"},{default:d(()=>[c(s,{placeholder:"Max Price"})]),_:1}),c(P,{position:"popper"},{default:d(()=>[(l(!0),n(x,null,g(o.maxPriceOptions,(e,h)=>(l(),L(T,{value:e,key:h},{default:d(()=>[b(a(parseInt(e)?"AED":null)+" "+a(parseInt(e)?parseInt(e).toLocaleString("en-us"):e),1)]),_:2},1032,["value"]))),128))]),_:1})]),_:1},8,["modelValue"])]),t("div",le,[c(w,{modelValue:o.isOffPlan,"onUpdate:modelValue":r[4]||(r[4]=e=>o.isOffPlan=e)},{default:d(()=>[c(_,{id:"off-plan"},{default:d(()=>[c(s,{placeholder:"Off-Plan"})]),_:1}),c(P,{position:"popper"},{default:d(()=>[(l(!0),n(x,null,g(o.isOffPlanOptions,(e,h)=>(l(),L(T,{value:e,key:h},{default:d(()=>[b(a(e=="Yes"?"Ready":"Off-Plan"),1)]),_:2},1032,["value"]))),128))]),_:1})]),_:1},8,["modelValue"])]),t("div",re,[c(C,{class:"w-full bg-blue-600 text-[1rem] rounded-none px-6 text-white",onClick:p.updateClick},{default:d(()=>[b(" Update ")]),_:1},8,["onClick"])])])]),ne,t("div",ae,[t("div",ce,[de,o.displaySearchText?(l(),n("p",he,[ue,t("span",me,a(o.displaySearchText),1)])):(l(),n("p",_e,xe))]),o.filteredProperties&&o.filteredProperties.length?v("",!0):(l(),n("div",ge,Te)),o.filteredProperties&&o.filteredProperties.length?(l(),n("div",Pe,[(l(!0),n(x,null,g(o.filteredProperties,(e,h)=>{var k;return l(),n("div",{onClick:ze=>p.goToProperty(e),class:"relative cursor-pointer hover:bg-gray-100 rounded-sm border-[1px] border-[#00000062]",key:h},[t("img",{src:e.propertyImage,alt:"Property",class:"w-full h-auto",style:{"aspect-ratio":"300 / 200","object-fit":"cover"}},null,8,ke),t("div",Le,a(e.tag),1),t("div",qe,[t("p",Ce," AED "+a((k=e.price)==null?void 0:k.toLocaleString("en-us")),1),t("p",Oe,a(e.featureText),1),t("div",Se,[Ve,t("p",ye,a(e.location),1)]),t("p",Ae,a(e.buttonText),1)])],8,we)}),128))])):(l(),n("div",Ze,[Ie,t("div",Be,[(l(!0),n(x,null,g(o.similarProperties,(e,h)=>(l(),n("div",{onClick:k=>p.goToProperty(e),class:"relative cursor-pointer hover:bg-gray-100 rounded-sm border-[1px] border-[#00000062]",key:h},[t("img",{src:e.image,alt:"Property",class:"w-full h-auto",width:"300",height:"200",style:{"aspect-ratio":"300 / 200","object-fit":"cover"}},null,8,Ne),t("div",Me,a(e.tag),1),t("div",De,[t("p",Fe,a(e.priceText),1),t("p",Re,a(e.featureText),1),t("div",Ue,[je,t("p",Qe,a(e.locationText),1)]),t("p",Ge,a(e.buttonText),1)])],8,Ee))),128))])])),t("div",He,[v("",!0)])])])}const it=E(F,[["render",Ye]]);export{it as default};