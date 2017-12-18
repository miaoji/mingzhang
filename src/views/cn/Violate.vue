<template>
  <div>
    <div class="clear w">
      <div class="violate_left left">
        <div class="info">帮助支持</div>
        <div class="line"></div>
        <div class="content">
          <router-link to='/Question'>疑难解答</router-link>
        </div>
        <div class="content action">
          <router-link to='/Violate'>禁运物品</router-link>
        </div>
      </div>
      <div class="violate right">
        <div class="image">
          <img src="/static/image/banner_question.png" alt="">
        </div>
        <div class="tit">国际快递违禁物品范围</div>
        <div class="line"></div>
        <div class="image image_s">
          <img src="/static/image/violate.png" alt="">
        </div>
        <div class="violate_tit">一、上图中1至15号均属航空禁运物品；14、15号可以通过网络车运输。</div>

        <div class="violate_tit">二、其它禁止和限制寄递的物品：</div>
        <div class="answer">
          1、爆炸性、易燃性、腐蚀性、毒性、强酸碱性和放射性的各种危险物品，如雷管、火药、爆竹、汽油、酒精、煤油、桐油、生漆、火柴、农药等所有列入化学工业出版社出版的“化学危险品实用手册”中的化工产品；
        </div>
        <div class="answer">2、麻醉药物和精神物品，如鸦片、吗啡、可卡因（高根）等；国家法令禁止流通或寄递的物品，如军火武器、本国或外国货币等；</div>
        <div class="answer">3、容易腐烂的物品、各种活的动物（如鲜鱼、鲜肉等）；</div>
        <div class="answer">4、妨碍公共卫生的物品，如尸骨（包括已焚化的尸骨）、未经硝制的兽皮、未经药制的兽骨等；</div>
        <div class="answer">5、反动报刊、书籍、窗口或者淫秽物品等；</div>
        <div class="answer">6、如你交寄的化工产品未列入“化学危险品实用手册”中的，你必须提供地市面上一级化工产品鉴定部门出具的鉴定书，证实相关物品属非危险化工产品方可交寄，相关鉴定部门必须对鉴定结果负责。
        </div>

        <div class="violate_tit">三、国家禁止进、出口（境）物品：</div>
        <div class="answer">1、禁止进境的物品：</div>
        <div class="answer">（1）各种武器、弹药、仿真武器及爆炸物品；</div>
        <div class="answer">（2）仿造的货币及仿造的有价证券等；</div>
        <div class="answer">（4）对中国政治经济文化道德有害的印刷品、胶卷、照片、唱片、影片、录音带、激光视盘、计算机存储介质及其他物品；</div>
        <div class="answer">（4）各种烈性毒药；</div>
        <div class="answer">（5）鸦片、吗啡、海洛英、大麻及其它能使人成瘾的麻醉品、精神药物；</div>
        <div class="answer">（6）带有危险性病菌、害虫及其它有害生物的动物、植物及其它产品；</div>
        <div class="answer">（7）有碍人畜健康的来自疫区的及其它能传播疾病的食品、药品或其它物品。</div>
        <div class="answer">2、禁止出境的所有物品：</div>
        <div class="answer">（1）列入禁止进境范围的所有物品；</div>
        <div class="answer">（2）内容涉及国家秘密的手稿、印刷品、胶卷、照片、唱片、影片、录音带、激光视盘、计算机存储介质及其他物品；</div>
        <div class="answer">（3）珍贵文物及其它禁止出境的文物；</div>
        <div class="answer">（4）濒临的和珍贵的动物、植物（均含标本）及其种子和繁殖材料。</div>
      </div>
    </div>
  </div>
</template>
<script>
  export default {
    name: 'violate',
    data () {
      return {
        show: true,
        link: '/enViolate'
      }
    },
    created () {
      window.document.title = '上海明彰网络科技有限公司'
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
  .violate_left {
    padding-top: 22px;
    width: 288px;
    height: 488px;
    border: 1px #e1e1e0 solid;
    background-color: #fff;
  }

  .violate_left > .info {
    font-size: 18px;
    font-weight: 600;
    line-height: 30px;
    padding: 38px 38px 10px;
    color: #333333;
  }

  .violate_left > .content {
    font-size: 16px;
    color: #666;
    line-height: 30px;
    margin: 0px 38px 10px;
    border-bottom: 1px #555 solid;
  }

  .violate_left > .content.action {
    color: red;
  }

  .violate_left > .info:last-child {
  }

  .violate_left > .img {
    margin: 70px auto 0px;
    width: 180px;
    height: 180px;
    overflow: hidden;
  }

  .violate_left > .img > img {
    width: inherit;
    height: inherit;
  }

  /* 右侧边栏 */

  .violate {
    width: 978px;
    border: 1px solid #e1e1e0;
    background-color: #fff;
    padding: 0px 40px 100px;
    box-sizing: border-box;
    color: #333;
    margin-bottom: 150px;
  }

  .violate > .line {
    width: 55px;
    height: 3px;
    margin-top: 14px;
    margin-bottom: 20px;
    background-color: #ea000a;
  }

  .violate_left > .line {
    width: 55px;
    height: 3px;
    margin-top: 2px;
    margin-left: 38px;
    margin-bottom: 30px;
    background-color: #ea000a;
  }

  .violate > .header_info {
    text-indent: 1em;
    margin-top: 8px;
    font-size: 16px;
    line-height: 30px;
    color: #666;
  }

  .violate > .tit {
    margin-top: 20px;
    font-size: 18px;
    font-weight: bold;
    line-height: 1.8em;
  }

  .violate > .tit > .icon {
    display: inline-block;
    width: 8px;
    height: 8px;
    background-color: #333333;
    border-radius: 50%;
    margin-bottom: 2px;
    margin-right: 8px;
  }

  .violate > .comtent {
    margin-top: 6px;
    font-size: 16px;
    line-height: 1.8em;
    font-weight: bold;
  }

  .violate > .image {
    text-align: center;
    margin-top: 30px;
  }

  .violate > .image_s {
    margin: 40px auto;
  }

  .violate > .violate_tit {
    font-size: 18px;
    color: #333;
    font-weight: bold;
    line-height: 1.8em;
    margin-bottom: 10px;
    margin-top: 10px;
  }

  .violate > .answer {
    font-size: 16px;
    color: #666;
    line-height: 1.8em;
  }
</style>
