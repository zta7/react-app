import { ListCardContent } from '../components/ListCardContent'

const list1 = [
  new GenricList({ title: 'Your Liked', subtitle: 'Artist' }),
  new GenricList({ title: 'Justin Bieber' }),
  new GenricList({ title: 'Top 50 - Universe' }),
  new GenricList({ title: 'Post Malone' }),
  new GenricList({ title: 'Long LongLongLongLongLongLongLongLongLongLongLongLongLongLongLongLongLong' }),
  new GenricList({ title: 'Your most loved in 2021' }),
]

export const SearchPage = () => {
  console.log('SearchPage')
  return <>
    <ListCardContent title={<MuiLink underline="hover">Recent Search</MuiLink>} direction="column" items={list1} />
  </>
}
