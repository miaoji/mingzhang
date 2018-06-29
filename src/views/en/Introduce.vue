<template>
  <div>
    <div class="clear w">
      <div class="introduce_left left">
        <div class="info">Contact Us</div>
        <div class="line"></div>
        <div class="content">TEL: 021-34120053</div>
        <!-- <div class="content">Canada Hotline : 647-995-2600</div> -->
        <div class="content">Operating Hours : 9:00-18:00</div>
        <div class="content">Website : www.mingz-tech.com</div>
        <div class="content">Address : Room No.1, 168 alley, Hongtai Road, Hongqiao business district, Shanghai,
          China.
        </div>
        <div class="content">Wechat : IESC007</div>
        <div class="content">QQ : 3187904519</div>
        <div class="content">Email : custom_service@ming-tech.net</div>
        <div class="content">AliTM : 明彰国际快递服务中心</div>
      </div>
      <div class="introduce right">
        <div class="image">
          <img src="/static/image/com.png" alt="">
        </div>
        <div class="tit">Company Profile</div>
        <div class="line"></div>
        <div class="header_info"> International Express Service Center belongs to Shanghai Ming Zhang Network Technology
          Co., Ltd, specialized in international express delivery, cloud storage transport, e-commerce distribution,
          committed to providing reliable and convenient international courier service to the manufacturing enterprises,
          trade enterprises, cross-border electricity providers and consumers. To create "high-quality international
          logistics integration services", we will spare no effort.
        </div>
        <div class="header_info">Through the construction of information network platform and advanced delivery system,
          our service center continue to provide customer service to meet their delivery needs, and, together with
          customer design the best solution for the whole logistics procedure including warehousing business with
          customers. In the storage, distribution, courier services, air transport and other aspects of global real-time
          monitoring, ready to provide customer tracking information.
        </div>
        <div class="header_info">International express center has service sites in Shanghai, Beijing, Shandong,
          Guangdong, Zhejiang, Jiangsu and other provinces. You send express, we send qualified courier, door-to-door
          collection. Faster and safer.
        </div>
        <div class="header_info">We think what customer think, we focus on what customer focus on. International express
          service center, look forward to cooperating with you together to achieve a win-win situation.
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  export default {
    name: 'introduce',
    data () {
      return {
        show: true,
        link: '/Introduce'
      }
    },
    created () {
      window.document.title = 'Shanghai Mingzhang Network Technology Co., Ltd.'
      this.menu()
      this.$emit('location', location.hash)
    },
    methods: {
      menu () {
        window.scrollTo(0, 0)
      }
    }
  }
</script>
<style scoped>
  .clear {
    margin-top: 35px;
  }

  /* 左侧边栏 */
  .introduce_left {
    padding-top: 22px;
    width: 288px;
    /* height: 488px; */
    padding-bottom: 22px;
    border: 1px #e1e1e0 solid;
    background-color: #fff;
  }

  .introduce_left > .info {
    font-size: 16px;
    font-weight: 600;
    line-height: 30px;
    padding: 38px 38px 10px;
    color: #333333;
  }

  .introduce_left > .content {
    font-size: 14px;
    color: #666;
    line-height: 30px;
    margin: 0px 38px 10px;
    border-bottom: 1px #555 solid;
  }

  .introduce_left > .img {
    margin: 70px auto 0px;
    width: 180px;
    height: 180px;
    overflow: hidden;
  }

  .introduce_left > .img > img {
    width: inherit;
    height: inherit;
  }

  /* 右侧边栏 */

  .introduce {
    width: 978px;
    border: 1px solid #e1e1e0;
    background-color: #fff;
    padding: 0px 40px 100px;
    box-sizing: border-box;
    color: #333;
    margin-bottom: 150px;
  }

  .introduce > .line {
    width: 55px;
    height: 3px;
    margin-top: 14px;
    margin-bottom: 20px;
    background-color: #ea000a;
  }

  .introduce_left > .line {
    width: 55px;
    height: 3px;
    margin-top: 2px;
    margin-left: 38px;
    margin-bottom: 30px;
    background-color: #ea000a;
  }

  .introduce > .header_info {
    text-indent: 1em;
    margin-top: 8px;
    font-size: 16px;
    line-height: 30px;
    color: #666;
  }

  .introduce > .tit {
    margin-top: 20px;
    font-size: 18px;
    font-weight: bold;
    line-height: 1.8em;
  }

  .introduce > .tit > .icon {
    display: inline-block;
    width: 8px;
    height: 8px;
    background-color: #333333;
    border-radius: 50%;
    margin-bottom: 2px;
    margin-right: 8px;
  }

  .introduce > .comtent {
    margin-top: 6px;
    font-size: 16px;
    line-height: 1.8em;
    font-weight: bold;
  }

  .introduce > .image {
    text-align: center;
    margin-top: 30px;
  }
</style>
