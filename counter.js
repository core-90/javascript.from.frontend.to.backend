const Counter = {
    /*The difference from the v-if directive is that the element, if not displayed, is only 
        hidden, but it is still inserted into the page. Whereas with the v-if directive, the element 
        is not inserted (if the condition is false).*/
    data() {
        return {
            counts: ["Counter 1", "Counter 2", "Counter 3",
                "Counter 4", "Counter 5"],
            //Array use to show v-for index use
            indexedCounts: ["iCounter 1", "iCounter 2", "iCounter 3",
                "iCounter 4", "iCounter 5"],
        }
    },
    template: `
        <!--Displaying counters as a list-->
        <ul>
            <li v-for="count in counts">
                <span>{{count}}</span>
            </li>
        </ul>
        <!--Displaying counters and their index (counter.js file)-->
        <ul>
            <li v-for="(count, index) in indexedCounts">
                <span>Index {{index}} : {{count}}</span>
            </li>
        </ul>`,

}

export default Counter;