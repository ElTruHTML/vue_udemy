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
        },
    },
})
.mount("#user-goals");