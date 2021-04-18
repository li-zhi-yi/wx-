// components/x-left/index.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    menu:{
      type:Array
    },
    height:{
      type:Number,
      value:0
    },
    choose:{
      type:String
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
    changeShow:function(e){
      this.triggerEvent('nav',e.currentTarget.dataset.index)
    }
  }
})
