import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-changelog',
  templateUrl: './changelog.component.html',
  styleUrls: ['./changelog.component.scss']
})
export class ChangelogComponent implements OnInit {
  changelogF:FormGroup
  constructor(private fb:FormBuilder) {
    this.changelogF = this.fb.group({
      changelog: ['', [Validators.required]]
    })
   }

  ngOnInit(): void {
  }

}
