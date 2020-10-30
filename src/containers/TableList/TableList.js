import React, { Component } from 'react';
import PropTypes from 'prop-types';
// @material-ui/core components
import withStyles from '@material-ui/core/styles/withStyles';
// core components
import GridItem from 'components/Grid/GridItem';
import GridContainer from 'components/Grid/GridContainer';
import Table from 'components/Table/Table';
import Card from 'components/Card/Card';
import CardHeader from 'components/Card/CardHeader';
import CardBody from 'components/Card/CardBody';

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
};
class TableList extends Component {
	render() {
		const { classes } = this.props;
		return (
			<div>
				<GridContainer>
					<GridItem xs={12} sm={12} md={12}>
						<Card>
							<CardHeader color="primary">
								<h4 className={classes.cardTitleWhite}>Lista de Usuarios</h4>
								<p className={classes.cardCategoryWhite}>
									Aqui encontraras una lista de todos los usuarios registrados.
								</p>
							</CardHeader>
							<CardBody>
								<Table
									tableHeaderColor="primary"
									tableHead={[
										'Nombre',
										'Apellidos',
										'Usuario',
										'Rol',
										'Grupo',
										'Registro',
									]}
									tableData={[
										[
											'Angel Eduardo',
											'Santos',
											'ASANTOS',
											'Administrador',
											'Region06',
											'31-07-2019',
										],
										[
											'Juan Carlos',
											'Buendia',
											'CBUENDIA',
											'Administrador',
											'Region06',
											'31-07-2019',
										],
										[
											'Espirito',
											'Ramos',
											'RESPIRITU',
											'Administrador',
											'Region06',
											'31-07-2019',
										],
										[
											'Giovani',
											'Espiritu',
											'EGIOVANI',
											'Administrador',
											'Region06',
											'31-07-2019',
										],
										[
											'Alejandro',
											'Arcenas',
											'AARCENAS',
											'Administrador',
											'Region06',
											'31-07-2019',
										],
									]}
								/>
							</CardBody>
						</Card>
					</GridItem>
					<GridItem xs={12} sm={12} md={12}>
						<Card plain>
							<CardHeader plain color="primary">
								<h4 className={classes.cardTitleWhite}>
									Table on Plain Background
								</h4>
								<p className={classes.cardCategoryWhite}>
									Here is a subtitle for this table
								</p>
							</CardHeader>
							<CardBody>
								<Table
									tableHeaderColor="primary"
									tableHead={['ID', 'Name', 'Country', 'City', 'Salary']}
									tableData={[
										['1', 'Dakota Rice', '$36,738', 'Niger', 'Oud-Turnhout'],
										[
											'2',
											'Minerva Hooper',
											'$23,789',
											'Curaçao',
											'Sinaai-Waas',
										],
										[
											'3',
											'Sage Rodriguez',
											'$56,142',
											'Netherlands',
											'Baileux',
										],
										[
											'4',
											'Philip Chaney',
											'$38,735',
											'Korea, South',
											'Overland Park',
										],
										[
											'5',
											'Doris Greene',
											'$63,542',
											'Malawi',
											'Feldkirchen in Kärnten',
										],
										['6', 'Mason Porter', '$78,615', 'Chile', 'Gloucester'],
									]}
								/>
							</CardBody>
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
