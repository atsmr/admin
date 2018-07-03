// * = Firestore uid
const client = [
    *: {
        clientName: 'macbeepanet',
        clientInfo: 'lorem ipsome jnufae jioafe yebw ,peiru4 azcemro!',
        docs: ['fileUrl','fileUrl','fileUrl'] // 契約書や仕様書などクライアントとの業務に関わるドキュメント
    }
]

const projects = [
    *: {
        clientId: 'fnuer349n2340x',
        *title: 'hoge',
        *description: 'lorem ipsome jnufae jioafe yebw ,peiru4 azcemro!',
        status: 'ongoing',　// ['new','ongoing','completed','waiting','cancel'],
        startAt: '2018/05/29',
        *endAt: '',
        dueDate: '2018/07/02',
        sharing: 0, // 0 = default
        team: ['teamId'],
        clientTeam: ['clientId'],
        tasks: ['*taskId','*taskId', ...]
    }
]

const tasks = [
    *: {
        id: "=*",
        title: "",
        description: "",
        complete: false, // To change 'status' to 'complete'
        assigned: ['*peopleId','*peopleId', ...],
        attachments: ['*fileUrl','*fileUrl', ...],
        author: ['*peopleId'],
        startDate: '2018/06/02',
        endDate: '2018/06/04',
        dueDate: 'timestamp',
        modified: '2018/06/03',
        created: '2018/06/02',
        comments: ["*commentsId","*commentsId", ...]
        refTime: 'timestamp', // Reference time
        resTime: 'timestamp', // Work time result. Fetch multiple assign memeber
        dependencies: {
            prev: '*taskId',
            next: '*taskId'
        },
        requiredRole: ['']
    }
]
