import {Component} from "@angular/core";
import {Message} from "./message";
import {MessageService} from "./message.service";

@Component({
    selector: 'my-message-input',
    template: `
        <section class="col-md-8 col-md-offset-2">
            <div class="form-group">
                <label for="content">Content</label>
                <input type="text" class="form-control" id="content" #input>
            </div>
            <button type="submit" class="btn btn-primary" (click)="onCreate(input.value)">Send Message</button>
        </section>
    `
})
export class MessageInputComponent{

    constructor(private messageService: MessageService){}

    onCreate(content:string) {
        const message = new Message(content, 'ama', null, null );
        this.messageService.addMessage(message);
    }

}