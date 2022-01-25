class ModelDataInput {
    constructor(value = '', valid = false, errorMessage = '', errorMessages = []) {
        this.value = value;
        this.valid = valid;
        this.errorMessage = errorMessage;
        this.errrorMessages = errorMessages;
    }
}

const app = new Vue({
    el: '#app',
    data() {
        return {
            showView: false,
            email: new ModelDataInput('', false, 'Email is required'),
            password: new ModelDataInput('', false, 'Password is required'),
            passwordRepeated: new ModelDataInput('', false, 'Password is required'),
            emailRegex: /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
        }
    },
    created() {
        this.reactToQueryParam(new URLSearchParams(window.location.search));
        this.showView = true;
    },
    methods: {
        onSubmit(e) {
            if (!(this.email.valid && this.password.valid)) {
                e.preventDefault();
                return;
            }
        },
        onInputChange(value) {
            if (this.email.value.length === 0) {
                this.email.errorMessage = 'Email is required.';
                this.email.valid = false;
            } else {
                if ((this.email.value.length > 2 && this.email.value.length < 60)) {
                    if (this.email.value.match(this.emailRegex)) {
                        this.email.valid = true;
                    } else {
                        this.email.errorMessage = 'Email has wrong format.';
                        this.email.valid = false;
                    }
                } else {
                    this.email.errorMessage = 'Email must be between 3 and 60 chars.'
                    this.email.valid = false;
                }
            }

            if (this.password.value.length === 0) {
                this.password.errorMessage = 'Password is required.';
                this.password.valid = false;
            } else {
                if ((this.password.value.length > 5 && this.password.value.length < 30)) {
                    this.password.valid = true;
                } else {
                    this.password.errorMessage = 'Password must be between 6 and 30 chars.'
                    this.password.valid = false;
                }
            }

            if (this.passwordRepeated.value.length === 0) {
                this.passwordRepeated.errorMessage = 'Password repeat is required.';
                this.passwordRepeated.valid = false;
            } else {
                if ((this.passwordRepeated.value.length > 5 && this.passwordRepeated.value.length < 30)) {
                    if (this.passwordRepeated.value === this.password.value) {
                        this.passwordRepeated.valid = true;
                    } else {
                        this.passwordRepeated.errorMessage = 'Password and password repeat must to be same.';
                        this.passwordRepeated.valid = false;
                    }
                } else {
                    this.passwordRepeated.errorMessage = 'Password repeat must be between 6 and 30 chars.'
                    this.passwordRepeated.valid = false;
                }
            }
        },
        reactToQueryParam(urlParams) {
            const path = window.location.pathname.split('/')[1];
            if (urlParams.has('error') && path.includes('login')) {
                const errorValue = urlParams.get('error');
                const alert = document.getElementById('alert');
                alert.classList.add('alert-show', 'show', 'alert-danger');
                const alertValue = alert.childNodes.item(0).nextSibling;
                if (errorValue.length > 0) {
                    alertValue.innerText = errorValue;
                } else {
                    alertValue.innerText = 'Invalid email or password';
                }
                setTimeout(() => {
                    alert.classList.remove('show')
                }, 6000);
            } else if (path.includes('registration') && urlParams.has('code')) {
                fetch('/api/users/registration', {
                    method: "PUT", headers: {'Content-Type': 'application/json'},
                    body: JSON.stringify({'code': urlParams.get('code')})
                })
                    .then(res => {
                        if (res.status === 200 || res.status === 201) {
                            return res.json();
                        } else {
                            return Promise.reject(res);
                        }
                    })
                    .then(res => this.onResponse('Registration complete.', 'alert-info'))
                    .catch(err => this.onResponse('Registration complete failed.', 'alert-danger'));
            }
        },
        onResponse(msg, alertClass) {
            const path = window.location.pathname.split('/')[1];
            const alert = document.getElementById('alert');
            alert.classList.add('alert-show', 'show', alertClass);
            alert.firstChild.innerText = msg;
            setTimeout(() => {
                alert.classList.remove('show')
                window.location.href = '/login';
            }, 8000);
        },
        onRegistration() {
            fetch('/api/users/registration', {
                method: "POST", headers: {'Content-Type': 'application/json'},
                body: JSON.stringify({
                    'email': this.email.value, password: this.password.value,
                    passwordRepeated: this.passwordRepeated.value
                })
            })
                .then(res => {
                    if (res.status === 200 || res.status === 201) {
                        return res.json();
                    } else {
                        return Promise.reject(res);
                    }
                })
                .then(res => this.onResponse('Registration success, check the email.', 'alert-info'))
                .catch(err => this.onResponse('Registration failed.', 'alert-danger'));
        },
        onForgotPassword() {
            fetch('/api/users/forgot-password', {
                method: "POST", headers: {'Content-Type': 'application/json'},
                body: JSON.stringify({
                    'email': this.email.value
                })
            })
                .then(res => {
                    if (res.status === 200 || res.status === 201) {
                        return res.json();
                    } else {
                        return Promise.reject(res);
                    }
                })
                .then(res => this.onResponse('Success, check your email address.', 'alert-info'))
                .catch(err => this.onResponse('Failed :(.', 'alert-danger'));
        },
        onResetPassword() {
            const queryParam = new URLSearchParams(window.location.search);
            if (queryParam.has('code')) {
                fetch('/api/users/reset-password', {
                    method: "PUT", headers: {'Content-Type': 'application/json'},
                    body: JSON.stringify({
                        'code': queryParam.get('code'),
                        'password': this.password.value,
                        'passwordRepeated': this.passwordRepeated.value
                    })
                })
                    .then(res => {
                        if (res.status === 200 || res.status === 201) {
                            return res.json();
                        } else {
                            return Promise.reject(res);
                        }
                    })
                    .then(res => this.onResponse('Success you can login.', 'alert-info'))
                    .catch(err => this.onResponse('Failed :(.', 'alert-danger'));
            } else {
                this.onResponse('Failed :(.', 'alert-danger');
            }
        }
    },
    watch: {
        email: {
            handler(after) {
                this.onInputChange(after);
            },
            deep: true
        },
        password: {
            handler(after) {
                this.onInputChange(after);
            },
            deep: true
        },
        passwordRepeated: {
            handler(after) {
                this.onInputChange(after);
            },
            deep: true
        }
    }
})