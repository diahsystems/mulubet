import { NgModule, LOCALE_ID } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { registerLocaleData } from '@angular/common';
import locale from '@angular/common/locales/en';

import { WindowRef } from './tracker/window.service';
import {
    MulubetSharedLibsModule,
    JhiAlertComponent,
    JhiAlertErrorComponent
} from './';

@NgModule({
    imports: [
        MulubetSharedLibsModule
    ],
    declarations: [
        JhiAlertComponent,
        JhiAlertErrorComponent
    ],
    providers: [
        WindowRef,
        Title,
        {
            provide: LOCALE_ID,
            useValue: 'en'
        },
    ],
    exports: [
        MulubetSharedLibsModule,
        JhiAlertComponent,
        JhiAlertErrorComponent
    ]
})
export class MulubetSharedCommonModule {
    constructor() {
        registerLocaleData(locale);
    }
}
