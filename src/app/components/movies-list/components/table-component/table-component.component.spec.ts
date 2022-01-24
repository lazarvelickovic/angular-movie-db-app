import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { TableComponentComponent } from './table-component.component';

describe('TableComponentComponent', () => {
  let component: TableComponentComponent;
  let fixture: ComponentFixture<TableComponentComponent>;
  let service: MatDialog;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TableComponentComponent],
      imports: [MatDialogModule],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TableComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    service = TestBed.inject(MatDialog);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
