import { isEmptyObject } from 'util/Validators';

export const getProfile = profile => {
	if (!isEmptyObject(profile)) {
		return;
	}

	return {
		...profile,
	};
};

export const getUser = user => {
	if (!isEmptyObject(user)) {
		return;
	}

	return {
		...user,
	};
};
