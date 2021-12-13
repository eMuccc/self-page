<template>
  <a-form
      id="components-form-demo-normal-login"
      :form="form"
      class="login-form"
      @submit="handleSubmit"
      style="position: relative"
  >

    <a-form-item>
      <a-input
          v-decorator="[
          'userNameReg',
          { rules: [{ required: true, message: '必须输入用户名' }] },
        ]"
          placeholder="用户名"
      >
        <a-icon slot="prefix" type="user" style="color: rgba(0,0,0,.25)"/>
      </a-input>
    </a-form-item>


    <a-form-item style="width: 48%">
      <a-input
          v-decorator="[
          'passwordReg',
          { rules: [{ required: true, message: '请输入密码!' }] },
        ]"
          type="password"
          placeholder="密码"
      >
        <a-icon slot="prefix" type="lock" style="color: rgba(0,0,0,.25)"/>
      </a-input>
    </a-form-item >

    <a-form-item style="width: 48%;position: absolute;top: 19%;left: 52%;">
      <a-input
          v-decorator="[
          'confirmPassword',
          { rules: [{ required: true, message: '请确认密码!' }] },
        ]"
          type="password"
          placeholder="确认密码"
      >
        <a-icon slot="prefix" type="lock" style="color: rgba(0,0,0,.25)"/>
      </a-input>
    </a-form-item>

    <a-form-item>
      <a-input
          v-decorator="[
          'codeBox',
          { rules: [{ required: true, message: '必须输入注册🐎' }] },
        ]"
          placeholder="注册🐎"
      >
        <a-icon slot="prefix" type="code-sandbox" style="color: rgba(0,0,0,.25)"/>
      </a-input>
    </a-form-item>


    <a-form-item>
      <a-checkbox
          v-decorator="[
          'isApply',
          {
            valuePropName: 'checked',
            initialValue: true,
          },
        ]"
      >
        同意<a href=""> 霸王条约</a>
      </a-checkbox>

      <a-button type="primary" html-type="submit" class="login-form-button">
       注 册
      </a-button>
    </a-form-item>
    <div class="bottomas" style="text-align: center;font-weight: bold"> Copyright &copy; 2021 eMuc_Box</div>
    <div class="bottomas" style="text-align: center"> Powered by Alibaba Cloud · Theme by <a href="https://www.antdv.com" target="_blank">Ant Design</a></div>
  </a-form>
</template>

<script>
export default {
  name:'MethodLog',
  beforeCreate() {
    this.form = this.$form.createForm(this, {name: 'normal_login'});
  },
  methods: {
    handleSubmit(e) {
      e.preventDefault();
      this.form.validateFields((err, values) => {
        if (!err) {
          console.log('Received values of form: ', values);
        }
      });
    },
  },
};
</script>

<style scoped>

#components-form-demo-normal-login .login-form {
  max-width: 280px;
}

#components-form-demo-normal-login .login-form-forgot {
  float: right;
}

#components-form-demo-normal-login .login-form-button {
  width: 100%;
}

</style>
