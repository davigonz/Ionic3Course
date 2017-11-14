import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';

// Pages
import { HomePage } from '../pages/home/home';
import { ChatPage } from '../pages/chat/chat';

// Components
import { GroupsComponent } from '../components/groups/groups';
import { BackgroundCardComponent } from '../components/background-card/background-card';
import { MessagesComponent } from '../components/messages/messages';

// Providers
import { GroupsProvider } from '../providers/groups/groups';

@NgModule({
    declarations: [
        MyApp,
        HomePage,
        ChatPage,
        GroupsComponent,
        BackgroundCardComponent,
        MessagesComponent
    ],
    imports: [
        BrowserModule,
        IonicModule.forRoot(MyApp)
    ],
    bootstrap: [IonicApp],
    entryComponents: [
        MyApp,
        HomePage,
        ChatPage
    ],
    providers: [
        StatusBar,
        SplashScreen,
        { provide: ErrorHandler, useClass: IonicErrorHandler },
        GroupsProvider
    ]
})
export class AppModule { }
