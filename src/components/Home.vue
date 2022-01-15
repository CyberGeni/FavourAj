<template>
    <main>
        <hero></hero>
    </main>
</template>
<script>
import Hero from './Hero.vue'
export default {
    components: {
        'hero': Hero,
    }
}
</script>
<style scoped>
    main {
        width: 100%;
        overflow-x: hidden;
    }
</style>