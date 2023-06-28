import HomePage from '../components/pages/HomePage.vue';
import GalleryPage from '../components/pages/Gallery.vue';
import AboutPage from '../components/pages/About.vue';
import ContactPage from '../components/pages/Contact.vue';
import { createRouter, createWebHistory } from 'vue-router';

const routes = [
    {
        path: "/",
        name: "HomePage",
        component: HomePage
    },
    {
        path: "/gallery",
        name: "GalleryPage",
        component: GalleryPage
    },
    {
        path: "/about",
        name: "AboutPage",
        component: AboutPage
    },
    {
        path: "/contact",
        name: "ContactPage",
        component: ContactPage
    },
];

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
});

export default router;