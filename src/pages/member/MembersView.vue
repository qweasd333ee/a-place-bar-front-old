<template>
  <q-page id="member-members-view">
    <section id="section01">
      <div class="container">
        <div class="row justify-center">
          <div class="col-12 text-center text-h3 text-white text">會員資料</div>
          <div class="col-12 form">
            <q-form @submit="editUser">
              <div class="q-mx-auto" style="width: 70%">
                <div class="row justify-between">
                  <div class="col-5">
                    <div class="flex justify-between items-center">
                      <div class="text-body-1 q-py-md">帳號：</div>
                      <div v-if="!edit" class="text-body-1">{{ formEdit.account }}</div>
                      <q-input
                      v-if="edit"
                      class="q-my-xs"
                      v-model="formEdit.account"
                      maxlength="20"
                      outlined
                      dense
                      :rules="rules.account"
                      />
                    </div>
                    <div class="flex justify-between items-center">
                      <div class="text-body-1 q-py-md">姓名：</div>
                      <div v-if="!edit" class="text-body-1">{{ formEdit.name }}</div>
                      <q-input
                      class="q-my-xs" v-if="edit"
                      v-model="formEdit.name"
                      maxlength="20"
                      outlined
                      dense
                      :rules="rules.name"
                      />
                    </div>
                    <div class="flex justify-between items-center">
                      <div class="text-body-1 q-py-md">信箱：</div>
                      <div v-if="!edit" class="text-body-1">{{ formEdit.email }}</div>
                      <q-input
                      class="q-my-xs" v-if="edit"
                      v-model="formEdit.email"
                      maxlength="20"
                      outlined
                      dense
                      :rules="rules.email"
                      />
                    </div>
                    <div class="flex justify-between items-center">
                      <div class="text-body-1 q-py-md">電話：</div>
                      <div v-if="!edit" class="text-body-1">{{ formEdit.phone }}</div>
                      <q-input
                      class="q-my-xs" v-if="edit"
                      v-model="formEdit.phone"
                      maxlength="20"
                      outlined
                      dense
                      :rules="rules.phone"
                      />
                    </div>
                  </div>
                  <div class="col-5">
                    <div class="flex justify-between items-center">
                      <div class="text-body-1 q-py-md">地址：</div>
                      <div v-if="!edit" class="text-body-1">{{ formEdit.address }}</div>
                      <q-input
                      class="q-my-xs" v-if="edit"
                      v-model="formEdit.address"
                      maxlength="20"
                      outlined
                      dense
                      :rules="rules.address"
                      />
                    </div>
                    <div class="flex justify-between items-center">
                      <div class="text-body-1 q-py-md">性別：</div>
                      <div v-if="!edit" class="text-body-1">{{ formEdit.gender }}</div>
                      <q-radio v-if="edit" v-model="formEdit.gender" val="男" label="男" :rules="rules.gender"/>
                      <q-radio v-if="edit" v-model="formEdit.gender" val="女" label="女" :rules="rules.gender"/>
                    </div>
                    <div class="flex justify-between items-center">
                      <div class="text-body-1 q-py-md">年齡：</div>
                      <div v-if="!edit" class="text-body-1">{{ formEdit.age }}</div>
                      <q-input
                      class="q-my-xs" v-if="edit"
                      v-model="formEdit.age"
                      maxlength="20"
                      outlined
                      dense
                      :rules="rules.age"
                      />
                    </div>
                    <div class="flex justify-between items-center">
                      <div class="text-body-1 q-py-md">信用卡號：</div>
                      <div v-if="!edit" class="text-body-1">{{ formEdit.creitcard }}</div>
                      <q-input
                      class="q-my-xs" v-if="edit"
                      v-model="formEdit.creitcard"
                      maxlength="20"
                      outlined
                      dense
                      :rules="rules.creitcard"
                      />
                    </div>
                  </div>
                  <div class="q-mb-lg text-center col-12 q-mt-xl">
                    <q-btn v-if="!edit" label="編輯" icon="mdi-pen" color="warning" @click="edit = !edit" />
                    <q-btn v-if="edit" label="儲存" icon="check" color="green" @click="editCheck = !editCheck" />
                  </div>
                </div>
              </div>
            </q-form>
            <q-dialog v-model="editCheck" persistent>
              <q-card>
                <q-card-section class="row items-center">
                  <q-avatar icon='info' text-color='black' />
                  <span class="q-ml-sm">
                    是否確認儲存修改？
                  </span>
                </q-card-section>
                <q-card-actions align="center">
                  <q-btn flat label="取消" color="primary" v-close-popup @click="editCanel" />
                  <q-btn flat label="確定" color="primary" type="submit" @click="editUser" />
                </q-card-actions>
              </q-card>
            </q-dialog>
          </div>
        </div>
      </div>
    </section>
  </q-page>
</template>

<script setup>
import { reactive, ref } from 'vue'
import { apiAuth } from 'src/boot/axios'
import { isEmail, isCreditCard } from 'validator'
import Swal from 'sweetalert2'

const edit = ref(false)
const editCheck = ref(false)

const rules = {
  account: [
    v => !!v || '欄位必填',
    v => (v.length >= 4 && v.length <= 20) || '長度必須為 4 ~ 20 個字',
    v => /^[a-zA-Z0-9]+$/.test(v) || '帳號僅能為英文大小寫及數字'
  ],
  name: [
    v => !!v || '欄位必填'
  ],
  email: [
    v => !!v || '欄位必填',
    v => isEmail(v) || '信箱格式錯誤'
  ],
  password: [
    v => !!v || '欄位必填',
    v => (v.length >= 4 && v.length <= 20) || '長度必須為 4 ~ 20 個字',
    v => /^[a-zA-Z0-9]+$/.test(v) || '密碼僅能為英文大小寫及數字'
  ],
  phone: [
    v => !!v || '欄位必填'
  ],
  address: [
    v => !!v || '欄位必填'
  ],
  gender: [
    v => !!v || '欄位必填'
  ],
  age: [
    v => !!v || '欄位必填'
  ],
  creitcard: [
    v => !!v || '欄位必填',
    v => isCreditCard(v) || '信用卡格式錯誤'
  ]
}

const form = reactive({
  _id: '',
  account: '',
  name: '',
  email: '',
  phone: '',
  address: '',
  gender: '',
  age: '',
  creitcard: ''
})

const formEdit = reactive({
  _id: '',
  account: '',
  name: '',
  email: '',
  phone: '',
  address: '',
  gender: '',
  age: '',
  creitcard: ''
})

const init = async () => {
  try {
    const { data } = await apiAuth.get('/users/me')
    form._id = data.result._id
    form.account = data.result.account
    form.name = data.result.name
    form.email = data.result.email
    form.phone = data.result.phone
    form.address = data.result.address
    form.gender = data.result.gender
    form.age = data.result.age
    form.creitcard = data.result.creitcard
    formEdit._id = form._id
    formEdit.account = form.account
    formEdit.email = form.email
    formEdit.name = form.name
    formEdit.phone = form.phone
    formEdit.address = form.address
    formEdit.gender = form.gender
    formEdit.age = form.age
    formEdit.creitcard = form.creitcard
  } catch (error) {
    Swal.fire({
      icon: 'error',
      title: '失敗',
      text: error?.response?.data?.message || '資料取得失敗'
    })
  }
}
init()

const editCanel = () => {
  edit.value = false
  formEdit._id = form._id
  formEdit.account = form.account
  formEdit.email = form.email
  formEdit.name = form.name
  formEdit.phone = form.phone
  formEdit.address = form.address
  formEdit.gender = form.gender
  formEdit.age = form.age
  formEdit.creitcard = form.creitcard
}

const editUser = async () => {
  try {
    const { data } = await apiAuth.patch('/users/' + form._id, formEdit)
    formEdit._id = data.result._id
    formEdit.account = data.result.account
    formEdit.email = data.result.email
    formEdit.name = data.result.name
    formEdit.phone = data.result.phone
    formEdit.address = form.address
    formEdit.gender = form.gender
    formEdit.age = form.age
    formEdit.creitcard = form.creitcard
    await Swal.fire({
      icon: 'success',
      title: '成功',
      text: '修改成功'
    })
    init()
    editCheck.value = false
    edit.value = false
  } catch (error) {
    console.log(error)
    Swal.fire({
      icon: 'error',
      title: '失敗',
      text: error?.response?.data?.message || '編輯失敗'
    })
  }
}

</script>
