function getTitle(vm) {
  console.log(vm.$options.data);
  const { metaTitle } = vm.$options;
  if (metaTitle) {
    return typeof metaTitle === "function" ? metaTitle.call(vm) : metaTitle;
  }
}

function getDesc(vm) {
  const { metaDescription } = vm.$options;
  if (metaDescription) {
    return typeof metaDescription === "function"
      ? metaDescription.call(vm)
      : metaDescription;
  }
}

export default {
  created() {
    // const { metaTitle, metaDescription } = this.$options;
    const metaTitle = getTitle(this);
    const metaDescription = getDesc(this);

    console.log(metaTitle, metaDescription);
    if (metaTitle) {
      const titleMetaTag = document.createElement("meta");
      titleMetaTag.setAttribute("name", "title");
      titleMetaTag.setAttribute("content", metaTitle);
      document.querySelector("head").appendChild(titleMetaTag);
    }

    if (metaDescription) {
      const descrMetaTag = document.createElement("meta");
      descrMetaTag.setAttribute("name", "description");
      descrMetaTag.setAttribute("content", metaDescription);
      document.querySelector("head").appendChild(descrMetaTag);
    }
  },
};
