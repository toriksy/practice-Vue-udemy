const data = {
  title: "The vue js",
  showParagraph: false
};

Vue.component("hello", {
  templayte: "<h1>hello</h1>"
});

var vm1 = new Vue({
  data: data,
  //普通のjsに値を格納して持ってくることも可能。
  methods: {
    show: function() {
      this.showParagraph = true;
      this.updateTitle("The vue js (updated)");
      console.log(this.$refs.myButton);
      this.$refs.myButton.innerText = "test";
    },
    updateTitle: function(changedTitle) {
      this.title = changedTitle;
    }
  },
  computed: {
    lowerCaseTitle: function() {
      return this.title.toLowerCase();
    }
  },
  watch: {
    //watch対象が変更されたときに実行。
    title: function(value) {
      alert("title changed to" + value);
    }
  }
});

vm1.$mount("#app1");

console.log(vm1.$data.title);
vm1.$refs.heading.innerText = "something else";

setTimeout(function() {
  vm1.title = "Changed by timer";
  vm1.show();
  //普通のjsからでもdataやmethodsにアクセス可能。プロキシ。
}, 3000);

var vm2 = new Vue({
  el: "#app2",
  data: {
    title: "the second instance"
  },
  methods: {
    onChange: function() {
      vm1.title = "Changed! by 2";
    }
  }
});

var vm3 = new Vue({
  el: "hello",
  template: "<h1>hello!</h1>"
});

vm3.$mount();
document.getElementById("app3").appendChild(vm3.$el);
