import React, { Component } from 'react';
import { Table, Container, Grid, Card, Icon, Image, Label, Responsive, Segment, Menu, Pagination } from 'semantic-ui-react'
import { Link } from 'react-router-dom';
import './Posts.scss';

export default class Posts extends Component {
  state = { activeItem: '默认' }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state
    return <ul className="noxue-posts-list">
      <li className="header">
        <Menu pointing color="blue">
          <Menu.Item name='默认' active={activeItem === '默认'} onClick={this.handleItemClick} />
          <Menu.Item
            name='最新'
            active={activeItem === '最新'}
            onClick={this.handleItemClick}
          />
          <Menu.Item
            name='精华'
            active={activeItem === '精华'}
            onClick={this.handleItemClick}
          />
          <Menu.Item
            name='零回复'
            active={activeItem === '零回复'}
            onClick={this.handleItemClick}
          />
        </Menu>
      </li>
      {
        this.props.posts.map(function (item) {
          return (<li className="noxue-posts" key={item.link}>
            <Link as="a" to={"/"} className="user">
              <Image src='/200x200.jpg' className="user-avatar" size='medium' circular />
            </Link>
            {/* <Label as='a' color="red" size="tiny" className="label">置顶</Label> */}
            <Label as='a' color={item.label} size="tiny" className="label">博客</Label>
            <Link as="a" to={item.link} className="link" title={item.content}>{item.content}</Link>
            <Responsive as="div" className="info" {...Responsive.onlyComputer}>
              <span title="回复数" className="reply-count">73</span> / <span className="views">13.7k</span> | <span className="time">4小时前</span>
            </Responsive>
          </li>)
        })
      }
      <li className="footer">
        <Pagination
        size="mini"
          defaultActivePage={5}
          ellipsisItem={{ content: <Icon name='ellipsis horizontal' />, icon: true }}
          firstItem={ null }
          lastItem={ null }
          prevItem={{ content: <Icon name='angle left' />, icon: true }}
          nextItem={{ content: <Icon name='angle right' />, icon: true }}
          totalPages={50}
        />
      </li>
    </ul>
  }

}