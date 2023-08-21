Vue.createApp({
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
                this.boxASelected = true;
            }
            else if(box === "B") {
                this.boxBSelected = true;
            }
            else {
                this.boxCSelected = true;
            }
        }
    },
})
.mount("#style");