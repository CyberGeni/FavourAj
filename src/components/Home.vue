<template>
    <main>
        <hero></hero>
        <case></case>
    </main>
</template>
<script>
import Hero from './Hero.vue'
import CaseStudies from './CaseStudies.vue'
export default {
    components: {
        'hero': Hero,
        'case': CaseStudies
    }
}
</script>
<style scoped>
    main {
        width: 100%;
        overflow-x: hidden;
    }
</style>