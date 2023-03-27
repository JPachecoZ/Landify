import { MatButtonModule } from "@angular/material/button";
import { MatIconModule } from "@angular/material/icon";
import { MatListModule } from "@angular/material/list";
import { MatSidenavModule } from "@angular/material/sidenav";
import { MatToolbarModule } from "@angular/material/toolbar";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { Meta, moduleMetadata, Story } from "@storybook/angular";
import { MainNavComponent } from "src/app/components/main-nav/main-nav.component";

export default {
    title: "MainNav",
    component: MainNavComponent,
    decorators: [
        moduleMetadata({
            imports:[
                MatToolbarModule,
                MatButtonModule,
                MatSidenavModule,
                MatIconModule,
                MatListModule,
                BrowserAnimationsModule,
            ]
        })
    ]
} as Meta;

export const Primary: Story = () => ({
    props: {  }
})