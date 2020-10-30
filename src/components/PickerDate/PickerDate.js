import React from 'react';
import { IconButton, InputAdornment } from '@material-ui/core';
import { CalendarTodayRounded } from '@material-ui/icons';
import { DatePicker } from 'material-ui-pickers';
import 'moment/locale/es';

const PickerDate = ({
	autoOk,
	clearable,
	value,
	onChange,
	format = 'DD/MM/YYYY',
	label,
	showTodayButton,
	keyboard,
	name,
	minDate,
	maxDate,
	style,
}) => {
	return (
		<DatePicker
			value={value}
			clearable={clearable}
			autoOk={autoOk}
			label={label && label}
			format={format}
			keyboard={keyboard}
			onChange={e => onChange({ target: { name, value: e } })}
			showTodayButton={showTodayButton}
			mask={[/\d/, /\d/, '/', /\d/, /\d/, '/', /\d/, /\d/, /\d/, /\d/] || []}
			minDate={minDate}
			maxDate={maxDate}
			style={style}
			InputProps={{
				endAdornment: (
					<InputAdornment>
						<IconButton>
							<CalendarTodayRounded color="primary" />
						</IconButton>
					</InputAdornment>
				),
			}}
		/>
	);
};

export default PickerDate;
