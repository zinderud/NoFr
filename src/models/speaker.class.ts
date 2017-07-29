export class Speaker {
    message: string;
    constructor(message: string) {
        this.message = message;
    }

    say() {
        return this.message;
    }
    
}