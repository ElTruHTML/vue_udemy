"use strict";

let app = Vue.createApp({
    data() {
        return {
            counter: 0,
            name: "",
            lastName: "",
        }
    },
    /**Watcher erwarten Methoden. Die NAmen der MEthoden MÜSSEN UNBEDINGT mit den Namen der Properties übereinstimmen.
     * Wann auch immer sich eine PRop ändert, UND ERST DANN, wird die gleichnamige Watcher-MEthode ausgeführt
     * @param: {newVal} = Der neue Wert, der geändert wurde
     * @param: {oldVal} = Der Wert, wie er VOR DER ÄNDERUNG war*/
    watch: {
        name() {
            this.name
        },
    },
    computed: {
        fullname() {
            console.log("Running");
            if(this.name === "" || this.lastName === "") {
                return "";
            }
            else {
                return this.name + " " + "Trumic";
            }
        }
    },
})
.mount("#events");