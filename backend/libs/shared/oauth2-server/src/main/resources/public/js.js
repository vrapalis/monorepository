class ModelDataInput {
    constructor(value = '', valid = false, errorMessage = '', errorMessages = []) {
        this.value = value;
        this.valid = valid;
        this.errorMessage = errorMessage;
        this.errrorMessages = errorMessages;
    }
}

const loginApp = new Vue({
    el: '#loginApp',
    data() {
        return {
            email: new ModelDataInput('', false, 'Email is required'),
            password: new ModelDataInput('', false, 'Password is required'),
            emailRegex: /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
        }
    },
    methods: {
        onSubmit(e) {
            if(!(this.email.valid && this.password.valid)) {
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
                    if(this.email.value.match(this.emailRegex)) {
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
        }
    }
})