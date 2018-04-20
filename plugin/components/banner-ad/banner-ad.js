// components/banner-ad/banner-ad.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    // 横幅广告信息
    bannerAdInfo: {
      type: Object,
      value: {}
    }
  },

  /**
   * 组件的初始数据
   */
  data: {

  },

  /**
   * 组件的方法列表
   */
  methods: {
    _openAd() {
      this.triggerEvent("openAd");
    }
  }
})
