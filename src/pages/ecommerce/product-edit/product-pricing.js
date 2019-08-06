import React from 'react';
import { Form, Input } from 'antd';

const FormItem = Form.Item;

@Form.create()
class ProductPrice extends React.Component {
  render() {
    const { form } = this.props;
    return (
      <div className="card layout-card">
        <div className="card-header">
          <div className="utils__title">
            <strong>Pricing</strong>
          </div>
        </div>
        <div className="card-body">
          <div className="row">
            <div className="col-12">
              <div className="row">
                <div className="col-lg-6">
                  <div className="form-group">
                    <FormItem label="Total Price">
                      {form.getFieldDecorator('totalPrice')(
                        <Input addonBefore="$" id="product-edit-total-price" placeholder="Total Price" />
                      )}
                    </FormItem>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="form-group">
                    <FormItem label="Compare at price">
                      {form.getFieldDecorator('comperePrice')(
                        <Input addonBefore="$" id="product-edit-compare-at-price" placeholder="Compare at price" />
                      )}
                    </FormItem>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* End card-body */}
      </div>
    );
  }
}

export default ProductPrice;
