<template>
  <div class="bg-white p-4 pt-16 md:p-20">
    <div class="text-center">
      <div>
        <span class="text-2xl">SAY HELLO TO </span>
        <span class="text-2xl font-semibold">LUXURY PROPERTY DUBAI UAE.</span>
      </div>
      <p class="text-lg text-black font-bold mt-12 mb-4">
        In Search Of Professional Guidance In Real Estate?
      </p>
      <span class="inline-flex md:w-[500px]">
        Our Tomorrow agents are ready to assist you with your property buying,
        renting, or selling needs. Embark on your real estate journey with a
        trusted expert by your side
      </span>
      <div class="flex justify-center gap-10 my-12">
        <Button
          @click="openWhatsapp"
          class="rounded-none px-6 md:px-10 py-6 border-2 transition-all hover:text-xl border-[#000] bg-white text-sm md:text-lg font-semibold text-[#25D366]"
          variant="outline"
        >
          WhatsApp
        </Button>
        <Button
          @click="openCall"
          class="rounded-none px-6 md:px-10 py-6 border-2 transition-all hover:text-xl border-[#000] bg-black text-nowrap text-sm md:text-lg font-semibold text-[#e3e3e3]"
          variant="outline"
          >Call Now</Button
        >
      </div>

      <svg
        class="mx-auto mt-6 text-gray-800"
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="m6 9 6 6 6-6" />
      </svg>
    </div>
    <div class="mt-20 text-center md:w-[50%] mx-auto">
      <h2 class="text-3xl mb-10 font-semibold montserrat-font">CONTACT FORM</h2>
      <div class="mt-4">
        <div class="flex flex-col space-y-8">
          <Input
            class="placeholder-black"
            v-model="name"
            placeholder="FULL NAME"
          />
          <Input
            class="placeholder-black"
            v-model="email"
            placeholder="EMAIL"
          />
          <Input
            class="placeholder-black"
            v-model="phone"
            placeholder="MOBILE"
          />
          <Input
            class="placeholder-black h-32"
            v-model="moreInfo"
            placeholder="MESSAGE"
          />
        </div>
        <Button
          class="bg-white text-[#302CFF] rounded-none border-[1px] border-[#302CFF] hover:text-white px-8 mt-4"
          @click="submitContactForm"
          >Send</Button
        >
      </div>
    </div>
    <div class="mt-16 md:w-[70%] mx-auto bg-gray-200 px-4 md:px-20 py-6">
      <p class="text-2xl font-semibold">Head Office</p>
      <p class="mt-10">
        <!-- Burj Khalifa Office No. 7124
        <br /> -->
        Downtown Dubai, UAE
      </p>
      <p class="mt-6">CEO@TOMORROWDUBAI.COM</p>
      <p class="mt-2">+971 581677220</p>
    </div>
  </div>
</template>

<script>
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default {
  components: {
    Button,
    Input,
  },
  data() {
    return { name: null, email: null, phone: null, moreInfo: null };
  },
  setup() {
    useSeoMeta({
      title: "Contact us | Tomorrow Luxury Property",
      description:
        "Get in contact with Tomorrow Luxury Property Real Estate today by filling in the form and a member of our team will get back to you shortly.",
    });
  },
  methods: {
    async submitContactForm() {
      if (this.name && this.email && this.phone) {
        const payload = {
          listingId: this.propertyId,
          name: this.name,
          email: this.email,
          phone: this.phone,
          moreInfo: this.moreInfo,
        };

        const resp = await this.$store.dispatch("submitContactForm", payload);

        if (resp.message) {
          this.$store.commit("SET_TOASTER_MSG", {
            title: resp.message,
          });
        } else {
          this.$store.commit("SET_TOASTER_MSG", {
            title: "Something went wrong. Please try again later.",
          });
        }
      } else {
        this.$store.commit("SET_TOASTER_MSG", {
          title: "Please fill al the required fields first.",
        });
      }
    },
    openWhatsapp() {
      window.open(
        `https://wa.me/+971581677220?text=Hi, I am interested in your property.`
      );
    },
    openCall() {
      window.open(`tel:+971581677220`, "_blank");
    },
  },
};
</script>
