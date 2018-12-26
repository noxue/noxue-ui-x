import React, { Component } from 'react';
import { Table, Container, Grid, Card, Icon, Image, Label, Responsive, Segment, Form, Button, Checkbox } from 'semantic-ui-react'
import NavBar from '../../Components/NavBar'
import Footer from '../../Components/Footer';
import { Link } from 'react-router-dom';
import './Edit.scss';


export default class Edit extends Component {

  render() {

    return (
      <div>
        <NavBar activeItem='features' />
        <Container fluid={false}>
          <Grid className="noxue-content">
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
                <div className="noxue-edit-box">
                  <Form>
                    <Form.Field>
                      <label>First Name</label>
                      <input placeholder='First Name' />
                    </Form.Field>
                    <Form.Field>
                      <label>Last Name</label>
                      <input placeholder='Last Name' />
                    </Form.Field>
                    <Form.Field>
                      <Checkbox label='I agree to the Terms and Conditions' />
                    </Form.Field>
                    <Button type='submit'>Submit</Button>
                  </Form>
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

