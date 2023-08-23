Vue.createApp({
    data() {
        return {
            boxASelected: false,
            boxBSelected: false,
            boxCSelected: false,
        };
    },
    computed: {
        boxAClasses() {
            return {aktiv: this.boxASelected};
        },
        boxBClasses() {
            return {aktiv: this.boxBSelected};
        },
        boxCClasses() {
            return {aktiv: this.boxCSelected};
        },
    },
    methods: {
        boxSelected(box) {
            if(box === "A") {
                this.boxASelected = !this.boxASelected;
            }
            else if(box === "B") {
                this.boxBSelected = !this.boxBSelected;
            }
            else {
                this.boxCSelected = !this.boxCSelected;
            }
        }
    },
})
.mount("#style");