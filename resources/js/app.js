import './bootstrap';



import {
    createApp
} from 'vue';
import router from './router'

import CompaniesIndex from '@/components/Companies/CompaniesIndex.vue';

createApp({
    components: {
        CompaniesIndex
    }
}).use(router).mount('#app')