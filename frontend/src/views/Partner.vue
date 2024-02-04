<template>
  <div class="bg-white text-gray-900 px-4">
    <header
      class="pt-48 md:pt-64 md:px-28 md:pl-40 pb-32 text-left bg-gray-100 bg-opacity-50"
    >
      <div class="flex flex-col gap-32 items-center md:items-end w-fit">
        <div class="w-fit">
          <div class="w-fit">
            <p class="text-2xl md:text-4xl font-bold w-fit">We're Looking</p>
            <p class="text-5xl md:text-7xl font-bold w-fit mt-2 md:mt-4">
              For Partners
            </p>
          </div>
          <p class="mt-6 text-xl md:text-4xl w-fit font-semibold">
            We Made Real Estate
            <span class="text-2xl md:text-5xl w-fit font-extrabold"
              >Brokerage</span
            >
            Simple, Plug And Play
          </p>
        </div>
        <div class="w-fit mt-2 md:mt-8 relative">
          <svg
            width="40"
            height="40"
            viewBox="0 0 66 58"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            class="text-right"
          >
            <path
              d="M19.664 0.240001L33.104 22.896L46.544 0.240001L65.872 0.240001L33.104 57.2L0.208 0.240001L19.664 0.240001Z"
              fill="#302CFF"
            />
          </svg>
        </div>
      </div>
    </header>
    <section class="py-12">
      <h2 class="text-2xl md:text-3xl font-bold text-center">
        Join the Future of Real Estate
      </h2>
      <p class="mt-3 text-center text-gray-600 text-lg md:text-xl josefin-slab">
        Partner with Tomorrow Luxury property. Simplifying Success in Real
        Estate
      </p>
      <p class="md:w-[47%] text-justify mt-8 text-lg mx-auto">
        At Tomorrow Luxury Property, we redefine the essence of real estate
        partnership. Our mission is to empower your entrepreneurial spirit by
        providing a seamless, efficient, and rewarding real estate brokerage
        experience. With us, you are not just an agent; you become an integral
        partner in a journey of mutual growth and success.
      </p>
      <div class="mt-8 mx-auto max-w-4xl grid grid-cols-1 md:grid-cols-2 gap-8">
        <div class="border-2 border-[#00000090] p-6 text-center bg-[#302CFF0D]">
          <h3
            class="text-xl text-center text-[#302CFF] font-semibold border-2 border-[#302CFF50] w-fit px-8 py-3 mx-auto"
          >
            Full-Time
          </h3>
          <p class="mt-4 text-lg font-bold">
            AED 2,500 <span class="text-sm font-normal">/billed annually</span>
          </p>
          <div class="w-[98%] mx-auto text-center">
            <p class="mt-8 text-lg text-left">
              Company <span class="font-bold">Visa & Medical</span>
            </p>
            <p class="text-lg mt-2 text-left">
              Commission Split
              <span class="font-bold">Agent: 90% | Company: 10%</span>
            </p>
            <p class="text-lg mt-2 text-left">
              <span class="font-bold">Flexible Work</span> Arrangements &
              <span class="font-bold">Office space</span>
            </p>
            <p class="text-lg mt-2 text-left">
              Comprehensive
              <span class="font-bold">Training and Development</span>
            </p>
            <p class="text-lg mt-2 text-left">
              <span class="font-bold">Unlimited</span> Property Listings
            </p>
            <p class="text-lg mt-2 text-left">
              Marketing and Advertising Support
            </p>
            <p class="text-lg mt-2 text-left">Recognition and Rewards</p>
          </div>
        </div>
        <div class="border-2 border-[#00000090] p-6 text-center">
          <h3
            class="text-xl text-center font-semibold border w-fit px-8 py-3 mx-auto"
          >
            Remote/Referral
          </h3>
          <p class="mt-4 text-lg font-bold">
            AED 30,000 <span class="text-lg font-normal">/one time</span>
          </p>
          <div class="w-[98%] mx-auto">
            <p class="mt-8 text-lg text-left">
              Enjoy the flexibility of working remotely with a one-time fee of
              AED 30,000 and a favorable commission split, without the need for
              a full-time commitment.
            </p>
            <p class="mt-4 text-lg text-center">
              Commission Split <br />
              <span class="font-bold">Agent: 80% - 20% Company</span>
            </p>
          </div>
        </div>
      </div>
      <div class="mt-8 text-center">
        <Button
          class="bg-blue-600 text-lg font-semibold rounded-none px-6 py-8 text-white mt-4"
          >Subscribe Now</Button
        >
      </div>
    </section>
    <section class="px-4 md:px-28 py-24 bg-gray-100/50 md:bg-gray-100">
      <div class="flex flex-wrap justify-between">
        <div class="flex flex-col justify-between">
          <div>
            <h2 class="text-3xl font-bold text-left">LETS CHAT</h2>
            <div class="mt-8 mx-auto text-left">
              <p class="text-xl font-bold">
                Launch Your Dubai Real Estate Career In Just 10 Minutes!
              </p>
              <p class="mt-5 text-xl font-bold">
                Experience Our Hassle-Free, Plug-And-Play Model.
              </p>
              <p class="mt-5 text-xl font-bold">
                Enjoy An Unmatched Commission Split: 90% For Agents, 10% For The
                Company.
              </p>
              <p class="mt-5 text-xl font-bold">
                Join Us And Elevate Your Real Estate Success Today!
              </p>
            </div>
          </div>
          <svg
            width="40"
            height="40"
            viewBox="0 0 66 58"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            class="relative mt-28 left-[0%] -rotate-90"
          >
            <path
              d="M19.664 0.240001L33.104 22.896L46.544 0.240001L65.872 0.240001L33.104 57.2L0.208 0.240001L19.664 0.240001Z"
              fill="#302CFF"
            />
          </svg>
        </div>
        <div class="mt-8 md:mt-0 grid grid-cols-1 gap-4 w-[100%] md:w-[25%]">
          <Input v-model="fullName" placeholder="Full Name" />
          <Input v-model="email" placeholder="Email Id" type="email" />
          <Input v-model="phone" placeholder="Mobile No" />
          <span>What is your individual yearly commission volume!</span>
          <Select class="pt-0" v-model="salesVolume">
            <SelectTrigger class="w-[100%]" id="commission">
              <SelectValue
                placeholder="What Is Your Individual Yearly Commission Value?"
              />
            </SelectTrigger>
            <SelectContent class="w-[100%]" position="popper">
              <SelectItem
                class="w-[100%]"
                v-for="(option, i) in salesVolumeOptions"
                :key="i"
                :value="option"
                >{{ option }}</SelectItem
              >
            </SelectContent>
          </Select>
          <span class="text-sm">
            By submitting this form I accept the Privacy Policy and Terms of
            Service.
          </span>
          <Button
            class="mt-4 w-fit rounded-none font-semibold px-8 py-6"
            @click="submitForm"
            >Submit</Button
          >
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  SelectValue,
  SelectTrigger,
  SelectItem,
  SelectContent,
  Select,
} from "@/components/ui/select";

export default {
  components: {
    Button,
    Input,
    SelectValue,
    SelectTrigger,
    SelectItem,
    SelectContent,
    Select,
  },
  head: {
    title: "Dubai Real Estate Agent Partners",
    meta: [
      {
        name: "title",
        content: "Dubai Real Estate Agent Partners",
      },
      {
        name: "description",
        content:
          "Experience the industry's first-ever contact-to-close platform and transform your business with the nation's #1 residential brokerage.",
      },
    ],
  },
  data() {
    return {
      fullName: null,
      email: null,
      phone: null,
      salesVolume: null,
      salesVolumeOptions: [
        "50K AED - 100K AED",
        "100K AED - 200K AED",
        "200K AED - 300K AED",
        "300K AED - 400K AED",
        "400K AED - 500K AED",
        "Above 500K AED",
      ],
    };
  },
  mounted() {
    this.salesVolume = this.salesVolumeOptions[0];

    this.addMetaTags({
      title: "Dubai Real Estate Agent Partners ",
      description:
        "Experience the industry's first-ever contact-to-close platform and transform your business with the nation's #1 residential brokerage.",
    });
  },
  methods: {
    addMetaTags({ title, description }) {
      if (!this.isMetaTagsAdded) {
        document.title = title;
        const titleMetaTag = document.createElement("meta");
        titleMetaTag.setAttribute("name", "title");
        titleMetaTag.setAttribute("content", title);
        document.querySelector("head").appendChild(titleMetaTag);

        const descrMetaTag = document.createElement("meta");
        descrMetaTag.setAttribute("name", "description");
        descrMetaTag.setAttribute("content", description);
        document.querySelector("head").appendChild(descrMetaTag);
      }
    },
    async submitForm() {
      if (this.fullName && this.email && this.phone && this.salesVolume) {
        const resp = await this.$store.dispatch("joinAsAgent", {
          fullName: this.fullName,
          email: this.email,
          phone: this.phone,
          salesVolume: this.salesVolume,
          status: "DRAFT",
        });

        if (resp.message) {
          this.$store.commit("SET_TOASTER_MSG", {
            title: "✅ Success",
            description: resp.message,
          });
        }
      } else {
        this.$store.commit("SET_TOASTER_MSG", {
          title: "Please fill all the fields first.",
          variant: "destructive",
        });
      }
    },
  },
};
</script>

<style></style>
