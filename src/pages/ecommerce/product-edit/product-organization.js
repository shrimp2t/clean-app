import React from 'react';
import { TreeSelect, Select, Form } from 'antd';

const { TreeNode } = TreeSelect;
const { Option } = Select;
const FormItem = Form.Item;

const children = [];
for (let i = 10; i < 36; i += 1) {
  children.push(<Option key={i.toString(36) + i}>{i.toString(36) + i}</Option>);
}

@Form.create()
class ProductOrganization extends React.Component {
  render() {
    const { form } = this.props;
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

              <div className="form-group">
                <FormItem label="Tags">
                  {form.getFieldDecorator('tags')(
                    <Select
                      mode="tags"
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
                      {children}
                    </Select>
                  )}
                </FormItem>
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
