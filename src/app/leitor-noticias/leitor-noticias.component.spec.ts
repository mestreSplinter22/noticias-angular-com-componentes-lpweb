import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LeitorNoticiasComponent } from './leitor-noticias.component';

describe('LeitorNoticiasComponent', () => {
  let component: LeitorNoticiasComponent;
  let fixture: ComponentFixture<LeitorNoticiasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LeitorNoticiasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LeitorNoticiasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
