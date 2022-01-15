<template>
    <main>
        <img src="/src/assets/bg-gradients.png" alt="">
        <section>
            <h2>hi, i'm favour</h2>
            <h1>product designer</h1>
            <p>i have a thing for turning complex ideas into solutions that satisfy users without compromising on business goals.</p>
        </section>
    </main>
</template>
<script>

export default {

}
</script>
<style scoped>
    @font-face {
        font-family: 'Trap';
        src: url(/assets/fonts/Trap_/Trap-Regular.otf);
    }
    @font-face {
        font-family: Circular;
        src: url(/src/assets/fonts/Circular/CircularStd-Book.otf);
    }
    
    main {
        height: 70vh;
        display: flex;
        justify-content: center;
        align-items: center;
        text-align: center;
    }
    img[src="/src/assets/bg-gradients.png"] {
        display: flex;
        position: absolute;
        top: 0;
        right: 0;
        width: 90%;
        height: 100%;
        opacity: 0.6;
    }
    img[src="/src/assets/scroll.svg"] {
        display: flex;
        position: absolute;
        bottom: 0;
        left: 5%;
        opacity: 0.6;
    }
    h2 {
        font-family: 'Circular';
        color: white;
        font-size: 1.5em;
    }
    h1 {
        font-family: 'Trap' !important;
        font-size: 5em;
        background: -webkit-linear-gradient(180deg, #A8FFBB 16.21%, #6B81F0 41.72%, #CC48ED 81.21%);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        margin: 0.2em 0;
    }
    p {
        font-family: 'Circular';
        color: #E8E8F4;
        font-size: 1.15em;
        max-width: 720px;
    }
</style>