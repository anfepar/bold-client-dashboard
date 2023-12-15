export type TransactionType = 'terminal' | 'link'
export type TransactionState = 'success' | 'failure'
export type TransactionCardScheme = 'visa' | 'mastercard'
export interface Transaction {
    id: string
    state: TransactionState
    type: TransactionType
    date: string
    paymentMethod: number
    cardScheme: TransactionCardScheme
    value: number
}

export const getTransactions = (): Promise<Transaction[]> => new Promise((resolve) => {
    resolve(transactions)
})

const transactions: Transaction[] = [
    {
        id: "RBVDV9I0FFUS",
        state: "failure",
        type: "link",
        date: "2023-12-23T06:20:30.14Z",
        paymentMethod: 3280,
        cardScheme: "mastercard",
        value: 48956
    },
    {
        id: "2P84GWKMLH4A",
        state: "success",
        type: "link",
        date: "2023-12-02T11:30:44.526Z",
        paymentMethod: 2169,
        cardScheme: "visa",
        value: 17330
    },
    {
        id: "863515XU9TWX",
        state: "success",
        type: "link",
        date: "2023-12-20T20:53:45.813Z",
        paymentMethod: 7700,
        cardScheme: "visa",
        value: 8018
    },
    {
        id: "2M99JMX791OM",
        state: "success",
        type: "link",
        date: "2023-12-04T17:30:37.274Z",
        paymentMethod: 2659,
        cardScheme: "visa",
        value: 25934
    },
    {
        id: "VQ3WDNTJ9D7R",
        state: "failure",
        type: "link",
        date: "2023-12-12T02:48:10.608Z",
        paymentMethod: 814,
        cardScheme: "mastercard",
        value: 16930
    },
    {
        id: "VV3LKL9O3LLF",
        state: "failure",
        type: "link",
        date: "2023-12-14T21:54:42.729Z",
        paymentMethod: 8332,
        cardScheme: "mastercard",
        value: 49571
    },
    {
        id: "KQXD7QTDBIGD",
        state: "success",
        type: "link",
        date: "2023-12-12T19:38:02.617Z",
        paymentMethod: 5424,
        cardScheme: "mastercard",
        value: 31210
    },
    {
        id: "C2A0TVC9VHHM",
        state: "failure",
        type: "terminal",
        date: "2023-12-14T15:55:04.41Z",
        paymentMethod: 7191,
        cardScheme: "visa",
        value: 20819
    },
    {
        id: "D0HMKGDQ6JZV",
        state: "failure",
        type: "terminal",
        date: "2023-12-05T20:16:05.561Z",
        paymentMethod: 1205,
        cardScheme: "mastercard",
        value: 38213
    },
    {
        id: "WULMDF2NFB0P",
        state: "success",
        type: "terminal",
        date: "2023-12-26T18:30:10.131Z",
        paymentMethod: 9207,
        cardScheme: "mastercard",
        value: 40653
    },
    {
        id: "CPQSNCIKLU4J",
        state: "success",
        type: "terminal",
        date: "2023-12-06T13:54:26.958Z",
        paymentMethod: 8926,
        cardScheme: "mastercard",
        value: 48798
    },
    {
        id: "HR89T5297587",
        state: "success",
        type: "terminal",
        date: "2023-12-27T20:07:33.889Z",
        paymentMethod: 897,
        cardScheme: "mastercard",
        value: 28518
    },
    {
        id: "SXQY3J5GQCUV",
        state: "failure",
        type: "terminal",
        date: "2023-12-15T09:14:22.317Z",
        paymentMethod: 1840,
        cardScheme: "mastercard",
        value: 6658
    },
    {
        id: "US22N0FXL1IX",
        state: "failure",
        type: "link",
        date: "2023-12-24T17:59:56.582Z",
        paymentMethod: 4763,
        cardScheme: "mastercard",
        value: 17010
    },
    {
        id: "OGW7CXG72P6S",
        state: "success",
        type: "terminal",
        date: "2023-12-14T13:56:40.441Z",
        paymentMethod: 5713,
        cardScheme: "visa",
        value: 6118
    },
    {
        id: "8WQWZ7SD9KGD",
        state: "failure",
        type: "link",
        date: "2023-12-22T01:20:45.797Z",
        paymentMethod: 4301,
        cardScheme: "visa",
        value: 26828
    },
    {
        id: "1LIXJ9T3L2VD",
        state: "failure",
        type: "link",
        date: "2023-12-12T11:19:58.762Z",
        paymentMethod: 3475,
        cardScheme: "visa",
        value: 41362
    },
    {
        id: "JADU0M4MM89A",
        state: "success",
        type: "terminal",
        date: "2023-12-26T14:18:47.21Z",
        paymentMethod: 9325,
        cardScheme: "visa",
        value: 16211
    },
    {
        id: "TUM0X1VWXXFO",
        state: "success",
        type: "terminal",
        date: "2023-12-13T18:46:41.806Z",
        paymentMethod: 2314,
        cardScheme: "visa",
        value: 14024
    },
    {
        id: "IS5CPNPHC14B",
        state: "success",
        type: "terminal",
        date: "2023-12-18T12:16:18.883Z",
        paymentMethod: 4028,
        cardScheme: "visa",
        value: 45985
    },
    {
        id: "H90Z1N2UVDWS",
        state: "success",
        type: "link",
        date: "2023-12-05T18:18:27.803Z",
        paymentMethod: 7183,
        cardScheme: "mastercard",
        value: 43958
    },
    {
        id: "MTRSRAYK6AU9",
        state: "success",
        type: "link",
        date: "2023-12-13T17:04:48.274Z",
        paymentMethod: 3250,
        cardScheme: "visa",
        value: 25303
    },
    {
        id: "C8Z9ROT2N4PG",
        state: "failure",
        type: "link",
        date: "2023-12-21T03:17:17.80Z",
        paymentMethod: 9556,
        cardScheme: "visa",
        value: 9958
    },
    {
        id: "FJR8VY50A2NA",
        state: "failure",
        type: "terminal",
        date: "2023-12-26T22:09:40.839Z",
        paymentMethod: 7015,
        cardScheme: "mastercard",
        value: 42896
    },
    {
        id: "DBMUXH7RI1JH",
        state: "success",
        type: "link",
        date: "2023-12-15T07:37:12.248Z",
        paymentMethod: 4366,
        cardScheme: "mastercard",
        value: 48544
    },
    {
        id: "MMA71BUHIWIZ",
        state: "success",
        type: "link",
        date: "2023-12-02T06:27:59.251Z",
        paymentMethod: 7903,
        cardScheme: "mastercard",
        value: 30476
    },
    {
        id: "6DOM8BNDY5NW",
        state: "success",
        type: "link",
        date: "2023-12-11T12:10:51.552Z",
        paymentMethod: 5924,
        cardScheme: "mastercard",
        value: 24958
    },
    {
        id: "2XDA3TP9LZ0J",
        state: "failure",
        type: "link",
        date: "2023-12-21T08:47:25.684Z",
        paymentMethod: 7678,
        cardScheme: "mastercard",
        value: 1042
    },
    {
        id: "5K2LIOA7BGVD",
        state: "success",
        type: "link",
        date: "2023-12-28T22:26:21.408Z",
        paymentMethod: 2479,
        cardScheme: "mastercard",
        value: 13165
    },
    {
        id: "Y8RINGKGIBD8",
        state: "failure",
        type: "terminal",
        date: "2023-12-15T04:15:19.443Z",
        paymentMethod: 1683,
        cardScheme: "mastercard",
        value: 31974
    },
    {
        id: "DDV2G0VR8URI",
        state: "success",
        type: "terminal",
        date: "2023-12-11T18:26:57.183Z",
        paymentMethod: 1485,
        cardScheme: "mastercard",
        value: 17222
    },
    {
        id: "HUDLFOQTJ6UU",
        state: "success",
        type: "terminal",
        date: "2023-12-12T16:50:55.348Z",
        paymentMethod: 3034,
        cardScheme: "visa",
        value: 9916
    },
    {
        id: "0HL2OJUSOX6G",
        state: "success",
        type: "terminal",
        date: "2023-12-01T16:03:51.906Z",
        paymentMethod: 1342,
        cardScheme: "visa",
        value: 2821
    },
    {
        id: "I8XJMQ3407GR",
        state: "success",
        type: "link",
        date: "2023-12-19T14:19:59.147Z",
        paymentMethod: 8606,
        cardScheme: "visa",
        value: 31783
    },
    {
        id: "O2F1TJVWIASC",
        state: "failure",
        type: "terminal",
        date: "2023-12-22T07:42:01.537Z",
        paymentMethod: 2238,
        cardScheme: "visa",
        value: 41440
    },
    {
        id: "A7NM0BAO5YDT",
        state: "success",
        type: "terminal",
        date: "2023-12-18T21:36:40.936Z",
        paymentMethod: 7759,
        cardScheme: "mastercard",
        value: 46684
    },
    {
        id: "JAEIMPO3D5YI",
        state: "success",
        type: "link",
        date: "2023-12-14T07:11:16.698Z",
        paymentMethod: 8317,
        cardScheme: "mastercard",
        value: 25567
    },
    {
        id: "EJCMUHJOVQ0H",
        state: "success",
        type: "link",
        date: "2023-12-02T18:44:01.576Z",
        paymentMethod: 1092,
        cardScheme: "visa",
        value: 26388
    },
    {
        id: "4K3N0FCR2BVN",
        state: "failure",
        type: "terminal",
        date: "2023-12-07T23:26:43.196Z",
        paymentMethod: 8127,
        cardScheme: "visa",
        value: 34782
    },
    {
        id: "DU1KO644YTB2",
        state: "failure",
        type: "link",
        date: "2023-12-12T20:03:15.708Z",
        paymentMethod: 9594,
        cardScheme: "visa",
        value: 26385
    },
    {
        id: "RDV9OVTZIT6S",
        state: "failure",
        type: "link",
        date: "2023-12-09T23:33:15.02Z",
        paymentMethod: 1222,
        cardScheme: "visa",
        value: 21090
    },
    {
        id: "PVAV1E87J2CP",
        state: "success",
        type: "link",
        date: "2023-12-14T02:18:55.742Z",
        paymentMethod: 5032,
        cardScheme: "mastercard",
        value: 45382
    },
    {
        id: "N9BSPUTI7MXR",
        state: "failure",
        type: "terminal",
        date: "2023-12-10T16:11:25.41Z",
        paymentMethod: 7027,
        cardScheme: "visa",
        value: 9836
    },
    {
        id: "5KS5UYV8EY8P",
        state: "failure",
        type: "terminal",
        date: "2023-12-24T20:21:52.851Z",
        paymentMethod: 4768,
        cardScheme: "mastercard",
        value: 45239
    },
    {
        id: "QNRDXLTT38AQ",
        state: "failure",
        type: "terminal",
        date: "2023-12-06T17:33:21.780Z",
        paymentMethod: 6433,
        cardScheme: "mastercard",
        value: 21017
    },
    {
        id: "RKC9CRKGFVPM",
        state: "success",
        type: "terminal",
        date: "2023-12-16T20:27:59.821Z",
        paymentMethod: 2194,
        cardScheme: "visa",
        value: 43654
    },
    {
        id: "AYGYCUENKZDL",
        state: "failure",
        type: "link",
        date: "2023-12-12T21:33:48.966Z",
        paymentMethod: 2457,
        cardScheme: "visa",
        value: 4620
    },
    {
        id: "BF0D04N0OCR6",
        state: "success",
        type: "link",
        date: "2023-12-11T17:14:11.716Z",
        paymentMethod: 1786,
        cardScheme: "mastercard",
        value: 34295
    },
    {
        id: "7GZ9AGPQY1XN",
        state: "success",
        type: "terminal",
        date: "2023-12-17T00:45:32.587Z",
        paymentMethod: 1626,
        cardScheme: "visa",
        value: 21125
    },
    {
        id: "2N4CNCALYLLY",
        state: "success",
        type: "terminal",
        date: "2023-12-08T00:28:41.972Z",
        paymentMethod: 8084,
        cardScheme: "visa",
        value: 12139
    },
    {
        id: "4JAB5L5OMHWV",
        state: "success",
        type: "terminal",
        date: "2023-12-03T01:18:01.541Z",
        paymentMethod: 9308,
        cardScheme: "mastercard",
        value: 48114
    },
    {
        id: "MONZ4785C0HR",
        state: "success",
        type: "terminal",
        date: "2023-12-27T20:57:47.195Z",
        paymentMethod: 5445,
        cardScheme: "visa",
        value: 1913
    },
    {
        id: "JM8I5NRIIEA6",
        state: "failure",
        type: "terminal",
        date: "2023-12-25T23:36:57.113Z",
        paymentMethod: 5645,
        cardScheme: "visa",
        value: 39572
    },
    {
        id: "Z7MZADK3W76C",
        state: "failure",
        type: "terminal",
        date: "2023-12-23T07:25:45.479Z",
        paymentMethod: 4948,
        cardScheme: "mastercard",
        value: 23096
    },
    {
        id: "W922GBINPN0V",
        state: "failure",
        type: "terminal",
        date: "2023-12-21T00:27:07.352Z",
        paymentMethod: 2745,
        cardScheme: "visa",
        value: 14955
    },
    {
        id: "BTSZIIEMCGED",
        state: "failure",
        type: "terminal",
        date: "2023-12-21T00:47:22.336Z",
        paymentMethod: 2968,
        cardScheme: "mastercard",
        value: 27659
    },
    {
        id: "XICV1DMXDXIV",
        state: "failure",
        type: "link",
        date: "2023-12-16T08:17:08.730Z",
        paymentMethod: 9862,
        cardScheme: "visa",
        value: 18290
    },
    {
        id: "CSNAKMRK33PN",
        state: "failure",
        type: "link",
        date: "2023-12-15T21:38:22.472Z",
        paymentMethod: 8727,
        cardScheme: "mastercard",
        value: 3570
    },
    {
        id: "40JVDTCONGG7",
        state: "failure",
        type: "link",
        date: "2023-12-13T01:04:19.336Z",
        paymentMethod: 8232,
        cardScheme: "mastercard",
        value: 1837
    }
]

