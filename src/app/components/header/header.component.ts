import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { NotesService } from '@app/components/notes/notes.service';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
    public isCollapsed: boolean;

    constructor(
        private notesService: NotesService,
    ) {
    }

    ngOnInit() {
        this.isCollapsed = false;
    }

    public toggleNotes(): void {
        this.isCollapsed = !this.isCollapsed;
        this.notesService.toggleCollapse(this.isCollapsed);
    }

}
