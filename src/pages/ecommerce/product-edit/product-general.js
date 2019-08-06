import React from 'react';
import { Input, Form } from 'antd';
import { Editor } from 'react-draft-wysiwyg';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import styles from './style.module.scss';

const FormItem = Form.Item;
const { TextArea } = Input;

@Form.create()
class ProductGeneral extends React.Component {
  render() {
    const { form } = this.props;
    return (
      <div className="card layout-card">
        <div className="card-header">
          <div className="utils__title">
            <strong>General</strong>
          </div>
        </div>
        <div className="card-body">
          <div className="row">
            <div className="col-12">
              <div className="form-group">
                <FormItem label="Product name">
                  {form.getFieldDecorator('title')(<Input placeholder="Product name" />)}
                </FormItem>
              </div>
            </div>
          </div>
          {/* End row */}
          <div className="row">
            <div className="col-12">
              <div className="form-group">
                <FormItem label="Short description">
                  {form.getFieldDecorator('shortDescription')(<TextArea rows={3} id="product-edit-shordescr" />)}
                </FormItem>
              </div>
            </div>
          </div>
          {/* End row */}

          <div className="row">
            <div className="col-12">
              <div className="form-group">
                <FormItem label="Full description">
                  {form.getFieldDecorator('fullDescription')(
                    <div className={styles.editor}>
                      <Editor />
                    </div>
                  )}
                </FormItem>
              </div>
            </div>
          </div>
          {/* End row */}
        </div>
        {/* End card-body */}
      </div>
    );
  }
}
export default ProductGeneral;
