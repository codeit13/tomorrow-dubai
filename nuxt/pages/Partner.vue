<template>
  <div class="bg-white text-gray-900 px-4">
    <header
      class="pt-48 md:pt-64 md:px-28 md:pl-30 pb-32 text-left bg-gray-100 bg-opacity-50"
    >
      <div class="flex flex-col gap-32 items-center md:items-end w-fit">
        <div class="w-fit">
          <div class="w-fit">
            <p class="text-2xl md:text-4xl font-bold w-fit">We're Looking</p>
            <h1 class="text-5xl md:text-7xl font-bold w-fit mt-2 md:mt-4">
              For Partners
            </h1>
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
      <p class="mt-3 text-center text-gray-800 font-bold text-2xl md:text-2xl">
        Join the Future of Real Estate
      </p>

      <h2 class="text-2xl md:text-2xl font-bold text-center mt-2">
        Dubai’s First Subscription-Based Real Estate Jobs
      </h2>

      <p class="mt-3 text-center text-gray-900 text-lg md:text-xl josefin-slab">
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
          <div class="w-[100%] mx-auto text-center">
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
          class="bg-blue-600 text-lg font-semibold rounded-none px-3 py-6 text-white mt-4"
        >
          Join our Team
        </Button>
      </div>

      <section class="bg-white dark:bg-gray-900 mt-16">
        <div class="container px-6 py-12 mx-auto">
          <h1
            class="text-2xl text-center font-semibold text-gray-800 lg:text-3xl dark:text-white"
          >
            Frequently asked questions
          </h1>

          <div class="mt-8 space-y-8 lg:mt-12">
            <div
              class="p-8 bg-gray-100 rounded-lg dark:bg-gray-800"
              v-for="(faq, i) in faqs"
              :key="i"
            >
              <button
                class="flex items-center justify-between w-full"
                @click="openFaq(i)"
              >
                <h1 class="font-semibold text-gray-700 dark:text-white">
                  {{ faq.question }}
                </h1>

                <span
                  v-if="faq.selected"
                  class="text-gray-400 bg-gray-200 rounded-full"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="w-6 h-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M18 12H6"
                    />
                  </svg>
                </span>
                <span v-else class="text-white bg-blue-500 rounded-full">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="w-6 h-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                    />
                  </svg>
                </span>
              </button>

              <p
                class="mt-6 text-sm text-gray-500 dark:text-gray-300"
                v-if="faq.selected"
              >
                {{ faq.answer }}
              </p>
            </div>
          </div>
        </div>
      </section>
    </section>

    <section class="px-4 md:px-28 py-24 bg-gray-100/50 md:bg-gray-100">
      <div class="flex flex-wrap justify-between">
        <div class="flex flex-col justify-between">
          <div>
            <h2 class="text-3xl font-bold text-left">LETS CHAT</h2>
            <div class="mt-8 mx-auto text-left">
              <p class="text-lg font-bold">
                Launch Your Dubai Real Estate Career In Just 10 Minutes!
              </p>
              <p class="mt-5 text-lg font-bold">
                Experience Our Hassle-Free, Plug-And-Play Model.
              </p>
              <p class="mt-5 text-lg font-bold">
                Enjoy An Unmatched Commission Split: 90% For Agents, 10% For The
                Company.
              </p>
              <p class="mt-5 text-lg font-bold">
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
          <Input
            class="border-black"
            v-model="fullName"
            placeholder="Full Name"
          />
          <Input
            class="border-black"
            v-model="email"
            placeholder="Email Id"
            type="email"
          />
          <Input class="border-black" v-model="phone" placeholder="Mobile No" />
          <span>What is your individual yearly commission volume!</span>
          <Select class="pt-0 border-black" v-model="salesVolume">
            <SelectTrigger class="w-[100%] border-black" id="commission">
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
              >
                {{ option }}
              </SelectItem>
            </SelectContent>
          </Select>
          <span class="text-sm">
            By submitting this form I accept the Privacy Policy and Terms of
            Service.
          </span>
          <Button
            class="mt-4 w-fit rounded-none font-semibold px-8 py-6"
            @click="submitForm"
          >
            Send Application
          </Button>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
// import { Button } from "@/components/ui/button";
// import { Input } from "@/components/ui/input";
// import {
//   SelectValue,
//   SelectTrigger,
//   SelectItem,
//   SelectContent,
//   Select,
// } from "@/components/ui/select";

export default {
  components: {
    // Button,
    // Input,
    // SelectValue,
    // SelectTrigger,
    // SelectItem,
    // SelectContent,
    // Select,
  },
  setup() {
    useSeoMeta({
      title:
        "Join the Future of Real Estate - Partner with Tomorrow Luxury Property",
      description:
        "Join Tomorrow Luxury Property and pioneer a new era in real estate. Our vision is simple: empower your growth and redefine partnership. Opt for our Full-Time offer with benefits like high commission splits and comprehensive support, or the Remote/Referral route for flexible, commitment-free earnings. Let's build success together.",
    });
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
      faqs: [
        {
          question: "Is tomorrow luxury property a real estate brokerage?",
          answer:
            "Yes, Tomorrow Luxury Property is indeed a licensed real estate brokerage operating in Dubai.",
          selected: false,
        },
        {
          question: `What does "subscription-based real estate jobs" mean?`,
          answer: `Dubai's first subscription-based real estate job offer allows individuals to join the industry 
                  with a unique model. For an annual fee of AED 30,000, get hired in 30 minutes from anywhere 
                  in the world, with company visa sponsorship, offering flexibility and higher commission splits for 
                  independent work within the brokerage's structure.`,
          selected: false,
        },
        {
          question: `What sets us apart?`,
          answer: `Higher commission rates (80%), flexible roles, and an innovative subscription model.`,
          selected: false,
        },
        {
          question: `Is there a referral or part-time option?`,
          answer: `Yes, a one-time AED 30,000 fee (paid upfront or deducted after successful closing) offers 
lifetime earnings with an 80% commission split.`,
          selected: false,
        },
        {
          question: `Do I need to pay upfront AED 30,000?`,
          answer: `No, you don't need to pay upfront AED 30,000. Instead, it's AED 500 upfront, AED 7,000 after receiving the offer letter, and the remainder after obtaining the visa.`,
          selected: false,
        },
        {
          question: `Are visa and medical benefits provided?`,
          answer: `Yes, for full-time`,
          selected: false,
        },
        {
          question: `Can part-time agents transition to full-time roles?`,
          answer: `Yes, part-time agents can switch to full-time roles. We offer immediate application processing and company visa support`,
          selected: false,
        },
        {
          question: `How do I apply?`,
          answer: `To apply, simply visit our website and fill out the form, or call us at +971 581677220.`,
          selected: false,
        },
      ],
    };
  },
  mounted() {
    this.salesVolume = this.salesVolumeOptions[0];
  },
  methods: {
    openFaq(i) {
      this.faqs.map((faq, currentIndex) => {
        if (i === currentIndex) {
          faq.selected = !faq.selected;
          console.log(faq);
        } else {
          faq.selected = false;
        }
      });
    },
    async submitForm() {
      if (this.fullName && this.email && this.phone && this.salesVolume) {
        const resp = await this.$store.dispatch("joinAsAgent", {
          fullName: this.fullName,
          email: this.email,
          phone: this.phone,
          salesVolume: this.salesVolume,
          status: "DRAFT",
          from: "PARTNER",
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
