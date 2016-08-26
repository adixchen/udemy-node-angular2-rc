import { Component, Input, Output, EventEmitter } from '@angular/core';
import {Message} from "./message";

@Component({
    selector: 'my-message',
    template: `
        <article class="panel panel-default">
            <div class="panel-body">
                {{ message.content }}
            </div>
            <footer class="panel-footer">
                <div class="author">
                    {{ message.author }}
                </div>
                <div class="config">
                    <a href="#" (click)="onClick()">Edit</a>
                    <a href="#">Delete</a>
                </div>
            </footer>
        </article>
    `
})
export class MessageComponent {
    @Input() message: Message;
    @Output() editClicked = new EventEmitter<string>();

    onClick(){
        this.editClicked.emit();
    }
}