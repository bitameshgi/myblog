import {createRouter , createWebHistory} from 'vue-router';
import SinglePost from './components/pages/SinglePost.vue'
import HomePage from './components/pages/HomePage.vue'
import AboutPage from './components/pages/AboutPage.vue'
import ContactPage from './components/pages/ContactPage.vue'


const routes=[
    {path: "/" , component: HomePage},
    {path: "/about" , component: AboutPage},
    {path: "/contact" , component: ContactPage},
    {path :"/posts/:post(\\d+)" , component:SinglePost}
]

const router = createRouter ({
    history: createWebHistory(),
    routes
    })
    

    export default router;