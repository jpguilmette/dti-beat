import { Story } from '@storybook/vue3';
import ModalVue from '../components/Modal.vue';

export default {
    title: 'components/Modal',
    component: { ModalVue },
};

const Template: Story = (args) => ({
    components: { ModalVue },
    setup: () => {
        return { args };
    },
    template: `<ModalVue v-bind="args"></ModalVue>`,
});

export const Default = Template.bind({});
Default.args = {};