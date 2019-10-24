import { shallowMount } from '@vue/test-utils';
import Welcome from '@/components/Welcome.vue';

describe('HelloWorld.vue', () => {
  it('renders props.msg when passed', () => {
    const wrapper = shallowMount(Welcome);
    expect(wrapper.text()).toMatch('Welcome');
  });
});
