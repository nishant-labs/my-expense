import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-alpine.css';

import { useState } from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import { AgGridReact } from 'ag-grid-react';
import {
	defaultTransactionColDefs,
	transactionColDefs,
} from '../../../../constants/grid/transaction-grid-col-defs';
import { BaseModal } from '../../components/BaseModal';

export const Transactions = () => {
	const [rowData] = useState([
		{ date: 'Toyota', transactionOf: 'Celica', amount: 35000 },
		{ date: 'Ford', transactionOf: 'Mondeo', amount: 32000 },
		{ date: 'Porsche', transactionOf: 'Boxster', amount: 72000 },
	]);

	return (
		<>
			<h2>Transactions</h2>
			<Row className="mb-4">
				<Col>
					<Form.Select aria-label="Year selection">
						<option value="1">Select Year</option>
						<option value="2">Two</option>
						<option value="3">Three</option>
					</Form.Select>
				</Col>
				<Col>
					<Form.Select aria-label="Month Selection">
						<option value="1">Select Month</option>
						<option value="2">Two</option>
						<option value="3">Three</option>
					</Form.Select>
				</Col>
				<Col className="d-grid">
					<BaseModal
						modalTitle="Upload Latest Transactions"
						buttonText="Upload"
						primaryButtonText="Upload"
						onPrimaryAction={() => alert('ssds')}
					>
						<Row className="mb-4">
							<Col>
								<Form.Group controlId="formFile" className="mb-3">
									<Form.Label>Select CSV file</Form.Label>
									<Form.Control type="file" />
								</Form.Group>
							</Col>
						</Row>
					</BaseModal>
				</Col>
			</Row>
			<Row>
				<Col>
					<div
						className="ag-theme-alpine"
						style={{
							minHeight: '250px',
							height: '100%',
							width: '100%',
						}}
					>
						<AgGridReact
							defaultColDef={defaultTransactionColDefs}
							columnDefs={transactionColDefs()}
							rowData={rowData}
						></AgGridReact>
					</div>
				</Col>
			</Row>
		</>
	);
};
