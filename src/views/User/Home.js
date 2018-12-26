import React, { Component } from 'react';
import { Table, Container, Grid, Card, Icon, Image, Label, Responsive, Segment, Form, Button, Checkbox } from 'semantic-ui-react'
import NavBar from '../../Components/NavBar'
import Footer from '../../Components/Footer';
import { Link } from 'react-router-dom';
import Posts from '../../Components/Posts';
import './Home.scss';


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
      <div>
        <NavBar activeItem='features' />
        <Container fluid={false}>
          <Grid className="left">
            <Grid.Row>
              <Grid.Column width={4}>
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
              <Grid.Column width={12}>
                <div className="noxue-home">
                  <Posts posts={posts} />
                </div>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Container>
        <Footer />
      </div>
    );
  }
}

