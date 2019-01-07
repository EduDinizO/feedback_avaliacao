import { Component, Input, OnInit } from '@angular/core';
import { NotesService } from '@app/components/notes/notes.service';

@Component({
    selector: 'app-root',
    templateUrl: './root.component.html',
    styleUrls: ['./root.component.scss']
})
export class RootComponent implements OnInit {
    isCollapsed: boolean;

    constructor() {
    }

    ngOnInit() {
        NotesService.isCollapsedEmitter.subscribe(isCollapsed => {
            this.isCollapsed = isCollapsed;
        });
    }

}
