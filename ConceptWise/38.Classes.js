class User {
    constructor(nameX, emailX) {
        this.nameX = nameX;
        this.emailX = emailX;
    }
    courseList = [];
    
    getInfo() {
        return { nameX : this.nameX, emailX : this.emailX};
    }

    enrollCourse(nameX) {
        this.courseList.push(nameX)
    }

    getCourseList(){
        return this.courseList;
    }

    login() {
        return "main user login"
    }

    // this method is private to User class, no one can access it
    static getSecureInfo(){
        return "I'm classified info"
    }

}


class SubUser extends User {
    constructor(nameX, emailX){
        super(nameX, emailX);
    }

    getSubUserInfo() {
        return "I'm SubUser"
    }

    // Method over-riding
    login(){
        return "sub user login"
    }
}

const subU = new SubUser("Jaya", "e@MediaList.com")

console.log(subU.getSubUserInfo());

console.log(subU.login());

console.log(subU.getInfo());





module.exports = User;