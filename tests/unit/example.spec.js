import { shallowMount } from '@vue/test-utils';
import HelloWorld from '@/components/HelloWorld.vue';

describe('HelloWorld.vue', () => {
  it('renders props.msg when passed', () => {
    const wrapper = shallowMount(HelloWorld, {
      propsData: { msg: 'some random text' },
    });
    expect(wrapper.text()).toMatch('some random text');
  });
});
