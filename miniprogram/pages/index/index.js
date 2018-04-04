var plugin = requirePlugin("myPlugin")
Page({
  data: {
    isTakingPhoto: false
  },
  onLoad: function() {
    console.log(plugin);
    // let camera = this.selectComponent("#in-camera");
    // console.log(camera)
    // this.camera.openCamera();
  },
  onReady: function() {

    let camera = this.selectComponent("my-camera");
    console.log(camera)
  },
  open() {
    let camera = this.selectComponent("#my-camera");
    console.log(camera);
    this.setData({
      isTakingPhoto:true
    })
  }
})