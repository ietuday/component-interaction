
import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';
import { HomeComponent } from './home/home.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { ChildComponent } from './child/child.component';
import { ParentComponent } from './parent/parent.component';
import { HeroChildComponent } from './hero-child/hero-child.component';
import { HeroParentComponent } from './hero-parent/hero-parent.component';
import { NameChildComponent } from './name-child/name-child.component';
import { NameParentComponent } from './name-parent/name-parent.component';
import { VersionChildComponent } from './version-child/version-child.component';
import { VersionParentComponent } from './version-parent/version-parent.component';
import { VoterComponent } from './voter/voter.component';
import { VotetakerComponent } from './votetaker/votetaker.component';

export const routes: Routes = [
    { path: '', component: VotetakerComponent },
    { path: 'app-user-profile', component: UserProfileComponent },
    { path: 'app-child', component: ChildComponent },
    { path: 'app-parent', component: ParentComponent },
    { path: 'app-home', component: HomeComponent },
    { path: 'app-hero-child', component: HeroChildComponent },
    { path: 'app-hero-parent', component: HeroParentComponent },
    { path: 'app-name-child', component: NameChildComponent },
    { path: 'app-name-parent', component: NameParentComponent },
    { path: 'app-version-child', component: VersionChildComponent },
    { path: 'app-version-parent', component: VersionParentComponent },
    { path: 'app-voter', component: VoterComponent },
    { path: 'app-votetaker', component: VotetakerComponent },
    
    
    
];

export const AppRoutes: ModuleWithProviders = RouterModule.forRoot(routes);