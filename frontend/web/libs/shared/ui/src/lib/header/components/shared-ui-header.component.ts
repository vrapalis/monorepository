import {Component} from '@angular/core';

@Component({
  selector: 'web-sh-ui-header',
  template: `
    <header class="sh-ui-header">

      <label>Vitali Rapalis</label>

      <nav>
        <ul>
          <li>
            <a>Home</a>
          </li>
          <li>
            <a>Contact</a>
          </li>
        </ul>
      </nav>
    </header>
  `,
  styleUrls: ['shared-ui-header.component.scss']
})
export class SharedUiHeaderComponent {

}
