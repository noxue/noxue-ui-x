import React, { Component } from 'react'
import { Menu, Container, Input, Button, Dropdown, Icon, Responsive } from 'semantic-ui-react'
import { Link } from 'react-router-dom';
import './NavBar.scss'

export default class NavBar extends Component {
  state = {}

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state
    const options = [
      { key: 1, text: 'It咨询', value: 1 },
      { key: 2, text: '技术问答', value: 2 },
      { key: 3, text: '网站公告', value: 3 },
    ]

    return (
      <Menu className="navbar" stackable borderless={true}>
        <Container  fluid={false}>
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

          <Dropdown  className="pc-menu" item simple text='分类' direction='right' options={options} />

          <Menu.Menu position='right' className="pc-menu">
            <Menu.Item>
              <Input icon='search' placeholder='输入要搜索的关键词' />
            </Menu.Item>
            <Menu.Item>
              <Button.Group>
                <Button  color='blue' inverted><Icon name='user' />登陆</Button>
                <Button.Or text='or' />
                <Button color='orange' inverted><Icon name="user plus" />注册</Button>
              </Button.Group>
            </Menu.Item>
          </Menu.Menu>
          <Menu.Menu position='right' className="mobile-menu">
            <Menu.Item as="a">
            <Icon name="bars"/>
            </Menu.Item>
          </Menu.Menu>
        </Container>
      </Menu>
    )
  }
}
