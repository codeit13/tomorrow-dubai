<template>
  <div class="bg-white text-gray-900 px-0 md:px-0">
    <header
      class="pt-32 md:pt-40 md:px-28 md:pl-40 px-4 pb-32 text-left bg-gray-100 bg-opacity-50"
    >
      <div class="flex flex-col gap-20 items-center md:items-end w-fit">
        <div class="w-fit">
          <div class="w-fit">
            <p class="text-4xl md:text-6xl font-bold w-fit text-black">
              We're Looking For
            </p>
            <h1
              class="text-4xl md:text-6xl font-bold w-fit mt-2 md:mt-4 text-black"
            >
              Partners
            </h1>
          </div>
          <p class="mt-6 text-xl md:text-3xl w-fit font-semibold">
            We've Made Real Estate Brokerage Simple, Plug And Play
          </p>
          <Button
            @click="goToApplyNow"
            class="bg-[#0400D3] rounded-none font-semibold px-8 py-6 text-white text-md mt-8 tracking-wider"
          >
            Apply Now
          </Button>
        </div>
        <div class="w-full md:w-fit relative">
          <svg
            viewBox="0 0 66 58"
            class="w-12 md:w-16 h-12 md:h-20 absolute right-12 md:right-[-200px]"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M19.664 0.240001L33.104 22.896L46.544 0.240001L65.872 0.240001L33.104 57.2L0.208 0.240001L19.664 0.240001Z"
              fill="#0400D3"
            />
          </svg>
        </div>
      </div>
    </header>
    <section class="py-16 px-3.5">
      <p class="mt-3 text-center text-gray-800 font-bold text-xl md:text-xl">
        Build Your Tomorrow, Today with Us
      </p>

      <h2 class="text-2xl md:text-3xl font-bold text-center mt-6">
        Transform Your Career with Our Real Estate Partnership
      </h2>

      <!-- <p class="mt-3 text-center text-gray-900 text-lg md:text-xl josefin-slab">
        Partner with Tomorrow Luxury property. Simplifying Success in Real
        Estate
      </p> -->
      <p
        class="md:w-[45%] text-center mt-6 text-lg md:text-lg !leading-8 mx-auto"
      >
        At <span class="font-semibold">Tomorrow Luxury Property</span>, we
        redefine the essence of real estate partnership. Our mission is to
        empower your entrepreneurial spirit by providing a seamless, efficient,
        and rewarding real estate brokerage experience. With us, you are not
        just an agent; you become an integral partner in a journey of mutual
        growth and success.
      </p>
      <div
        class="mt-8 mx-auto md:max-w-5xl grid grid-cols-1 md:grid-cols-2 gap-8"
      >
        <div
          class="border-2 border-[#00000090] p-6 text-center bg-[#302CFF0D] overflow-hidden relative"
        >
          <h3
            class="text-xl text-center text-[#302CFF] font-semibold border border-black w-fit px-10 py-4 mx-auto"
          >
            Full-Time
          </h3>
          <p class="mt-4 text-lg md:text-xl font-bold">
            AED 2,500 <span class="text-sm font-normal">/Billed annually</span>
          </p>
          <div class="w-[100%] mx-auto mb-16 text-center">
            <p class="mt-8 text-lg text-left">
              <span class="font-bold">Desk fee</span> &
              <span class="font-bold">RERA Certification</span>
            </p>
            <p class="text-lg mt-2 text-left">
              Commission Split
              <span class="font-bold">Agent: 80% | Company: 20%</span>
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
          <span
            class="absolute bottom-4 left-0 right-0 underline underline-offset-4"
          >
            Learn more
          </span>
        </div>
        <div
          class="border-2 border-[#00000090] p-6 text-center overflow-hidden relative"
        >
          <h3
            class="text-xl text-center font-semibold border border-black w-fit px-10 py-4 mx-auto"
          >
            Remote/Referral
          </h3>
          <p class="mt-4 text-lg md:text-xl font-bold">
            AED <span class="line-through">30,000</span>
            <span class="text-lg font-normal">/one time</span>
          </p>
          <div
            class="w-[98%] h-[60%] mx-auto mb-10 flex flex-col items-center justify-between"
          >
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
          <span
            class="absolute bottom-4 left-0 right-0 underline underline-offset-4"
          >
            Learn more
          </span>
        </div>
      </div>

      <div
        class="mt-12 w-fit mx-auto text-center flex flex-col items-center gap-2"
      >
        <span class="font-bold text-2xl md:text-2xl">
          A full resident's/ employment visa paid by Company
        </span>

        <component
          :is="`script`"
          src="https://js.stripe.com/v3/buy-button.js"
        ></component>

        <div v-if="showBuyButton">
          <stripe-buy-button
            buy-button-id="buy_btn_1PNqvgAed87xgZSOHNKe41xd"
            publishable-key="pk_test_51PKbFaAed87xgZSO3rbRmhfcQIRHhCvsAfazC73P8zctz9wy3YqNxXJAsLiMaIpGMif3xfvtwGlZTS7Gy2I4r24e00zuPF5nwJ"
          >
          </stripe-buy-button>
        </div>
        <Button
          v-else
          class="bg-[#0400D3] rounded-none font-semibold px-8 py-6 text-white text-md mt-4 w-fit"
        >
          Start my subscription!
        </Button>
      </div>

      <div
        class="mt-36 w-fit mx-auto text-center flex flex-col items-center gap-2"
      >
        <!-- <span class="font-bold text-3xl">  </span> -->
        <section class="bg-white dark:bg-gray-900">
          <div class="container px-6 pt-0 pb-10 mx-auto">
            <h1
              class="text-3xl font-bold text-center capitalize lg:text-3xl dark:text-white mb-6"
            >
              Hear from <span class="text-[#0400D3]">Our Agents</span>
            </h1>

            <!-- <p class="max-w-2xl mx-auto mt-6 text-center dark:text-gray-300">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo
              incidunt ex placeat modi magni quia error alias, adipisci rem
              similique, at omnis eligendi optio eos harum.
            </p> -->

            <!-- <section
              class="grid grid-cols-1 gap-8 mt-8 xl:mt-12 lg:grid-cols-2 xl:grid-cols-3"
            > -->

            <carousel
              :items-to-show="3"
              :wrapAround="true"
              class=""
              :autoplay="1500"
              :pauseAutoplayOnHover="true"
            >
              <!-- < v-for="(url, i) in property.images" :key="i"> -->
              <slide class="" v-for="(testimonial, i) in testimonials" :key="i">
                <div
                  class="flex flex-col gap-2 p-8 border rounded-lg dark:border-gray-700 mx-4"
                >
                  <p class="leading-loose dark:text-gray-400">
                    “{{ testimonial.content }}”
                  </p>

                  <div class="flex items-center justify-center mt-8 -mx-2">
                    <div class="mx-2">
                      <h1 class="font-semibold text-gray-800 dark:text-white">
                        {{ testimonial.name }}
                      </h1>
                      <span class="text-sm">{{ testimonial.designation }}</span>
                    </div>
                  </div>
                </div>
              </slide>
              <!-- </> -->

              <template #addons>
                <navigation />
                <!-- <pagination /> -->
              </template>
            </carousel>

            <!-- </section> -->
          </div>
        </section>
      </div>

      <!-- <div class="mt-8 mx-auto flex flex-col bg-white gap-6">
        <div class="p-0 text-center grid grid-cols-1 md:grid-cols-2 space-y-10">
          <div class="flex items-center justify-center bg-white px-2">
            <div
              class="flex flex-col items-start justify-center gap-2 bg-white"
            >
              <span class="text-3xl font-bold text-black">full-Time</span>
              <span class="text-sm text-gray-900 underline underline-offset-4">
                Learn more
              </span>
              <span class="font-bold text-black text-left">
                A full resident's/employment visa paid by Company
              </span>
              <Button
                class="bg-[#0400D3] rounded-none font-semibold px-8 py-6 text-white mt-4"
              >
                Start my subscription
              </Button>
            </div>
          </div>
          <div
            class="flex items-center justify-center bg-gray-100 px-8 py-10 md:pr-80"
          >
            <div class="text-left">
              <p class="text-2xl tracking-wide">
                <span class="font-bold">AED 2,500</span>
                <span class="text-lg">/ month / billed annually</span>
              </p>
              <ul class="w-[100%] mx-auto text-center list-disc">
                <li class="mt-8 text-lg text-left">
                  <span class="font-bold">Desk fee & RERA Certification</span>
                </li>
                <li class="text-lg mt-2 text-left">
                  Commission Split
                  <span class="font-bold">Agent 80% - 20% Company</span>
                </li>
                <li class="text-lg mt-2 text-left">
                  <span class="font-bold">Flexible Work</span> Arrangements &
                  <span class="font-bold">Office space</span>
                </li>
                <li class="text-lg mt-2 text-left">
                  Comprehensive
                  <span class="font-bold">Training and Development</span>
                </li>
                <li class="text-lg mt-2 text-left">
                  <span class="font-bold">Unlimited</span> Property Listings
                </li>
                <li class="text-lg mt-2 text-left">
                  Marketing and Advertising Support
                </li>
                <li class="text-lg mt-2 text-left">Recognition and Rewards</li>
              </ul>
            </div>
          </div>
        </div>

        <div class="p-0 text-center grid grid-cols-1 md:grid-cols-2 space-y-10">
          <div class="flex items-center justify-center bg-gray-100 px-6">
            <div class="pt-6 pb-10 text-right md:w-[65%]">
              <p class="mt-4 text-2xl tracking-wide text-left md:text-right">
                <span class="font-bold">AED 30,000 </span>
                <span class="text-lg">/ one time </span>
              </p>
              <div class="w-[100%] mx-auto text-center">
                <p class="mt-16 text-lg text-left md:text-right">
                  Enjoy the flexibility of working remotely with a one-time fee
                  of AED 30,000 and a favorable commission split, without the
                  need for a full-time commitment.
                </p>
                <p class="text-lg mt-10 mb-24 text-left md:text-right">
                  Commission Split <br />
                  <span class="font-bold"
                    >Referral Agent 80% - 20% Company
                  </span>
                </p>
              </div>
            </div>
          </div>

          <div
            class="flex items-start md:items-center justify-start md:justify-center bg-white"
          >
            <div class="flex flex-col items-start justify-center gap-2">
              <span class="text-3xl font-bold text-black">Remote/Referral</span>
              <span class="text-sm text-gray-900 underline underline-offset-4">
                Learn more
              </span>
              <Button
                class="bg-[#0400D3] rounded-none font-semibold px-8 py-6 text-white mt-4"
              >
                Start my subscription
              </Button>
            </div>
          </div>
        </div>
      </div> -->

      <!-- <section class="bg-white dark:bg-gray-900 mt-16">
        <div class="w-[90vw ] md:w-[50vw] py-12 mx-auto">
          <h1
            class="text-2xl text-center font-semibold text-gray-800 lg:text-3xl dark:text-white"
          >
            Frequently asked questions
          </h1>

          <div class="mt-8 space-y-1 lg:mt-12">
            <div
              class="px-4 py-3 bg-gray-100 rounded-lg dark:bg-gray-800"
              v-for="(faq, i) in faqs"
              :key="i"
            >
              <button
                class="flex items-start justify-start gap-2 w-full"
                @click="openFaq(i)"
              >
                <span class="fill-blue">
                  <svg
                    v-if="faq.selected"
                    xmlns="http://www.w3.org/2000/svg"
                    height="24"
                    viewBox="0 -960 960 960"
                    width="24"
                  >
                    <path
                      d="M480-345 240-585l56-56 184 184 184-184 56 56-240 240Z"
                    />
                  </svg>

                  <svg
                    v-else
                    xmlns="http://www.w3.org/2000/svg"
                    height="24"
                    viewBox="0 -960 960 960"
                    width="24"
                  >
                    <path
                      d="M504-480 320-664l56-56 240 240-240 240-56-56 184-184Z"
                    />
                  </svg>
                </span>
                <h1
                  class="text-gray-700 dark:text-white"
                  :class="{
                    'font-semibold': faq.selected,
                  }"
                >
                  {{ faq.question }}
                </h1>

              
              </button>

              <p
                class="mt-6 ml-8 text-sm text-gray-500 dark:text-gray-300"
                v-if="faq.selected"
              >
                {{ faq.answer }}
              </p>
            </div>
          </div>
        </div>
      </section> -->
    </section>

    <!-- bg-gray-100/50 md:bg-gray-100 -->
    <section class="px-4 md:px-36 py-16" id="apply-now">
      <div class="flex flex-wrap justify-between">
        <div class="flex flex-col justify-between">
          <div>
            <h2
              class="text-3xl md:text-3xl font-bold text-left underline underline-offset-8"
            >
              Ready to partner?
            </h2>
            <div class="mt-10 mx-auto text-left">
              <p class="mb-4 md:mb-8 text-lg md:text-lg">
                Launch Your Dubai Real Estate Career In
                <span class="font-bold">Just 30 Minutes!</span>
              </p>
              <p class="mb-4 md:mb-8 text-lg md:text-lg">
                Experience Our Hassle-Free,
                <span class="font-bold">Plug-And-Play Model.</span>
              </p>
              <p class="mb-4 md:mb-8 text-lg md:text-lg">
                Enjoy An Unmatched Commission Split:
                <span class="font-bold">80% For Agents</span>, 20% For The
                Company.
              </p>
              <p class="mb-4 md:mb-8 text-lg md:text-lg">
                <span class="font-bold">Join Us</span> And Elevate Your Real
                Estate Success Today!
              </p>
            </div>
          </div>
          <svg
            width="40"
            height="40"
            viewBox="0 0 66 58"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            class="relative mt-28 md:left-[20%] mb-4 md:mb-0 -rotate-90"
          >
            <path
              d="M19.664 0.240001L33.104 22.896L46.544 0.240001L65.872 0.240001L33.104 57.2L0.208 0.240001L19.664 0.240001Z"
              fill="#302CFF"
            />
          </svg>
        </div>
        <div class="mt-8 md:mt-0 grid grid-cols-1 gap-4 w-[100%] md:w-[30%]">
          <Input
            class="border-black rounded-none h-14 bg-gray-100 text-black placeholder:text-black"
            v-model="fullName"
            placeholder="Full Name"
          />
          <Input
            class="border-black rounded-none h-14 bg-gray-100 text-black placeholder:text-black"
            v-model="email"
            placeholder="Email Id"
            type="email"
          />
          <Input
            class="border-black rounded-none h-14 bg-gray-100 text-black placeholder:text-black"
            v-model="phone"
            placeholder="Mobile No"
          />
          <span class="text-black">
            What is your individual yearly commission volume!
          </span>
          <Select class="pt-0 border-black" v-model="salesVolume">
            <SelectTrigger
              class="w-[100%] border-black rounded-none h-14 bg-gray-100 text-black placeholder:text-black"
              id="commission"
            >
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
                {{ option }} </SelectItem
              >/
            </SelectContent>
          </Select>
          <span class="text-sm text-black mt-4">
            By submitting this form I accept the Privacy Policy and Terms of
            Service.
          </span>
          <Button
            class="mt-1 w-fit rounded-none font-semibold px-8 py-6 text-sm"
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
import "vue3-carousel/dist/carousel.css";
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
      showBuyButton: false,
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
          selected: true,
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
      testimonials: [
        {
          name: "Priya R",
          designation: "Mumbai, India",
          profile_pic: null,
          content:
            "The support and resources at Tomorrow Luxury Property are unmatched. The office space, flexible work arrangements, and unlimited property listings have significantly boosted my productivity and sales. The recognition and rewards system keeps me motivated to achieve more. I appreciated the quick and easy start with no CV required.",
        },
        {
          name: "Ahmed Khan",
          designation: "Fujairah",
          profile_pic: null,
          content:
            "As a Remote/Referral partner, I appreciate the freedom and the high earning potential this model offers. The initial fee is worth the investment, and the ongoing support from the company ensures I have everything I need to succeed. The process was straightforward, it's the perfect balance of independence and support.",
        },
        {
          name: "Sarah T",
          designation: "New York, USA",
          profile_pic: null,
          content:
            "Joining Tomorrow Luxury Property as a Full-Time partner has been a game-changer for my career. The comprehensive training and marketing support have allowed me to excel and close more deals than ever before. The 80-20 commission split ensures I get the maximum benefit from my hard work. I highly recommend it!",
        },
        {
          name: "Emily Wilson",
          designation: "Egypt",
          profile_pic: null,
          content:
            "As a remote partner, the flexibility offered by Tomorrow Luxury Property is unmatched. The one-time fee and 80% commission split make it a lucrative opportunity without the full-time commitment. The support from the team and access to resources ensure I can efficiently manage my referrals and close deals from anywhere.",
        },
      ],
    };
  },
  mounted() {
    this.salesVolume = this.salesVolumeOptions[0];
    setTimeout(() => {
      this.showBuyButton = true;
    }, 4000);
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
    goToApplyNow() {
      window.location = "#apply-now";
    },
    async submitForm() {
      if (this.fullName && this.email && this.phone && this.salesVolume) {
        const resp = await this.$store.dispatch("submitContactForm", {
          name: this.fullName,
          email: this.email,
          phone: this.phone,
          moreInfo: this.salesVolume,
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
