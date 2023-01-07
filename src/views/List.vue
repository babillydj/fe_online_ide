<template>
    <div class="w-full flex flex-col gap-6 items-center">
      <div
          v-for="course,idx in courses" :key="idx"
          class="card border border-gray-400 w-1/2 rounded-lg shadow-lg cursor-pointer"
          @click="gotoDetail(course.id)"
      >
        {{course.name}}
      </div>
    </div>
</template>
<script>
import { doRequest, errorMessage } from "@/lib/request"
import { apiUrls } from "@/lib/request/urls"

export default {
  name: 'ListPage',
  setup () {

  },
  data() {
    return {
      courses: []
    };
  },
  mounted() {
    this.getCourses()
  },
  methods: {
    async getCourses() {
      const payload = {
        url: apiUrls.courseList,
        method: 'get',
        data: {}
      }
      const response = await doRequest(payload)
      this.courses = response.data
    },
    gotoDetail(id) {
      this.$router.push({path: '/detail/' + id})
    }
  }
}
</script>
