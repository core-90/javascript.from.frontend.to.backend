// Define an component´s object
const Counter = {
    data() {
        return {
            count: 0,
        }
    },
    template : ` <button @click="this.count++">Increment counter by count++</button>
                    &nbsp;&nbsp; count = {{count}} <br><br>
                <!--instead of using a semicolon we can use a comma-->
                <button @click="incr();incr2()">Increment counter by incr()</button>
                    &nbsp;&nbsp; count = {{count}} <br><br>`,
    methods : {
        incr(){
            this.count++;
            console.log("first method call");
        },
        incr2(){
            console.log("second method call");
        }
    },
    props : [
        "start"
    ]

}
export default Counter;