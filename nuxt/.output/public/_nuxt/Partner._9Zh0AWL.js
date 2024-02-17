import{_ as w}from"./index.35-IisUm.js";import{_ as v}from"./Input.7_nrv69m.js";import{d as y,_ as A,a as E,b as V,c as S}from"./SelectScrollDownButton.qa58PwIX.js";import{_ as F,u as L,c,b as o,d as s,w as a,g as p,o as r,f as m,F as T,r as C,i as D,t as P}from"./entry.816Gyrxv.js";const R={components:{},setup(){L({title:"Join the Future of Real Estate - Partner with Tomorrow Luxury Property",description:"Join Tomorrow Luxury Property and pioneer a new era in real estate. Our vision is simple: empower your growth and redefine partnership. Opt for our Full-Time offer with benefits like high commission splits and comprehensive support, or the Remote/Referral route for flexible, commitment-free earnings. Let's build success together."})},data(){return{fullName:null,email:null,phone:null,salesVolume:null,salesVolumeOptions:["50K AED - 100K AED","100K AED - 200K AED","200K AED - 300K AED","300K AED - 400K AED","400K AED - 500K AED","Above 500K AED"]}},mounted(){this.salesVolume=this.salesVolumeOptions[0]},methods:{async submitForm(){if(this.fullName&&this.email&&this.phone&&this.salesVolume){const n=await this.$store.dispatch("joinAsAgent",{fullName:this.fullName,email:this.email,phone:this.phone,salesVolume:this.salesVolume,status:"DRAFT"});n.message&&this.$store.commit("SET_TOASTER_MSG",{title:"✅ Success",description:n.message})}else this.$store.commit("SET_TOASTER_MSG",{title:"Please fill all the fields first.",variant:"destructive"})}}},k={class:"bg-white text-gray-900 px-4"},N=p('<header class="pt-48 md:pt-64 md:px-28 md:pl-40 pb-32 text-left bg-gray-100 bg-opacity-50"><div class="flex flex-col gap-32 items-center md:items-end w-fit"><div class="w-fit"><div class="w-fit"><p class="text-2xl md:text-4xl font-bold w-fit">We&#39;re Looking</p><p class="text-5xl md:text-7xl font-bold w-fit mt-2 md:mt-4"> For Partners </p></div><p class="mt-6 text-xl md:text-4xl w-fit font-semibold"> We Made Real Estate <span class="text-2xl md:text-5xl w-fit font-extrabold">Brokerage</span> Simple, Plug And Play </p></div><div class="w-fit mt-2 md:mt-8 relative"><svg width="40" height="40" viewBox="0 0 66 58" fill="none" xmlns="http://www.w3.org/2000/svg" class="text-right"><path d="M19.664 0.240001L33.104 22.896L46.544 0.240001L65.872 0.240001L33.104 57.2L0.208 0.240001L19.664 0.240001Z" fill="#302CFF"></path></svg></div></div></header>',1),K={class:"py-12"},M=p('<h2 class="text-2xl md:text-3xl font-bold text-center"> Join the Future of Real Estate </h2><p class="mt-3 text-center text-gray-600 text-lg md:text-xl josefin-slab"> Partner with Tomorrow Luxury property. Simplifying Success in Real Estate </p><p class="md:w-[47%] text-justify mt-8 text-lg mx-auto"> At Tomorrow Luxury Property, we redefine the essence of real estate partnership. Our mission is to empower your entrepreneurial spirit by providing a seamless, efficient, and rewarding real estate brokerage experience. With us, you are not just an agent; you become an integral partner in a journey of mutual growth and success. </p><div class="mt-8 mx-auto max-w-4xl grid grid-cols-1 md:grid-cols-2 gap-8"><div class="border-2 border-[#00000090] p-6 text-center bg-[#302CFF0D]"><h3 class="text-xl text-center text-[#302CFF] font-semibold border-2 border-[#302CFF50] w-fit px-8 py-3 mx-auto"> Full-Time </h3><p class="mt-4 text-lg font-bold"> AED 2,500 <span class="text-sm font-normal">/billed annually</span></p><div class="w-[98%] mx-auto text-center"><p class="mt-8 text-lg text-left"> Company <span class="font-bold">Visa &amp; Medical</span></p><p class="text-lg mt-2 text-left"> Commission Split <span class="font-bold">Agent: 90% | Company: 10%</span></p><p class="text-lg mt-2 text-left"><span class="font-bold">Flexible Work</span> Arrangements &amp; <span class="font-bold">Office space</span></p><p class="text-lg mt-2 text-left"> Comprehensive <span class="font-bold">Training and Development</span></p><p class="text-lg mt-2 text-left"><span class="font-bold">Unlimited</span> Property Listings </p><p class="text-lg mt-2 text-left"> Marketing and Advertising Support </p><p class="text-lg mt-2 text-left">Recognition and Rewards</p></div></div><div class="border-2 border-[#00000090] p-6 text-center"><h3 class="text-xl text-center font-semibold border w-fit px-8 py-3 mx-auto"> Remote/Referral </h3><p class="mt-4 text-lg font-bold"> AED 30,000 <span class="text-lg font-normal">/one time</span></p><div class="w-[98%] mx-auto"><p class="mt-8 text-lg text-left"> Enjoy the flexibility of working remotely with a one-time fee of AED 30,000 and a favorable commission split, without the need for a full-time commitment. </p><p class="mt-4 text-lg text-center"> Commission Split <br><span class="font-bold">Agent: 80% - 20% Company</span></p></div></div></div>',4),O={class:"mt-8 text-center"},j={class:"px-4 md:px-28 py-24 bg-gray-100/50 md:bg-gray-100"},B={class:"flex flex-wrap justify-between"},I=p('<div class="flex flex-col justify-between"><div><h2 class="text-3xl font-bold text-left">LETS CHAT</h2><div class="mt-8 mx-auto text-left"><p class="text-xl font-bold"> Launch Your Dubai Real Estate Career In Just 10 Minutes! </p><p class="mt-5 text-xl font-bold"> Experience Our Hassle-Free, Plug-And-Play Model. </p><p class="mt-5 text-xl font-bold"> Enjoy An Unmatched Commission Split: 90% For Agents, 10% For The Company. </p><p class="mt-5 text-xl font-bold"> Join Us And Elevate Your Real Estate Success Today! </p></div></div><svg width="40" height="40" viewBox="0 0 66 58" fill="none" xmlns="http://www.w3.org/2000/svg" class="relative mt-28 left-[0%] -rotate-90"><path d="M19.664 0.240001L33.104 22.896L46.544 0.240001L65.872 0.240001L33.104 57.2L0.208 0.240001L19.664 0.240001Z" fill="#302CFF"></path></svg></div>',1),U={class:"mt-8 md:mt-0 grid grid-cols-1 gap-4 w-[100%] md:w-[25%]"},W=o("span",null,"What is your individual yearly commission volume!",-1),J=o("span",{class:"text-sm"}," By submitting this form I accept the Privacy Policy and Terms of Service. ",-1);function Y(n,l,G,H,t,u){const d=w,i=v,x=A,f=E,h=V,g=S,_=y;return r(),c("div",k,[N,o("section",K,[M,o("div",O,[s(d,{class:"bg-blue-600 text-lg font-semibold rounded-none px-6 py-8 text-white mt-4"},{default:a(()=>[m("Subscribe Now")]),_:1})])]),o("section",j,[o("div",B,[I,o("div",U,[s(i,{modelValue:t.fullName,"onUpdate:modelValue":l[0]||(l[0]=e=>t.fullName=e),placeholder:"Full Name"},null,8,["modelValue"]),s(i,{modelValue:t.email,"onUpdate:modelValue":l[1]||(l[1]=e=>t.email=e),placeholder:"Email Id",type:"email"},null,8,["modelValue"]),s(i,{modelValue:t.phone,"onUpdate:modelValue":l[2]||(l[2]=e=>t.phone=e),placeholder:"Mobile No"},null,8,["modelValue"]),W,s(_,{class:"pt-0",modelValue:t.salesVolume,"onUpdate:modelValue":l[3]||(l[3]=e=>t.salesVolume=e)},{default:a(()=>[s(f,{class:"w-[100%]",id:"commission"},{default:a(()=>[s(x,{placeholder:"What Is Your Individual Yearly Commission Value?"})]),_:1}),s(g,{class:"w-[100%]",position:"popper"},{default:a(()=>[(r(!0),c(T,null,C(t.salesVolumeOptions,(e,b)=>(r(),D(h,{class:"w-[100%]",key:b,value:e},{default:a(()=>[m(P(e),1)]),_:2},1032,["value"]))),128))]),_:1})]),_:1},8,["modelValue"]),J,s(d,{class:"mt-4 w-fit rounded-none font-semibold px-8 py-6",onClick:u.submitForm},{default:a(()=>[m("Submit")]),_:1},8,["onClick"])])])])])}const X=F(R,[["render",Y]]);export{X as default};
