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
