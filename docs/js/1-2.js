new Vue({
  el: "#app1-2",
  data: {
    title: "hello world!"
  },
  methods: {
    changeTitle: function(event) {
      this.title = event.target.value;
    }
  }
});

new Vue({
  el: "#app2-1",
  data: {
    title: "hello|||",
    link: "http://google.com",
    finishedLink: '<a href="http://google.com">google</a>'
  },
  methods: {
    showTitle: function(event) {
      this.title = "hello!!!!";
      return this.title;
    }
  }
});

new Vue({
  el: "#exercise",
  data: {
    myName: "TOTT",
    myAge: 25,
    imglink:
      "https://images-na.ssl-images-amazon.com/images/I/5189whAECxL._SY450_.jpg"
  },
  methods: {
    tripleAge: function(e) {
      return this.myAge * 3;
    },
    randNum: function(e) {
      return Math.random();
    },
    changeName: function(event) {
      this.myName = event.target.value;
    }
  }
});
