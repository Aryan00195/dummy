<template>
    <div>
        <NavComponent/>
        <v-main>
            <router-view></router-view>
        </v-main>
        <FooterComponent/>
    </div>
</template>

<script>
import  NavComponent from "@/components/NavComponent.vue"
import  FooterComponent from "@/components/FooterComponent.vue";
export default {
    name: 'app',
    component: {
        NavComponent,
        FooterComponent,
    }
}
</script>