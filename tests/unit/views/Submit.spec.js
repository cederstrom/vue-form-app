import { mount } from '@vue/test-utils';
import Vue from 'vue';
import Submit from '@/views/Submit.vue';

jest.mock('axios', () => ({
  get: jest.fn(() => Promise.resolve({ data: [{ name: 'setValue' }] })),
}));

describe('Submit.vue', () => {
  let submitView;
  let inputName;
  let inputAge;

  beforeEach(() => {
    submitView = mount(Submit, { sync: false });
    inputName = submitView.find('#input-name');
    inputAge = submitView.find('#input-age');
  });

  describe('when mounted', () => {
    test('it shall show all members', async () => {
      await Vue.nextTick();
      expect(submitView.find('#members').text()).toMatch('setValue');
    });
  });

  const setValue = async (input, value) => {
    input.trigger('focus');
    input.setValue(value);
    await Vue.nextTick();
    input.trigger('blur');
  };

  describe('validation', () => {
    it('shall not allow empty name', async () => {
      await setValue(inputName, '');
      expect(submitView.text()).toMatch('Name is required');
    });

    it('shall not allow too long name', async () => {
      await setValue(inputName, 'abcdefg');
      expect(submitView.text()).toMatch('Name must be 2 characters');
    });

    it('shall not allow empty age', async () => {
      await setValue(inputName, '');
      expect(submitView.text()).toMatch('Name is required');
    });

    it('shall not allow negative age', async () => {
      await setValue(inputAge, '-1');
      expect(submitView.text()).toMatch('You must be be at least 1 year old');
    });

    it('shall not allow age below 1', async () => {
      await setValue(inputAge, '0');
      expect(submitView.text()).toMatch('You must be be at least 1 year old');
    });

    it('shall allow age 1', async () => {
      await setValue(inputAge, '1');
      expect(submitView.text()).not.toMatch('You must be be at least 1 year old');
    });

    it('form shall be valid when all fields are filled correctly', async () => {
      await setValue(inputName, 'A');
      await setValue(inputAge, '1');
      expect(submitView.vm.valid).toBe(true);
    });

    it('form shall not be valid when fields are filled incorrectly', async () => {
      await setValue(inputName, 'AAA');
      await setValue(inputAge, '-1');
      expect(submitView.vm.valid).toBe(false);
    });
  });
});
