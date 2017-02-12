<template>
    <div>
        <tool-bar title="STay's blog"/>
        <div class="app">
            <nuxt/>
        </div>
    </div>
</template>
<script>
import ToolBar from '~components/ToolBar.vue'
export default {
    components: {
        ToolBar
    }
}
</script>
<style lang="stylus" scoped>
.app
    min-height 100vh
</style>
