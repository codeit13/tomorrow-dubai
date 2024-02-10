import{_ as p}from"./index.jaLpxxmC.js";import{_ as c}from"./Input.35oAtVwn.js";import{u}from"./index.WDvgD4sR.js";import{_ as h,c as x,a as e,b as l,w as i,f as _,o as f,e as m}from"./entry.Grc7pGnp.js";import"./vue.f36acd1f.iKzSNLwv.js";const b={components:{Button:p,Input:c},data(){return{name:null,email:null,phone:null,moreInfo:null}},setup(){u({title:"Contact us | Tomorrow Luxury Property",description:"Get in contact with Tomorrow Luxury Property Real Estate today by filling in the form and a member of our team will get back to you shortly."})},methods:{async submitContactForm(){if(this.name&&this.email&&this.phone){const d={listingId:this.propertyId,name:this.name,email:this.email,phone:this.phone,moreInfo:this.moreInfo},t=await this.$store.dispatch("submitContactForm",d);t.message?this.$store.commit("SET_TOASTER_MSG",{title:t.message}):this.$store.commit("SET_TOASTER_MSG",{title:"Something went wrong. Please try again later."})}else this.$store.commit("SET_TOASTER_MSG",{title:"Please fill al the required fields first."})},openWhatsapp(){window.open("https://wa.me/+971581677220?text=Hi, I am interested in your property.")},openCall(){window.open("tel:+971581677220","_blank")}}},w={class:"bg-white p-4 pt-16 md:p-20"},y={class:"text-center"},g=e("div",null,[e("span",{class:"text-2xl"},"SAY HELLO TO "),e("span",{class:"text-2xl font-semibold"},"LUXURY PROPERTY DUBAI UAE.")],-1),C=e("p",{class:"text-lg text-black font-bold mt-12 mb-4"}," In Search Of Professional Guidance In Real Estate? ",-1),k=e("span",{class:"inline-flex md:w-[500px]"}," Our Tomorrow agents are ready to assist you with your property buying, renting, or selling needs. Embark on your real estate journey with a trusted expert by your side ",-1),E={class:"flex justify-center gap-10 my-12"},T=e("svg",{class:"mx-auto mt-6 text-gray-800",xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},[e("path",{d:"m6 9 6 6 6-6"})],-1),v={class:"mt-20 text-center md:w-[50%] mx-auto"},O=e("h2",{class:"text-3xl mb-10 font-semibold montserrat-font"},"CONTACT FORM",-1),S={class:"mt-4"},I={class:"flex flex-col space-y-8"},V=_('<div class="mt-16 md:w-[70%] mx-auto bg-gray-200 px-4 md:px-20 py-6"><p class="text-2xl font-semibold">Head Office</p><p class="mt-10"> Downtown Dubai, UAE </p><p class="mt-6">CEO@TOMORROWDUBAI.COM</p><p class="mt-2">+971 581677220</p></div>',1);function A(d,t,L,M,o,a){const r=p,n=c;return f(),x("div",w,[e("div",y,[g,C,k,e("div",E,[l(r,{onClick:a.openWhatsapp,class:"rounded-none px-6 md:px-10 py-6 border-2 transition-all hover:text-xl border-[#000] bg-white text-sm md:text-lg font-semibold text-[#25D366]",variant:"outline"},{default:i(()=>[m(" WhatsApp ")]),_:1},8,["onClick"]),l(r,{onClick:a.openCall,class:"rounded-none px-6 md:px-10 py-6 border-2 transition-all hover:text-xl border-[#000] bg-black text-nowrap text-sm md:text-lg font-semibold text-[#e3e3e3]",variant:"outline"},{default:i(()=>[m("Call Now")]),_:1},8,["onClick"])]),T]),e("div",v,[O,e("div",S,[e("div",I,[l(n,{class:"placeholder-black",modelValue:o.name,"onUpdate:modelValue":t[0]||(t[0]=s=>o.name=s),placeholder:"FULL NAME"},null,8,["modelValue"]),l(n,{class:"placeholder-black",modelValue:o.email,"onUpdate:modelValue":t[1]||(t[1]=s=>o.email=s),placeholder:"EMAIL"},null,8,["modelValue"]),l(n,{class:"placeholder-black",modelValue:o.phone,"onUpdate:modelValue":t[2]||(t[2]=s=>o.phone=s),placeholder:"MOBILE"},null,8,["modelValue"]),l(n,{class:"placeholder-black h-32",modelValue:o.moreInfo,"onUpdate:modelValue":t[3]||(t[3]=s=>o.moreInfo=s),placeholder:"MESSAGE"},null,8,["modelValue"])]),l(r,{class:"bg-white text-[#302CFF] rounded-none border-[1px] border-[#302CFF] hover:text-white px-8 mt-4",onClick:a.submitContactForm},{default:i(()=>[m("Send")]),_:1},8,["onClick"])])]),V])}const P=h(b,[["render",A]]);export{P as default};
