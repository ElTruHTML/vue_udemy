"use strict";

let app = Vue.createApp({
    data() {
        return {
            counter: 0,
            name: "",
            lastName: "",
            // fullName: "",
        }
    },
    /**Watcher erwarten Methoden. Die NAmen der MEthoden MÜSSEN UNBEDINGT mit den Namen der Properties übereinstimmen.
     * Wann auch immer sich eine PRop ändert, UND ERST DANN, wird die gleichnamige Watcher-MEthode ausgeführt
     * @param: {newVal} = Der neue Wert, der geändert wurde
     * @param: {oldVal} = Der Wert, wie er VOR DER ÄNDERUNG war*/
    watch: {
        counter(value) {
            if(value > 50) {
                this.counter = 0;
            }
        },
    },
    computed: {
        fullName() {
            console.log("Running");
            if(this.name === "" || this.lastName === "") {
                return "";
            }
            else {
                return this.name + " " + this.lastName;
            }
        }
    },
    methods: {
        add(val) {
            this.counter += 5;
        },
        reduce(val) {
            this.counter -= 5;
        },
    }
})
.mount("#events");