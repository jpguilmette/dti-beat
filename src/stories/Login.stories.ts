import { Story } from '@storybook/vue3';
import LoginVue from '../components/Login.vue';

export default {
    title: 'components/Login',
    component: { LoginVue },
};

const Template: Story = (args) => ({
    components: { LoginVue },
    setup: () => {
        return { args };
    },
    template: `<LoginVue v-bind="args"></LoginVue>`,
});

export const Default = Template.bind({});
Default.args = {};