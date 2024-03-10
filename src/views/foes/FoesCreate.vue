<template>
    <div class="d-flex gap-3 align-items-center ">
        <RouterLink to="/foes"><i class="fa-solid fa-chevron-left"></i></RouterLink>
        <h3 class="m-0">Create a new foe</h3>
    </div>

    <div class="my-5">
        <div class="row">
            <div class="col-6">
                <h4>Foe informations</h4>
                <input class="form-control" type="text" placeholder="Name">
                <div class="d-flex mt-3 gap-3">
                    <input class="form-control" type="text" placeholder="HP">
                    <input class="form-control" type="text" placeholder="AC">
                    <input class="form-control" type="text" placeholder="Initiative">
                </div>
            </div>
            <div class="col-6">
                <h4>Upload image</h4>
                <input class="form-control" type="file" id="formFile">
            </div>
        </div>
    </div>

    <div>
        <RouterLink to="/foes"><button class="btn btn-primary">Save</button></RouterLink>
    </div>
</template>

<script>

</script>

<style lang="scss" scoped>

</style>