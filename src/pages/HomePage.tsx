export const HomePage = () => {
  const list1 = [
    { id: '1', imgSrc: '', title: 'Your Liked' },
    { id: '2', imgSrc: '', title: 'Justin Bieber' },
    { id: '3', imgSrc: '', title: 'Top 50 - Universe' },
    { id: '4', imgSrc: '', title: 'Post Malone' },
    { id: '5', imgSrc: '', title: 'Long LongLongLongLongLongLongLongLongLongLongLongLongLongLongLongLongLong' },
    { id: '6', imgSrc: '', title: 'Your most loved in 2021' },
    { id: '7', imgSrc: '', title: 'Excise' },
    { id: '8', imgSrc: '', title: 'Malamla' },
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
  ]
  return <Container maxWidth={false} sx={{ overflowY: 'scroll' }}>
    <div>
      <CardHeader title="Good Afternoon" sx={{ pb: 0 }}/>
      <CardContent>
        <Grid container spacing={2}>
          {
            list1.map((item) => <Grid item xs={3} sx={{ height: 90 }} key={item.id}>
              <Stack direction="row" alignItems="center" justifyContent="space-between" component={Card}>
                <CardMedia
                    component="img"
                    sx={{ width: 90 }}
                    image="http://zephoria.com/wp-content/uploads/2014/08/online-community.jpg"/>
                <Typography className={'ellipsis-2-lines break-all'} sx={{ px: 1, flexGrow: 1 }} >
                  { item.title }
                </Typography>
                <PlayArrowIcon sx={{
                  color: 'error.main', mr: 1, borderRadius: 5,
                }} fontSize="large"/>
              </Stack>
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
            list2.map((item) => <Grid item xs={2} key={item.id} sx={{ ma: 2 }}>
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
        console.log(e)
        return <div key={e.path}>
          <CardHeader
              title="Your Entertainment" sx={{
                pb: 0,
                '& .MuiCardHeader-action': {
                  m: 0,
                  alignSelf: 'end',
                },
              }} action={<MuiLink underline="hover" component={NavLink} to="/fff">View All</MuiLink>}/>
          <CardContent>
            <Grid container spacing={2}>
              {
              e.children.map((item) => <Grid item xs={2} key={item.path} sx={{ ma: 2 }}>
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
      })
    }
  </Container>
}
