// plugin/components/show-list/show-list.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    title: {
      type: String,
      value: '列表记录'
    },
    list: {
      type: Array,
      value: []
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    showListModal: false,
  },

  /**
   * 组件的方法列表
   */
  methods: {
    // 显示列表
    showList() {
      this.setData({
        showListModal: true
      })
    },
    // 隐藏列表
    _hideList() {
      this.setData({
        showListModal: false
      })
      this.triggerEvent("hideList");
    },
    // 加载更多列表数据
    _showMore() {
      this.triggerEvent("showMore");
    }
  }
})
