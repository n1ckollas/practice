import { NgModule } from "@angular/core";
import { MatButtonModule, MatListModule, MatSnackBarModule,
        MatInputModule } from "@angular/material"


@NgModule({
    imports:[
        MatButtonModule,
        MatListModule,
        MatSnackBarModule,
        MatInputModule,
    ],
    exports:[
        MatButtonModule,
        MatListModule,
        MatSnackBarModule,
        MatInputModule,
    ]
})
export class MaterialModule {}