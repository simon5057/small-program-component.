// plugin/components/camera/camera.js
Component({
  // options: {
  //   multipleSlots: true // 在组件定义时的选项中启用多slot支持
  // },
  /**
   * 组件的属性列表
   */
  properties: {
    isTakingPhoto: {
      type: Boolean,  // 是否处于拍照
      value: false
    },
  },

  /**
   * 组件的初始数据
   */
  data: {
    devicePosition: true, // 前置摄像头true,后置摄像头false,
    flash: 'auto', // 相机闪光灯 auto on off
    isShowPhoto: false, // 是否处于拍摄图片后的展示状态
    tempFilePath: '',
    camera: null
  },

  /**
   * 组件的方法列表
   */
  methods: {
    // 拍照
    takePhotos() {
      console.log('拍照');
      this.setData({
        camera: wx.createCameraContext('myCamera')
      });
      this.data.camera.takePhoto({
        quality: 'high',
        success: (res) => {
          console.log(res);
          this.setData({
            isShowPhoto: true,
            tempFilePath: res.tempImagePath
          })
        }
      })

    },
    // 打开相机
    openCamera() {
      this.setData({
        isTakingPhoto: true
      })
    },
    // 相机非正常终止
    cameraStop() {
      console.log('相机终止');
    },
    // 用户拒绝调用摄像头
    cameraDeniedForUser() {
      console.log('用户拒绝调用摄像头');
    },
    // 取消拍照
    cancalPhotograph() {
      console.log('取消');
      this.setData({
        isTakingPhoto: false
      })
    },
    // 重新拍照
    rephotograph() {
      this.setData({
        isShowPhoto: false,
        isTakingPhoto: true,
      })
    },
    // 确定拍照 （将文件路径当参数传出）
    _confirmPhotograph() {
      console.log('确定');
      this.triggerEvent("confirmPhotograph", { tempFilePath: this.data.tempFilePath });
      this.setData({
        isShowPhoto: false
      })

    },
    // 切换摄像头
    changeCamera() {
      this.setData({
        devicePosition: !this.data.devicePosition
      })
    }
  }
})
