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
            stuffshown: "",
        };
    },
    methods: {
        add(val) {
            this.counter += val;
        },
        showstuff(e, ln) {
            console.log(e);
            console.log(e.target);
            this.stuffshown = e.target.value + " " + ln;
        },
    }
}).mount("#test");