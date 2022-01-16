<template>
    <main>
        <h1>selected cases</h1>
        <section v-for="casestudy in cases" :key="casestudy.id">
            <img :src="casestudy.image" alt="" />
            <router-link :to="casestudy.link">
                <h2>{{casestudy.title}}</h2>
                <p>{{casestudy.description}}</p>    
            </router-link>
        </section>
    </main>
</template>
<script>
export default {
    data() {
        return {
            cases: [
                {
                    image: '/src/assets/risk-free-logo.svg',
                    title: 'risk free',
                    description: 'a new way to quit over thinking',
                    link: 'riskfree',
                    id: 1
                },
                {
                    image: '/src/assets/spotify-logo.svg',
                    title: 'spotify',
                    description: 'exploring lyrics and karaoke features',
                    link: 'spotify',
                    id: 2
                },
                {
                    image: '/src/assets/smart-ear-logo.svg',
                    title: 'smart ear',
                    description: 'coming soon...',
                    link: 'smart-ear',
                    id: 3
                }
            ]
        }
    },
}
</script>
<style scoped>
    main {
        position: relative;
        z-index: inherit;
        margin-top: 3em;
    }
    h1 {
        font-family: 'Trap';
        font-size: 5em;
        background: -webkit-linear-gradient(180deg, #A8FFBB 16.21%, #6B81F0 41.72%, #CC48ED 81.21%);
        color: rgba(27, 25, 25);
        -webkit-background-clip: text;
        -webkit-text-stroke: 4px transparent;
        margin: 0.2em 0;
        width: fit-content;
    }
    a {
        font-family: 'Circular';
        display: flex;
        flex-direction: column;
        align-items: space-evenly;
        height: max-content;
        color: white;
        text-decoration: none;
    }
    h2 {
        font-size: 32px;
        font-weight: 500;
        margin-bottom: 0.5em;
    }
    section {
        display: flex;
        align-items: center;
        margin: 1.5em 0;
    }
    section img {
        margin-right: 1.5em;
    }
</style>