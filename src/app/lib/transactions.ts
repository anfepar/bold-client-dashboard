export interface Transaction {
  id: string
  state: 'success' | 'failure' | 'pending'
  type: 'terminal' | 'link'
  date: string
  paymentMethod: number
  cardScheme: 'visa' | 'mastercard'
  value: number
}

export const Transactions: Transaction[] = [
  {
    id: "BI7WVF6VPKD1",
    state: "failure",
    type: "link",
    date: "2023-02-06T06:59:49.983Z",
    paymentMethod: 5433,
    cardScheme: "visa",
    value: 12024
  },
  {
    id: "73TL4DV84QHL",
    state: "pending",
    type: "terminal",
    date: "2023-02-11T14:03:04.88Z",
    paymentMethod: 2333,
    cardScheme: "mastercard",
    value: 3632
  },
  {
    id: "US3Z0R4UUPPD",
    state: "pending",
    type: "link",
    date: "2023-10-21T06:05:42.921Z",
    paymentMethod: 751,
    cardScheme: "visa",
    value: 26636
  },
  {
    id: "24GGS5MFHMQB",
    state: "failure",
    type: "link",
    date: "2023-03-25T08:29:05.185Z",
    paymentMethod: 5864,
    cardScheme: "mastercard",
    value: 28806
  },
  {
    id: "S40HVC2CWAYD",
    state: "pending",
    type: "terminal",
    date: "2023-08-22T09:18:49.826Z",
    paymentMethod: 5854,
    cardScheme: "mastercard",
    value: 36258
  },
  {
    id: "LK4CSQA1UBV6",
    state: "failure",
    type: "terminal",
    date: "2023-11-26T14:10:57.222Z",
    paymentMethod: 4546,
    cardScheme: "mastercard",
    value: 45755
  },
  {
    id: "UR5Y2D3ZVAKT",
    state: "failure",
    type: "terminal",
    date: "2023-04-20T10:46:34.574Z",
    paymentMethod: 6389,
    cardScheme: "visa",
    value: 38532
  },
  {
    id: "0T94JRN1OEVN",
    state: "failure",
    type: "terminal",
    date: "2023-11-21T11:20:31.821Z",
    paymentMethod: 7123,
    cardScheme: "visa",
    value: 10043
  },
  {
    id: "GUT1JT4W9L09",
    state: "pending",
    type: "link",
    date: "2023-11-24T15:31:46.38Z",
    paymentMethod: 7355,
    cardScheme: "visa",
    value: 13782
  },
  {
    id: "GD0H2CB0LAKA",
    state: "pending",
    type: "terminal",
    date: "2023-04-11T19:50:57.403Z",
    paymentMethod: 2263,
    cardScheme: "visa",
    value: 5161
  },
  {
    id: "I21FEWXPO56U",
    state: "pending",
    type: "terminal",
    date: "2023-02-05T02:26:12.478Z",
    paymentMethod: 8881,
    cardScheme: "mastercard",
    value: 28243
  },
  {
    id: "KW8QQF9YFSOQ",
    state: "pending",
    type: "link",
    date: "2023-04-03T15:29:36.214Z",
    paymentMethod: 4254,
    cardScheme: "mastercard",
    value: 41617
  },
  {
    id: "AXOKJ5LVBTR5",
    state: "pending",
    type: "terminal",
    date: "2023-01-06T23:54:45.571Z",
    paymentMethod: 8763,
    cardScheme: "visa",
    value: 43092
  },
  {
    id: "SF2CY3CBJCLM",
    state: "pending",
    type: "link",
    date: "2023-08-10T10:08:19.613Z",
    paymentMethod: 3541,
    cardScheme: "visa",
    value: 39027
  },
  {
    id: "YV90GA8MZPU1",
    state: "pending",
    type: "terminal",
    date: "2023-02-16T03:59:10.86Z",
    paymentMethod: 2569,
    cardScheme: "visa",
    value: 43981
  },
  {
    id: "GHR9D6V1B80F",
    state: "success",
    type: "terminal",
    date: "2023-01-15T08:11:00.255Z",
    paymentMethod: 8073,
    cardScheme: "mastercard",
    value: 34939
  },
  {
    id: "1WAZ1ZIQD8GV",
    state: "failure",
    type: "terminal",
    date: "2023-10-09T05:04:34.587Z",
    paymentMethod: 132,
    cardScheme: "visa",
    value: 25404
  },
  {
    id: "SKXNU9QTOL77",
    state: "failure",
    type: "terminal",
    date: "2023-10-20T19:51:53.147Z",
    paymentMethod: 7276,
    cardScheme: "visa",
    value: 18192
  },
  {
    id: "CUABDA7RP86L",
    state: "pending",
    type: "terminal",
    date: "2023-06-17T09:13:02.775Z",
    paymentMethod: 7936,
    cardScheme: "mastercard",
    value: 49561
  },
  {
    id: "MAPFDVVB0O04",
    state: "failure",
    type: "link",
    date: "2023-06-20T17:36:26.275Z",
    paymentMethod: 1146,
    cardScheme: "visa",
    value: 36205
  },
  {
    id: "PISSWYU88U2F",
    state: "success",
    type: "terminal",
    date: "2023-02-22T09:28:06.414Z",
    paymentMethod: 2881,
    cardScheme: "mastercard",
    value: 5430
  },
  {
    id: "67X6LFH3LVQ0",
    state: "failure",
    type: "link",
    date: "2023-08-09T16:47:02.790Z",
    paymentMethod: 7019,
    cardScheme: "visa",
    value: 18972
  },
  {
    id: "3N4F7PBHJ5PB",
    state: "failure",
    type: "terminal",
    date: "2023-04-01T17:29:14.222Z",
    paymentMethod: 5812,
    cardScheme: "visa",
    value: 26976
  },
  {
    id: "YE6RMQ94A6IB",
    state: "failure",
    type: "link",
    date: "2023-04-20T16:15:52.824Z",
    paymentMethod: 7791,
    cardScheme: "mastercard",
    value: 9550
  },
  {
    id: "89UAEOOZJH2C",
    state: "pending",
    type: "terminal",
    date: "2023-02-18T03:00:17.16Z",
    paymentMethod: 3945,
    cardScheme: "visa",
    value: 37068
  },
  {
    id: "949MB53C9NWM",
    state: "success",
    type: "link",
    date: "2023-01-06T20:36:58.513Z",
    paymentMethod: 5501,
    cardScheme: "mastercard",
    value: 35983
  },
  {
    id: "UJVHHUAU5RFJ",
    state: "pending",
    type: "link",
    date: "2023-02-17T05:48:21.119Z",
    paymentMethod: 6409,
    cardScheme: "mastercard",
    value: 19782
  },
  {
    id: "48IMZYPG0J5K",
    state: "success",
    type: "terminal",
    date: "2023-11-16T02:55:29.953Z",
    paymentMethod: 8207,
    cardScheme: "mastercard",
    value: 46760
  },
  {
    id: "IH81KDVI6RG6",
    state: "pending",
    type: "terminal",
    date: "2023-01-09T15:53:56.202Z",
    paymentMethod: 2214,
    cardScheme: "mastercard",
    value: 24121
  },
  {
    id: "5HMS6FUPFEDW",
    state: "failure",
    type: "link",
    date: "2023-10-11T16:58:02.227Z",
    paymentMethod: 4515,
    cardScheme: "visa",
    value: 27081
  },
  {
    id: "JC9HS4IWYQGE",
    state: "success",
    type: "terminal",
    date: "2023-04-02T22:27:59.728Z",
    paymentMethod: 4735,
    cardScheme: "mastercard",
    value: 15191
  },
  {
    id: "NLERS9A6TS88",
    state: "success",
    type: "link",
    date: "2023-12-18T09:19:16.433Z",
    paymentMethod: 5516,
    cardScheme: "visa",
    value: 29688
  },
  {
    id: "HZSQ511HGEVQ",
    state: "failure",
    type: "terminal",
    date: "2023-03-04T00:03:38.624Z",
    paymentMethod: 5955,
    cardScheme: "mastercard",
    value: 17591
  },
  {
    id: "TGYJHWSQPUW3",
    state: "success",
    type: "link",
    date: "2023-07-27T22:22:06.362Z",
    paymentMethod: 2661,
    cardScheme: "mastercard",
    value: 18373
  },
  {
    id: "N6BUPWPMWQAD",
    state: "pending",
    type: "link",
    date: "2023-05-14T23:25:28.633Z",
    paymentMethod: 6775,
    cardScheme: "visa",
    value: 34898
  },
  {
    id: "NG4AXU855Y0U",
    state: "success",
    type: "terminal",
    date: "2023-12-25T15:16:10.254Z",
    paymentMethod: 1776,
    cardScheme: "visa",
    value: 39162
  },
  {
    id: "6EP14MCQ0E8R",
    state: "pending",
    type: "link",
    date: "2023-05-10T17:07:20.135Z",
    paymentMethod: 1411,
    cardScheme: "visa",
    value: 44920
  },
  {
    id: "7X63X6YMEQTY",
    state: "success",
    type: "link",
    date: "2023-04-25T19:01:20.403Z",
    paymentMethod: 4732,
    cardScheme: "visa",
    value: 23542
  },
  {
    id: "2URRC61QRFOO",
    state: "success",
    type: "terminal",
    date: "2023-11-11T11:27:04.611Z",
    paymentMethod: 7107,
    cardScheme: "visa",
    value: 21664
  },
  {
    id: "9CIW9YMVV92S",
    state: "pending",
    type: "link",
    date: "2023-09-21T18:50:38.970Z",
    paymentMethod: 3205,
    cardScheme: "visa",
    value: 37125
  },
  {
    id: "VB3HPLO2OYR4",
    state: "failure",
    type: "link",
    date: "2023-03-16T10:57:59.559Z",
    paymentMethod: 392,
    cardScheme: "visa",
    value: 29767
  },
  {
    id: "YEO25Z98NUGG",
    state: "success",
    type: "terminal",
    date: "2023-01-06T13:58:10.935Z",
    paymentMethod: 8054,
    cardScheme: "mastercard",
    value: 25453
  },
  {
    id: "2PK3Y6JQ3DVA",
    state: "success",
    type: "terminal",
    date: "2023-10-11T02:36:17.540Z",
    paymentMethod: 2659,
    cardScheme: "mastercard",
    value: 27957
  },
  {
    id: "B6Y93RMD2I9G",
    state: "failure",
    type: "link",
    date: "2023-03-14T23:33:30.01Z",
    paymentMethod: 5037,
    cardScheme: "visa",
    value: 3286
  },
  {
    id: "UWH9UJD76QHM",
    state: "success",
    type: "link",
    date: "2023-11-22T22:31:21.821Z",
    paymentMethod: 5699,
    cardScheme: "visa",
    value: 41407
  },
  {
    id: "H0PWPCTVAHTM",
    state: "success",
    type: "terminal",
    date: "2023-11-22T11:58:45.938Z",
    paymentMethod: 5344,
    cardScheme: "visa",
    value: 9240
  },
  {
    id: "IFHEBPXV28LH",
    state: "success",
    type: "link",
    date: "2023-07-06T08:30:14.269Z",
    paymentMethod: 4637,
    cardScheme: "visa",
    value: 30937
  },
  {
    id: "9UZIATUQEJXG",
    state: "pending",
    type: "link",
    date: "2023-07-18T03:34:51.42Z",
    paymentMethod: 4667,
    cardScheme: "mastercard",
    value: 4695
  },
  {
    id: "YSOUYSML292R",
    state: "success",
    type: "link",
    date: "2023-10-26T11:49:53.266Z",
    paymentMethod: 512,
    cardScheme: "visa",
    value: 49850
  },
  {
    id: "OS316W2XJWNI",
    state: "success",
    type: "link",
    date: "2023-09-23T21:30:52.785Z",
    paymentMethod: 4696,
    cardScheme: "mastercard",
    value: 8007
  }
]