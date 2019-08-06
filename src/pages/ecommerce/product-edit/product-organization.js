import React from 'react';
import { TreeSelect, Select } from 'antd';


const { TreeNode } = TreeSelect;
const { Option } = Select;
const FormItem = Form.Item;

@Form.create()
class ProductOrganization extends React.Component {

  render() {
    const { form, match: { params } } = this.props;
    return (
      <div className="card layout-card">
        <div className="card-header">
          <div className="utils__title">
            <strong>Organization</strong>
          </div>
        </div>
        <div className="card-body">
          <div className="row">
            <div className="col-lg-12">
              <div className="form-group">
                <FormItem label="Category">
                  {form.getFieldDecorator('category')(
                    <TreeSelect
                      id="product-edit-category"
                      showSearch
                      style={{
                        width: '100%',
                        display: 'block'
                      }}
                      dropdownStyle={{
                        maxHeight: 400,
                        overflow: 'auto'
                      }}
                      placeholder="Please select category"
                      allowClear
                      multiple
                      treeDefaultExpandAll
                      onChange={this.onChangeCategory}
                    >
                      <TreeNode value="furniture" title="Furniture" key="0">
                        <TreeNode value="tables" title="Tables" key="0-0" />
                        <TreeNode value="chairs" title="Chairs" key="0-1">
                          <TreeNode value="roundedchairs" title="Rounded Chairs" key="0-1-0" />
                          <TreeNode value="squaredchairs" title="Squared Chairs" key="0-1-1" />
                        </TreeNode>
                      </TreeNode>
                      <TreeNode value="electronics" title="Electronics" key="1">
                        <TreeNode value="tv" title="TV" key="1-0" />
                        <TreeNode value="consoles" title="Consoles" key="1-1">
                          <TreeNode value="playstation" title="Playstation" key="1-1-0" />
                          <TreeNode value="xbox" title="Xbox" key="1-1-1" />
                        </TreeNode>
                      </TreeNode>
                    </TreeSelect>
                  )}
                </FormItem>
              </div>

              <h4 className="text-black mt-2 mb-3">
                <strong>Pricing</strong>
              </h4>

              <h4 className="text-black mt-2 mb-3">
                <strong>Attributes</strong>
              </h4>
              <div className="row">
                <div className="col-lg-6">
                  <div className="form-group">
                    <FormItem label="Colors">
                      {form.getFieldDecorator('colors')(
                        <Select
                          id="product-edit-colors"
                          showSearch
                          style={{
                            width: '100%'
                          }}
                          placeholder="Select a color"
                          optionFilterProp="children"
                          filterOption={(input, option) =>
                            option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0}
                        >
                          <Option value="blue">Blue</Option>
                          <Option value="red">Red</Option>
                          <Option value="green">Green</Option>
                        </Select>
                      )}
                    </FormItem>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="form-group">
                    <FormItem label="Size">
                      {form.getFieldDecorator('size')(
                        <Select
                          id="product-edit-size"
                          showSearch
                          style={{
                            width: '100%'
                          }}
                          placeholder="Select a size"
                          optionFilterProp="children"
                          filterOption={(input, option) =>
                            option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0}
                        >
                          <Option value="s">Small</Option>
                          <Option value="m">Middle</Option>
                          <Option value="xl">Extra large</Option>
                        </Select>
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

export default ProductOrganization;
