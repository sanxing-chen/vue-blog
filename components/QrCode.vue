<template>
        <img :src="qrcode"/>
</template>
<script>
export default {
    data () {
        return {
            qrcode: ''
        }
    },
    created () {
        this.buildQrcode()
    },
    methods: {
        buildQrcode () {
            if (process.BROWSER_BUILD) {
                this.$nextTick(() => {
                    const jrQrcode = require('jr-qrcode')
                    let base64 = jrQrcode.getQrBase64(window.location.href, {
                        correctLevel: 1,
                        foreground: '#42b983'
                    })
                    this.qrcode = base64
                    console.log(base64)
                })
            }
            // console.log(process.BROWSER_BUILD)
        }
    }
}
</script>
<style lang="stylus" scoped>
img
    float right
    height 10em
    margin 3em
@media screen and (max-width: 900px)
    img
        float none
        position absolute
        left 50%
        margin 30px 0
        margin-right -50%
        transform translate(-50%, -50%)
</style>
