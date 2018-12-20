import React, { Component } from 'react';
import { Table, Container, Grid, Card, Icon, Image, Label, Responsive, Segment, Breadcrumb, Divider, Button, Header } from 'semantic-ui-react'
import NavBar from '../Components/NavBar'
import Footer from '../Components/Footer';
import { Link } from 'react-router-dom';
import './Article.scss';
import '../common.scss';
import Posts from '../Components/Posts';
import CommentList from '../Components/CommentList'


export default class Article extends Component {

  render() {
    const Content = () => (
      <div>
        <p><img src="https://iocaffcdn.phphub.org/uploads/images/201808/06/1/0NBdJjC28V.png?imageView2/2/w/1240/h/0" alt="file" /></p>
        <h2>每周更新</h2>
        <p>原本与 <a href="https://laravel-china.org/users/3995">@liyu001989</a> 计划做一个关于 Laravel 优质扩展包的实战课程，但在扩展包这种推陈出新速度极快的情况下，我们意识到了社区现在这种固定长篇课程的形式已不再适用，并最终选择了每周更新的形式。这样一些有着较热趋势的扩展包，随着课程的更新就能被包含进来。过去讲解过的或功能有大变更的扩展包，我们也无需返回去更新课程，而是直接做一节新的课程来讲解即可。</p>
        <p>一个课程最多不超过一百个文章，太多会让学习变得枯燥。而以订阅的形式，几年下来，我们能讲解好几百个扩展包。</p>
        <p>每周我们会精选两个以上扩展包进行讲解，涵盖与 PHP 和 Laravel 相关的最新、最热、最实用的扩展包。订阅一年会有 140+ 以上的高品质文章和视频（每周三个）。订阅周期内，可观看所有的课程视频，到期后可查看订阅期内发布的视频。</p>
        <h2>实战视频 + 操作文章</h2>
        <p>课程里每个视频对应一个扩展包。我们有意节省每一位同学的时间，所以对每一个视频都是精心裁剪，以追求最高品质。下面几则是视频录制规范，欢迎监督：</p>
        <ul><li>录屏时屏幕要整洁，无关的东西都需去除；</li>
          <li>成品里不能有咳嗽、清嗓、狗吠、汽车鸣笛等奇怪的声音；</li>
          <li>在不影响清晰度的情况下，压缩到最小，以此保证加载速度；</li>
          <li>每个视频应该控制在 10 分钟以内（剪辑无用的等待），以此来保持专注，长视频可以分多个视频。</li>
        </ul>

        <p>短小精湛，高浓度、高品质。</p>
        <p>内容形式上，每一小节不止包含一个视频，还包含一篇详尽的文章。通过视频你可以快速理解扩展包的精髓。而文章的存在允许你一步步跟着操作，这也让你避免了 —— 『看懂了但是还是没法做的尴尬境地』。另外，文本内容也让后续搜索查阅更加方便。</p>
        <p>本课程所有产生的代码，都托管于 GitHub 上，详见每篇文章的内容底部。</p>
        <h2>关于定价</h2>
        <p>因为原创内容 + 视频的形式，制作成本较高，目前定价人民币 <code>199 元/年</code>，这是早鸟价，后面内容充实后，将会按需提高售价。</p>
        <h2>免费视频</h2>
        <p>另外为了反馈社区，每周我们都会发放一集免费课程，通过下图按钮来订阅课程，新视频发布后即可收到通知：</p>
        <p><img src="https://iocaffcdn.phphub.org/uploads/images/201809/24/1/NQDAmnOzkN.png?imageView2/2/w/1240/h/0" alt="file" /></p>
        <p>以下两个免费视频供体验：</p>
        <ul><li><a href="https://laravel-china.org/courses/laravel-package/1790/reverse-data-filling-orangehilliseed">009. 逆向 Seed 生成器——orangehill/iseed</a> </li>
          <li><a href="https://laravel-china.org/courses/laravel-package/1976/debugging-tool-under-chrome-itsgoingdclockwork">008. 利用 Clockwork 在 Google Chrome 下调试你的 Laravel APP ——itsgoingd/clockwork</a></li>
        </ul>
      </div>
    )

    return <div className="noxue-article">
      <NavBar activeItem='features' />
      <Container fluid={false}>
        <Grid>
          <Grid.Row>
            <Grid.Column mobile={16} tablet={12} computer={12}>
              <div className="article">
                <h3 className="title">《Laravel / PHP 扩展包视频教程》</h3>
                <div className="toolBar">
                  <Button as='div' labelPosition='right' size="mini">
                    <Button size="mini" color="red">
                      <Icon name='heart' />点赞</Button>
                    <Label as='a' basic color="red" pointing='left'>2334</Label>
                  </Button>
                </div>
                <div className="info">
                  <span className="created">创建于 4个月前</span>
                  <span className="divider">/</span>
                  <span className="reply">阅读数 9731</span>
                  <span className="divider">/</span>
                  <span className="views">评论数 42</span>
                  <span className="divider">/</span>
                  <span className="updated">更新于 2个月前</span>
                </div>
                <Divider fitted />
                <article>
                  <Content />
                </article>
                <Divider horizontal>
                  <Header as='h4'>
                    <Icon name='comment alternate' />评论</Header>
                </Divider>
                <CommentList />
              </div>

            </Grid.Column>
            <Grid.Column width={4} only='computer tablet'>
              <Card color="orange">
                <Card.Content>
                  <Image floated='right' size='mini' src='/200x200.jpg' circular />
                  <Card.Header>不是程序员</Card.Header>
                  <Card.Description>
                    一个头发非常浓密的程序员
                  </Card.Description>
                </Card.Content>
                <Card.Content extra textAlign="center">
                  <Button.Group>
                    <Button color='green' ><Icon name='user' />关注</Button>
                    <Button.Or text='or' />
                    <Button color='blue' ><Icon name="user plus" />文章</Button>
                  </Button.Group>
                </Card.Content>
              </Card>
              <Card color="blue">
                <Card.Content header='相关文章' />
                <Card.Content>
                  <div>相关文章</div>
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
  }

}