/* eslint-disable react/default-props-match-prop-types */
/* eslint-disable react/destructuring-assignment */
import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import TableFooter from '@material-ui/core/TableFooter';
import TablePagination from '@material-ui/core/TablePagination';
import withStyles from '@material-ui/core/styles/withStyles';
import Card from '../Card/Card';
import CardHeader from '../Card/CardHeader';
import CardBody from '../Card/CardBody';

const styles = {
	cardCategoryWhite: {
		'&,& a,& a:hover,& a:focus': {
			color: '#fff',
			margin: '0',
			fontSize: '14px',
			marginTop: '0',
			marginBottom: '0',
		},
		'& a,& a:hover,& a:focus': {
			color: '#FFFFFF',
		},
	},
	cardTitleWhite: {
		color: '#FFFFFF',
		marginTop: '0px',
		minHeight: 'auto',
		fontWeight: '300',
		fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
		marginBottom: '3px',
		textDecoration: 'none',
		'& small': {
			color: '#777',
			fontSize: '65%',
			fontWeight: '400',
			lineHeight: '1',
		},
	},
};

class DataTable extends Component {
	state = {
		rowsPerPage: (this.props.pagesNumber && this.props.pagesNumber[0]) || 15,
		page: 0,
		table: [],
		flag: false,
		clean: false,
		headerCheck: false,
	};
	data = [];

	handleChangeRowsPerPage = event => {
		this.setState({ rowsPerPage: event.target.value });
	};

	handleChangePage = (event, page) => {
		this.setState({ page });
	};

	fillOrEmptyRowsChecked = (checked, arr) => {
		return checked ? arr : [];
	};

	componentDidUpdate = prevProps => {
		if (prevProps.clean !== this.props.clean) {
			this.onSelectedCheckbox(event, null, null);
		} else {
			return false;
		}
	};

	onSelectedCheckbox = (event, row, idx) => {
		const { checked } = event.target;
		const { checkboxEvent } = this.props;

		if (row === null) {
			let addSelectedToTabledynamically = [];
			this.setState({ headerCheck: checked });

			if (this.state.flag) {
				addSelectedToTabledynamically = this.state.table.map(item => {
					let resultInArray = this.fillOrEmptyRowsChecked(checked, this.state.table);
					checkboxEvent(resultInArray);
					item.isSelected = checked;
					return item;
				});
			} else {
				addSelectedToTabledynamically = this.data.map(item => {
					let resultInArray = this.fillOrEmptyRowsChecked(checked, this.data);
					checkboxEvent(resultInArray);
					item.isSelected = checked;
					return item;
				});
			}

			this.setState({ table: addSelectedToTabledynamically, flag: true });
		} else {
			let addSelectedToTabledynamically = [];
			if (this.state.flag) {
				addSelectedToTabledynamically = this.state.table.map((item, i) => {
					if (i === idx) {
						item.isSelected = checked;
					}
					return item;
				});
			} else {
				addSelectedToTabledynamically = this.data.map((item, i) => {
					if (i === idx) {
						item.isSelected = checked;
					}
					return item;
				});
			}

			this.setState({ table: addSelectedToTabledynamically, flag: true });
			let rowsIsSelected = addSelectedToTabledynamically.filter(
				item => item.isSelected === true
			);
			if (rowsIsSelected.length === 0) {
				this.setState({ headerCheck: false });
			}

			checkboxEvent(rowsIsSelected);
		}
	};

	handleTableCells = (row, headers) => {
		let createOptions = [];
		var it = this.props.headers.length;

		headers.map(() => {
			Object.keys(row).map(itemRow => {
				if (it != 0) {
					it = it - 1;
					let newObj = { nameLabel: row[itemRow] };
					createOptions.push(newObj);
					return createOptions;
				}
			});
			return createOptions;
		});

		let options = createOptions.map((op, i) => {
			let content = op.nameLabel;

			if (moment(content, 'YYYY-MM-DD', true).isValid()) {
				content = moment(content, 'YYYY-MM-DD').format('DD-MM-YYYY');
			}
			return (
				<TableCell key={i} style={{ padding: '5px 10px 5px 10px', color: '#fff' }}>
					{content}
				</TableCell>
			);
		});

		return options;
	};

	addPropertyIsSelected = options => {
		let option = options.map(item => {
			return {
				...item,
			};
		});
		return option;
	};

	getTable = () => {
		//const { headers, options, onRowSelected, checkboxEvent } = this.props;
		const { headers, options = [], pagesNumber } = this.props;
		const { rowsPerPage, page } = this.state;
		const emptyRows = rowsPerPage - Math.min(rowsPerPage, options.length - page * rowsPerPage);

		this.data = this.addPropertyIsSelected(options);
		let dataToRender = this.state.flag ? this.state.table : this.data;
		return (
			<Table>
				<TableHead>
					<TableRow>
						{headers.map(res => {
							return (
								<TableCell
									key={res.key}
									style={{ padding: '5px 10px 5px 10px', color: '#fff' }}
								>
									{res}
								</TableCell>
							);
						})}
					</TableRow>
				</TableHead>

				<TableBody>
					{dataToRender
						.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
						.map((row, index) => {
							return (
								<TableRow
									hover
									key={index}
									style={{ height: 20, cursor: 'pointer', fontWeight: 400 }}
								>
									{this.handleTableCells(row, headers)}
								</TableRow>
							);
						})}
					{emptyRows > 0 && (
						<TableRow style={{ height: 30 * emptyRows }}>
							<TableCell style={{ padding: 10 }} />
						</TableRow>
					)}
				</TableBody>

				<TableFooter>
					<TableRow>
						<TablePagination
							rowsPerPageOptions={(pagesNumber && pagesNumber) || 5}
							count={options.length}
							rowsPerPage={rowsPerPage}
							page={page}
							onChangePage={this.handleChangePage}
							onChangeRowsPerPage={this.handleChangeRowsPerPage}
						/>
					</TableRow>
				</TableFooter>
			</Table>
		);
	};

	render() {
		const { titulo, subtitulo } = this.props;
		const { classes } = this.props;

		return (
			<Fragment>
				<Card>
					<CardHeader color="primary">
						<h4 className={classes.cardTitleWhite}>{titulo}</h4>
						<p className={classes.cardCategoryWhite}>{subtitulo}</p>
					</CardHeader>
					<CardBody>{this.getTable()}</CardBody>
				</Card>
			</Fragment>
		);
	}
}
DataTable.propTypes = {
	headers: PropTypes.array.isRequired,
	options: PropTypes.array.isRequired,
	checkboxEvent: PropTypes.func,
	clean: PropTypes.bool,
	pagesNumber: PropTypes.array,
};
DataTable.defaultProps = {
	card: true,
	pagesNumber: [],
	onRowSelected: () => {},
};
DataTable.propTypes = {
	classes: PropTypes.object,
};

// export default DataTable;
export default withStyles(styles)(DataTable);
