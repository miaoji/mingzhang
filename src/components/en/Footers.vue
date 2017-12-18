<template>
  <div class="footer">
    <div class="footer_line"></div>
    <div class="footer_ico"><img src="/static/image/footer_ico.png" alt="footer_ico"></div>
    <div class="footer_main w">
      <ul class="clear">
        <li class="left">
          <div class="tit">Help&Support</div>
          <div class="footer_item">
            <router-link to="/en/question">Questions & Answers</router-link>
          </div>
          <div class="footer_item">
            <router-link to="/en/violate">Prohibited Articles</router-link>
          </div>
        </li>
        <li class="left">
          <div class="tit">About us</div>
          <div class="footer_item">
            <router-link to="/en/introduce">Company Profile</router-link>
          </div>
        </li>
        <li class="left">
          <div class="tit">Contact Us</div>
          <div class="footer_item">Operating Hours : 9:00-18:00</div>
          <div class="footer_item">TEL : 021-34120053</div>
          <div class="footer_item">Canada Hotline : 647-995-2600</div>
          <div class="footer_item">Address : Room No.1, 168 alley, Hongtai Road, Hongqiao business district, Shanghai,
            China.
          </div>
          <div class="footer_item">wechat : IESC007</div>
          <div class="footer_item">QQ : 3187904519</div>
          <div class="footer_item">Email : custom_service@ming-tech.net</div>
          <div class="footer_item">AliTM : 明彰国际快递服务中心</div>
        </li>
        <li class="right">
          <div class="tit">We-chat Official Accounts</div>
          <div class="img"><img src="/static/image/WeChat.jpg"/></div>
        </li>
      </ul>
      <div class="footer_info">All Rights Reserved 明彰网络科技有限公司版权所有</div>
      <div class="footer_info">沪ICP备17039232号-1</div>
    </div>
  </div>
</template>
<script>
  export default {
    name: 'Footer',
    data () {
      return {
        msg: '这个页面是底部导航栏'
      }
    },
    created () {
      this.menu()
    },
    methods: {
      menu () {
        window.scrollTo(0, 0)
      }
    }
  }
</script>
<style scoped>
  /* 底部导航栏  */
  .footer_line {
    height: 7px;
    background-color: #d7132e;
    border-top: 1px solid #f4c0c7;
    border-bottom: 1px solid #a9182d;
  }

  .footer {
    position: relative;
    background-color: #29262a;
  }

  .footer_ico {
    width: 38px;
    height: 30px;
    position: absolute;
    left: 50%;
    top: 0px;
    margin-left: -19px;
  }

  .footer > .footer_main > ul {
    padding: 30px 100px;
    margin: 0px;
  }

  .footer > .footer_main > ul > li {
    list-style: none;
    /*width: 280px;*/
    margin-right: 40px;
  }

  .footer > .footer_main > ul > li:last-child {
    margin-right: 0px;
  }

  .footer > .footer_main > ul > li > .tit {
    font-size: 14px;
    font-weight: 400;
    color: #fff;
    line-height: 1.5em;
    margin-bottom: 6px;
  }

  .footer > .footer_main > ul > li > .footer_item {
    font-size: 13px;
    color: #999999;
    line-height: 1.5em;
  }

  .footer > .footer_main > .footer_info {
    text-align: center;
    font-size: 14px;
    color: #999999;
    /*padding-bottom: 10px;*/
  }

  .footer > .footer_main > ul > li > .img {
    margin: 0px auto;
    width: 80px;
    height: 80px;
  }

  .footer > .footer_main > ul > li > .img > img {
    width: inherit;
    height: inherit;
  }
</style>
