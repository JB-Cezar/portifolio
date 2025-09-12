import HomePage from '../components/pages/HomePage.vue';
import GalleryPage from '../components/pages/Gallery.vue';
import AboutPage from '../components/pages/About.vue';
import { createRouter, createWebHashHistory } from 'vue-router';

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
];

const router = createRouter({
    history: createWebHashHistory(),
    routes
});

export default router;