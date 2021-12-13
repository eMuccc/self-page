<template>
  <a-form
      id="components-form-demo-normal-login"
      :form="form"
      class="login-form"
      @submit="handleSubmit"
  >
    <a-form-item>
      <a-input
          v-decorator="[
          'Username',
          { rules: [{ required: true, message: '请输入用户名!' }] },
        ]"
          placeholder="用户名"
      >
        <a-icon slot="prefix" type="user" style="color: rgba(0,0,0,.25)"/>
      </a-input>
    </a-form-item>
    <a-form-item>
      <a-input
          v-decorator="[
          'password',
          { rules: [{ required: true, message: '请键入密🐎!' }] },
        ]"
          type="password"
          placeholder="密🐎"
      >
        <a-icon slot="prefix" type="lock" style="color: rgba(0,0,0,.25)"/>
      </a-input>
    </a-form-item>
    <a-form-item>
      <a-checkbox
          v-decorator="[
          'remember',
          {
            valuePropName: 'checked',
            initialValue: true,
          },
        ]"
      >
        记住我
      </a-checkbox>
      <a class="login-form-forgot" href="">
      忘记密码
      </a>
      <a-button type="primary" html-type="submit" class="login-form-button">
        登 录
      </a-button>
      或
      <a href="">现在注册</a>
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
          this.$router.push('/Mine')
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
