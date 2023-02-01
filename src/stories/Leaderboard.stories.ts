import { Story } from '@storybook/vue3';
import LeaderboardVue from '../views/Leaderboard.vue';

export default {
    title: 'views/Leaderboard',
    component: { LeaderboardVue },
};

const Template: Story = (args) => ({
    components: { LeaderboardVue },
    setup: () => {
        return { args };
    },
    template: `<LeaderboardVue v-bind="args"></LeaderboardVue>`,
});

export const Default = Template.bind({});
Default.args = {};
