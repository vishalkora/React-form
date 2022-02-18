import React, { Component } from 'react';
export default class Model extends React.Component {

	render() {
		return (
			<div class="modal-popup">
				<div class="modal fade show d-block">
					<div class="modal-dialog">
						<div class="modal-content">
							<div class="modal-header">
								<h5 class="modal-title" >{this.props.title}</h5>
								<button type="button"  class="close" className='p-1 text-danger' aria-label="Close" onClick={this.props.handleClose}>
									<span>&times;</span>
								</button>
							</div>
							<div class="modal-body ">
								{this.props.body}
							</div>
							{/* <div class="modal-footer">
							<button type="button" class="btn btn-primary" onClick={this.props.handleClose}>Close</button>
							</div> */}
						</div>
					</div>
				</div>
			</div>
		);
	}
}