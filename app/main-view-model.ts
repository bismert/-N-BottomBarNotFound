import {Observable} from 'data/observable';
import {TITLE_STATE} from 'nativescript-bottombar';

export class HelloWorldModel extends Observable {

    private _counter: number;
    private _message: string;
    public messagex: string;
    public titleStateValue: TITLE_STATE
    public hidden: boolean;

    constructor() {
        super();

        // Initialize default values.
        this._counter = 42;
        this.updateMessage();
        this.titleStateValue = TITLE_STATE.SHOW_WHEN_ACTIVE;
        this.hidden = false;
    }

    get message(): string {
        return this._message;
    }
    
    set message(value: string) {
        if (this._message !== value) {
            this._message = value;
            this.notifyPropertyChange('message', value)
        }
    }

    public onTap() {
        this._counter--;
        this.updateMessage();
    }

    private updateMessage() {
        if (this._counter <= 0) {
            this.message = 'Hoorraaay! You unlocked the NativeScript clicker achievement!';
        } else {
            this.message = `${this._counter} taps left`;
        }
    }
}
