new Vue({
  el: "#cssVue",
  data: {
    attachRed: false,
    attachGreen: true,
    attachBlue: false,
    color: "green",
    width: 120
  },
  computed: {
    divClasses: function() {
      return {
        red: this.attachRed,
        blue: !this.attachRed
      };
    },

    randDivClasses: function() {
      let randint = Math.floor(Math.random() * Math.floor(3));
      if (randint == 0) {
        return { red: true };
      } else if (randint == 1) {
        return { green: true };
      } else {
        return { blue: true };
      }
    },
    myStyle: function() {
      return {
        backgroundColor: this.color,
        width: this.width + "px"
      };
    }
  }
});
