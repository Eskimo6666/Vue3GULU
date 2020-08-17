<template>
    <div>
        <TopNav/>
        <div class="content">
            <aside v-if="menuVisible">
                <h2>组件列表</h2>
                <ol>
                    <li>
                        <router-link to="/doc/switch">Switch组件</router-link>
                    </li>
                    <li>
                        <router-link to="/doc/button">Button组件</router-link>
                    </li>
                </ol>
            </aside>
            <main><router-view/></main>
        </div>
    </div>
</template>

<script lang="ts">
import TopNav from '../components/Topnav.vue'
import {inject, Ref} from 'vue'
export default {
    components:{TopNav},
    setup(){
        const menuVisible = inject<Ref<boolean>>('menuVisible')
        return {menuVisible}
    }
};
</script>

<style lang="scss" scoped>
    aside{
        background: lightseagreen;
        width:150px;
        padding:16px;
        position:fixed;
        padding-top: 70px;
        top:0;
        left:0;
        > h2{
            margin-bottom:4px;
        }
        > ol {
            > li{
                padding: 4px 0;
            }
        }
        @media(max-width:500px){
            position:fixed;
            top:0;
            left:0;
            padding-top:70px;
        }
    }
</style>