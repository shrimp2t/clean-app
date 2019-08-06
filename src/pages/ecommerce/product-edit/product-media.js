import React from 'react';
import { Button, Upload, Icon, message, Form } from 'antd';

const { Dragger } = Upload;
const dragprop = {
  name: 'file',
  multiple: true,
  action: '//jsonplaceholder.typicode.com/posts/',
  onChange(info) {
    const { status } = info.file;
    if (status === 'done') {
      message.success(`${info.file.name} file uploaded successfully.`);
    } else if (status === 'error') {
      message.error(`${info.file.name} file upload failed.`);
    }
  }
};

@Form.create()
class ProductMedia extends React.Component {
  render() {
    return (
      <div className="card layout-card-media ">
        <div className="card-header">
          <div className="utils__title">
            <strong>Media</strong>
          </div>
        </div>
        <div className="card-body">
          <div className="row">
            <div className="col-12">
              <Dragger {...dragprop} className="height-180 d-block mb-3">
                <p className="ant-upload-drag-icon">
                  <Icon type="inbox" />
                </p>
                <p className="ant-upload-text">Click or drag file to this area to upload</p>
                <p className="ant-upload-hint">
                  Support for a single or bulk upload. Strictly prohibit from uploading company data or other band files
                </p>
              </Dragger>
              <div>
                <Upload>
                  <Button>
                    <Icon type="upload" />
                    Select File
                  </Button>
                </Upload>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default ProductMedia;
