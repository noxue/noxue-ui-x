import React, { Component } from 'react'
import { Menu, Container, Input, Button, Dropdown, Icon, Responsive, Image, Sidebar, Segment, Header } from 'semantic-ui-react'
import { Link } from 'react-router-dom';
import './NavBar.scss'
import history from '../history'

class LoginBtn extends Component {
  state = { isLogin: false }
  mobileMenuClick = (e) => {
    alert("x")
  }
  userBtnClick = (e,data) => {
    // console.log(data)
    history.push(data.value)
  }
  render() {
    const options = [
      { key: 1, text: '个人中心', value: '/u/home' },
      { key: 2, text: '修改资料', value: '/u/edit' },
      { key: 3, text: '退出登陆', value: '/u/logout' },
    ]
    if (this.props.isLogin === false) {
      return (
        <Menu.Item>
          <Button.Group>
            <Button color='blue' inverted><Icon name='user' />登陆</Button>
            <Button.Or text='or' />
            <Button color='orange' inverted><Icon name="user plus" />注册</Button>
          </Button.Group>
        </Menu.Item>
      )
    } else {
      return (
        <Dropdown onChange={this.userBtnClick} className="pc-menu" trigger={<Image style={{ height: "30px" }} src="/200x200.jpg" circular />} item simple options={options} />
      )
    }
  }
}

export default class NavBar extends Component {
  state = { activeItem: "features", visible: false }
  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  handleHideClick = () => this.setState({ visible: false })
  handleShowClick = () => {
    console.log(!this.state.visible)
    this.setState({ visible: !this.state.visible }) 
  }
  handleSidebarHide = () => this.setState({ visible: false })

  pushSubMenuClick = (e,data) => {
    history.push(data.value)
  }
  render() {
    const { activeItem, visible } = this.state
    const options = [
      { key: 1, text: 'It咨询', value: 1 },
      { key: 2, text: '技术问答', value: 2 },
      { key: 3, text: '网站公告', value: 3 }
    ]

    const pushSubMenus = [
      { key: 1, text: '发布文章', value: '/posts/edit?type=1' },
      { key: 2, text: '提个问题', value: '/posts/edit?type=2' },
      { key: 3, text: '发起讨论', value: '/posts/edit?type=3' }
    ]

    return (
      <div>
        <Menu className="navbar" stackable borderless={true}>
          <Container fluid={false}>
            <Menu.Item>
              <Link as="a" to={"/"}><img src='/logo.png' alt="logo" style={{ height: 35 + 'px', width: 100 + 'px' }} /></Link>
            </Menu.Item>
            <Menu.Item
              className="pc-menu"
              name='features'
              active={activeItem === 'features'}
              onClick={this.handleItemClick}
            >
              首页
            </Menu.Item>
            <Menu.Item
              className="pc-menu"
              name='testimonials'
              active={activeItem === 'testimonials'}
              onClick={this.handleItemClick}
            >
              资源库
            </Menu.Item>

            <Dropdown className="pc-menu" item simple text='分类' direction='right' options={options} />

            <Menu.Menu position='right' className="pc-menu">
              <Menu.Item>
                <Input icon='search' placeholder='输入要搜索的关键词' />
              </Menu.Item>
              <Dropdown onChange={this.pushSubMenuClick} className="pc-menu" trigger={<Icon name="plus" />} item simple options={pushSubMenus} />
              <LoginBtn isLogin={true} />
            </Menu.Menu>
            <Menu.Menu position='right' className="mobile-menu">
              <Menu.Item as="a" onClick={this.handleShowClick}>
                <Icon name="bars" />
              </Menu.Item>
            </Menu.Menu>
          </Container>
        </Menu>
        <Sidebar
          className="mobile-menu"
          as={Menu}
          icon='labeled'
          color="blue"
          inverted
          onHide={this.handleSidebarHide}
          vertical
          visible={visible}
          width='thin'
          animation={"push"}
        >
          <Menu.Item as='a'>
            <Icon name='home' />
            Home
            </Menu.Item>
          <Menu.Item as='a'>
            <Icon name='gamepad' />
            Games
            </Menu.Item>
          <Menu.Item as='a'>
            <Icon name='camera' />
            Channels
            </Menu.Item>
        </Sidebar>
      </div>
    )
  }
}
