import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TabelCompComponent } from './tabel-comp.component';

describe('TabelCompComponent', () => {
  let component: TabelCompComponent;
  let fixture: ComponentFixture<TabelCompComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TabelCompComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TabelCompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
