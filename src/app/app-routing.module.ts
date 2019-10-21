import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeContainerComponent, HomeDetailComponent } from './home';


const routes:Routes = [
    { 
        path: 'home', 
        component: HomeContainerComponent,
        children:[
            {
                path:'',
                redirectTo:'hot',
                pathMatch:'full'
            },
            {
                path:':tabLink',
                component:HomeDetailComponent
            }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes, { enableTracing: true })],
    exports: [RouterModule]
})

export class AppRoutingModule { }
