<template>
  <div class="card">
    <h5 class="card-header">{{ title }}</h5>
    <div class="card-body">
      <p class="card-text">
        {{ content }}
      </p>
    </div>
  </div>
</template>

<script>
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";

export default {
  data() {
    return {
      title: "",
      content: "",
    };
  },
  mounted() {
    this.title = this.$route.query.name ?? "about";
    this.content = this.$route.query.description ?? "this is default value";
  },

  methods: {},
};
</script>
