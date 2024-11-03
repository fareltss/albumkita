
new Vue({
  el: "#app",
  data() {
    return {
      isOpenedTop: true,
      items: [
        {
          img1: "images/adventure1.jpeg",
          img2: "images/adventure2.jpeg",
          img3: "images/adventure3.jpeg",
          title: "alun alunn",
          isOpen: false,
        },
        {
          img1: "images/beach1.jpeg",
          img2: "images/beach2.jpeg",
          img3: "images/beach3.jpeg",
          title: "photoboxx",
          isOpen: false,
        },
        {
          img1: "images/museum1.jpeg",
          img2: "images/museum2.jpeg",
          img3: "images/museum3.jpeg",
          title: "bioskopp",
          isOpen: false,
        },
        {
          img1: "images/aquarium1.jpeg",
          img2: "images/aquarium2.jpeg",
          img3: "images/aquarium3.jpeg",
          title: "mammm",
          isOpen: false,
        },
        {
          img1: "images/aurora1.jpeg",
          img2: "images/aurora2.jpeg",
          img3: "images/aurora3.jpeg",
          title: "kafee",
          isOpen: false,
        },
        {
          img1: "images/sky1.jpeg",
          img2: "images/sky2.jpeg",
          img3: "images/sky3.jpeg",
          title: "kita",
          isOpen: false,
        },
      ],
    };
  },
  methods: {
    topOpen() {
      this.isOpenedTop = !this.isOpenedTop;
    },

    open(idx, isOpen) {
      if (this.isOpenedTop) {
        this.items[idx].isOpen = !isOpen;
      }
    },

    reset() {
      this.items.forEach((item) => (item.isOpen = false));
      this.isOpenedTop = false;
    },
  },
});
