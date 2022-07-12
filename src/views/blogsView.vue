<template>
  <div class="x">
    <h1>Blogs</h1>
    <Blogs/>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import Blogs from "@/components/blogs.vue";

@Component({
  components: {
    Blogs,
  },
})
export default class blogsView extends Vue {}
</script>
