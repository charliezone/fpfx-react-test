import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const user = {
    "id": "1230978213987124097",
    "name": "Martin",
    "lastname": "Newman",
    "profit": [100000, 180000, 120000, 60000, 220000, 300000],
    "loss": [-40000, -60000, -60000, -90000, -10000, -5000]
}

type FormatedUserData = {
    month: number;
    profit: number;
    loss: number | null;
}

function formatUserData(userData: typeof user) {
    const formatedUserData: FormatedUserData[] = [];

    for (let i = 0; i < userData.profit.length; i++ ) {
        formatedUserData.push({
            month: i + 1,
            profit: user.profit[i],
            loss: user.loss[i] ? user.loss[i] : null,
        })
    }

    return formatedUserData;
}

export function Chart() {
    return (
        <ResponsiveContainer width="100%" height="100%">
            <LineChart
                width={500}
                height={300}
                data={formatUserData(user)}
                margin={{
                    top: 5,
                    right: 30,
                    left: 20,
                    bottom: 5,
                }}
                >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="profit" stroke="#0FC2C0" activeDot={{ r: 8 }} />
                <Line type="monotone" dataKey="loss" stroke="#FF3737" />
            </LineChart>
        </ResponsiveContainer>
    );
}