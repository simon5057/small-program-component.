// plugin/components/share-modal/share-modal.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    // 分享好友和群聊
    shareText: {            // 属性名
      type: String,     // 类型（必填）：String, Number, Boolean, Object, Array, null（表示任意类型）
      value: '发送给好友或群聊'     // 属性初始值（可选），如果未指定则会根据类型选择一个
    },
    // 发享到朋友圈
    circleText: {
      type: String,
      value: '发享到朋友圈'
    },
    // 
    circleStyle: {
      type: Boolean,
      value: true
    },
    qrCodeStyle: {
      type: Boolean,
      value: false
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    showSharemodal: true,

  },

  /**
   * 组件的方法列表
   */
  methods: {
    hideSharemodal() {
      this.setData({
        showSharemodal: false
      })
    }
  }
})
