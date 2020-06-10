new Vue({
    el: '#app',
    data: {
        message: 'hello world'
    },
    methods: {
        log: function(){
            console.log("log...");
            this.message = "nihao";
        }
    }
});

{/* <script src="https://cdn.staticfile.org/vue/2.2.2/vue.min.js"></script> */}