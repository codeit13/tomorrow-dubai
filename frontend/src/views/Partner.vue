<template>
  <div class="bg-white text-gray-900 px-4">
    <header class="py-12 text-center">
      <h1 class="text-4xl font-bold">We're Looking For Partners</h1>
      <p class="mt-4 text-xl">
        We Made Real Estate Brokerage Simple, Plug And Play
      </p>

      <svg
        class="mt-8 mx-auto w-6 h-6"
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
        <path d="M12 5v14" />
        <path d="m19 12-7 7-7-7" />
      </svg>
    </header>
    <section class="py-12">
      <h2 class="text-3xl font-bold text-center">
        Join the Future of Real Estate
      </h2>
      <p class="mt-2 text-center text-sm text-gray-600">
        Partner with Tomorrow Luxury property. Simplifying Success in Real
        Estate
      </p>
      <div class="mt-8 mx-auto max-w-4xl grid grid-cols-1 md:grid-cols-2 gap-8">
        <div class="border-2 p-6 text-center bg-[#302CFF0D]">
          <h3
            class="text-xl text-center text-[#302CFF] font-semibold border-2 border-[#302CFF50] w-fit px-8 py-3 mx-auto"
          >
            Full-Time
          </h3>
          <p class="mt-4 text-lg font-bold">
            AED 9500 <span class="text-sm font-normal">/billed annually</span>
          </p>
          <div class="w-[80%] mx-auto">
            <p class="mt-4 text-sm text-left">Company Visa & Medical</p>
            <p class="text-sm text-left">
              Commission Split Agent: 90% | Company: 10%
            </p>
            <p class="text-sm text-left">
              Flexible Work Arrangements & Office space
            </p>
            <p class="text-sm text-left">
              Comprehensive Training and Development
            </p>
            <p class="text-sm text-left">Unrivaled Property Listings</p>
            <p class="text-sm text-left">Marketing and Advertising Support</p>
            <p class="text-sm text-left">Recognition and Rewards</p>
          </div>
        </div>
        <div class="border p-6 text-center">
          <h3
            class="text-xl text-center font-semibold border w-fit px-8 py-3 mx-auto"
          >
            Remote/Referral
          </h3>
          <p class="mt-4 text-lg font-bold">
            AED 10,000 <span class="text-sm font-normal">/one time</span>
          </p>
          <div class="w-[80%] mx-auto">
            <p class="mt-4 text-sm text-left">
              Enjoy the flexibility of working remotely with a one-time fee of
              AED 10,000 and no favorable commission split, without the need for
              a full-time commitment.
            </p>
            <p class="mt-4 text-sm text-center">
              Commission Split <br />
              <span class="font-bold">Agent: 80% - 20% Company</span>
            </p>
          </div>
        </div>
      </div>
      <div class="mt-8 text-center">
        <Button class="mt-4">Subscribe Now</Button>
      </div>
    </section>
    <section class="px-4 py-24 bg-gray-100">
      <div class="flex flex-wrap justify-evenly">
        <div>
          <h2 class="text-3xl font-bold text-left">LETS CHAT</h2>
          <div class="mt-8 mx-auto max-w-lg text-left">
            <p class="text-sm font-bold">
              Launch Your Dubai Real Estate Career In Just 10 Minutes!
            </p>
            <p class="mt-5 text-sm font-bold">
              Experience Our Hassle-Free, Plug-And-Play Model.
            </p>
            <p class="mt-5 text-sm font-bold">
              Enjoy An Unmatched Commission Split: 90% For Agents, 10% For The
              Company.
            </p>
            <p class="mt-5 text-sm font-bold">
              Join Us And Elevate Your Real Estate Success Today!
            </p>
          </div>
        </div>
        <div class="mt-8 md:mt-0 grid grid-cols-1 gap-4 w-[100%] md:w-[25%]">
          <Input v-model="fullName" placeholder="Full Name" />
          <Input v-model="email" placeholder="Email" type="email" />
          <Input v-model="phone" placeholder="Mobile No" />
          <Select v-model="salesVolume">
            <SelectTrigger id="commission">
              <SelectValue
                placeholder="What Is Your Individual Yearly Commission Value?"
              />
            </SelectTrigger>
            <SelectContent position="popper">
              <SelectItem
                v-for="(option, i) in salesVolumeOptions"
                :key="i"
                :value="option"
                >{{ option }}</SelectItem
              >
            </SelectContent>
          </Select>
          <span>
            By submitting this form I accept the Privacy Policy and Terms of
            Service.
          </span>
          <Button class="mt-4" @click="submitForm">Submit</Button>
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
  },
  methods: {
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
