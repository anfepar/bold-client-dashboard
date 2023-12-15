export interface Transaction {
    id: string
    state: 'success' | 'failure'
    type: 'terminal' | 'link'
    date: string
    paymentMethod: number
    cardScheme: 'visa' | 'mastercard'
    value: number
}

export const getTransactions = (): Promise<Transaction[]> => new Promise((resolve) => {
    resolve(transactions)
})

const transactions: Transaction[] = [
    {
        id: "W7T0L6I9CSLE",
        state: "failure",
        type: "terminal",
        date: "2023-09-25T05:38:15.963Z",
        paymentMethod: 4354,
        cardScheme: "visa",
        value: 6776
    },
    {
        id: "YDL33DMMLU1M",
        state: "failure",
        type: "link",
        date: "2023-06-27T05:04:14.84Z",
        paymentMethod: 5528,
        cardScheme: "visa",
        value: 7373
    },
    {
        id: "97E2IN42IV8Q",
        state: "failure",
        type: "terminal",
        date: "2023-12-04T08:39:33.619Z",
        paymentMethod: 816,
        cardScheme: "mastercard",
        value: 38390
    },
    {
        id: "TXUVZG5K3T8I",
        state: "failure",
        type: "terminal",
        date: "2023-01-02T19:16:53.608Z",
        paymentMethod: 8479,
        cardScheme: "mastercard",
        value: 49046
    },
    {
        id: "55SP09A39ASH",
        state: "failure",
        type: "link",
        date: "2023-01-02T07:08:25.963Z",
        paymentMethod: 9765,
        cardScheme: "mastercard",
        value: 28672
    },
    {
        id: "7OD4MZDXSMK1",
        state: "success",
        type: "link",
        date: "2023-01-28T01:36:46.147Z",
        paymentMethod: 9683,
        cardScheme: "visa",
        value: 47529
    },
    {
        id: "W7QD4IHZEBKR",
        state: "failure",
        type: "terminal",
        date: "2023-02-16T06:11:13.358Z",
        paymentMethod: 6335,
        cardScheme: "mastercard",
        value: 34482
    },
    {
        id: "6TLW0AOUAH36",
        state: "success",
        type: "link",
        date: "2023-11-07T20:23:45.425Z",
        paymentMethod: 6771,
        cardScheme: "visa",
        value: 42249
    },
    {
        id: "WO0XN7XIPE51",
        state: "failure",
        type: "terminal",
        date: "2023-09-16T07:31:11.667Z",
        paymentMethod: 252,
        cardScheme: "visa",
        value: 21554
    },
    {
        id: "X6N764DJ1710",
        state: "failure",
        type: "terminal",
        date: "2023-11-07T02:21:50.139Z",
        paymentMethod: 4022,
        cardScheme: "mastercard",
        value: 38867
    },
    {
        id: "0X2RSK8MPIW4",
        state: "failure",
        type: "terminal",
        date: "2023-04-26T02:04:12.580Z",
        paymentMethod: 4535,
        cardScheme: "mastercard",
        value: 24506
    },
    {
        id: "YN32VYZTO8N6",
        state: "failure",
        type: "terminal",
        date: "2023-02-12T18:04:13.382Z",
        paymentMethod: 859,
        cardScheme: "mastercard",
        value: 3996
    },
    {
        id: "2HLH60FEIYOT",
        state: "success",
        type: "terminal",
        date: "2023-10-07T01:04:22.563Z",
        paymentMethod: 274,
        cardScheme: "visa",
        value: 31402
    },
    {
        id: "3878SK5SLUKQ",
        state: "failure",
        type: "link",
        date: "2023-06-09T05:45:48.647Z",
        paymentMethod: 5180,
        cardScheme: "visa",
        value: 40203
    },
    {
        id: "HHAT0AH4PMW7",
        state: "failure",
        type: "link",
        date: "2023-05-06T05:22:58.847Z",
        paymentMethod: 2616,
        cardScheme: "mastercard",
        value: 26810
    },
    {
        id: "IEPS0QND8ZUU",
        state: "failure",
        type: "link",
        date: "2023-02-19T03:40:52.280Z",
        paymentMethod: 8963,
        cardScheme: "mastercard",
        value: 15871
    },
    {
        id: "3W3CSBZLN9LT",
        state: "success",
        type: "link",
        date: "2023-07-28T03:45:15.533Z",
        paymentMethod: 8929,
        cardScheme: "mastercard",
        value: 12566
    },
    {
        id: "WUE3UCA5A316",
        state: "success",
        type: "link",
        date: "2023-07-01T00:08:34.287Z",
        paymentMethod: 9455,
        cardScheme: "visa",
        value: 41956
    },
    {
        id: "VP6RHSJCYVQU",
        state: "success",
        type: "terminal",
        date: "2023-03-26T10:12:10.590Z",
        paymentMethod: 9292,
        cardScheme: "mastercard",
        value: 26059
    },
    {
        id: "ZB7HH3V4L9RX",
        state: "failure",
        type: "terminal",
        date: "2023-03-15T14:18:44.734Z",
        paymentMethod: 2082,
        cardScheme: "mastercard",
        value: 9937
    },
    {
        id: "Y3W18JSWV91G",
        state: "failure",
        type: "terminal",
        date: "2023-05-02T22:14:31.394Z",
        paymentMethod: 2972,
        cardScheme: "visa",
        value: 34786
    },
    {
        id: "MCTFG76MPB53",
        state: "success",
        type: "terminal",
        date: "2023-08-04T22:17:40.587Z",
        paymentMethod: 3468,
        cardScheme: "mastercard",
        value: 30651
    },
    {
        id: "6B9WOFTEABP6",
        state: "failure",
        type: "link",
        date: "2023-11-14T08:32:38.515Z",
        paymentMethod: 1024,
        cardScheme: "mastercard",
        value: 45521
    },
    {
        id: "V2DXL9QTG98H",
        state: "success",
        type: "terminal",
        date: "2023-05-12T04:56:43.701Z",
        paymentMethod: 5051,
        cardScheme: "visa",
        value: 21893
    },
    {
        id: "4IKLXW0M8H3O",
        state: "failure",
        type: "link",
        date: "2023-07-25T22:49:00.79Z",
        paymentMethod: 7054,
        cardScheme: "mastercard",
        value: 37585
    },
    {
        id: "233IPPPLBFN8",
        state: "success",
        type: "terminal",
        date: "2023-05-25T15:45:43.329Z",
        paymentMethod: 1538,
        cardScheme: "mastercard",
        value: 46494
    },
    {
        id: "GGUAB4HJA467",
        state: "failure",
        type: "terminal",
        date: "2023-08-11T21:53:53.973Z",
        paymentMethod: 2198,
        cardScheme: "visa",
        value: 40304
    },
    {
        id: "OE5C9I40NMHX",
        state: "success",
        type: "terminal",
        date: "2023-04-27T17:11:53.152Z",
        paymentMethod: 1768,
        cardScheme: "mastercard",
        value: 14787
    },
    {
        id: "CI9PHC4ISXIH",
        state: "success",
        type: "terminal",
        date: "2023-04-21T11:00:24.869Z",
        paymentMethod: 5359,
        cardScheme: "mastercard",
        value: 1107
    },
    {
        id: "Z8STXBCXD31F",
        state: "failure",
        type: "terminal",
        date: "2023-01-25T19:49:03.658Z",
        paymentMethod: 4855,
        cardScheme: "visa",
        value: 27819
    },
    {
        id: "477MWRYXKGLJ",
        state: "success",
        type: "terminal",
        date: "2023-08-19T04:50:23.370Z",
        paymentMethod: 9418,
        cardScheme: "visa",
        value: 28702
    },
    {
        id: "7R5ZYM20IK5J",
        state: "failure",
        type: "terminal",
        date: "2023-04-21T04:45:24.522Z",
        paymentMethod: 2961,
        cardScheme: "visa",
        value: 6000
    },
    {
        id: "GKDB6JTH6M2E",
        state: "success",
        type: "terminal",
        date: "2023-07-13T07:42:09.715Z",
        paymentMethod: 7201,
        cardScheme: "visa",
        value: 30030
    },
    {
        id: "ZQ5I3DS55I35",
        state: "failure",
        type: "link",
        date: "2023-05-20T19:45:54.503Z",
        paymentMethod: 7685,
        cardScheme: "mastercard",
        value: 28246
    },
    {
        id: "CR0QVKKCDJXP",
        state: "success",
        type: "link",
        date: "2023-03-08T10:27:51.225Z",
        paymentMethod: 7173,
        cardScheme: "visa",
        value: 36949
    },
    {
        id: "V2SOPXR6HKTW",
        state: "success",
        type: "terminal",
        date: "2023-09-02T10:08:26.818Z",
        paymentMethod: 628,
        cardScheme: "mastercard",
        value: 23175
    },
    {
        id: "0BPGGV1Q63H6",
        state: "failure",
        type: "link",
        date: "2023-05-12T03:48:33.474Z",
        paymentMethod: 4831,
        cardScheme: "visa",
        value: 15286
    },
    {
        id: "YB79GBSX8V4Q",
        state: "success",
        type: "link",
        date: "2023-03-26T04:42:21.840Z",
        paymentMethod: 5579,
        cardScheme: "mastercard",
        value: 25351
    },
    {
        id: "OVANNPI896M4",
        state: "failure",
        type: "link",
        date: "2023-03-28T06:11:50.967Z",
        paymentMethod: 4054,
        cardScheme: "mastercard",
        value: 5335
    },
    {
        id: "BDCX6NIXOGEY",
        state: "failure",
        type: "terminal",
        date: "2023-09-12T00:01:17.635Z",
        paymentMethod: 1924,
        cardScheme: "visa",
        value: 10207
    },
    {
        id: "5AHTLMEU2VCV",
        state: "success",
        type: "terminal",
        date: "2023-11-09T13:25:03.296Z",
        paymentMethod: 7000,
        cardScheme: "mastercard",
        value: 33981
    },
    {
        id: "D0VOYC9H826N",
        state: "success",
        type: "terminal",
        date: "2023-04-13T18:43:43.671Z",
        paymentMethod: 2687,
        cardScheme: "mastercard",
        value: 5219
    },
    {
        id: "Q1V49PAIYNF8",
        state: "failure",
        type: "terminal",
        date: "2023-06-06T09:09:12.130Z",
        paymentMethod: 5629,
        cardScheme: "mastercard",
        value: 41238
    },
    {
        id: "GZ2USG6YMQ3N",
        state: "failure",
        type: "link",
        date: "2023-05-14T05:29:17.231Z",
        paymentMethod: 9621,
        cardScheme: "mastercard",
        value: 35609
    },
    {
        id: "D5ET6BDK3QZW",
        state: "success",
        type: "link",
        date: "2023-10-06T09:15:56.864Z",
        paymentMethod: 2505,
        cardScheme: "mastercard",
        value: 17852
    },
    {
        id: "VYHC5R9N48YL",
        state: "failure",
        type: "link",
        date: "2023-01-07T23:32:13.615Z",
        paymentMethod: 4221,
        cardScheme: "mastercard",
        value: 25672
    },
    {
        id: "71SHGGYQXULD",
        state: "success",
        type: "terminal",
        date: "2023-06-10T00:36:04.654Z",
        paymentMethod: 3683,
        cardScheme: "mastercard",
        value: 48990
    },
    {
        id: "49HR1ORQS499",
        state: "failure",
        type: "link",
        date: "2023-01-19T21:35:56.180Z",
        paymentMethod: 1530,
        cardScheme: "visa",
        value: 25499
    },
    {
        id: "CFFBVLSCUO8S",
        state: "failure",
        type: "link",
        date: "2023-08-15T13:50:42.897Z",
        paymentMethod: 2051,
        cardScheme: "visa",
        value: 43916
    },
    {
        id: "0RZMUHCVWRT4",
        state: "failure",
        type: "link",
        date: "2023-03-19T02:55:50.23Z",
        paymentMethod: 5068,
        cardScheme: "visa",
        value: 19358
    }
]

