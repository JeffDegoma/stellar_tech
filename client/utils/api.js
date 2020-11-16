//consider moving api calls to backend in here
const axios = require('axios')


useEffect(() => {
    async function load() {
        try {
            await axios.get('http://localhost:3000/')
            .then(res => console.log(res))
        } catch {
            console.error('something went wrong in useEffect')
        }
    }
    // load() //uncomment
})