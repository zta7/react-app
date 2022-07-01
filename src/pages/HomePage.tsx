import { ListCard } from '../components/ListCard'

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
    <div>
      <CardHeader title="Good Afternoon" sx={{ pb: 0 }}/>
      <CardContent>
        <Grid container spacing={2}>
          {
            list1.map((item) => <Grid item sm={12} md={6} lg={3} key={item.id}>
              <ListCard item={item}/>
            </Grid>)
          }
        </Grid>
      </CardContent>
    </div>
    <div>
      <CardHeader title="Your Entertainment" sx={{ pb: 0 }}/>
      <CardContent>
        <Grid container spacing={2}>
          {
            list2.map((item) => <Grid
                item xs={12} sm={6} md={4} lg={2} key={item.id} sx={{ ma: 2 }}>
              <ListCard item={item} direction="column"/>
            </Grid>)
          }
        </Grid>
      </CardContent>
    </div>
    {
      list3.map((e) => {
        const CardHeaderSx = {
          pb: 0,
          '& .MuiCardHeader-action': {
            m: 0,
            alignSelf: 'end',
          },
        }
        const TitleLink = (title: string) => <MuiLink href="#" underline="hover" component={NavLink} to="/fff">{title}</MuiLink>
        return <div key={e.path}>
          <CardHeader
              title={TitleLink(e.title)} subheader={e.subtitle} sx={CardHeaderSx} action={TitleLink('View All')}/>
          <CardContent>
            <Grid container spacing={2}>
              {
                e.children.map((item) => <Grid
                    item xs={12} sm={6} md={4} lg={2} key={item.id} sx={{ ma: 2 }}>
                  <ListCard item={item} direction="column"/>
                </Grid>)
              }
            </Grid>
          </CardContent>
        </div>
      })
    }
  </>
}
