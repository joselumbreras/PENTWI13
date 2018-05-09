import { TestBed, async } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { AppComponent } from './app.component';

describe('AppComponent', () => {

  let fixture;
  let component;
  let screen;
  let button;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent
      ],
    }).compileComponents();
  }));

  beforeEach(async(() => {
    fixture = TestBed.createComponent(AppComponent);
    component = fixture.debugElement.componentInstance;
    screen = fixture.debugElement.query(By.css('.screen'));
  }));

  it('should add two numbers (24 + 6 = 30)', async(() => {
    fixture.detectChanges();

    button = fixture.debugElement.query(By.css('.b-2'));
    button.triggerEventHandler('click', null);
    fixture.detectChanges();
    expect(screen.properties.value).toBe('2');

    button = fixture.debugElement.query(By.css('.b-4'));
    button.triggerEventHandler('click', null);
    fixture.detectChanges();
    expect(screen.properties.value).toBe('24');

    button = fixture.debugElement.query(By.css('.b-addition'));
    button.triggerEventHandler('click', null);
    fixture.detectChanges();
    expect(screen.properties.value).toBe('');

    button = fixture.debugElement.query(By.css('.b-6'));
    button.triggerEventHandler('click', null);
    fixture.detectChanges();
    expect(screen.properties.value).toBe('6');

    button = fixture.debugElement.query(By.css('.b-equals'));
    button.triggerEventHandler('click', null);
    fixture.detectChanges();
    expect(screen.properties.value).toBe('30');
  }));

  it('should substract two numbers (50 - 35.5 = 14.5)', async(() => {
    fixture.detectChanges();

    button = fixture.debugElement.query(By.css('.b-5'));
    button.triggerEventHandler('click', null);
    fixture.detectChanges();
    expect(screen.properties.value).toBe('5');

    button = fixture.debugElement.query(By.css('.b-0'));
    button.triggerEventHandler('click', null);
    fixture.detectChanges();
    expect(screen.properties.value).toBe('50');

    button = fixture.debugElement.query(By.css('.b-substraction'));
    button.triggerEventHandler('click', null);
    fixture.detectChanges();
    expect(screen.properties.value).toBe('');

    button = fixture.debugElement.query(By.css('.b-3'));
    button.triggerEventHandler('click', null);
    fixture.detectChanges();
    expect(screen.properties.value).toBe('3');

    button = fixture.debugElement.query(By.css('.b-5'));
    button.triggerEventHandler('click', null);
    fixture.detectChanges();
    expect(screen.properties.value).toBe('35');

    button = fixture.debugElement.query(By.css('.b-decimal'));
    button.triggerEventHandler('click', null);
    fixture.detectChanges();
    expect(screen.properties.value).toBe('35.');

    button = fixture.debugElement.query(By.css('.b-5'));
    button.triggerEventHandler('click', null);
    fixture.detectChanges();
    expect(screen.properties.value).toBe('35.5');

    button = fixture.debugElement.query(By.css('.b-equals'));
    button.triggerEventHandler('click', null);
    fixture.detectChanges();
    expect(screen.properties.value).toBe('14.5');
  }));

  it('should multiply two numbers (5 * 9 = 45)', async(() => {
    fixture.detectChanges();

    button = fixture.debugElement.query(By.css('.b-5'));
    button.triggerEventHandler('click', null);
    fixture.detectChanges();
    expect(screen.properties.value).toBe('5');

    button = fixture.debugElement.query(By.css('.b-multiplication'));
    button.triggerEventHandler('click', null);
    fixture.detectChanges();
    expect(screen.properties.value).toBe('');

    button = fixture.debugElement.query(By.css('.b-9'));
    button.triggerEventHandler('click', null);
    fixture.detectChanges();
    expect(screen.properties.value).toBe('9');

    button = fixture.debugElement.query(By.css('.b-equals'));
    button.triggerEventHandler('click', null);
    fixture.detectChanges();
    expect(screen.properties.value).toBe('45');
  }));

  it('should divide two numbers (100 / 4 = 25)', async(() => {
    fixture.detectChanges();

    button = fixture.debugElement.query(By.css('.b-1'));
    button.triggerEventHandler('click', null);
    fixture.detectChanges();
    expect(screen.properties.value).toBe('1');

    button = fixture.debugElement.query(By.css('.b-0'));
    button.triggerEventHandler('click', null);
    fixture.detectChanges();
    expect(screen.properties.value).toBe('10');

    button = fixture.debugElement.query(By.css('.b-0'));
    button.triggerEventHandler('click', null);
    fixture.detectChanges();
    expect(screen.properties.value).toBe('100');

    button = fixture.debugElement.query(By.css('.b-division'));
    button.triggerEventHandler('click', null);
    fixture.detectChanges();
    expect(screen.properties.value).toBe('');

    button = fixture.debugElement.query(By.css('.b-4'));
    button.triggerEventHandler('click', null);
    fixture.detectChanges();
    expect(screen.properties.value).toBe('4');

    button = fixture.debugElement.query(By.css('.b-equals'));
    button.triggerEventHandler('click', null);
    fixture.detectChanges();
    expect(screen.properties.value).toBe('25');
  }));

});
