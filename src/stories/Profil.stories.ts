import { Story } from '@storybook/vue3';
import ProfilVue from '../views/Profil.vue';

export default {
    title: 'views/Profil',
    component: { ProfilVue },
};

const Template: Story = (args) => ({
    components: { ProfilVue },
    setup: () => {
        return { args };
    },
    template: `<ProfilVue v-bind="args"></ProfilVue>`,
});

export const Default = Template.bind({});
Default.args = {};
