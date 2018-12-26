import React, { Component } from 'react';
import { Table,Dropdown, Container, Grid, Card, Icon, Image, Label, Responsive, Segment, Form, Button, Checkbox } from 'semantic-ui-react'
import NavBar from '../../Components/NavBar'
import Footer from '../../Components/Footer';
import { Link } from 'react-router-dom';
import './Edit.scss';
import SimpleMDE from 'simplemde'
import 'simplemde/dist/simplemde.min.css'
// import jQuery from 'jquery'
// import 'jquery.caret/dist/jquery.caret.min.js'
// import 'at.js/dist/css/jquery.atwho.min.css'
// import 'at.js/dist/js/jquery.atwho.min.js'


export default class Edit extends Component {
  
  componentDidMount(){
    var simplemde = new SimpleMDE({ 
      element: document.getElementById("editor"),
      spellChecker:false,
      // toolbar:false,
     });
  }

  render(){
    const options = [
      { key: 1, text: '个人中心', value: '/u/home' },
      { key: 2, text: '修改资料', value: '/u/edit' },
      { key: 3, text: '退出登陆', value: '/u/logout' },
    ]
    return (
      <div>
        <NavBar />
        <Container fluid={false}>
          <Form className="noxue-posts-edit">
            <Form.Group>
              <Form.Field>
              <Dropdown className="pc-menu" placeholder="请选择分类" selection options={options} />
              </Form.Field>
              <Form.Field width={12}>
                <input placeholder='标题' />
              </Form.Field>
            </Form.Group>
            <Form.Field>
              <Form.TextArea id="editor" />
            </Form.Field>
            <Button content='发布' labelPosition='left' icon='edit'  color="blue" />
          </Form>
        </Container>
        <Footer/>
      </div>
    )
  }

}