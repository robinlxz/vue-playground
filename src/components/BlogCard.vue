<template>
  <router-link
    class="blog-link"
    :to="{ name: 'BlogShow', params: { id: blogObject.id } }"
  >
    <div class="blog-card -shadow">
      <h2>@{{ blogObject.date }}</h2>
      <h1>{{ blogObject.title }}</h1>
      <!-- <pre><p>{{ blogObject.content }}</p></pre> -->
    </div>
  </router-link>
</template>

<script>
export default {
  name: 'BlogCard',
  data() {
    return {}
  },
  props: {
    blogObject: Object
  },
  created() {
    // console.log(this.blogObject)
  }
}
</script>

<style lang="scss" scoped>
@import '@/styles/main.scss';

.blog-link {
  text-decoration: none;
  color: #000;
}

.blog-card {
  // border: 2px solid;
  width: 25rem;
  // height: 6rem;
  margin-bottom: 2rem;
  padding: 2rem;
  transition: all 0.2s linear;
  cursor: pointer;

  &:hover {
    transform: scale(1.01);
    box-shadow: 0 3px 12px 0 rgba(0, 0, 0, 0.2),
      0 1px 15px 0 rgba(0, 0, 0, 0.19);
  }
}
</style>
