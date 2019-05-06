import {ReuseComponentComponent} from './reuse-component.component';
import {MatDialog} from '@angular/material';

describe('ReuseComponent', () => {
  const matDialog = new MatDialog(null);
  const component = new ReuseComponentComponent(matDialog);

  beforeEach(() => {
  });

  afterEach(() => {
  });

  beforeAll(() => {

  });

  it('should return food', () => {
    expect(component.foods[0].viewValue).toContain('Steak');
  });
});
