import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CertificationsAndStudiesComponent } from './certifications-and-studies.component';

describe('CertificationsAndStudiesComponent', () => {
  let component: CertificationsAndStudiesComponent;
  let fixture: ComponentFixture<CertificationsAndStudiesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CertificationsAndStudiesComponent]
    });
    fixture = TestBed.createComponent(CertificationsAndStudiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
