<template>
  <div
      style="width: 100vw;height: 100vh;background: url('http://emuc.top:998/down/1TGhAzGM03M6') no-repeat;background-size: 100%">


    <!--    Axios接口 {{for_i}}}-->
    <div style="font-family:华文彩云;font-size: 4rem;position: fixed;top: 7vh;left: 7vw;">The leaves <br/>&nbsp;&nbsp;&nbsp;{{Sunset }}</div>


    <a-card
        style="width:30vw;position: fixed;top: 35%;left: 75%;transform: translate(-50%,-50%);border-radius: 19px;opacity: 0.8"
        title="TimeLoop!"
        :tab-list="tabList"
        :active-tab-key="key"
        @tabChange="key => onTabChange(key, 'key')"
    >
      <span slot="customRender" slot-scope="item">{{ item.key }} </span>
      <a slot="extra" href="#">寄！</a>
      <div v-if="this.key==='tab1'">
        <MethodLog/>
      </div>
      <div v-if="this.key==='tab2'">
        <MethodReg/>
      </div>
    </a-card>
  </div>
</template>

<script>
import MethodLog from './MethodLog'
import MethodReg from './MethodReg'

export default {
  components: {
    MethodLog,
    MethodReg
  },
  data() {
    return {
      Sunset: 'fell of as I did',
      tabList: [
        {
          key: 'tab1',
          tab: '登录',
          scopedSlots: {tab: 'customRender'},
        },
        {
          key: 'tab2',
          tab: '注册',
        },
      ],
      contentList: {
        tab1: 'content1',
        tab2: 'content2',
      },
      key: 'tab1',
      noTitleKey: 'app',
    };
  },
  methods: {
    onTabChange(key, type) {
      console.log(key, type);
      this[type] = key;
    },
  },
};
</script>
