import React from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from 'recharts';
import { ExpenseChartContainer } from '@/components/ExpenseChart/style.component';

interface ExpenseChartProps {
    expenses: { amount: number; type: string }[];
}

const ExpenseChart: React.FC<ExpenseChartProps> = ({ expenses }) => {
    const totalExpense = expenses.reduce((sum, expense) => sum + expense.amount, 0);
    const data = expenses.map((expense, index) => ({
        name: expense.type || `Expense ${index + 1}`,
        value: expense.amount,
        type: expense.type,
    }));

    const COLORS= ['#fe006a', '#00C49F', '#ea28ff', '#e84f19'];

    return (
        <ExpenseChartContainer>
            <h2>Total Expense: {totalExpense} JD</h2>
            <ResponsiveContainer width="100%" height={400}>
                <PieChart>
                    <Pie
                        data={data}
                        cx="50%"
                        cy="50%"
                        labelLine={false}
                        outerRadius={80}
                        fill="#8884d8"
                        dataKey="value"
                    >
                        {data.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                        ))}
                    </Pie>
                    <Tooltip formatter={(value, name) => [`${value} JD`, `Type of expense: ${name}`]} />
                </PieChart>
            </ResponsiveContainer>
        </ExpenseChartContainer>
    );
};

export default ExpenseChart;
