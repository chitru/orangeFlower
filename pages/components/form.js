import React from 'react'
import {
  Form,
  Select,
  InputNumber,
  Button,
  Input
} from 'antd'

const FormItem = Form.Item
const Option = Select.Option
const { TextArea } = Input;

class LaunchForm extends React.Component {
  render() {
    const { getFieldDecorator } = this.props.form;

    const prefixSelector = getFieldDecorator('prefix', {
      initialValue: '86',
    })(
      <Select style={{ width: 70 }}>
        <Option value="86">+86</Option>
        <Option value="87">+87</Option>
      </Select>,
    );
  
    return(
      <div style={{ marginTop: 100 }}>
        <h1 style={{ textAlign: 'center' }}>Launchcap Form</h1>
      <Form layout='horizontal'>
        <FormItem
          label='First Name'
          labelCol={{ span: 8 }}
          wrapperCol={{ span: 8 }}
          required="true"
        >
          <Input
            placeholder={'John'}
            name='name'
          />
        </FormItem>
  
        <FormItem
          label="Last Name"
          labelCol={{ span: 8 }}
          wrapperCol={{ span: 8 }}
          required="true"
        >
          <Input
            placeholder="Doe"
          />
        </FormItem>
  
        <FormItem
          label="Email"
          labelCol={{ span: 8 }}
          wrapperCol = {{ span: 8 }}
          required="true"
        >
          <Input
            placeholder="john.doe@example.com"
          />
        </FormItem>
  
        <FormItem
          label="Phone"
          labelCol={{ span: 8 }}
          wrapperCol={{ span: 8 }}
          width="500px"
          required="true"
        >
          <InputNumber
            placeholder="0449793945" 
            addonBefore={prefixSelector} 
            style={{ width: '100%' }}
          />
        </FormItem>
  
        <FormItem
          label="Company Name"
          labelCol = {{ span: 8 }}
          wrapperCol = {{ span: 8 }}
          required="true"
        >
          <Input
            placeholder="Launchcap Pty. Ltd."
          />
  
        </FormItem>
  
        <FormItem
          label="Message"
          labelCol = {{ span: 8 }}
          wrapperCol = {{ span: 8 }}
          required="true"
        >
          <TextArea
            placeholder="Write your message here"
            autosize={{ minRows: 2, maxRows: 6 }}
            labelCol = {{ span: 8 }}
            wrapperCol = {{ span: 8 }}
          />
        </FormItem>
  
        <FormItem style={{ marginTop: 48 }} wrapperCol={{ span: 8, offset: 8 }}>
          <Button size='large' type='primary' htmlType='submit'>
            OK
          </Button>
          <Button size='large' style={{ marginLeft: 8 }}>
            Cancel
          </Button>
        </FormItem>
      </Form>
    </div>
    )
  }
}

const LaunchRegForm = Form.create({ name: 'register' })(LaunchForm);

export default LaunchRegForm;