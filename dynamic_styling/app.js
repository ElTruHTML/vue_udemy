"use strict";

let app = Vue.createApp({
    data() {
        return {
            boxASelected: false,
            boxBSelected: false,
            boxCSelected: false,
        };
    },
    methods: {
        boxSelected(box) {
            if(box === "A") {
                this.boxASelected = !this.boxASelected;
            }
            else if(box === "B") {
                this.boxBSelected = !this.boxBSelected;
            }
            else if(box === "C") {
                this.boxCSelected = !this.boxCSelected;
            }
        },
    }
})
.mount("#styling");

Vue.createApp({
    data() {
        return {
            mylink: "https://www.google.de",
            myHTML: "<h2>Mein HTML</h2>",
            counter: 0,
            adder: 16,
            name: "",
            lastname: "",
            // fullname: "",
        };
    },
    watch: {
        counter(newVal) {
            if(newVal > 50) {
                this.counter = 0;
            }
        },
        // name(newVal) {
        //     if(newVal === ""){
        //         this.fullname = "";
        //         return;
        //     }
        //     this.fullname = newVal + " " + this.lastname;
        // },
        // lastname(newVal) {
        //     if(newVal === ""){
        //         this.fullname = "";
        //         return;
        //     }
        //     this.fullname = this.name + " " + newVal;
        // },
    },
    computed: {
        fullname() {
            console.log("Running again");
            if(this.name === "" || this.lastname === "") {
                return "";
            }
            return this.name + " " + this.lastname;
        },
    },
    methods: {
        add(val) {
            console.log("Methode add läuft");
            this.counter += val;
        },
        setName(e, ln) {
            console.log("Methode setName läuft");
            console.log(e);
            console.log(e.target);
            this.name = e.target.value;
        },
        resetInput() {
            console.log("Methode resetInput läuft");
            this.name = "";
        },
    }
}).mount("#test");