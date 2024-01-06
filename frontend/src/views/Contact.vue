<template>
  <div class="bg-white p-4 md:p-8">
    <div class="text-center">
      <h1 class="text-2xl font-semibold">
        SAY HELLO TO LUXURY PROPERTY DUBAI UAE.
      </h1>
      <p class="mt-4 text-gray-600">
        <span class="font-bold mb-4">
          In Search Of Professional Guidance In Real Estate?
        </span>
        <br />
        Our Customer Agents Are Ready To Assist You With
        <br />
        Your Property Buying, Renting, Or Selling Needs. Check
        <br />
        Our Expert Real Estate Agents With Trusted Expertise By Your Side.
      </p>
      <div class="flex justify-center mt-4">
        <Button class="mr-2" variant="outline"> Know More </Button>
        <Button variant="outline">Get Quote</Button>
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
    <div class="mt-8 text-center md:w-[50%] mx-auto">
      <h2 class="text-2xl font-semibold">CONTACT FORM</h2>
      <div class="mt-4">
        <div class="flex flex-col space-y-4">
          <Input v-model="name" placeholder="FULL NAME" />
          <Input v-model="email" placeholder="EMAIL" />
          <Input v-model="phone" placeholder="MOBILE" />
          <Input v-model="moreInfo" class="h-32" placeholder="MESSAGE" />
        </div>
        <Button @click="submitContactForm" class="mt-4">Send</Button>
      </div>
    </div>
    <div class="mt-16 md:w-[70%] mx-auto bg-gray-200 px-4 md:px-20 py-6">
      <h3 class="text-xl font-semibold">Head Office</h3>
      <p class="mt-8">
        Burj Khalifa Office No. 784
        <br />
        Downtown Dubai, UAE
      </p>
      <!-- <p class="mt-6">CEO@TOPFLOORWDUBAI.COM</p> -->
      <p class="mt-2">+971 568372920</p>
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
  methods: {
    async submitContactForm() {
      if (this.name && this.email && this.phone) {
        const payload = {
          propertyId: this.propertyId,
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
  },
};
</script>
