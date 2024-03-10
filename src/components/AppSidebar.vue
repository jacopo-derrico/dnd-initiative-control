<template>

    <aside class="p-5">

        <nav class="d-flex flex-column gap-4">
            <RouterLink to="/">Encounters</RouterLink>
            <RouterLink to="/party">Party</RouterLink>
            <RouterLink to="/foes">Foes</RouterLink>
        </nav>

    </aside>

</template>

<script>
export default {
    name: 'AppSidebar'
}
</script>

<style lang="scss" scoped>
@use '../style/partials/variables' as *;

aside {

    width: 300px;
    height: 100vh;
    border: 1px solid pink;

}

</style>
