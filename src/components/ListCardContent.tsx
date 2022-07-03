import React, { ReactElement } from 'react'
import { GenricList } from '../models/GenricList'
import { ListCard } from './ListCard'

const CardHeaderSx = {
  pb: 0,
  '& .MuiCardHeader-action': {
    m: 0,
    alignSelf: 'end',
  },
}

type Direction = 'row' | 'column'

type Props = {
  title: string | ReactElement,
  subtitle?: string,
  items?: GenricList[],
  direction?: Direction
}

const GirdItemProps = (direction: Direction) => {
  let props = {}
  if (direction === 'row') {
    props = {
      xs: 12, md: 6, lg: 4,
    }
  } else if (direction === 'column') {
    props = {
      xs: 12,
      sm: 6,
      md: 4,
      lg: 2,
      sx: { display: 'flex' },
    }
  }

  return props
}

export const ListCardContent: React.FC<Props> = ({
  title, subtitle = '', items = [], direction = 'row',
}) => {
  console.log(1)

  // 默认都是6个
  const itemsLength = items.length
  const showItems = itemsLength <= 6 ? items : items.slice(0, 6)
  const action = itemsLength <= 6 ? undefined : <MuiLink underline="hover">123</MuiLink>

  return <Box>
    <CardHeader title={title} subtitle={subtitle} sx={CardHeaderSx} action={action}/>
    <CardContent>
      <Grid container spacing={2}>
        {
          showItems.map((item) => <Grid item {...GirdItemProps(direction)} key={item.id}>
            <ListCard item={item} direction={direction} />
          </Grid>)
        }
      </Grid>
    </CardContent>
  </Box>
}
