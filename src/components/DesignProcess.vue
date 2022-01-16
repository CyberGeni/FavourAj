<template>
        <section>
            <h3>design process</h3>
            <aside>
                <div class="img-group">
                    <img src="src/assets/riskfree/research.svg" alt="">
                    <h3>Research</h3>
                </div>
                <img src="src/assets/riskfree/arrow.svg" alt="">
                <div class="img-group">
                    <img src="src/assets/ideate.svg" alt="">
                    <h3>Ideate</h3>
                </div>
                <img src="src/assets/riskfree/arrow.svg" alt="">
                <div class="img-group">
                    <img src="src/assets/riskfree/design-process.png" alt="">
                    <h3>Design</h3>
                </div>
                <img src="src/assets/riskfree/arrow.svg" alt="">     
                <div class="img-group">
                    <img src="src/assets/riskfree/prototype.svg" alt="">
                    <h3>Prototype</h3>
                </div>
                <img src="src/assets/riskfree/arrow.svg" alt="">
                <div class="img-group">
                    <img src="src/assets/riskfree/test.svg" alt="">
                    <h3>Test</h3>
                </div>      
            </aside>
        </section>
</template>
<script>
export default {
    
}
</script>
<style scoped>
    aside {
        display: flex;
        align-content: center;
        justify-content: space-between;
        flex-wrap: wrap;
        text-align: center;
    }
    .img-group {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        flex-wrap: wrap;
        width: 100%;
        max-width: 180px;
        background: #1B1B1B;
        border-radius: 8px;
        padding: 1.5em 2.5em;
        margin: 0.7em auto;
    }
    section h3 {
        color: white;
        font-weight: 500;
        margin: 2.5em 0 0.8em 0;
    }
    .img-group h3 {
        margin-top: 1em;
    }
    img[src="src/assets/riskfree/arrow.svg"] {
        margin: 1em;
    }
</style>