import React from 'react';
import { Form, Input, Checkbox } from 'antd';

const FormItem = Form.Item;

@Form.create()
class ProductInventory extends React.Component {
	render() {
		const { form } = this.props;
		return (
			<div className="card layout-card">
				<div className="card-header">
					<div className="utils__title">
						<strong>Inventory</strong>
					</div>
				</div>
				<div className="card-body">
					<div className="row">
						<div className="col-12">
							<div className="row">
								<div className="col-md-6">
									<div className="form-group">
										<FormItem label="SKU (stock keeping unit)">
											{form.getFieldDecorator('sku')(<Input placeholder="" />)}
										</FormItem>
									</div>
								</div>
								<div className="col-md-6">
									<div className="form-group">
										<FormItem label="Quantity">
											{form.getFieldDecorator('quantity')(<Input placeholder="0" />)}
										</FormItem>
									</div>
								</div>

								<div className="col-md-6">
									<div className="form-group">
										<FormItem>
											{form.getFieldDecorator('inventory_policy', {
												valuePropName: 'checked',
												initialValue: true
											})(
												<Checkbox>
													Allow customers to purchase this product when it's out of stock
												</Checkbox>
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

export default ProductInventory;
