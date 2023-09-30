<template>
  <div>
    <div v-for="item in list" :key="item.id">
      <div class="list" @click="gotoAbout(item)">
        <button class="button" data-type="danger" v-on:click="onSwipeLeft(item)">
          删除
        </button>
        <div class="content">
          <span>{{ item.name }}</span>
          <span>{{ item.description }}</span>
        </div>

        <s class="space"></s>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "DeleteItem",
  data() {
    return {
      list: [
        { id: 1, name: "neko", description: "这是猫猫1" },
        { id: 2, name: "rabbitmq", description: "这是喵喵2" },
        { id: 3, name: "redis", description: "这是喵喵喵3" },
      ],
    };
  },

  methods: {
    onSwipeLeft(item) {
      // 前端删除
      const res = this.list.filter((list_item) => {
        return list_item.id !== item.id;
      });
      this.list = res;
    },

    gotoAbout(item) {
      this.$router.push({
        path: "/about",
        query: {
          id: item.id,
          name: item.name,
          description: item.description,
        },
      });
    },
  },
};
</script>

<style>
.list::-webkit-scrollbar {
  display: none;
}

.list {
  display: flex;
  border-top: 1px solid #eee;
  border-bottom: 1px solid #eee;
  overflow-y: scroll;
}
.content {
  padding: 0.5rem 1rem;
  line-height: 1.5;
  flex: 0 0 calc(100vw - 2rem);
  font-size: 1rem;
  color: inherit;
  background-color: #fff;
  box-shadow: 0 1px #fff, 0 -1px #fff;
  position: relative;
}
.space {
  flex: 0 0 4rem;
}
.button {
  border: 0;
  padding: 0;
  font-size: 1rem;
  color: #fff;
  width: 4rem;
  height: 2.5rem;
  position: absolute;
  right: 0;
  outline: 0;
}
[data-type="danger"] {
  background-color: #eb4646;
}
[data-type="warning"] {
  background-color: #f59b00;
}
</style>
