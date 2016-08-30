import {Component} from "@angular/core";
import {MessageComponent} from "./message.component";
import {Message} from "./message";
import {OnInit} from "../../../public/js/vendor/@angular/core/esm/src/metadata/lifecycle_hooks";
import {MessageService} from "./message.service";
@Component({
    selector: 'my-message-list',
    template: `
        <section class="col-md-8 col-md-offset-2">
            <my-message *ngFor="let message of messages" [message]="message" (editClicked)="message.content = $event"></my-message>
        </section>
    `,
    directives: [MessageComponent]
})
export class MessageListComponent implements OnInit{

    messages: Message[];

    constructor(private messageService: MessageService){}

    ngOnInit():void {
        this.messages = this.messageService.getMessages();
    }

}