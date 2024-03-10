<template>
    <div class="d-flex gap-3 align-items-center ">
        <RouterLink to="/foes"><i class="fa-solid fa-chevron-left"></i></RouterLink>
        <h3 class="m-0">Edit foe</h3>
    </div>

    <div class="my-5">
        <div class="row">
            <div class="col-6">
                <h4>Foe informations</h4>
                <input class="form-control" type="text" placeholder="Name" v-model="foe.name">
                <div class="d-flex mt-3 gap-3">
                    <input class="form-control" type="text" placeholder="HP" v-model="foe.hp">
                    <input class="form-control" type="text" placeholder="AC" v-model="foe.ac">
                    <input class="form-control" type="text" placeholder="Initiative" v-model="foe.initiative">
                </div>
            </div>
            <div class="col-6">
                <h4>Upload image</h4>
                <input class="form-control" type="file" id="formFile">
            </div>
        </div>
    </div>

    <div>
        <button class="btn btn-primary" @click="saveChanges">Save</button>
    </div>
</template>

<script>
import { store } from '../../store'

export default {
    data() {
        return {
            store,
            foe: {
                id: '',
                name: '',
                hp: '',
                ac: '',
                initiative: ''
            }
        }
    },
    mounted() {
        // Fetch card details using the id parameter from the route
        const foeId = this.$route.params.id;
        const foeDetails = this.store.arrayFoes.find(foe => foe.id === foeId);
        if (foeDetails) {
            this.foe = { ...foeDetails }
        }
    },
    methods: {
        saveChanges() {
            // Find the index of the edited foe in the array
            const index = this.store.arrayFoes.findIndex(foe => foe.id === this.foe.id);
            if (index !== -1) {
                // Update the foe in the array with the edited details
                this.store.arrayFoes[index] = { ...this.foe };
                // Navigate back to the cards page
                this.$router.push('/foes');
            }
        }
    }
}

</script>

<style lang="scss" scoped>

</style>