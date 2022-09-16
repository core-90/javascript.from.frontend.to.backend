import Element from "./element.js";

const GlobalApp = {
    data(){
        return{
            elements : []
        }
    },
    Components : {
        Element:Element
    },
    template : `
        <button>Add Element</button>
        <ul></ul>
    `,
}
export default GlobalApp;