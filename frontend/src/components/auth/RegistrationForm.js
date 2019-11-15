
import React from 'react';
import ReactDOM from 'react-dom';
import 'antd/dist/antd.css';
import '../../index.css';
import {
  Form,
  Input,
  Tooltip,
  Icon,
  Cascader,
  Select,
  Row,
  Col,
  Checkbox,
  Button,
  AutoComplete,
} from 'antd';
import { updateLocale } from 'moment';

const { Option } = Select;
const AutoCompleteOption = AutoComplete.Option;

const residences = [
  {
    value: 'Brussles',
    label: 'Brussles',
    children: [
      {
        value: 'somewhere in Brussels',
        label: 'somewhere in Brussels',
        children: [
          {
            value: 'Zone',
            label: 'Zone',
          },
        ],
      },
    ],
  },
  {
    value: 'Antwerp',
    label: 'Antwerp',
    children: [
      {
        value: 'somewhere in Antwerp',
        label: 'somewhere in Antwerp',
        children: [
          {
            value: 'Zone',
            label: 'Zone ',
          },
        ],
      },
    ],
  },
];

 class RegistrationForm extends React.Component {
  state = {
    confirmDirty: false,
    autoCompleteResult: [],
    user:{}
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFieldsAndScroll((err, values) => {
      const {email,
             password, 
             confirm,
             residence
            } = values;
           
            
      if (!err) {
        console.log('Received values of form: ', values);
        this.setState({

          [this.state.user]:{email, password, confirm, residence}  
        });
        console.log(this.state)
      }
    });
  };

  handleConfirmBlur = e => {
    const { value } = e.target;
    this.setState({
       confirmDirty: this.state.confirmDirty || !!value 
    
    
    });
  };

  compareToFirstPassword = (rule, value, callback) => {
    const { form } = this.props;
    if (value && value !== form.getFieldValue('password')) {
      callback('Two passwords that you enter is inconsistent!');
    } else {
      callback();
    }
  };

  validateToNextPassword = (rule, value, callback) => {
    const { form } = this.props;
    if (value && this.state.confirmDirty) {
      form.validateFields(['confirm'], { force: true });
    }
    callback();
  };

  handleWebsiteChange = value => {
    let autoCompleteResult;
    if (!value) {
      autoCompleteResult = [];
    } else {
      autoCompleteResult = ['.com', '.org', '.net'].map(domain => `${value}${domain}`);
    }
    this.setState({ autoCompleteResult });
  };

  render() {
    const { getFieldDecorator } = this.props.form;
    const { autoCompleteResult } = this.state;

    const formItemLayout = {
      labelCol: {
        xs: { span: 24 },
        sm: { span: 8 },
      },
      wrapperCol: {
        xs: { span: 24 },
        sm: { span: 16 },
      },
    };
    const tailFormItemLayout = {
      wrapperCol: {
        xs: {
          span: 24,
          offset: 0,
        },
        sm: {
          span: 16,
          offset: 8,
        },
      },
    };
    const prefixSelector = getFieldDecorator('prefix', {
      initialValue: '86',
    })(
      <Select style={{ width: 70 }}>
        <Option value="86">+86</Option>
        <Option value="87">+87</Option>
      </Select>,
    );

    const websiteOptions = autoCompleteResult.map(website => (
      <AutoCompleteOption key={website}>{website}</AutoCompleteOption>
    ));

    return (
      <Form {...formItemLayout} onSubmit={this.handleSubmit}>
        <Form.Item label="E-mail">
          {getFieldDecorator('email', {
            rules: [
              {
                type: 'email',
                message: 'The input is not valid E-mail!',
              },
              {
                required: true,
                message: 'Please input your E-mail!',
              },
            ],
          })(<Input />)}
        </Form.Item>
        <Form.Item label="Password" hasFeedback>
          {getFieldDecorator('password', {
            rules: [
              {
                required: true,
                message: 'Please input your password!',
              },
              {
                validator: this.validateToNextPassword,
              },
            ],
          })(<Input.Password />)}
        </Form.Item>
        <Form.Item label="Confirm Password" hasFeedback>
          {getFieldDecorator('confirm', {
            rules: [
              {
                required: true,
                message: 'Please confirm your password!',
              },
              {
                validator: this.compareToFirstPassword,
              },
            ],
          })(<Input.Password onBlur={this.handleConfirmBlur} />)}
        </Form.Item>
        
        <Form.Item label="Residence">
          {getFieldDecorator('residence', {
            initialValue: ['Brussles', 'Antwerp', 'Louvain'],
            rules: [
              { type: 'array', required: true, message: 'Please select your habitual residence!' },
            ],
          })(<Cascader options={residences} />)}
        </Form.Item>
        
        <Form.Item {...tailFormItemLayout}>
          {getFieldDecorator('agreement', {
            valuePropName: 'checked',
          })(
            <Checkbox>
              I have read the <a href="">agreement</a>
            </Checkbox>,
          )}
        </Form.Item>
        <Form.Item {...tailFormItemLayout}>
          <Button type="primary" htmlType="submit">
            Register
          </Button>
        </Form.Item>
      </Form>
    );
  }
}


         export default  Form.create({ name: 'register' })(RegistrationForm);


          