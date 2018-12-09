import React, { Component } from 'react';
import { Menu, Icon } from 'antd';

const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;

export default class Navigate extends Component {

  static defaultProps = {
    current: "",
    nameList:[]

  }

  state = {
    current: this.props.current,
  }

  handleClick = (e) => {
    console.log('click ', e);
    this.setState({
      current: e.key,
    });
  }

  render() {
    let that = this;
    return (
      <Menu
        onClick={(e) => {
          if (this.props.onClick !== "static") {
            return that.handleClick(e);
          }
        }}
        selectedKeys={[this.state.current]}
        mode="horizontal"
        theme={this.props.theme}
        style={{ lineHeight: '64px' }}
      >
        {this.props.nameList.map((item, index) => {
          return (
            <Menu.Item key={index.toString()}>
              {item}
            </Menu.Item>
          )
        })}
      </Menu>
    );
  }
}
