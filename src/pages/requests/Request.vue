<template>
  <div class="request">
    <search-form />
    <a-card :bordered="false">
      <a-list itemLayout="vertical">
        <a-list-item :key="index" v-for="(item, index) in requestList">
          <a-list-item-meta>
            <div slot="description" class="tag">
              <a-tag style="border: 1px solid red;">Database</a-tag>
              <a-tag style="border: 1px solid green;">IT</a-tag>
              <a-tag style="border: 1px solid blue;">Software engineer</a-tag>
            </div>
          </a-list-item-meta>
          <div class="content">
            <div class="detail">
              {{ item.shortDescription }}
            </div>
            <div class="author">
              <a-icon type="user" />
              <span class="email">{{ item.student.email }}</span>
              <em>{{ item.dateCreate }}</em>
            </div>
          </div>
          <span slot="actions"><i class="far fa-clock" style="margin-right: 8px" aria-hidden="true"></i>{{ item.duration }}</span>
          <span slot="actions"><i class="far fa-bell" style="margin-right: 8px"></i>{{ item.status }}</span>
          <span v-if="item.active" slot="actions"><i class="far fa-check-circle" style="margin-right: 8px"></i><div class="active">Active</div></span>
          <span v-else slot="actions" class="inactive"><i class="far fa-check-circle" style="margin-right: 8px"></i><div class="inactive">InActive</div></span>
        </a-list-item>
      </a-list>
    </a-card>
  </div>
</template>

<script>
import SearchForm from './../list/search/SearchForm'
import {getRequestList} from '@/services/request'

export default {
  name: 'ProjectList',
  components: {SearchForm},
  data () {
    return {
      requestList: [],
    }
  },
  mounted () {
    this.initPage()
  },
  computed: {

  },
  methods: {
    initPage () {
      new Promise((resolve, reject) => {
        resolve()
      }).then(res => {
        return getRequestList()
      }).then(res => {
        this.requestList = res.data.result
      })
    } 
  }
}
</script>

<style lang="less" scoped>
  .request {
    .tag {
      .ant-tag {
        text-align: center;
        font-weight: bold;
      }
    }
    .extra{
      width: 272px;
      height: 1px;
    }
    .content {
      .detail {
        line-height: 22px;
        max-width: 720px;
        font-size: 20px;
      }
      .author {
        color: @text-color-second;
        margin-top: 16px;
        line-height: 22px;
        & > :global(.ant-avatar) {
            vertical-align: top;
            margin-right: 8px;
            width: 20px;
            height: 20px;
            position: relative;
            top: 1px;
          }
        & > em {
            color: @disabled-color;
            font-style: normal;
            margin-left: 16px;
          }
      }
      .email {
        margin-left: 10px;
        font-weight: bold;
      } 
    }
    .active {
      background-color: green;
      display: inline;
      border-radius: 5px;
      padding: 2px 20px;
      font-size: 13px;
      color: white !important;
    }
    .inactive {
      background-color: red;
      display: inline;
      border-radius: 5px;
      padding: 2px 20px;
      font-size: 13px;
      color: white !important;
    }
  }
</style>
