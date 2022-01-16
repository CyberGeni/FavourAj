<template>
    <main>
        <img src="/src/assets/bg-gradients.png" alt="">
        <img src="/src/assets/spikey-star.svg" alt="" class="spikey">
        <img src="/src/assets/lazy-star.svg" alt="" class="lazy">
        <img src="/src/assets/rounded-star.svg" alt="" class="rounded">
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

    main {
        height: 85vh;
        display: flex;
        justify-content: center;
        align-items: center;
        text-align: center;
    }
    section {
        margin-top: -5em;
    }
    .spikey {
        position: absolute;
        margin-right: 75%;
        margin-top: -20em;
        z-index: -150;
    }
    .rounded {      
        position: absolute;
        margin-right: -30%;
        top: 50;
        z-index: -150;
        opacity: 0.5;
    }
    .lazy {
        position: absolute;
        right: 0;
        top: 50;
        bottom: 0;
        z-index: -150;
        opacity: 0.8;
    }
    img[src="/src/assets/bg-gradients.png"] {
        display: flex;
        position: absolute;
        top: 0;
        right: 0;
        width: 90%;
        height: fit-content;
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
        line-height: 30px;
        max-width: 720px;
    }
</style>