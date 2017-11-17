import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';

// Pages
import { LoginPage } from '../pages/login/login';
import { HomePage } from '../pages/home/home';
import { ChatPage } from '../pages/chat/chat';

// Components
import { GroupsComponent } from '../components/groups/groups';
import { BackgroundCardComponent } from '../components/background-card/background-card';
import { MessagesComponent } from '../components/messages/messages';
import { CustomItemComponent } from '../components/custom-item/custom-item';

// Providers
import { GroupsProvider } from '../providers/groups/groups';
import { MessagesProvider } from '../providers/messages/messages';

@NgModule({
    declarations: [
        MyApp,
        LoginPage,
        HomePage,
        ChatPage,
        GroupsComponent,
        BackgroundCardComponent,
        MessagesComponent,
        CustomItemComponent
    ],
    imports: [
        BrowserModule,
        IonicModule.forRoot(MyApp)
    ],
    bootstrap: [IonicApp],
    entryComponents: [
        MyApp,
        LoginPage,
        HomePage,
        ChatPage
    ],
    providers: [
        StatusBar,
        SplashScreen,
        { provide: ErrorHandler, useClass: IonicErrorHandler },
        GroupsProvider,
        MessagesProvider
    ]
})
export class AppModule { }
