import { Story } from '@storybook/vue3';
import ButtonVue from '../components/Button.vue';

export default {
    title: 'components/Button',
    component: { ButtonVue },
};

const Template: Story = (args) => ({
    components: { ButtonVue },
    setup: () => {
        return { args };
    },
    template: `<ButtonVue v-bind="args"></ButtonVue>`,
});

export const Default = Template.bind({});
Default.args = {};