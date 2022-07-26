export class Factory {
    static login(type) {
        switch (type) {
            case 'password invalid':
                return {
                    "userName": "testuser",
                    "password": "invalid"
                }
            case 'username invalid':
                return {
                        "userName": "invalid",
                        "password": "invalid"
                }     
            case 'valid':
                return {
                    "userName": "testuser",
                    "password": "pl123"
                }
            default:
                return {
                    notfound: "The type was not found, please verify!"
                }
        }
    }
}