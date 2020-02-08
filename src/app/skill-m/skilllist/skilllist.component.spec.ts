import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SkilllistComponent } from './skilllist.component';

describe('SkilllistComponent', () => {
  let component: SkilllistComponent;
  let fixture: ComponentFixture<SkilllistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SkilllistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SkilllistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
