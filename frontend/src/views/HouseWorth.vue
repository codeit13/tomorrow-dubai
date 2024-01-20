<template>
  <div class="bg-white p-4 md:p-20">
    <div class="text-center">
      <div>
        <span class="text-2xl font-semibold" v-if="address">{{ address }}</span>
      </div>
      <p class="text-lg text-black mt-1">
        Is this the correct address? If not
        <Button class="p-0 font-inherit" variant="link" @click="$router.go(-1)"
          >click here</Button
        >
      </p>

      <!-- <svg
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
      </svg> -->
    </div>
    <div class="mt-24 text-center mx-auto">
      <div class="w-fit mx-auto">
        <div class="flex flex-col space-y-4" v-if="currentStep == 0">
          <h2 class="text-4xl text-left font-semibold montserrat-font">
            Who Are You?
          </h2>

          <RadioGroup default-value="comfortable" v-model="stepOne">
            <div
              class="flex items-center space-x-2"
              v-for="(option, i) in stepOneOptions"
              :key="i"
            >
              <RadioGroupItem :id="`${i}`" :value="option.value" />
              <Label class="text-lg" :for="`${i}`">{{ option.label }}</Label>
            </div>
          </RadioGroup>
        </div>
        <div class="flex flex-col space-y-4" v-if="currentStep == 1">
          <h2 class="text-4xl text-left font-semibold montserrat-font">
            This Home listed any of Listing Platform or with Brokers?
          </h2>

          <RadioGroup default-value="comfortable" v-model="stepTwo">
            <div
              class="flex items-center space-x-2"
              v-for="(option, i) in stepTwoOptions"
              :key="i"
            >
              <RadioGroupItem :id="`${i}`" :value="option.value" />
              <Label class="text-lg" :for="`${i}`">{{ option.label }}</Label>
            </div>
          </RadioGroup>
        </div>
        <div class="flex flex-col space-y-4" v-if="currentStep == 2">
          <h2 class="text-4xl text-left font-semibold montserrat-font">
            What's Your Sales Timeline?
          </h2>

          <RadioGroup default-value="comfortable" v-model="stepThree">
            <div
              class="flex items-center space-x-2"
              v-for="(option, i) in stepThreeOptions"
              :key="i"
            >
              <RadioGroupItem :id="`${i}`" :value="option.value" />
              <Label class="text-lg" :for="`${i}`">{{ option.label }}</Label>
            </div>
          </RadioGroup>
        </div>
        <div class="flex flex-col space-y-4" v-if="currentStep == 3">
          <h2 class="text-4xl text-left font-semibold montserrat-font">
            Property Details
          </h2>

          <div class="flex flex-col space-y-8">
            <div class="flex space-x-8">
              <Select v-model="propertyType">
                <SelectTrigger class="w-[60%] text-lg">
                  <SelectValue placeholder="Property Type" />
                </SelectTrigger>
                <SelectContent position="popper">
                  <SelectItem
                    :value="option"
                    :key="i"
                    v-for="(option, i) in propertyTypeOptions"
                  >
                    {{ option }}
                  </SelectItem>
                </SelectContent>
              </Select>
              <Select v-model="noOfBeds">
                <SelectTrigger class="w-[60%] text-lg">
                  <SelectValue placeholder="No of Beds" />
                </SelectTrigger>
                <SelectContent position="popper">
                  <SelectItem value="0"> Number of Bedrooms </SelectItem>
                  <SelectItem :value="`${i}`" :key="i" v-for="i in 15">
                    {{ i }}
                  </SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div class="flex space-x-8">
              <Select v-model="noOfBaths">
                <SelectTrigger class="w-[62%] text-lg">
                  <SelectValue placeholder="No. of Bathrooms" />
                </SelectTrigger>
                <SelectContent position="popper">
                  <SelectItem value="0"> Number of Bathrooms </SelectItem>
                  <SelectItem :value="`${i}`" :key="i" v-for="i in 15">
                    {{ i }}
                  </SelectItem>
                </SelectContent>
              </Select>
              <Input
                class="w-[60%] text-lg"
                v-model="propertySize"
                placeholder="Property Size"
              />
            </div>
            <div class="flex space-x-8">
              <Input
                class="w-[60%] text-lg"
                v-model="yearBuilt"
                placeholder="Year Built"
              />
              <Input
                class="w-[60%] text-lg"
                v-model="askPrice"
                placeholder="Ask Price"
              />
            </div>
          </div>
        </div>

        <div
          class="flex flex-col space-y-4 text-center"
          v-if="currentStep == 4"
        >
          <h2 class="text-4xl text-left font-semibold montserrat-font">
            We'd love to connect with you
          </h2>

          <Input
            class="w-[60%] text-lg"
            v-model="fullName"
            placeholder="Your Full Name"
          />

          <Input class="w-[60%] text-lg" v-model="email" placeholder="email" />

          <Input class="w-[60%] text-lg" v-model="phone" placeholder="Phone" />
        </div>

        <Button
          class="bg-white text-left text-[#302CFF] rounded-none border-[1px] border-[#302CFF] hover:text-white px-8 mt-4"
          @click="submitForm"
        >
          {{ currentStep == 4 ? "I'am interested" : "Next" }}
        </Button>
      </div>
    </div>
  </div>
</template>
<!-- eslint-disable -->

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

import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

export default {
  components: {
    Button,
    Input,
    SelectValue,
    SelectTrigger,
    SelectItem,
    SelectContent,
    Select,
    Label,
    RadioGroup,
    RadioGroupItem,
  },
  watch: {
    stepOne(val) {
      if (val) {
        this.showButton = true;
      }
    },
    stepTwo(val) {
      if (val) {
        this.showButton = true;
      }
    },
    stepThree(val) {
      if (val) {
        this.showButton = true;
      }
    },
    noOfBeds() {
      if (
        this.noOfBeds != "0" &&
        this.noOfBaths != "0" &&
        this.propertySize &&
        this.yearBuilt &&
        this.askPrice
      ) {
        this.showButton = true;
      } else this.showButton = false;
    },
    noOfBaths() {
      if (
        this.noOfBeds != "0" &&
        this.noOfBaths != "0" &&
        this.propertySize &&
        this.yearBuilt &&
        this.askPrice
      ) {
        this.showButton = true;
      } else this.showButton = false;
    },
    propertySize() {
      if (
        this.noOfBeds != "0" &&
        this.noOfBaths != "0" &&
        this.propertySize &&
        this.yearBuilt &&
        this.askPrice
      ) {
        this.showButton = true;
      } else this.showButton = false;
    },
    yearBuilt() {
      if (
        this.noOfBeds != "0" &&
        this.noOfBaths != "0" &&
        this.propertySize &&
        this.yearBuilt &&
        this.askPrice
      ) {
        this.showButton = true;
      } else this.showButton = false;
    },
    askPrice() {
      if (
        this.noOfBeds != "0" &&
        this.noOfBaths != "0" &&
        this.propertySize &&
        this.yearBuilt &&
        this.askPrice
      ) {
        this.showButton = true;
      } else this.showButton = false;
    },
  },
  data() {
    return {
      showButton: false,
      currentStep: 0,
      stepOne: null,
      stepTwo: null,
      stepThree: null,
      propertySize: null,
      yearBuilt: null,
      askPrice: null,
      stepOneOptions: [
        {
          label: "I am the owner of this home",
          value: "Owner",
        },
        { label: "I am a realtor or agent", value: "Realtor/ Agent" },
        { label: "Other", value: "Other" },
      ],
      stepTwoOptions: [
        { label: "Yes", value: "Yes" },
        { label: "No", value: "No" },
      ],
      stepThreeOptions: [
        { label: "ASAP", value: "ASAP" },
        { label: "2-4 Weeks", value: "2-4 Weeks" },
        { label: "4-6 Weeks", value: "4-6 Weeks" },
        { label: "Check Estimate Offer", value: "Check Estimate Offer" },
      ],
      propertyType: null,
      propertyTypeOptions: [
        "Property Type",
        "Villa",
        "Apartment",
        "Penthouse",
        "Townhouse",
        "Plot",
        "Other",
      ],
      noOfBeds: null,
      noOfBaths: null,
      fullName: null,
      email: null,
      phone: null,
      address: null,
    };
  },
  computed: {
    // isLastStepCompleted() {
    //   if (
    //     this.noOfBeds != "0" &&
    //     this.noOfBaths != "0" &&
    //     this.propertySize &&
    //     this.yearBuilt &&
    //     this.askPrice
    //   ) {
    //     this.showButton = true;
    //     return true;
    //   } else return false;
    // },
  },
  mounted() {
    this.address = this.$route.params.address;
    this.propertyType = this.propertyTypeOptions[0];
    this.noOfBeds = "0";
    this.noOfBaths = "0";
  },
  methods: {
    async submitForm() {
      if (this.currentStep == 4) {
        const data = await this.$store.dispatch("submitSellForm", {
          address: this.address,
          sellerType: this.stepOne,
          isListed: this.stepTwo,
          duration: this.stepThree,
          homeType: this.propertyType,
          bed: this.noOfBeds,
          bath: this.noOfBaths,
          sqFt: this.propertySize,
          yearBuilt: this.yearBuilt,
          price: this.askPrice,
          name: this.fullName,
          email: this.email,
          phone: this.phone,
          status: "DRAFT",
        });

        this.$store.commit("SET_TOASTER_MSG", {
          title:
            "We have successfully recieved your request. We'll contact you soon.",
        });

        return;
      }
      if (this.stepOne == "Owner") {
        this.currentStep = 4;
      } else {
        this.currentStep += 1;
      }

      this.showButton = false;
    },
  },
};
</script>

<style></style>
