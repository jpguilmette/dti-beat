import { Story } from '@storybook/vue3';
import NavbarVue from '../components/Navbar.vue';

export default {
    title: 'components/Navbar',
    component: { NavbarVue },
};

const Template: Story = (args) => ({
    components: { NavbarVue },
    setup: () => {
        return { args };
    },
    template: `<NavbarVue v-bind="args"></NavbarVue>`,
});

export const Default = Template.bind({});
Default.args = {};