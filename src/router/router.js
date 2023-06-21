import HomePage from './../components/pages/HomePage.vue';
import GalleryPage from './../components/pages/GalleryPage.vue';
import { createRouter, createWebHistory } from 'vue-router';

const routes = [
    {
        path: "/home",
        name: "HomePage",
        component: HomePage
    },
    {
        path: "/gallery",
        name: "GalleryPage",
        component: GalleryPage
    },
];

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
});

export default router;