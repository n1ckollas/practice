import { NgModule } from "@angular/core";
import { MatButtonModule, MatListModule, MatSnackBarModule } from "@angular/material"


@NgModule({
    imports:[
        MatButtonModule,
        MatListModule,
        MatSnackBarModule,
    ],
    exports:[
        MatButtonModule,
        MatListModule,
        MatSnackBarModule,
    ]
})
export class MaterialModule {}