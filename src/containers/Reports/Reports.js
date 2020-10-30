/* eslint-disable no-mixed-spaces-and-tabs */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
// @material-ui/core components
import withStyles from '@material-ui/core/styles/withStyles';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import enLocale from 'date-fns/locale/es';
// core components
import GridItem from 'components/Grid/GridItem';
import GridContainer from 'components/Grid/GridContainer';
import Table from 'components/Table/Table';
import Card from 'components/Card/Card';
import CardHeader from 'components/Card/CardHeader';
import CardBody from 'components/Card/CardBody';
import Button from 'components/CustomButtons/Button';
import CardFooter from 'components/Card/CardFooter';
import {
	primaryColor,
	grayColor,
	whiteColor,
	primaryBoxShadow,
} from 'constants/material-dashboard-react';

// import DateFnsUtils from '@date-io/date-fns';
import DateFnsUtils from '@date-io/date-fns';
import { MuiPickersUtilsProvider, DatePicker } from 'material-ui-pickers';

import getSessionState from 'selectors/SessionSelector';
import { getProjects, getReports } from 'selectors/projectsSelector';
import getEmployees from 'selectors/employee.Selector';

// import DeleteIcon from '@material-ui/icons/Delete';
import { connect } from 'react-redux';
import XLSX from 'xlsx';
import sendReportsAction from './ReportsActions';

const dataRegions = [
	{ _id: 1, region: 'Region 1' },
	{ _id: 2, region: 'Region 2' },
	{ _id: 3, region: 'Region 3' },
	{ _id: 4, region: 'Region 4' },
	{ _id: 6, region: 'Region 6' },
	{ _id: 9, region: 'Region 9' },
];
const styles = {
	cardCategoryWhite: {
		'&,& a,& a:hover,& a:focus': {
			color: 'rgba(255,255,255,.62)',
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
	formControl: {
		margin: '28.5px 0 0 0',
		position: 'relative',
		verticalAlign: 'unset',
	},
	labelRoot: {
		color: whiteColor + ' !important',
		fontWeight: '400',
		fontSize: '14px',
		lineHeight: '1.42857',
		letterSpacing: 'unset',
	},
	selectMenuItem: {
		fontSize: '13px',
		padding: '10px 20px',
		margin: '0 5px',
		borderRadius: '2px',
		transition: 'all 150ms linear',
		display: 'block',
		clear: 'both',
		fontWeight: '400',
		lineHeight: '2',
		whiteSpace: 'nowrap',
		color: grayColor[7],
		paddingRight: '30px',
		'&:hover': {
			backgroundColor: primaryColor[0],
			color: whiteColor,
			...primaryBoxShadow,
		},
	},
	selectMenuItemSelected: {
		backgroundColor: primaryColor[0] + '!important',
		color: whiteColor,
	},
	select: {
		fontSize: '.75rem',
		fontWeight: '400',
		lineHeight: '1.42857',
		textDecoration: 'none',
		textTransform: 'uppercase',
		color: whiteColor,
		letterSpacing: '0',
		'&:focus': {
			backgroundColor: 'transparent',
		},
		'&[aria-owns] + input + svg': {
			transform: 'rotate(180deg)',
		},
		'& + input + svg': {
			transition: 'all 300ms linear',
		},
	},
	underline: {
		'&:hover:not($disabled):before,&:before': {
			borderColor: grayColor[4] + ' !important',
			borderWidth: '1px !important',
		},
		'&:after': {
			borderColor: primaryColor[0],
		},
	},
	picker: {
		fontSize: '.75rem',
		fontWeight: '400',
		lineHeight: '1.5',
		textDecoration: 'none',
		textTransform: 'uppercase',
		color: whiteColor,
		letterSpacing: '0',
		'&:focus': {
			backgroundColor: 'transparent',
		},
		'&[aria-owns] + input + svg': {
			transform: 'rotate(180deg)',
		},
		'& + input + svg': {
			transition: 'all 300ms linear',
		},
		'&:hover:not($disabled):before,&:before': {
			borderColor: grayColor[4] + ' !important',
			borderWidth: '1px !important',
		},
		'&:after': {
			borderColor: primaryColor[0],
		},
	},
};
@connect(store => ({
	session: getSessionState(store),
	projects: getProjects(store),
	reports: getReports(store),
	employees: getEmployees(store),
}))
class TableList extends Component {
	state = {
		name: '',
		projectName: '',
		startDate: new Date('0000-00-00'),
		finishDate: new Date('0000-00-00'),
		visible: false,
		tableBody: [],
		tableHead: [],
		data: [],
		listProjects: [],
		listEmployees: [],
		tableExcel: '',
		openFinallyTask: false,
		finallyHours: 0,
		idTask: '',
	};
	componentDidMount = () => {
		const items = this.handleGetItemEmployee(dataRegions);
		this.setState({ listEmployees: items });
	};

	componentDidUpdate(prevProps) {
		if (this.props !== prevProps) {
			const { reports } = this.props;
			if (reports.list !== undefined) {
				const radioBases = this.handleGetTableReports(reports.list);
				this.setState({ tableBody: radioBases });
				if (radioBases.length > 0) {
					this.setState({ visible: true });
				}
			}
		}
	}

	handleClickOpen = () => {
		this.setState({ openFinallyTask: true });
	};

	handleClose = () => {
		this.setState({ openFinallyTask: false });
	};

	handleGetItemEmployee = data => {
		const { classes } = this.props;
		const items = data.map(item => {
			return (
				<MenuItem
					key={item._id}
					classes={{
						root: classes.selectMenuItem,
					}}
					value={item._id}
				>
					{item.region}
				</MenuItem>
			);
		});
		return items;
	};

	handleGetTableReports = data => {
		const bodyData = [];
		data.map(item => {
			const colors =
				item.TRAFICO <= 15
					? '#F7091F'
					: item.TRAFICO > 15 && item.TRAFICO <= 40
						? '#F7A809'
						: item.TRAFICO > 40 && item.TRAFICO <= 90
							? '#F3FF5D'
							: '#1D8905';
			const opc = (
				<Button key="btn" size="xs" style={{ backgroundColor: colors, color: '#fff' }}>
					{item.TRAFICO}
				</Button>
			);
			const found = bodyData.find(element => element == item.RADIOBASE);

			if (found == undefined) {
				bodyData.push([item.RADIOBASE, opc]);
			}

			return opc;
		});
		return bodyData;
	};

	handleDateChange = (date, name) => {
		this.setState({ [name]: date });
	};
	handleChangue = e => {
		this.setState({ [e.target.name]: e.target.value });
	};

	handleVisible = () => {
		this.setState({ visible: true });
	};

	handleCreateDocument = () => {
		const { tableExcel } = this.state;
		var worksheet = XLSX.utils.aoa_to_sheet(tableExcel);
		var new_workbook = XLSX.utils.book_new();
		XLSX.utils.book_append_sheet(new_workbook, worksheet, 'SheetJS');
		XLSX.writeFile(new_workbook, 'ReportesRadiobase.xlsb');
	};

	handleFind = () => {
		const { startDate, finishDate, name } = this.state;
		const { dispatch, session } = this.props;
		this.setState({ visible: false });
		const dateS =
			startDate != 'Invalid Date'
				? startDate.getFullYear() + '-' + startDate.getMonth() + '-' + startDate.getDate()
				: '';
		const dateF =
			finishDate != 'Invalid Date'
				? finishDate.getFullYear() +
				  '-0' +
				  finishDate.getMonth() +
				  '-' +
				  finishDate.getDate()
				: '';
		const data = {
			region: name,
			dateInitial: dateS,
			dateEnd: dateF,
		};
		sendReportsAction(dispatch, data, session);

		this.setState({
			name: '',
			startDate: new Date('0000-00-00'),
			finishDate: new Date('0000-00-00'),
		});
	};
	render() {
		const { name, projectName, startDate, finishDate, tableBody, listEmployees } = this.state;
		const { classes, reports } = this.props;
		let findDisabled = false;
		const dateS =
			startDate.getDate() + '/' + startDate.getMonth() + '/' + startDate.getFullYear();
		const dateF =
			finishDate.getDate() + '/' + finishDate.getMonth() + '/' + finishDate.getFullYear();
		if (
			dateS > dateF ||
			(name == '' &&
				projectName == '' &&
				startDate == 'Invalid Date' &&
				finishDate == 'Invalid Date')
		) {
			findDisabled = true;
		}
		return (
			<div>
				<GridContainer>
					<GridItem xs={12} sm={12} md={12}>
						<Card>
							<CardHeader color="primary">
								<h4 className={classes.cardTitleWhite}>Reportes</h4>
								<p className={classes.cardCategoryWhite}>
									Captura los campos a buscar
								</p>
							</CardHeader>
							<CardBody>
								<GridContainer>
									<GridItem xs={12} sm={12} md={3}>
										<FormControl fullWidth className={classes.formControl}>
											<InputLabel
												htmlFor="simple-select"
												className={classes.labelRoot}
											>
												Regiones
											</InputLabel>
											<Select
												className={classes.underline}
												MenuProps={{
													className: classes.selectMenu,
												}}
												classes={{
													select: classes.select,
												}}
												value={name}
												onChange={event => this.handleChangue(event)}
												inputProps={{
													name: 'name',
													id: 'simple-select',
												}}
											>
												<MenuItem
													disabled
													classes={{
														root: classes.selectMenuItem,
													}}
													value="0"
												>
													Regiones
												</MenuItem>
												{listEmployees}
											</Select>
										</FormControl>
									</GridItem>
									<GridItem xs={12} sm={12} md={3}>
										<MuiPickersUtilsProvider
											utils={DateFnsUtils}
											locale={enLocale}
										>
											{' '}
											<DatePicker
												fullWidth
												className={classes.formControl}
												margin="normal"
												label="Fecha inicio"
												value={startDate}
												invalidLabel=""
												invalidDateMessage=""
												onChange={e => {
													this.handleDateChange(e, 'startDate');
												}}
												InputLabelProps={{
													className: classes.labelRoot,
												}}
												InputProps={{
													className: classes.picker,
												}}
											/>
										</MuiPickersUtilsProvider>
									</GridItem>
									<GridItem xs={12} sm={12} md={3}>
										<MuiPickersUtilsProvider
											utils={DateFnsUtils}
											locale={enLocale}
										>
											<DatePicker
												fullWidth
												className={classes.formControl}
												margin="normal"
												label="Fecha fin"
												value={finishDate}
												minDateMessage="La fecha fin no puede ser menor a fecha incio"
												invalidLabel=""
												invalidDateMessage=""
												onChange={e => {
													this.handleDateChange(e, 'finishDate');
												}}
												minDate={startDate}
												InputLabelProps={{
													className: classes.labelRoot,
												}}
												InputProps={{
													className: classes.picker,
												}}
											/>
										</MuiPickersUtilsProvider>
									</GridItem>
								</GridContainer>
							</CardBody>
							<CardFooter style={{ justifyContent: 'flex-end' }}>
								<Button
									color="primary"
									onClick={this.handleFind}
									disabled={findDisabled}
								>
									Buscar
								</Button>
							</CardFooter>
						</Card>
					</GridItem>
					<GridItem xs={12} sm={12} md={12}>
						<Card profile>
							<CardHeader color="primary">
								<h4 className={classes.cardTitleWhite}>Radio Bases</h4>
								<p className={classes.cardCategoryWhite}>
									últimos 30 días para distintas radiobases de la red
								</p>
							</CardHeader>
							<CardBody>
								<Table
									id="tableReports"
									tableHeaderColor="primary"
									tableHead={reports.headers}
									tableData={tableBody}
								/>
							</CardBody>
							<CardFooter style={{ justifyContent: 'flex-end' }}>
								<Button color="primary" onClick={this.handleCreateDocument}>
									Descargar
								</Button>
							</CardFooter>
						</Card>
					</GridItem>
				</GridContainer>
			</div>
		);
	}
}
TableList.propTypes = {
	classes: PropTypes.object,
};
export default withStyles(styles)(TableList);
