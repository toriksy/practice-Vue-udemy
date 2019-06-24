new Vue({
  el: "#listening217",
  data: {
    counter: 0,
    x: 0,
    y: 0,
    result: ""
  },
  methods: {
    increase: function(step, event) {
      this.counter += step;
      this.result = this.counter > 5 ? "greater than 5" : "smaller than 5";
    },
    updateCoordinates: function(ev) {
      this.x = ev.clientX;
      this.y = ev.clientY;
    },
    alertMe: function() {
      alert("alert!");
    }
  }
});

new Vue({
  el: "#exercise2",
  data: {
    value: ""
  },
  methods: {
    showAlert: function() {
      alert("aleee");
    },
    keyCount: function(event) {
      this.value = event.target.value;
    }
  }
});

new Vue({
  el: "#templates22",
  data: {
    name: "Tedd",
    counter: 0,
    secondCounter: 0
  },
  computed: {
    output: function() {
      console.log("Computed");
      return this.counter > 5 ? "greater than 5" : "smaller than 5";
    }
  },
  watch: {
    counter: function(value) {
      var vm = this;
      setTimeout(function() {
        vm.counter = 0;
      }, 2000);
    }
  },
  methods: {
    result: function() {
      console.log("Method");
      return this.counter > 5 ? "greater than 5" : "smaller than 5";
    }
  }
});
