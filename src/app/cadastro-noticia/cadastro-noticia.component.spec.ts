import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastroNoticiaComponent } from './cadastro-noticia.component';

describe('CadastroNoticiaComponent', () => {
  let component: CadastroNoticiaComponent;
  let fixture: ComponentFixture<CadastroNoticiaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CadastroNoticiaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CadastroNoticiaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
