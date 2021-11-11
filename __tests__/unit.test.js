// unit.test.js

const functions = require('../code-to-unit-test/unit-test-me.js');

// TODO - Part 2

//isPhoneNumber

test('bad phone number 09142098', () => {
    expect(functions.isPhoneNumber("09142098")).toBe(false);
  });

test('bad phone number asdf@)()hksj', () => {
    expect(functions.isPhoneNumber("asdf@)()hksj")).toBe(false);
});

test('good phone number 6192202929', () => {
    expect(functions.isPhoneNumber("619-220-2929")).toBe(true);
});

test('good phone number 1800CALLNO', () => {
    expect(functions.isPhoneNumber("333-6039")).toBe(true);
});

//isEmail

test('bad email 09142098', () => {
    expect(functions.isEmail("09142098")).toBe(false);
  });

test('bad email asdf@)()hksj', () => {
    expect(functions.isEmail("asdf@)()hksj")).toBe(false);
});

test('good email kktsou@ucsd.edu', () => {
    expect(functions.isEmail("kktsou@ucsd.edu")).toBe(true);
});

test('good email das299UUU@sksalewoh.sks', () => {
    expect(functions.isEmail("das299UUU@sksalewoh.sks")).toBe(true);
});

//isStrongPassword

test('bad password 12341234', () => {
    expect(functions.isStrongPassword("12341234")).toBe(false);
});

test('bad password pas', () => {
    expect(functions.isStrongPassword("pas")).toBe(false);
});

test('good password pooTwo__2', () => {
    expect(functions.isStrongPassword("pooTwo__2")).toBe(true);
});

test('good  password kJjsas_afs', () => {
    expect(functions.isStrongPassword("kJjsas_afs")).toBe(true);
});


//isDate

test('bad date  kJjsas_afs', () => {
    expect(functions.isDate("kJjsas_afs")).toBe(false);
});
test('bad date  69 / 69/ 1269', () => {
    expect(functions.isDate("69 / 69/ 1269")).toBe(false);
});

test('good date 11/10/2021', () => {
    expect(functions.isDate("11/10/2021")).toBe(true);
});
test('good date  1/2/1876', () => {
    expect(functions.isDate("1/2/1876")).toBe(true);
});

//isHexColor

test('bad hex 312556236@#@!!@', () => {
    expect(functions.isHexColor("312556236@#@!!@")).toBe(false);
});
test('bad hex #1251', () => {
    expect(functions.isHexColor("#1251")).toBe(false);
});
test('good hex #125111', () => {
    expect(functions.isHexColor("#125111")).toBe(true);
});
test('good hex #AF21D1', () => {
    expect(functions.isHexColor("#AF21D1")).toBe(true);
});

