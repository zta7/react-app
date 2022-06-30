import { PlayListCard } from '../components/PlayListCard'

/* eslint-disable max-len */
export const HomePage = () => {
  const list1 = [
    new PlayList({ title: 'Your Liked' }),
    new PlayList({ title: 'Justin Bieber' }),
    new PlayList({ title: 'Top 50 - Universe' }),
    new PlayList({ title: 'Post Malone' }),
    new PlayList({ title: 'Long LongLongLongLongLongLongLongLongLongLongLongLongLongLongLongLongLong' }),
    new PlayList({ title: 'Your most loved in 2021' }),
    new PlayList({ title: 'Excise' }),
    new PlayList({ title: 'Malamla' }),
  ]
  const list2 = [
    {
      id: '1', imgSrc: '', title: 'Asmr(No Talking)', subtitle: 'Jorge Luis Jr.',
    },
    {
      id: '2', imgSrc: '', title: 'LazyMiu Asmr', subtitle: 'LazyMiu',
    },
    {
      id: '3', imgSrc: '', title: 'Asmr(No Talking)', subtitle: 'Jorge Luis Jr.',
    },
    {
      id: '4', imgSrc: '', title: 'LazyMiu Asmr', subtitle: 'LazyMiu',
    },
    {
      id: '5', imgSrc: '', title: 'Asmr(No Talking)', subtitle: 'Jorge Luis Jr.',
    },
    {
      id: '6', imgSrc: '', title: 'LazyMiu Asmr', subtitle: 'LazyMiu',
    },
  ]
  const list3 = [
    {
      path: '1',
      title: 'Review Classic',
      children: [
        { path: '2', title: 'Top 50 - Universe', subtitle: 'Daily updates of your current hottest tracks - Universe' },
        { path: '3', title: 'Mood Booster', subtitle: "Get Happy with today's does of feel-good songs!" },
        { path: '4', title: 'Top 50 - Universe', subtitle: 'Daily updates of your current hottest tracks - Universe' },
        { path: '5', title: 'Mood Booster', subtitle: "Get Happy with today's does of feel-good songs!" },
        { path: '6', title: 'Top 50 - Universe', subtitle: 'Daily updates of your current hottest tracks - Universe' },
        { path: '7', title: 'Mood Booster', subtitle: "Get Happy with today's does of feel-good songs!" },
      ],
    },
    {
      path: '2',
      title: 'Never Discovered',
      children: [
        { path: '2', title: 'Top 50 - Universe', subtitle: 'Daily updates of your current hottest tracks - Universe' },
        { path: '3', title: 'Mood Booster', subtitle: "Get Happy with today's does of feel-good songs!" },
        { path: '4', title: 'Top 50 - Universe', subtitle: 'Daily updates of your current hottest tracks - Universe' },
        { path: '5', title: 'Mood Booster', subtitle: "Get Happy with today's does of feel-good songs!" },
        { path: '6', title: 'Top 50 - Universe', subtitle: 'Daily updates of your current hottest tracks - Universe' },
        { path: '7', title: 'Mood Booster', subtitle: "Get Happy with today's does of feel-good songs!" },
      ],
    },
    {
      path: '3',
      title: 'Recent Played',
      children: [
        { path: '2', title: 'Top 50 - Universe', subtitle: 'Daily updates of your current hottest tracks - Universe' },
        { path: '3', title: 'Mood Booster', subtitle: "Get Happy with today's does of feel-good songs!" },
        { path: '4', title: 'Top 50 - Universe', subtitle: 'Daily updates of your current hottest tracks - Universe' },
        { path: '5', title: 'Mood Booster', subtitle: "Get Happy with today's does of feel-good songs!" },
        { path: '6', title: 'Top 50 - Universe', subtitle: 'Daily updates of your current hottest tracks - Universe' },
        { path: '7', title: 'Mood Booster', subtitle: "Get Happy with today's does of feel-good songs!" },
      ],
    },
    {
      path: '4',
      title: 'Hot Played',
      children: [
        { path: '2', title: 'Top 50 - Universe', subtitle: 'Daily updates of your current hottest tracks - Universe' },
        { path: '3', title: 'Mood Booster', subtitle: "Get Happy with today's does of feel-good songs!" },
        { path: '4', title: 'Top 50 - Universe', subtitle: 'Daily updates of your current hottest tracks - Universe' },
        { path: '5', title: 'Mood Booster', subtitle: "Get Happy with today's does of feel-good songs!" },
        { path: '6', title: 'Top 50 - Universe', subtitle: 'Daily updates of your current hottest tracks - Universe' },
        { path: '7', title: 'Mood Booster', subtitle: "Get Happy with today's does of feel-good songs!" },
      ],
    },
    {
      path: '5',
      title: 'More You Loved',
      subtitle: 'Listen More You Loved !',
      children: [
        { path: '2', title: 'Top 50 - Universe', subtitle: 'Daily updates of your current hottest tracks - Universe' },
        { path: '3', title: 'Mood Booster', subtitle: "Get Happy with today's does of feel-good songs!" },
        { path: '4', title: 'Top 50 - Universe', subtitle: 'Daily updates of your current hottest tracks - Universe' },
        { path: '5', title: 'Mood Booster', subtitle: "Get Happy with today's does of feel-good songs!" },
        { path: '6', title: 'Top 50 - Universe', subtitle: 'Daily updates of your current hottest tracks - Universe' },
        { path: '7', title: 'Mood Booster', subtitle: "Get Happy with today's does of feel-good songs!" },
      ],
    },
  ]
  return <Container maxWidth={false} sx={{ overflowY: 'scroll' }}>
    <div>
      <CardHeader title="Good Afternoon" sx={{ pb: 0 }}/>
      <CardContent>
        <Grid container spacing={2}>
          {
            list1.map((item) => <Grid item sm={12} md={6} lg={3} key={item.id}>
              <PlayListCard playList={item}/>
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
              <Stack component={Card} sx={{ p: 2 }}>
                <CardMedia
                    component="img"
                    sx={{ aspectRatio: '1/1', mb: 1 }}
                    image="http://zephoria.com/wp-content/uploads/2014/08/online-community.jpg"/>
                <Typography className={'ellipsis'} variant="button">
                  { item.title }
                </Typography>
                <Typography className={'ellipsis'} variant="caption">
                  { item.subtitle }
                </Typography>
              </Stack>
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
                  item xs={12} sm={6} md={4} lg={2} key={item.path} sx={{ ma: 2 }}>
                <Stack component={Card} sx={{ p: 2 }}>
                  <CardMedia
                      component="img"
                      sx={{ aspectRatio: '1/1', mb: 1 }}
                      image="http://zephoria.com/wp-content/uploads/2014/08/online-community.jpg"/>
                  <Typography className={'ellipsis'} variant="button">
                    { item.title }
                  </Typography>
                  <Typography className={'ellipsis-2-lines'} variant="caption">
                    { item.subtitle }
                  </Typography>
                </Stack>
              </Grid>)
            }
            </Grid>
          </CardContent>
        </div>
      })
    }
  </Container>
}
