import { ListCardContent } from '../components/ListCardContent'

/* eslint-disable max-len */
export const HomePage = () => {
  const list1 = [
    new GenricList({ title: 'Your Liked', subtitle: 'hhhhhhhhhhhhhhhhhhhhhhhhhhhhhfhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhfhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhfhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhfhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhfhh' }),
    new GenricList({ title: 'Justin Bieber' }),
    new GenricList({ title: 'Top 50 - Universe' }),
    new GenricList({ title: 'Post Malone' }),
    new GenricList({ title: 'Long LongLongLongLongLongLongLongLongLongLongLongLongLongLongLongLongLong' }),
    new GenricList({ title: 'Your most loved in 2021' }),
    new GenricList({ title: 'Excise' }),
    new GenricList({ title: 'Malamla' }),
  ]
  const list2 = [
    new GenricList({ title: 'Asmr(No Talking)', subtitle: 'Jorge Luis Jr.' }),
    new GenricList({ title: 'LazyMiu Asmr', subtitle: 'LazyMiu' }),
    new GenricList({ title: 'Asmr(No Talking)', subtitle: 'Jorge Luis Jr.' }),
    new GenricList({ title: 'Asmr(No Talking)', subtitle: 'Jorge Luis Jr.' }),
    new GenricList({ title: 'LazyMiu Asmr', subtitle: 'LazyMiu' }),
    new GenricList({ title: 'Asmr(No Talking)', subtitle: 'Jorge Luis Jr.' }),
  ]
  const list3 = [
    {
      path: '1',
      title: 'Review Classic',
      children: [
        new GenricList({ title: 'Top 50 - Universe', subtitle: 'Daily updates of your current hottest tracks - Universe' }),
        new GenricList({ title: 'Mood Booster', subtitle: "Get Happy with today's does of feel-good songs!" }),
        new GenricList({ title: 'Top 50 - Universe', subtitle: 'Daily updates of your current hottest tracks - Universe' }),
        new GenricList({ title: 'Mood Booster', subtitle: "Get Happy with today's does of feel-good songs!" }),
        new GenricList({ title: 'Top 50 - Universe', subtitle: 'Daily updates of your current hottest tracks - Universe' }),
        new GenricList({ title: 'Mood Booster', subtitle: "Get Happy with today's does of feel-good songs!" }),
      ],
    },
    {
      path: '2',
      title: 'Never Discovered',
      children: [
        new GenricList({ title: 'Top 50 - Universe', subtitle: 'Daily updates of your current hottest tracks - Universe' }),
        new GenricList({ title: 'Mood Booster', subtitle: "Get Happy with today's does of feel-good songs!" }),
        new GenricList({ title: 'Top 50 - Universe', subtitle: 'Daily updates of your current hottest tracks - Universe' }),
        new GenricList({ title: 'Mood Booster', subtitle: "Get Happy with today's does of feel-good songs!" }),
        new GenricList({ title: 'Top 50 - Universe', subtitle: 'Daily updates of your current hottest tracks - Universe' }),
        new GenricList({ title: 'Mood Booster', subtitle: "Get Happy with today's does of feel-good songs!" }),
      ],
    },
    {
      path: '3',
      title: 'Recent Played',
      children: [
        new GenricList({ title: 'Top 50 - Universe', subtitle: 'Daily updates of your current hottest tracks - Universe' }),
        new GenricList({ title: 'Mood Booster', subtitle: "Get Happy with today's does of feel-good songs!" }),
        new GenricList({ title: 'Top 50 - Universe', subtitle: 'Daily updates of your current hottest tracks - Universe' }),
        new GenricList({ title: 'Mood Booster', subtitle: "Get Happy with today's does of feel-good songs!" }),
        new GenricList({ title: 'Top 50 - Universe', subtitle: 'Daily updates of your current hottest tracks - Universe' }),
        new GenricList({ title: 'Mood Booster', subtitle: "Get Happy with today's does of feel-good songs!" }),
      ],
    },
    {
      path: '4',
      title: 'Hot Played',
      children: [
        new GenricList({ title: 'Top 50 - Universe', subtitle: 'Daily updates of your current hottest tracks - Universe' }),
        new GenricList({ title: 'Mood Booster', subtitle: "Get Happy with today's does of feel-good songs!" }),
        new GenricList({ title: 'Top 50 - Universe', subtitle: 'Daily updates of your current hottest tracks - Universe' }),
        new GenricList({ title: 'Mood Booster', subtitle: "Get Happy with today's does of feel-good songs!" }),
        new GenricList({ title: 'Top 50 - Universe', subtitle: 'Daily updates of your current hottest tracks - Universe' }),
        new GenricList({ title: 'Mood Booster', subtitle: "Get Happy with today's does of feel-good songs!" }),
      ],
    },
    {
      path: '5',
      title: 'More You Loved',
      subtitle: 'Listen More You Loved !',
      children: [
        new GenricList({ title: 'Top 50 - Universe', subtitle: 'Daily updates of your current hottest tracks - Universe' }),
        new GenricList({ title: 'Mood Booster', subtitle: "Get Happy with today's does of feel-good songs!" }),
        new GenricList({ title: 'Top 50 - Universe', subtitle: 'Daily updates of your current hottest tracks - Universe' }),
        new GenricList({ title: 'Mood Booster', subtitle: "Get Happy with today's does of feel-good songs!" }),
        new GenricList({ title: 'Top 50 - Universe', subtitle: 'Daily updates of your current hottest tracks - Universe' }),
        new GenricList({ title: 'Mood Booster', subtitle: "Get Happy with today's does of feel-good songs!" }),
      ],
    },
  ]
  return <>
    <ListCardContent title="Good Afternoon" items={list1} />
    <ListCardContent title="Your Entertainment" items={list2} direction="column" />
    {
      list3.map((e) => {
        const TitleLink = (title: string) => <MuiLink href="#" underline="hover" component={NavLink} to="/fff">{title}</MuiLink>
        return <ListCardContent key={e.path} title={TitleLink(e.title)} subtitle={e.subtitle} items={e.children} direction="column"/>
      })
    }
  </>
}
