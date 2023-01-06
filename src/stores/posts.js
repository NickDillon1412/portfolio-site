import axios from "axios";
import { defineStore } from "pinia";
import { computed, ref } from "vue";

export const usePostsStore = defineStore("posts", () => {
  // state
  const newPost = ref("");
  const posts = ref([
    {
      name: "Post one",
      complete: false,
    },
    {
      name: "Post two",
      complete: false,
    },
    {
      name: "Post three",
      complete: false,
    },
    {
      name: "Post four",
      complete: false,
    },
    {
      name: "Post five",
      complete: false,
    },
    {
      name: "Post six",
      complete: false,
    },
  ]);

  // getters
  const countPosts = computed(() => posts.value.length);

  // actions
  const fetchPosts = async () => {
    const res = await axios.get("http://localhost:3000/posts");
    posts.value = await res.data;
  };

  const addPost = () => {
    if (newPost.value) {
      posts.value.push({ name: newPost.value, completed: false });
      newPost.value = "";
    }
  };

  const deletePost = (id) => {
    posts.value.splice(id, 1);
  };

  return { newPost, posts, countPosts, fetchPosts, addPost, deletePost };
});
