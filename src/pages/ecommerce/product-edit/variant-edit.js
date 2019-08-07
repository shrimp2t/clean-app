import React from 'react';
import { Input, Select, Button, Upload, Icon, Form } from 'antd';

const FormItem = Form.Item;
const { Option } = Select;
const { Dragger } = Upload;
const { TextArea } = Input;

@Form.create()
class Variant extends React.Component {
	render() {
		const { form } = this.props;
		return (
			<div className="row">
				<div className="col-lg-8">
					<div className="row">
						<div className="col-lg-6">
							<div className="form-group">
								<FormItem label="Variant name">
									{form.getFieldDecorator('title')(<Input placeholder="Variant name" />)}
								</FormItem>
							</div>
						</div>
						<div className="col-lg-6">
							<div className="form-group">
								<FormItem label="SKU">
									{form.getFieldDecorator('sku')(<Input placeholder="Product SKU" />)}
								</FormItem>
							</div>
						</div>
						<div className="col-lg-12">

							<div className="form-group">
								<FormItem label="Full description">
									{form.getFieldDecorator('fullDescription')(
										<TextArea rows={3} id="product-edit-fulldescr" />
									)}
								</FormItem>
							</div>
							<h4 className="text-black mt-2 mb-3">
								<strong>Pricing</strong>
							</h4>
							<div className="row">
								<div className="col-lg-6">
									<div className="form-group">
										<FormItem label="Total Price">
											{form.getFieldDecorator('totalPrice')(
												<Input id="product-edit-total-price" placeholder="Total Price" />
											)}
										</FormItem>
									</div>
								</div>
								<div className="col-lg-6">
									<div className="form-group">
										<FormItem label="Discount Price">
											{form.getFieldDecorator('discountPrice')(
												<Input id="product-edit-discountprice" placeholder="Discount Price" />
											)}
										</FormItem>
									</div>
								</div>
							</div>
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
														option.props.children
															.toLowerCase()
															.indexOf(input.toLowerCase()) >= 0}
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
														option.props.children
															.toLowerCase()
															.indexOf(input.toLowerCase()) >= 0}
												>
													<Option value="s">Small</Option>
													<Option value="m">Middle</Option>
													<Option value="xl">Extra large</Option>
												</Select>
											)}
										</FormItem>
									</div>
								</div>
								<div className="col-lg-12">
									<div className="form-actions">
										<Button htmlType="submit" type="primary" className="mr-2">
											Save Product
										</Button>
										<Button type="default">Cancel</Button>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className="col-lg-4">
					<Dragger className="height-300 d-block mb-3">
						<p className="ant-upload-drag-icon">
							<Icon type="inbox" />
						</p>
						<p className="ant-upload-text">Click or drag file to this area to upload</p>
						<p className="ant-upload-hint">
							Support for a single or bulk upload. Strictly prohibit from uploading company data or other
							band files
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
		);
	}
}
export default Variant;
