import React, { Component } from 'react';
import { Table, Container, Grid, Card, Icon, Image, Label, Responsive, Segment } from 'semantic-ui-react'
import NavBar from '../Components/NavBar'
import Footer from '../Components/Footer';
import { Link } from 'react-router-dom';
import './Home.scss';
import Posts from '../Components/Posts';


export default class Home extends Component {

  render() {
    const posts = [
      {
        link: '/a/111',
        label: 'grey',
        content: '111111111111111111111111111'
      }
    ]
    for(var i=2;i<50;i++){
      posts.push({
        link: '/a/5555'+i,
        label: 'orange',
        content: '55555555555555555555555555555555555'+i
      })
    }
    return (
      <div className="home">
        <NavBar activeItem='features' />
        <Container fluid={false}>
          <Grid className="noxue-content">
            <Grid.Row>
              <Grid.Column mobile={16} tablet={12} computer={12}>
                <Posts posts={posts} />
              </Grid.Column>
              <Grid.Column width={4} only='computer tablet'>
                <Card color="blue">
                  <Card.Content header='网站公告' />
                  <Card.Content>
                    <div>公告内容</div>
                  </Card.Content>
                  <Card.Content extra>
                    <Icon name='user' />
                    4 Friends
                </Card.Content>
                </Card>
                <Card color="red">
                  <Card.Content header='友情链接' />
                  <Card.Content>
                    <div>公告内容</div>
                  </Card.Content>
                  <Card.Content extra>
                    <Icon name='user' />
                    4 Friends
                </Card.Content>
                </Card>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Container>
        <Footer />
      </div>
    );
  }
}

