<template>

    <div class="cards d-flex flex-wrap">
        <div class="card">
            <div class="card-body d-flex align-items-center justify-content-center">       
                <RouterLink to="/foes/create"><i class="fa-solid fa-plus"></i> Create new foe</RouterLink>
            </div>
        </div>
        <div 
        v-for="element in store.arrayFoes"
        :key="element.id"
        class="card"
        @click="editMode(element)"
        >
            <RouterLink :to="`/foes/edit/${element.id}`">
                <div class="card-body p-0">       
                    <figure class="m-0">
                        <img src="https://picsum.photos/300/200" alt="">
                    </figure>
                    <div class="card-info p-4">
                        <h5>{{ element.name }}</h5>
                        <div class="card-details d-flex gap-3">
                            <span>HP: {{ element.hp}}</span>
                            <span>AC: {{ element.ac }}</span>
                        </div>
                    </div>
                </div>
            </RouterLink>
        </div>
    </div>

</template>

<script>
import router from '@/router';
import { store } from '../../store'

export default {
    data() {
        return {
            store,
        }
    },
    methods: {

        editMode(element) {
            store.editId = element.id
            console.log(store.editId)
            
        }
    }
}

</script>

<style lang="scss" scoped>

.cards {

    gap: 10px;

    .card {
        flex-basis: calc(100% / 4 - 10px + (10px / 4));
        height: 300px;
        overflow: hidden;

        figure {

            width: 100%;
            height: 60%;
            overflow: hidden;

        }
    }
}


</style>