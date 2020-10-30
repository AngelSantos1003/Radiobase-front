import { sessionService } from 'redux-react-session';

class Auth {
	isAuthenticated = false;

	login(cb, token, data) {
		if (token) {
			this.isAuthenticated = true;
			sessionService.saveSession({ token });
			sessionService.saveUser(data);
		}
		setTimeout(cb, 100);
	}

	signout(cb) {
		this.isAuthenticated = false;
		sessionService.deleteSession();
		sessionService.deleteUser();
		setTimeout(cb, 100);
	}

	authenticated() {
		return this.isAuthenticated;
	}
}
export default new Auth();
