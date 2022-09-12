// Define an component´s object
const Counter = {
    data() {
        return {
            count: parseInt(this.start),
        }
    },
    template : ` <button @click="this.count++">Increment counter by count++</button>
                    &nbsp;&nbsp; count = {{count}} <br><br>
                <button @click="incr()">Increment counter by incr()</button>
                    &nbsp;&nbsp; count = {{count}} <br><br>`,
    methods : {
        incr(){
            this.count++;
        }
    },
    props : [
        "start"
    ]
}
export default Counter;