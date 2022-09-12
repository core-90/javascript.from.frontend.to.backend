const Counter = {
    /*The difference from the v-if directive is that the element, if not displayed, is only 
        hidden, but it is still inserted into the page. Whereas with the v-if directive, the element 
        is not inserted (if the condition is false).*/
    data() {
        return {
            count : 10,
        }
    },
    template: `
        Without v-model:
            <input type="text" :value="count" /> &nbsp;&nbsp;
            count = {{count}} <br><br>
        With v-model:
            <input type="text" v-model="count" /> &nbsp;&nbsp;
            count = {{count}} `,

}

export default Counter;