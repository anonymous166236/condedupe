<template>
  <div class="home">
    <DeleteItem />
  </div>
</template>

<script>
// @ is an alias to /src
import DeleteItem from "@/components/DeleteItem.vue";

export default {
  name: "HomeView",
  components: {
    DeleteItem,
  },
};
</script>
