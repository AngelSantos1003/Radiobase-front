import { requestProgress } from 'actions/ui.actions';

const handleProgress = (dispatch, props) => {
	const { show, transparency, message, feature } = props;
	const statusRequest = (show && 'SHOW') || 'HIDE';
	dispatch(
		requestProgress({
			payload: {
				show: show && show,
				transparency: transparency && transparency,
				message: message && message,
			},
			feature: `${feature} ${statusRequest}`,
		})
	);
};

export default handleProgress;
