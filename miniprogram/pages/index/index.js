var plugin = requirePlugin("myPlugin")
Page({
  data: {
    isTakingPhoto: false,
    arr: [
      {
        avatarurl: '../../images/show-list/avatar.jpg',
        nickname: '泪愿尝1',
        create_time: '2018-4-4'
      },
      {
        avatarurl: '../../images/show-list/avatar.jpg',
        nickname: '泪愿尝1',
        create_time: '2018-4-4'
      },
      {
        avatarurl: '../../images/show-list/avatar.jpg',
        nickname: '泪愿尝1',
        create_time: '2018-4-4'
      },
      {
        avatarurl: '../../images/show-list/avatar.jpg',
        nickname: '泪愿尝',
        create_time: '2018-4-4'
      },
      {
        avatarurl: '../../images/show-list/avatar.jpg',
        nickname: '泪愿尝',
        create_time: '2018-4-4'
      },
      {
        avatarurl: '../../images/show-list/avatar.jpg',
        nickname: '泪愿尝',
        create_time: '2018-4-4'
      },
      {
        avatarurl: '../../images/show-list/avatar.jpg',
        nickname: '泪愿尝',
        create_time: '2018-4-4'
      },
    ]
  },
  onLoad: function () {
    console.log(plugin);
  },
  onReady: function () {

  },
  open() {
    this.setData({
      isTakingPhoto: true
    })
  },
  confirmPhoto(e) {
    this.setData({
      isTakingPhoto: false
    })
    console.log(e);
  },
  test() {
    console.log(1)
  }
})