import { Story } from '@storybook/vue3';
import HomeVue from '../views/Home.vue';

export default {
    title: 'components/Home',
    component: { HomeVue },
};

const Template: Story = (args) => ({
    components: { HomeVue },
    setup: () => {
        return { args };
    },
    template: `<HomeVue v-bind="args"></HomeVue>`,
});

export const Default = Template.bind({});
Default.args = {};
