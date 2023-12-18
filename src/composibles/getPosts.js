import { ref } from "vue";
import axios from "axios"

const getposts = () => {

    const posts = ref([]);

    const load = async () => {
        try {
            let { data } = await axios("http://localhost:3000/posts")
            posts.value = data
        } catch (error) {
            console.log(error)
        }
    }

    return { posts, load }
}

export default getposts