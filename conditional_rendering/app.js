Vue.createApp({
    data() {
        return {
            enteredGoalValue: "",
            goals: [],
        };
    },
    methods: {
        addGoal() {
            this.goals.push(this.enteredGoalValue);
        },
    },
})
.mount("#user-goals");