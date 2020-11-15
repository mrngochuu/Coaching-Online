<template>
  <a-card>
    <div :class="advanced ? 'search' : null">
      <a-form layout="horizontal">
        <div :class="advanced ? null: 'fold'">
          <a-row >
          <a-col :md="8" :sm="24" >
            <a-form-item
              label="Username"
              :labelCol="{span: 7}"
              :wrapperCol="{span: 16, offset: 1}"
            >
              <a-input placeholder="Username" />
            </a-form-item>
          </a-col>
          <a-col :md="8" :sm="24" >
            <a-form-item
              label="Role"
              :labelCol="{span: 7}"
              :wrapperCol="{span: 16, offset: 1}"
            >
              <a-select placeholder="Role" defaultValue="0">
                <a-select-option value="0" @click="selectRole(0)">All</a-select-option>
                <a-select-option value="1" @click="selectRole(1)">Leaner</a-select-option>
                <a-select-option value="2" @click="selectRole(2)">Coach</a-select-option>
              </a-select>
            </a-form-item>
          </a-col>
          <a-col :md="8" :sm="24" >
            <a-form-item
              label="Status"
              :labelCol="{span: 7}"
              :wrapperCol="{span: 16, offset: 1}"
            >
              <a-select placeholder="Status" defaultValue="0">
                <a-select-option value="0">All</a-select-option>
                <a-select-option value="1">Active</a-select-option>
                <a-select-option value="2">Inactive</a-select-option>
                <a-select-option value="3">Unconfirmed</a-select-option>
              </a-select>
            </a-form-item>
          </a-col>
        </a-row>
          <a-row v-if="isCoach">
          <a-col :md="8" :sm="24" >
            <a-form-item
              label="Major"
              :labelCol="{span: 7}"
              :wrapperCol="{span: 16, offset: 1}"
            >
              <a-select placeholder="Major" defaultValue="0">
                <a-select-option value="0">All</a-select-option>
                <a-select-option value="architecture">Architecture</a-select-option>
                <a-select-option value="art">Art</a-select-option>
                <a-select-option value="bussiness">Bussiness</a-select-option>
                <a-select-option value="communication">Communication</a-select-option>
                <a-select-option value="computerscience">Computer science</a-select-option>
                <a-select-option value="doctor">Doctor</a-select-option>
                <a-select-option value="languages">Languages</a-select-option>
                <a-select-option value="mathematic">Mathematic</a-select-option>
                <a-select-option value="other">Orther</a-select-option>
              </a-select>
            </a-form-item>
          </a-col>
          <a-col :md="8" :sm="24" >
            <a-form-item
              label="Certificate"
              :labelCol="{span: 7}"
              :wrapperCol="{span: 16, offset: 1}"
            >
              <a-select placeholder="Certificate" defaultValue="0">
                <a-select-option value="0">All</a-select-option>
                <a-select-option value="1">Associate</a-select-option>
                <a-select-option value="2">Bachelor</a-select-option>
                <a-select-option value="3">Master</a-select-option>
                <a-select-option value="4">Doctoral</a-select-option>
              </a-select>
            </a-form-item>
          </a-col>
          <a-col :md="8" :sm="24" >
            <a-form-item
              label="Exp. year"
              :labelCol="{span: 7}"
              :wrapperCol="{span: 16, offset: 1}"
            >
              <a-input-number :min="0" placeholder="Year" :disable="disableYear"/>
              <a-button type="primary" @click="selectYear()" style="margin-left: 10px;">
                Choose
              </a-button>
            </a-form-item>
            
          </a-col>
        </a-row>
        </div>
        <span style="float: right; margin-top: 3px;">
          <a-button type="primary" @click="clearDataSearch()">Clear</a-button>
          <a-button type="submit" style="margin-left: 8px; width: 150px;" icon="search" @click="search()" >Search</a-button>
        </span>
      </a-form>
    </div>
    <div>
      <standard-table
        :columns="columns"
        :dataSource="userList"
        :selectedRows.sync="selectedRows"
        @clear="onClear"
        @change="onChange"
        @selectedRowChange="onSelectChange"
      >
        <!-- <div slot="action" slot-scope="{text}">
            <table style="width: 250px; text-align: center;">
                <tbody>
                    <tr>
                        <td colspan="1" style="width: 33%">
                            <a v-if="text.status === 'Unconfirmed'">
                                <a-icon type="plus"/> Accept
                            </a>
                        </td>
                        <td colspan="1" style="width: 33%">
                            <a v-if="text.status === 'Unconfirmed'">
                                <a-icon type="plus"/> Ignore
                            </a>
                        </td>
                        <td colspan="1" style="width: 33%">
                            <a v-if="text.status === 'Active'">
                                <a-icon type="delete"/> Block
                            </a>
                            <a v-if="text.status === 'InActive'">
                                <a-icon type="plus"/> Unblock
                            </a>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div> -->
        <template slot="statusTitle">
          <a-icon @click.native="onStatusTitleClick" type="info-circle" />
        </template>
      </standard-table>
    </div>
  </a-card>
</template>

<script>
import StandardTable from '@/components/table/StandardTable'
import {getUserList} from '@/services/user'

export default {
  name: 'UserList',
  components: {StandardTable},
  data () {
    return {
      advanced: true,
      columns: [
        {title: 'Id', dataIndex: 'id', sorter: true},
        {title: 'Username', dataIndex: 'email'},
        // {title: 'BirthDate', dataIndex: 'dateOfBirth'},
        {title: 'Fullname', dataIndex: 'fullName'},
        // {title: 'Phone', dataIndex: 'phone'},
        {title: 'Gender', dataIndex: 'userGender'},
        // {title: 'Address', dataIndex: 'userAddress'},
        {title: 'Active', dataIndex: 'activeStr'},
        {title: 'Status', dataIndex: 'status'},
        {title: 'Role', dataIndex: 'roleStr'},
        {title: 'Level', dataIndex: 'level'}
      ],
      selectedRows: [],
      isCoach: false,
      disableYear: true,
      userList: [],
    }
  },
  authorize: {
    deleteRecord: 'delete'
  },
  beforeCreate: {

  },
  mounted () {
    this.initPage()
  },
  computed: {

  },
  methods: {
    initPage() {
      new Promise((resolve, reject) => {
        resolve()
      }).then(res => {
        return getUserList()
      }).then(res => {
        this.userList = res.data.result
        this.userList.forEach(user => {
          user.roleStr = user.role.id,
          user.activeStr = user.active ? 'active' : 'inactive'
        })
      })
    },
    selectYear() {
      this.disableYear = !this.disableYear
    },
    selectRole (value) {
      if(value === 2) {
        this.isCoach = true
      } else {
        this.isCoach = false
      }
    },
    deleteRecord(key) {
      // this.userList = this.userList.filter(item => item.id !== id)
      // this.selectedRows = this.selectedRows.filter(item => item.id !== id)
    },
    toggleAdvanced () {
      this.advanced = !this.advanced
    },
    remove () {
      // this.userList = this.userList.filter(item => this.selectedRows.findIndex(row => row.id === item.id) === -1)
      this.selectedRows = []
    },
    onClear() {
      this.$message.info('You cleared all checked rows.')
    },
    onStatusTitleClick() {
      this.$message.info('You clicked on the status title.')
    },
    onChange() {
      this.$message.info('Status changed')
    },
    onSelectChange() {
      this.$message.info('The selected row has changed')
    },
    addNew () {
      // this.dataSource.unshift({
      //   key: this.dataSource.length,
      //   no: 'NO ' + this.dataSource.length,
      //   description: 'This is a description',
      //   callNo: Math.floor(Math.random() * 1000),
      //   status: Math.floor(Math.random() * 10) % 4,
      //   updatedAt: '08/11/2020'
      // })
    },
    handleMenuClick (e) {
      if (e.key === 'delete') {
        this.remove()
      }
    }
  }
}
</script>

<style lang="less" scoped>
  .search{
    margin-bottom: 54px;
  }
  .fold{
    width: calc(100% - 216px);
    display: inline-block
  }
  .operator{
    margin-bottom: 18px;
  }

  @media screen and (max-width: 900px) {
    .fold {
      width: 100%;
    }
  }
</style>
