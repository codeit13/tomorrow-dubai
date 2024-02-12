import{_ as l,m as d,u as p,c as o,b as t,F as _,r as u,o as a,t as n}from"./entry.O4NrzpTr.js";const h={data(){return{}},computed:{...d(["agents"])},async mounted(){await this.$store.dispatch("fetchAgents")},setup(){p({title:"Agents | Tomorrow Luxury Property",description:"Explore properties at amazing neighborhoods in Dubai."})},methods:{goToAgent(e){const r=e.name.trim().replaceAll(" ","-");this.$router.push(`/agent/${r}`)}}},m={class:"bg-white p-4 md:py-8"},g=t("div",{class:"text-center"},[t("h1",{class:"text-2xl font-semibold"},"AGENT/ PARTNER"),t("span",{class:"text-gray-800"},"Our Diversity Makes Us Great")],-1),x={class:"grid grid-cols-1 md:grid-cols-3 gap-4 mt-12 md:w-[75%] mx-auto"},b=["onClick"],f=["src"],v={class:"px-0 pb-8 w-fit"},y=t("br",null,null,-1),A={class:"text-xl font-bold uppercase"},$=t("br",null,null,-1),k={class:"text-sm"},w=t("br",null,null,-1),T={class:"text-sm"};function E(e,r,N,S,B,c){return a(),o("div",m,[g,t("div",x,[(a(!0),o(_,null,u(e.agents,(s,i)=>(a(),o("div",{onClick:D=>c.goToAgent(s),class:"relative cursor-pointer",key:i},[t("img",{src:s.img,alt:"Agent Photo",class:"h-auto",width:"400",style:{"aspect-ratio":"1/1","object-fit":"cover"}},null,8,f),t("div",v,[y,t("span",A,n(s.name),1),$,t("span",k,n(s.email),1),w,t("span",T,n(s.phone),1)])],8,b))),128))])])}const C=l(h,[["render",E]]);export{C as default};
