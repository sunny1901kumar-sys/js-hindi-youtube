class User{
    constructor(email, password){
        this.email = email;
        this.password = password;
    }

    get email(){
        return this._email.toUpperCase()
    }

    set email(value){
        this._email = value
    }

    get password(){
        return `${this._password}sunny`
    }

    set password(value){
        this._password = value
    }
}

const sunny = new User("h@sunny.gpt", "abcde")
console.log(sunny.password);
console.log(sunny.email);
