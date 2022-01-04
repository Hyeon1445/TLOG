import { useState } from 'react'
import BaseHeader from '@components/common/header'
import InputLabel from '@mui/material/InputLabel'
import FormControl from '@mui/material/FormControl'
import Select from '@mui/material/Select'
import Input from '@mui/material/Input'
import LocalizationProvider from '@mui/lab/LocalizationProvider'
import AdapterDateFns from '@mui/lab/AdapterDateFns'
import TextField from '@mui/material/TextField'
import DateTimePicker from '@mui/lab/DateTimePicker'
import Rating from '@mui/material/Rating'
import Tabs from '@mui/material/Tabs'
import Tab from '@mui/material/Tab'
import Button from '@mui/material/Button'

const NewPost = () => {
  const [dateTimeValue, setDateTimeValue] = useState<Date | null>(new Date('2021-08-18T21:11:54'))
  const [ratings, setRatings] = useState<number | null>(4)
  const [selectedTab, setSelectedTab] = useState(0)
  return (
    <div>
      <BaseHeader title="NEW TLOG" />

      <div className="pt-4 px-4">
        <section className="text-center">
          <FormControl variant="standard" sx={{ width: '100%' }}>
            <InputLabel>여행</InputLabel>
            <Select native defaultValue="">
              <option value="" />
              <optgroup label="부산 여행">
                <option value={1}>맛집여행</option>
                <option value={2}>2021가족여행</option>
              </optgroup>
              <optgroup label="제주 여행">
                <option value={3}>맛집여행</option>
                <option value={4}>배낭여행</option>
              </optgroup>
            </Select>
          </FormControl>
        </section>

        <Input
          className="pt-4"
          defaultValue="제주도 최고 불족발"
          sx={{ width: '100%' }}
        />

        <div className="img h-60 bg-violet-100 my-4">
          IMAGE
        </div>

        <LocalizationProvider dateAdapter={AdapterDateFns}>
          <DateTimePicker
            renderInput={(props) => <TextField {...props} sx={{ width: '100%' }} />}
            label="날짜 & 시간"
            value={dateTimeValue}
            onChange={(newValue) => {
              setDateTimeValue(newValue);
            }}
          />
        </LocalizationProvider>

        <div className="text-center my-4">
          <Rating
            name="simple-controlled"
            value={ratings}
            onChange={(event, newValue) => {
              setRatings(newValue);
            }}
          />
        </div>

        <Tabs
          value={selectedTab}
          onChange={(event, newVal) => { setSelectedTab(newVal) }}
          centered
        >
          <Tab label="Bus" />
          <Tab label="Food" />
          <Tab label="Ticket" />
          <Tab label="etc" />
        </Tabs>

        <Input
          className="pt-4"
          defaultValue="34000원"
          sx={{ width: '100%' }}
        />


        <TextField
          className="my-4 w-full"
          id="outlined-multiline-static"
          label="text"
          multiline
          rows={10}
          value="불족발이 너무 맛있었다. 제주도에서 꼭 가야 할 맛집!"
        />

        <div className="location h-32 bg-violet-100 my-4">
          MAP or Address
        </div>

        <Button
          variant="contained"
          className="bg-violet-400 w-full mr-4 my-8"
        >
          SIGNUP
        </Button>
      </div>
    </div>
  )
}

export default NewPost