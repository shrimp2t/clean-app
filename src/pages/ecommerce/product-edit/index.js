import React from 'react';
import { Button, Form, Col, Row } from 'antd';
import { Helmet } from 'react-helmet';
import Config from '../../../config';
import Variant from './variant';
import ProductGeneral from './product-general';
import ProductMedia from './product-media';
import ProductOrganization from './product-organization';
import ProductPrice from './product-pricing';
import ProductInventory from './product-inventory';

@Form.create()
class ProductEdit extends React.Component {
  //   state = {     fields: {       title: {         value: 'Product title new',
  //    },     },   }

  componentDidMount() {
    // const { form } = this.props const { fields } = this.state
    // form.setFields(fields)

    const { form, match: { params } } = this.props;

    if (params.id) {
      let { edit } = Config.product;
      edit = `${edit}/${params.id}`;

      fetch(edit).then((res) => res.json()).then((result) => {
        console.log('GET_result', result);
        form.setFields(result);
        //   this.setState({     isLoaded: true,     items: result.items,   })
      });
    }
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const { form } = this.props;
    form.validateFields((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
      }
    });
  };

  render() {
    const { match: { params } } = this.props;
    return (
      <Row>
        <Helmet title="Product Edit" />
        <strong>Main Parameters: {params.id}</strong>
        <Form layout="vertical" onSubmit={this.handleSubmit}>
          <div className="row main-layout">
            <div className="col-md-8 layout-left">
              <ProductGeneral {...this.props} />
              <ProductMedia {...this.props} />
              <ProductPrice {...this.props} />
              <ProductInventory {...this.props} />
            </div>
            {/* End layout-left */}
            <div className="col-md-4 layout-right">
              <ProductOrganization {...this.props} />
            </div>
            {/* End layout-right */}
          </div>
          {/* End main layout */}

          <Col className="card">
            <div className="card-header">
              <div className="utils__title">
                <strong>Variants</strong>
              </div>
            </div>
            <Row className="card-body">
              <Variant />
            </Row>
          </Col>

          <div className="row">
            <div className="col-lg-12">
              <div className="form-actions">
                <Button htmlType="submit" type="primary" className="mr-2">
                  Save Product
                </Button>
                <Button type="default">Cancel</Button>
              </div>
            </div>
          </div>
        </Form>
      </Row>
    );
  }
}

export default ProductEdit;
