"use strict";(self["webpackChunktomorrow_dubai"]=self["webpackChunktomorrow_dubai"]||[]).push([[878],{2878:function(e,t,s){s.r(t),s.d(t,{default:function(){return E}});var o=s(3396),r=s(9242),l=s(7139);const i={class:"bg-white"},n={class:"relative"},a=["src"],c={class:"absolute top-0 left-0 right-0 bottom-0"},u={class:"absolute top-[58px] md:top-[68px] left-0 right-0 bottom-0 flex flex-col justify-center items-start text-left text-white bg-black bg-opacity-50 px-6 md:px-28"},d=(0,o._)("h2",{class:"text-2xl font-bold uppercase tracking-wide montserrat-font"}," How Much is My ",-1),p=(0,o._)("h2",{class:"text-6xl font-bold uppercase tracking-wide montserrat-font mt-1"}," House Worth? ",-1),f={class:"flex space-x-2 mt-8"},g={key:0,class:"px-6 md:px-28 pb-40 mt-40"},b=(0,o._)("h2",{class:"text-3xl font-extrabold josefin-slab mb-12"}," Our Exclusive Homes ",-1),m={class:"grid grid-cols-1 md:grid-cols-3 gap-4"},h=["onClick"],x=["src"],v={class:"inline-flex items-center border px-2.5 py-0.5 w-fit josefin-slab text-xl font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent text-white bg-black/10 absolute top-4 right-4"},w={class:"p-4"},y={class:"text-lg font-bold"},k={class:"text-sm"},_={class:"text-sm mt-2"},A=["onClick"];function C(e,t,C,T,S,$){const P=(0,o.up)("Header");return(0,o.wg)(),(0,o.iD)("div",i,[(0,o._)("div",n,[(0,o._)("img",{src:s(3814),alt:"Luxury Home",class:"w-full h-auto aspect-[1/1] md:aspect-[16/7]",style:{"object-fit":"cover"}},null,8,a),(0,o._)("div",c,[(0,o.Wm)(P),(0,o._)("div",u,[d,p,(0,o._)("div",f,[(0,o.wy)((0,o._)("input",{"onUpdate:modelValue":t[0]||(t[0]=e=>S.houseAddress=e),class:"flex w-[62vw] md:w-[30vw] border border-input bg-background px-3 py-2 text-sm text-black ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",placeholder:"Enter your Full Address",onKeyup:t[1]||(t[1]=(0,r.D2)(((...e)=>$.searchClick&&$.searchClick(...e)),["enter"]))},null,544),[[r.nr,S.houseAddress]]),(0,o._)("button",{onClick:t[2]||(t[2]=(...e)=>$.searchClick&&$.searchClick(...e)),class:"inline-flex items-center justify-center text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 h-10 px-4 py-2 bg-blue-500 hover:bg-blue-700 text-white"}," Search ")])])])]),$.exclusiveProperties&&$.exclusiveProperties.length?((0,o.wg)(),(0,o.iD)("div",g,[b,(0,o._)("div",m,[((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)($.exclusiveProperties,((e,t)=>((0,o.wg)(),(0,o.iD)("div",{class:"relative cursor-pointer hover:bg-gray-100 rounded-sm border-[1px] border-[#00000062]",onClick:t=>$.goToProperty(e),key:t},[(0,o._)("img",{src:e.image,alt:"Property",class:"w-full h-auto",style:{"aspect-ratio":"300 / 200","object-fit":"cover"}},null,8,x),(0,o._)("div",v,(0,l.zw)(e.tag),1),(0,o._)("div",w,[(0,o._)("p",y,"AED "+(0,l.zw)(e.price),1),(0,o._)("p",k,(0,l.zw)(e.features),1),(0,o._)("p",_,(0,l.zw)(e.address),1),(0,o._)("p",{onClick:t=>$.goToProperty(e),class:"text-sm mt-4 text-blue-600 hover:text-blue-800 cursor-pointer"},(0,l.zw)(e.buttonText),9,A)])],8,h)))),128))])])):(0,o.kq)("",!0)])}s(560);var T=s(6546),S=s(65),$={components:{Header:T.Z},head:{meta:[{name:"title",content:"Sell Your Home With Tomorrow Luxury Property"},{name:"description",content:"Whether you're preparing to sell or seeking guidance, we offer data-driven insights and expert advice tailored to your local area."}]},data(){return{open:!1,houseAddress:null}},computed:{...(0,S.rn)(["listings","blogs"]),exclusiveProperties(){let e=JSON.parse(JSON.stringify(this.listings));return e?e.map((e=>(e.image=e.img1||e.images[0],e.buttonText=`${e.homeType?.toUpperCase()} FOR SALE`,e.tag="Exclusive",e.features=`${e.bed} BEDS | ${e.bath} BATHS | ${e.sqFt} SQ FT`,e))).slice(0,3):[]}},async mounted(){console.log("mounted")},methods:{searchClick(){this.houseAddress?this.$router.push(`/house-worth/${this.houseAddress}`):this.$store.commit("SET_TOASTER_MSG",{title:"Please type your house address first."})},goToProperty(e){if(e&&e.propertyName&&e.title&&e.address){const t=e.propertyName.trim().replaceAll(" ","-").replaceAll(",","").replaceAll(".","").toLowerCase(),s=e.title.trim().replaceAll(" ","-").replaceAll(",","").replaceAll(".","").toLowerCase().trim(),o=e.address.trim().replaceAll(" ","-").replaceAll(",","").replaceAll(".","").toLowerCase().trim();this.$router.push(`/listing/${o}/${t}/${s}`)}else console.log("No listing found")}}},P=s(89);const H=(0,P.Z)($,[["render",C]]);var E=H},3814:function(e,t,s){e.exports=s.p+"img/hero-bg.b19bc25d.png"}}]);
//# sourceMappingURL=878.0618efdd.js.map