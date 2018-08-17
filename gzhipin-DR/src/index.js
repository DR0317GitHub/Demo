/*
入口JS
 */
import React from 'react'
import ReactDOM from 'react-dom'
import {HashRouter, Switch, Route} from 'react-router-dom'
import {Provider} from 'react-redux'

import Login from './container/login/login'
import Register from './container/register/register'
import Main from './container/main/main'
import store from './redux/store'

import './assets/css/index.less'

// import './test/socketio_test'

// 渲染组件标签到页面
ReactDOM.render((
  <Provider store={store}>
    <HashRouter>
      <Switch>
        <Route path='/login' component={Login}/>
        <Route path='/register' component={Register}/>
        <Route component={Main}/>{/*默认组件*/}
      </Switch>
    </HashRouter>
  </Provider>
), document.getElementById('root'))


/*
路由是什么?
  就是一个key:value的映射关系
路由的分类?
  1. 后台路由: path---callback
  2. 前台路由: path---component
作用?
  后台路由: 当服务器接收到请求时, 根据请求的path找到对应的路由, 由路由的回调函数来处理请求, 返回响应
  前台路由: 当请求某个路由地址时, 根据请求的path找到对应的路由, 显示路由对应的组件界面
 */


/*
                以register组件为例,代码运行逻辑,将用户输入的内容进行保存
1.register组件中,通过handleChange函数,获取用户输入的数据,
    1).通过在注册按钮上绑定的register函数,this.props.register(this.state),发送ajax请求
    2).ajax请求是在register函数中,register这个函数原本定义在actions文件中,通过容器组件传入的,
2.在actions文件中定义register函数,调用reqRegister()函数,reqRegister()这个函数定义在api中
3.api中封装了一个ajax函数,一个index文件,在index文档中的reqRegister()参照接口文档,写入要请求的路径,参数,方式,
4.通过路径将用户的数据传给后台的路由,让后台去处理,并且返回响应

5.在actions中定义了一个response变量用来接收请求数据返回的响应
      将返回的结果赋值给result,
       判断得到的result.code是否等于0,若等于0.则表示数据请求成功,data的值user中包含用户的数据
       分发同步action(成功)
      调用同步action中的函数authSuccess,将user传输过去
      authSuccess在这个函数的类型为AUTH_SUCCESS,数据携带在action上传输给reducers(action.data)
      根据类型在reducers中返回一个对象,里面包含所得的数据getRedirectPath文件中,封装了一个动态添加的路径,
      用于数据保存成功后,根据用户选择的类型,跳转到响应的页面,
      user函数中还包含有其他的数据状态,通过容器组件传给register组件,




 */


