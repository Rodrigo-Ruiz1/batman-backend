const db = require('./conn');
const bcrypt = require('bcryptjs');

class User {
    constructor(id, name, email, password) {
        this.id = id;
        this.name = name;
        this.email = email;
        this.password = password;
    }

    checkPassword(hashedPassword) {
        return bcrypt.compareSync(this.password, hashedPassword)
    }

    static async addUser(name, email, password) {
        try {
            const query = `INSERT INTO users (name, email, password) VALUES ('${name}', '${email}', '${password}') RETURNING id;`;
            const response = await db.one(query);
            console.log("ADD USER RESPONSE: ", response);
            return response;
        } catch (error) {
            console.error('ERROR: ', error);
            return error;
        }
    }

    async login() {
        try {
            //Need to look up the user by their email
            const query = `SELECT * FROM users WHERE email = '${this.email}';`;
            const response = await db.one(query);
            //Need to look up the user by their hash
            console.log("LOGIN RESPONSE OBJECT: ", response);
            const isValid = this.checkPassword(response.password);
            //return response to the controller (valid or invalid)
            if (!!isValid) {
                const { id, name } = response;
                return { isValid, user_id: id, name}
            } else {
                return { isValid }
            }
       } catch (error) {
           console.log('ERROR: '. error);
           return error;
       }
    }
}

module.exports = User;