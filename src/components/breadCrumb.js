
import React, { Component } from 'react';
import { Breadcrumb } from 'antd';


export default class BreadcrumbNavigate extends Component {

    static defaultProps = {
        nameList:[]
      }

    render() {
        return (
            <Breadcrumb style={{ margin: '16px 0' }}>
                {this.props.nameList.map((item, index) => {
                    return (
                        <Breadcrumb.Item key={index.toString()}>
                            {item}
                        </Breadcrumb.Item>
                    )
                })
                }
            </Breadcrumb>
        );
    }
}