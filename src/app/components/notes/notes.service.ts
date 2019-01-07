import { Injectable, EventEmitter } from '@angular/core';

@Injectable()
export class NotesService {

    static isCollapsedEmitter: EventEmitter<boolean> = new EventEmitter<boolean>();

    constructor() {
    }

    toggleCollapse(isCollapsed: boolean) {
        NotesService.isCollapsedEmitter.emit(isCollapsed);
    }
}
