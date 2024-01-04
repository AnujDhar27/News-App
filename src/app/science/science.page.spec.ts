import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SciencePage } from './science.page';

describe('SciencePage', () => {
  let component: SciencePage;
  let fixture: ComponentFixture<SciencePage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(SciencePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
