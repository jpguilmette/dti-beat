import { Story } from '@storybook/vue3';
import ActivityFormVue from '../components/ActivityForm.vue';

export default {
    title: 'components/ActivityForm',
    component: { ActivityFormVue },
};

const Template: Story = (args) => ({
    components: { ActivityFormVue },
    setup: () => {
        return { args };
    },
    template: `<ActivityFormVue v-bind="args"></ActivityFormVue>`,
});

export const Default = Template.bind({});
Default.args = {};
