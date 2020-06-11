import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
    title = 'test-date-picker';

    control = new FormControl(undefined, { updateOn: 'blur' });

    ngOnInit() {
        this.control.valueChanges.subscribe(v => console.log('VALUE', v));
    }
}
