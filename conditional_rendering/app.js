Vue.createApp({
    data() {
        return {
            enteredGoalValue: "",
            goals: [],
            object: {
                name: "Eldin",
                age: 30,
            },
        };
    },
    methods: {
        addGoal() {
            this.goals.push(this.enteredGoalValue);
            this.enteredGoalValue = "";
        },
        removeGoal(idx) {
            this.goals.splice(idx, 1);
        },
    },
})
.mount("#user-goals");