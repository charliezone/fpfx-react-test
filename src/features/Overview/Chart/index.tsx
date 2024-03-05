import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { User } from '../../Leaderboard/leaderboardApiSlice';

type FormatedUserData = {
    month: number;
    profit: number;
    loss: number | null;
}

function formatUserData(userData: User) {
    const formatedUserData: FormatedUserData[] = [];

    for (let i = 0; i < userData.profit.length; i++ ) {
        formatedUserData.push({
            month: i + 1,
            profit: userData.profit[i],
            loss: userData.loss[i] ? userData.loss[i] : null,
        })
    }

    return formatedUserData;
}

type ChartProps = {
    user: User | null;
}

export function Chart({ user }: ChartProps) {
    return (
        <>
            {user && (
                <ResponsiveContainer className="min-h-72" width="100%" height="100%">
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
            )}
        </>
    );
}